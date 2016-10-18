var express = require("express"); 
//http://stackoverflow.com/questions/9901082/what-is-this-javascript-require Require is Built into nodejs to load modules Het laad dus een deel van een library, de expressvalue.	
var app = express(); 
// 2e deel van de express functie soort van import is soortgelijk aan Object van Class 
//dus roept de express functie op en zet de express applicatie in de app variabele
var bodyParser = require('body-parser');
 //The bodyParser object exposes various factories to create middlewares. 
 //All middlewares will populate the req.body property with the parsed body, or an empty object ({}) if there was no body to parse (or an error was returned).
// Variabelen definen. Express 
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', function (req, res) { // Url opvragen.
    res.send('typ je opdracht in de adresbalk vb: /calc/2%2B5  (dit is 2+5)'); // Aantonen hoe url werkt aan gebruiker
    
});
/*
app.get("/", function (req, res) {
    // __dirname = The name of the directory that the currently executing script resides in. https://nodejs.org/docs/latest/api/globals.html#globals_dirname
   res.sendFile( __dirname + '/index.html');
   });
  
 Checken wat elk deel van de code doet om er meer van te begrijpen.
 code overgenomen van Wibren */
app.get('/calc', function (req, res) {
        
	console.dir(req.body);  
	var calc = req.body.bodycalc;
	
        var antwoord = eval(req.body.bodycalc);
        console.dir(antwoord);
        res.send(String(antwoord));
        console.log(req.params.opdracht);
});

app.get('/calc/:opdracht',function(req, res){ 
        var opdrachtlezen = req.params.opdracht;
        console.log(req.params.opdracht);
        var antwoord = eval(req.params.opdracht);
        console.log(antwoord);
        res.send(String(antwoord));
        console.log(req.params.opdracht);
});


app.listen(3456, function (){console.log(' app listening on port 3456!';};	