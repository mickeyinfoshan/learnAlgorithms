var fs = require("fs");
var path = require("path");

var EXCEPT_FOLDERS = ["node_modules", "utils", ".git"];

var colors = require('colors');

var CASES_FILE_NAME = "__cases__";

var _ = require("lodash");

var FAIL_CASES = [];

fs.readdirSync(__dirname).filter(filename => {
    return EXCEPT_FOLDERS.indexOf(filename) < 0;
}).filter(file => {
    return fs.statSync(path.join(__dirname, file)).isDirectory();
}).forEach(algSetFolderName => {
    var algSetFolder = path.join(__dirname, algSetFolderName);
    fs.readdirSync(algSetFolder).filter(filename => {
        return !/^__/.test(filename)
    }).forEach(function(algorithmFileName) {
        var cases = require(path.join(algSetFolder, CASES_FILE_NAME));
        var algorithmPath = path.join(algSetFolder, algorithmFileName);
        var algorithm = require(algorithmPath);
        cases.forEach((testcase, index) => {
            var result = algorithm(testcase.input);
            var equal = _.isEqual(result, testcase.expected);
            if(!equal) {
                FAIL_CASES.push({
                    algSet : algSetFolderName,
                    algorithmFile : algorithmFileName,
                    input : testcase.input,
                    output : result,
                    expected : testcase.expected
                });
            }
        });
       
    });
});

var EXIT_CODE = 1;

if(FAIL_CASES.length == 0) {
    EXIT_CODE = 0;
    console.log("PASS".green);
} else {
    FAIL_CASES.forEach(function(failCase) {
        console.log("-----------------------------------------------".red);
        console.log((failCase.algSet + " : " + failCase.algorithmFile).red);
        console.log("input: " + JSON.stringify(failCase.input));
        console.log("output: " + JSON.stringify(failCase.output));
        console.log("expected: " + JSON.stringify(failCase.expected));
        console.log("-----------------------------------------------".red);
    });
}

process.exit(EXIT_CODE);