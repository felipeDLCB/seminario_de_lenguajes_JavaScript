import fs from 'fs';
import crypto from 'crypto';



const oca_DB = './oca.json';

let estadoInicial = {
    tableroId : null,
    jugador1Id : null,
    jugador2Id : null,
    tablero : null,
    turno : 1
}

function generateId() {
    return crypto.randomBytes(8).toString('hex');
}


function nuevaPartida(){
    return estadoInicial = {
        tableroId : null,
        jugador1Id : null,
        jugador2Id : null,
        tablero : null,
        turno : 1
    }
}
function guardarCambios(tablero) {

    let partidas = JSON.parse(fs.readFileSync(oca_DB));
    let i = partidas.findIndex(p => p.tableroId == tablero.tableroId);
    
    if (i == -1) {
        partidas.push(tablero);
    } else {
        partidas[i] = tablero;
    }

    fs.writeFileSync(oca_DB, JSON.stringify(partidas));
}

// function buscarEnDB(predicate){
//     if (fs.existsSync(oca_DB)) {
//         return JSON.parse(fs.readFileSync(oca_DB)).find(predicate);
//     } else {
//         return undefined;
//     }
// }

function creandoPartida() {
    if (!fs.existsSync(oca_DB)) fs.writeFileSync(oca_DB, JSON.stringify([]))

    let partida = nuevaPartida();

    partida.tableroId = generateId();
    //partida.jugador1Id = generateId();
    guardarCambios(partida);
    return partida;
}

function uniendoPartida(id){
    let partida = JSON.parse(fs.readFileSync(oca_DB)).find(p=> p.tableroId == id);
    if (!partida.jugador1Id){
        partida.jugador1Id = generateId();
        guardarCambios(partida);
        return partida;
    }
    else if (!partida.jugador2Id){
        partida.jugador2Id = generateId();
        guardarCambios(partida);
        return partida
    }
    else return "error"
}

function leerEstado(id){
    let estado = JSON.parse(fs.readFileSync(oca_DB)).find(p => p.tableroId == id) || 'vacio'; 
   
    console.log(estado);
    if (estado) return estado;
    else return "error";
}

// function guardar(partida){
    
//     guardarCambios(partida);
//     return partida
// }

export {creandoPartida, uniendoPartida, leerEstado, guardarCambios}