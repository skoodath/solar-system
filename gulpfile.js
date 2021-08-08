const { parallel, src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglifycss = require("gulp-uglifycss");
const uglifyjs = require("gulp-uglify");
const pipeline = require("readable-stream").pipeline;
const browserSync = require("browser-sync");

const style = () => {
  return pipeline(src("./*.scss"), sass(), uglifycss(), dest("./dist/styles"));
};
const script = () => {
  return pipeline(src("./js/*.js"), uglifyjs(), dest("./dist/script"));
};

const watchReload = () => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  watch("./*.scss", style);
  watch("./*.js", script);
  watch("./*.html").on("change", browserSync.reload);
  watch("./*.js").on("change", browserSync.reload);
};

exports.default = series(watchReload, parallel(style, script));
