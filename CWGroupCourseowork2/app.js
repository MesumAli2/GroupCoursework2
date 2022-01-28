var express = require("express");
// require your router 
var apiRouter = require("./server");
var app = express();
app.use( apiRouter);
app.listen(3000);