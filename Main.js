var express = require("express"); 
//http://stackoverflow.com/questions/9901082/what-is-this-javascript-require Require is Built into nodejs to load modules Het laad dus een deel van een library, de expressvalue.	
var app = express(); 
// 2e deel van de express functie soort van import is soortgelijk aan Object van Class 
//dus roept de express functie op en zet de express applicatie in de app variabele
var bodyParser = require('body-parser');
 //The bodyParser object exposes various factories to create middlewares. 
 //All middlewares will populate the req.body property with the parsed body, or an empty object ({}) if there was no body to parse (or an error was returned).
// Variabelen definen. Express 
app.use(bodyParser.urlencoded({ extended: true })); /*Parses the text as URL encoded data. App uses bodyparser as middleware
//E.g. by adding bodyParser, you're ensuring your server handles incoming requests through the express middleware. So, now parsing the body of incoming requests is part of the procedure that your middleware takes when handling incoming requests -- all because you called app.use(bodyParser)
http://stackoverflow.com/questions/11321635/nodejs-express-what-is-app-use*/

app.get('/', function (req, res) { // Url opvragen. responds with tekst wanneer get request wordt uitgevoerd naar homepage
    res.send('typ je opdracht in de adresbalk vb: /calc/2%2B5  (dit is 2+5)'); // Aantonen hoe url werkt aan gebruiker
    
});

app.get("/", function (req, res) {
    // __dirname = The name of the directory that the currently executing script resides in. https://nodejs.org/docs/latest/api/globals.html#globals_dirname
   res.sendFile( __dirname + '/index.html');
   });
  
 Checken wat elk deel van de code doet om er meer van te begrijpen.
 code overgenomen van Wibren */
app.get('/calc', function (req, res) { // requests to /calc worden via hier gerout. Functie
        
	console.dir(req.body);  //toont properties van het object req.body
	var calc = req.body.bodycalc;
	
        var antwoord = eval(req.body.bodycalc); /*Contains key-value pairs of data submitted in the request body. By default, it is undefined, 
		and is populated when you use body-parsing middleware such as body-parser and multer. 
		http://expressjs.com/en/api.html*/
        console.dir(antwoord); //toont properties van var antwoord = eval(req.body.bodycalc)
        res.send(String(antwoord));  // maakt een string van antwoord, en toont dit
        console.log(req.params.opdracht);  // object die mapt naar properties, in dit mapt het naar opdracht calc wordt hier dus uitgelaten. 
});

app.get('/calc/:opdracht',function(req, res){  // actual calculations Functie --> bv calc/2%2B10= 2 + 10
        var opdrachtlezen = req.params.opdracht;  // Alles na /Calc/ wordt ingelezen in opdrachtlezen
        console.log(req.params.opdracht); // wordt gelogd
        var antwoord = eval(req.params.opdracht); // Wordt berekend
        console.log(antwoord); // wordt opnieuw gelogd
        res.send(String(antwoord)); // antwoord wordt getoond
        console.log(req.params.opdracht); //wordt opnieuw gelogd
});


app.listen(3456, function (){console.log(' app listening on port 3456!';};	