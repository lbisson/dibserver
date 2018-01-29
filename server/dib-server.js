var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Pipeline} = require('./models/pipeline');

var app = express();

app.use(bodyParser.json());

app.post('/pipelines', (req, res) => {
    var pipeline = new Pipeline({
        projectName: req.body.projectName,
        sourceRepo: req.body.sourceRepo,
        sourceRepoURL: req.body.sourceRepoURL,
        sourceRepoBranch: req.body.sourceRepoBranch,
        dockerConfig: req.body.dockerConfig,
        deploymentURL: req.body.deploymentURL
    });

    pipeline.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
})

app.listen(3000, () => {
    console.log('Started on port 3000');
});