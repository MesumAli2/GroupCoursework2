var express = require("express");
// require your router (defined on the next page)
var apiRouter = require("./server");
var app = express();
//app.use(express.static(staticPath));
// use your router
// any URL that starts with '/api' will be sent to 'apiRouter', // such as '/api/users' and '/api/message'
app.use( apiRouter);
app.listen(5000);