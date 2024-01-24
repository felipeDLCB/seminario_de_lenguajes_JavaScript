// //const fs = require('fs');
// import crypto from 'crypto';
// const dataMap = new Map();

// let estadoInicial = {
//     tableroId: null,
//     turno: null,
//     tablero:null
// }

// function generateId() {
//     return crypto.randomBytes(4).toString('hex');
// }

// const crearPartida = (req,res) =>{
//     const id = generateId();
//     res.redirect('/partida/'+id);

// }

// const sala = (req, res) =>{
//     res.render('lobby');
// }

// const guardarCambios = (req, res) =>{
//     const id = req.body.tableroId;
//     dataMap.set(id, req.body);
//     //console.log(dataMap.get(id));
//     res.send('ok');
// }

// const update = (req, res) => {
//     const estado = dataMap.get(req.params.tableroId);
//     if (estado !== undefined){
//         res.json(estado);
//     }
//     else res.json('vacio');
// }

// const buscarPartida = (req,res) =>{
//     let id = req.params.tableroId
//     console.log(id);
//     const estado = dataMap.get(id);
//     //console.log(dataMap);
//     if (estado === undefined){
//         dataMap.set(id, iniciarPartida(id));
//    }
//     res.render('tablero',{
//         url: id
//     });
// }

// function iniciarPartida(id){
//     let aux = estadoInicial;
//     aux.tableroId = id;
//     return aux;
// }


// export { crearPartida, sala, guardarCambios, update, buscarPartida, dataMap }