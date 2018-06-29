const glob = require('glob');

const options = {};

// glob('src/**/ind[a-z][a-z].js', options, function(er, files) {
//     console.log(files);
// });
glob('src/**/*(1|i|ndex).js', options, function(er, files) {
    console.log(files);
});
glob('src/**/!(1|i).js', options, function(er, files) {
    console.log(files);
});

