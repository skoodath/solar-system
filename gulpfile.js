const { parallel, src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglifycss = require("gulp-uglifycss");
const uglifyjs = require("gulp-uglify");
const pipeline = require("readable-stream").pipeline;
const browserSync = require("browser-sync");

const style = () => {
  return pipeline(
    src("./*.scss", { sourcemaps: true }),
    sass(),
    uglifycss(),
    dest("./dist/styles", { sourcemaps: true })
  );
};
const script = () => {
  return pipeline(
    src("./src/js/*.js", { sourcemaps: true }),
    uglifyjs(),
    dest("./dist/script", { sourcemaps: true })
  );
};

const watchReload = () => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  watch("./*.scss", style);
  watch("./src/js/*.js", script);
  watch("./*.html").on("change", browserSync.reload);
  watch("./src/js/*.js").on("change", browserSync.reload);
};

exports.default = series(watchReload, parallel(style, script));
