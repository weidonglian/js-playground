var Jenkins = require('nestor/lib/jenkins.js');
var jenkins = new Jenkins(process.env.JENKINS_URL);
var xml2js = require('xml2js');
jenkins.fetchViewConfig("Player Debug", function (arg, job) {
    var parseError, parseResult
    xml2js.parseString(job, function(err, result){
        parseError = err;
        parseResult = result;
    });

    if (parseError)
        console.log("ParseError:" + parseError)

    var builds = parseResult["hudson.model.ListView"].jobNames[0].string;
    builds.forEach(function (name, id) {
        console.log("Will start: " + name);
    });

});

