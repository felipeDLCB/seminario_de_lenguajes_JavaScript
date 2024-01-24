import express from 'express';
//import { cargar, numeroRandom } from './controllers/principal.js';
import { join, joinExisting, save, update } from './controllers/juego.js';
//import { update } from './controllers/lobby.js';
//import { creandoPartida, uniendoPartida } from './oca.js';

import {sala} from './controllers/lobby.js';

var routerServer = express.Router();

//homepage
routerServer.get('/', sala);
routerServer.post('/', sala);
//routerServer.get('/numeroFinal', );
//routerServer.get('/sala', sala);
routerServer.get('/partida', join );
routerServer.get('/partida/:tableroId', joinExisting );
routerServer.post('/cambios', save);
routerServer.post('/update', update);

export default routerServer;

