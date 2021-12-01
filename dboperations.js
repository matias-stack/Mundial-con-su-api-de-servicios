//agregamos configuracion de la BD SQL server
var config = require ('./dbconfig');
//agregamos el modulo mssql que administrala BD SQL server
const sql = require('mssql');
//var JUGADOR = require('./jugador');

async function getJUGADOR(){// 1 servicio
    try{
        let pool = await sql.connect(config);
        let jugador = await pool.request().query("select * from jugador");
        return jugador.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function getEQUIPO(){// 2 servicio
    try{
        let pool = await sql.connect(config);
        let equipo = await pool.request().query("select * from equipo");
        return equipo.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function getMUNDIAL(){// 3 servicio
    try{
        let pool = await sql.connect(config);
        let mundial = await pool.request().query("select * from mundial");
        return mundial.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function getPAIS(){// 4 servicio
    try{
        let pool = await sql.connect(config);
        let pais = await pool.request().query("select * from pais");
        return pais.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function getPARTIDO(){// 5 servicio
    try{
        let pool = await sql.connect(config);
        let partido = await pool.request().query("select * from partido");
        return partido.recordsets;
    }catch(error){
        console.log(error);
    }
}

module.exports={
    getJUGADOR : getJUGADOR,
    getEQUIPO : getEQUIPO,
    getMUNDIAL : getMUNDIAL,
    getPAIS : getPAIS,
    getPARTIDO : getPARTIDO
}