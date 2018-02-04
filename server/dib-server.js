var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

// var {mongoose} = require('./db/mongoose');
// var {Pipeline} = require('./models/pipeline');

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json());



app.post('/pipelines', (req, res) => {
    /* var pipeline = new Pipeline({
        projectName: req.body.projectName,
        sourceRepo: req.body.sourceRepo,
        sourceRepoURL: req.body.sourceRepoURL,
        sourceRepoBranch: req.body.sourceRepoBranch,
        dockerConfig: req.body.dockerConfig,
        deploymentURL: req.body.deploymentURL
    });
 */

    var strObj = JSON.stringify(req.body);
    console.log(strObj);

    var d = new Date();
    var timeStamp = d.getTime().toString();
     
   

    fs.writeFileSync(timeStamp + req.body.app.app_name + '.json', strObj, function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
    }); 

    res.send(req.body);

    // pipeline.save().then((doc) => {
    //     res.send(doc);
    // }, (e) => {
    //     res.status(400).send(e);
    // })
})

app.listen(3000, () => {
    console.log('Started on port 3000');
});