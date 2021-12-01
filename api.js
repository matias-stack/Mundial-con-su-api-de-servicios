var db = require('./dboperations');
var JUGADOR = require('./jugador');
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
//const { request, response } = require('express');
var app =express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router); //hace q no se solicite el/api

router.use((request,response,next)=>{
    console.log('api de servicios');
    next();
})

async function jugador(request,response){//jugador
    var resultado = await dboperations.getJUGADOR();
    response.send(resultado);    
 }
app.get('/jugador', jugador)

async function equipo(request,response){//equipo
    var resultado = await dboperations.getEQUIPO();
    response.send(resultado);    
 }
app.get('/equipo', equipo)

async function mundial(request,response){//mundial
    var resultado = await dboperations.getMUNDIAL();
    response.send(resultado);    
 }
app.get('/mundial', mundial)

async function pais(request,response){//pais
    var resultado = await dboperations.getPAIS();
    response.send(resultado);    
 }
app.get('/pais', pais)

async function partido(request,response){//partido
    var resultado = await dboperations.getPARTIDO();
    response.send(resultado);    
 }
app.get('/partido', partido)

var port = process.env.PORT || 8090;
app.listen(port);
console.log(' La API esta corriendo en el puerto: '+port);