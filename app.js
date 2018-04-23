var express = require('express');
var app = express();

var path = require('path');
var port = process.env.PORT || 3000;

//app.get('/',(req, res) => res.send('Hello World'));

app.listen (port, () => console.log('Server is running on port'+ port));

var urlsEach = {
    "https://michael-pedzimaz-webapp.azurewebsites.net/my-information.json":"./files/Mike/my-information.json",
    "https://jakeisalsoclueless.azurewebsites.net/myinformation.json":"./files/Jake/my-information.json",
    "https://riotjuice.azurewebsites.net/my-information.json":"./files/Julian/my-information.json",
    "https://softwareengjmh.azurewebsites.net/format.JSON":"./files/Jace/my-information.json",
    "https://newtestdocument.azurewebsites.net/Format.json":"./files/Thad/my-information.json"
}
var groupFile = './files/Group/group-information'

app.get('/', function(req, res){
    res.sendfile(path.join(__dirname + '/index.html'));
    console.log(port);
});