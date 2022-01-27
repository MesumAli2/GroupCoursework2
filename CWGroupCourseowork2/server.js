var express = require("express");
var api = express.Router(); 
const courses = [
    { 'topic': 'math', 'location': 'hendon', 'price': 100 },
    { 'topic': 'math', 'location': 'colindale', 'price': 80 },
    { 'topic': 'math', 'location': 'brent cross', 'price': 90 },
    { 'topic': 'math', 'location': 'golders green', 'price': 120 },
];
const user = [{'email': 'user@email.com', 'password':'mypassword'}]

api.use(function(req, res, next) {
next(); 

})
api.get("/lessons", function(req, res){
  
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(JSON.stringify(courses));

})
api.get("/user", function(req, res){
    
    res.end(JSON.stringify(user))

})



module.exports = api