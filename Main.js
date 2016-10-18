var express = require("express"); //http://stackoverflow.com/questions/9901082/what-is-this-javascript-require Require is Built into nodejs to load modules
var app = new express(); 
var bodyParser = require('body-parser');
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


app.listen(3456);