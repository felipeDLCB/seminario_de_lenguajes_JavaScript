import { creandoPartida, leerEstado, uniendoPartida, guardarCambios } from "../oca.js";



function join(req, res){
    let tablero = creandoPartida()
    res.redirect('/partida/'+tablero.tableroId)
}

function joinExisting(req,res){
    let tablero = uniendoPartida(req.params.tableroId);
    res.render('tablero',{
        url: tablero.tableroId
    });
}

function update(req,res){
    let tablero = leerEstado(req.body.tableroId);
    res.send(tablero);
}

function save(req,res){
    guardarCambios(req.body);
    res.send('ok');
}



export {join, joinExisting, update, save}