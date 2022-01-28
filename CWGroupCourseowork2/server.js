var express = require("express");
var api = express.Router(); 
const courses = [
    { 'topic': 'math', 'location': 'London', 'price': 100 },
    { 'topic': 'math', 'location': 'Liverpool', 'price': 80 },
    { 'topic': 'math', 'location': 'Oxford', 'price': 90 },
    { 'topic': 'math', 'location': 'Bristol', 'price': 120 },
];
const user = [{'email': 'user@email.com', 'password':'mypassword'}]

api.use(function(req, res, next) {
next(); 

})
//Api endpoint lessons called by the client file index.html
api.get("/lessons", function(req, res){
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(JSON.stringify(courses));

})
//Api endpoint user
api.get("/user", function(req, res){
    res.end(JSON.stringify(user))

})

module.exports = api