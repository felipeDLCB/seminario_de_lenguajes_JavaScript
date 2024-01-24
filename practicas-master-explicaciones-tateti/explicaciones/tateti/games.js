'use strict';


const express = require('express');
const tateti = require('./tateti.js');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static('public'));

app.post('/tateti/board', joinTateti);
app.patch('/tateti/board/:boardId', joinExistingTateti);
app.post('/tateti/board/:boardId', playTateti);
app.get('/tateti/board/:boardId', pollTateti);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));


function joinTateti(req, res) {

    let board = tateti.join();
    if (board.error) {
        res.status(400).json(board);
    } else {
        res.json(board);
    }
}


function joinExistingTateti(req, res) {
    
    let board = tateti.joinExisting(req.params.boardId);
    if (board.error) {
        res.status(400).json(board);
    } else {
        res.json(board);
    }
}

function playTateti(req, res) {

    let boardId = req.params.boardId;
    let playerId = req.body.playerId;

    if (!isValid(boardId, playerId, req.body.row, req.body.col)) {
        res.status(400).json({ error: true, message: 'Invalid play. Check params.' });
    } else {

        let board = tateti.play(boardId, playerId, req.body.row, req.body.col);
        if (board.error) {
            res.status(400).json(board);
        } else {
            res.json(board);
        }
    }
}

function pollTateti(req, res) {

    let board = tateti.poll(req.params.boardId, req.query.playerId);

    if (board.error) {
        res.status(400).json(board);
    } else {
        res.json(board);
    }
}

function isValid(b, p, r, c) {
    return b && p && r && c
        && r >= 0 && r <= 2
        && c >= 0 && c <= 2;

}