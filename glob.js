const glob = require('glob');
const Glob = glob.Glob;
const options = {};

// glob('src/**/ind[a-z][a-z].js', options, function(er, files) {
//     console.log(files);
// });
glob('src/**/?????.js', options, function(er, files) {
    console.log(files);
});
glob('src/**/*(1|i|ndex).js', options, function(er, files) {
    console.log(files);
});
glob('src/**/!(1|in).js', options, function(er, files) {
    console.log(files);
});
glob('src/**/@(1|index).js', options, function(er, files) {
    console.log(files);
});

const mg = new Glob('src/**/*.js');

