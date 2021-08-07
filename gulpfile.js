const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglifycss = require("gulp-uglifycss");
const uglifyjs = require("gulp-uglify");
const pipeline = require("readable-stream").pipeline;
const browserSync = require("browser-sync");

const style = () => {
  return pipeline(
    gulp.src("./*.scss"),
    sass(),
    uglifycss(),
    gulp.dest("./dist/styles")
  );
};
const script = () => {
  return pipeline(
    gulp.src("./js/*.js"),
    uglifyjs(),
    gulp.dest("./dist/script")
  );
};

const watch = () => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./*.scss", style);
  gulp.watch("./*.js", script);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./*.js").on("change", browserSync.reload);
};
exports.style = style;
exports.script = script;
exports.watch = watch;
