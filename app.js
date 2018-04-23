var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.get('/',(req, res) => res.send('Hello World'));
app.listen (port, () => console.log('Server is running on port'+ port));