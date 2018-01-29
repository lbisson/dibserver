var mongoose = require('mongoose');
var Pipeline = mongoose.model('Pipeline', {
    projectName: {
        type: String,
        required: true,
        minlength: 3
    },
    sourceRepo: {
        type: String
    },
    sourceRepoURL: {
        type: String
    },
    sourceRepoBranch: {
        type: String
    },
    dockerConfig: {
        type: String
    },
    deploymentURL: {
        type: String
    }

});

module.exports = {Pipeline};