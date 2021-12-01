const config = require("./dbconfig")

class JUGADOR{
    constructor(ID_JUGADOR,ID_EQUIPO,ID_PAIS,DORSAL,NOMBRE_JUGADOR,POSICION_JUGADOR,EDAD_JUGADOR,CLUB){
        this.ID_JUGADOR=ID_JUGADOR;
        this.ID_EQUIPO=ID_EQUIPO;
        this.ID_PAIS=ID_PAIS;
        this.DORSAL =DORSAL;
        this.NOMBRE_JUGADOR=NOMBRE_JUGADOR;
        this.POSICION_JUGADOR=POSICION_JUGADOR;
        this.EDAD_JUGADOR=EDAD_JUGADOR;
        this.CLUB=CLUB;
        
    }
}

module.exports = JUGADOR;