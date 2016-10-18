Start Ex3 RESTful API Calculator
Start --> HTML Calculator Pushed

http://localhost:4567/addnumber
http://localhost:4567/Getresult
http://localhost:3005/calc=2+2
var express = require('express');
var cors = require('cors');
var app = express();
var mathjs = require('mathjs');
 
app.use(cors());
 
app.get('/', function (req, res){
    res.send("Hello World");
});
 
app.listen(3005, function(){
    console.log('Calculator app listening on port 3005.');
});
 
app.get('/calc=:formula', function(req, res){
    var formulaString = req.params.formula;
    console.log(req.params.formula);
    var solution = mathjs.eval(req.params.formula);
    console.log(solution);
    res.send(String(solution));
});