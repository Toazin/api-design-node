var fs = require('fs');


var readFile = function (){
    return new Promise(function (resolve,reject) {
        fs.readFile('./package.json', function(err, file){
            return err ? reject(err):resolve(file.toString());
        })
    })
}

var logFile = function () {
    return readFile()
    .then(function () {
        return readFile();
    })
}


readFile()
    .then(function (file) {
        console.log(file);
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(function (a) {
        return readFile();
    })
    .then(function (file) {

    })
