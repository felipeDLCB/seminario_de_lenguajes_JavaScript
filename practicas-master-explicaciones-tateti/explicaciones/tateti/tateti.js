const fs = require('fs');
const crypto = require('crypto');

module.exports = {
    join: join,
    joinExisting : joinExisting,
    play: play,
    poll: pollTateti
};

const GAME_FILE = './tateti.json';
const CIRCLE = 'O';
const CROSS = 'X';
const EMPTY = ' ';
const CANT_JOIN_ERROR = { error: true, message: 'Can\'t join', };
const WRONG_TURN_ERROR = { error: true, message: 'Not your turn.' };
const GAME_ERROR = { error: true, message: 'Invalid play' };
const UNKNOWN_BOARD_ERROR = { error: true, message: 'Unknown board' };

const initialMatch = {
    boardId: null,
    circleId: null,
    crossId: null,
    turn: CROSS,
    board: [
        [EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY]
    ]

};

function asDTO(tateti, playerId) {

    return {
        boardId: tateti.boardId,
        id: playerId,
        turn: tateti.turn,
        board: tateti.board,
        winner: tateti.winner
    };

}

function newMatch() {

    let tateti = {};
    Object.assign(tateti, initialMatch);
    return tateti;
}

function join() {

    if (!fs.existsSync(GAME_FILE)) {
        // create file
        fs.writeFileSync(GAME_FILE, JSON.stringify([]));
    }
    // find available board
    let tateti = JSON.parse(fs.readFileSync(GAME_FILE)).find(t => !t.circleId) || newMatch();

    if (tateti.boardId) {
        // found an existing match
        tateti.circleId = generateId();
        saveTateti(tateti);
        return asDTO(tateti, tateti.circleId);
    } else {
        tateti.crossId = generateId();
        tateti.boardId = generateId();
        saveTateti(tateti);
        return asDTO(tateti, tateti.crossId);
    }
}

function joinExisting(boardId) {
    let tateti = findBy(t => t.boardId == boardId && !t.circleId);
    if (tateti) {
        tateti.circleId = generateId();
        saveTateti(tateti);
        return asDTO(tateti, tateti.circleId);
    } else {
        return UNKNOWN_BOARD_ERROR;
    }
}



function play(boardId, playerId, row, col) {

    let tateti = readTateti(boardId);
    if (tateti && tateti.circleId && tateti.crossId) {

        if (isMyTurn(tateti, playerId) && isValidMove(tateti, row, col)) {
            tateti.board[row][col] = tateti.turn;

            if (isWinner(tateti.board)) {
                tateti.winner = playerId;
                saveTateti(tateti);
                return asDTO(tateti, playerId);
            }

            changeTurn(tateti);
            saveTateti(tateti);

            return asDTO(tateti, playerId);

        } else {
            // no es mi turno o la casilla no está libre
            return GAME_ERROR;
        }
    } else {
        return GAME_ERROR;
    }

}

function pollTateti(boardId, playerId) {
    let tateti = readTateti(boardId);
    if (tateti) {
        return asDTO(tateti, playerId);
    } else {
        return UNKNOWN_BOARD_ERROR;
    }
}

function findBy(predicate) {

    if (fs.existsSync(GAME_FILE)) {
        return JSON.parse(fs.readFileSync(GAME_FILE)).find(predicate);
    } else {
        return undefined;
    }
}


function readTateti(boardId) {

    return findBy(t => t.boardId == boardId);

}

function saveTateti(tateti) {

    let matches = JSON.parse(fs.readFileSync(GAME_FILE));
    let i = matches.findIndex(t => t.boardId == tateti.boardId);
    if (i == -1) {
        matches.push(tateti);
    } else {
        matches[i] = tateti;
    }

    fs.writeFileSync(GAME_FILE, JSON.stringify(matches));
}


function isMyTurn(tateti, playerId) {

    if (tateti.circleId == playerId) {
        return tateti.turn == CIRCLE;
    } else if (tateti.crossId == playerId) {
        return tateti.turn == CROSS;
    } else {
        return false;
    }
}
function allEqual(a, b, c) {
    return a != EMPTY && a == b && b == c;
}

function isWinner(b) {
    return allEqual(b[0][0], b[0][1], b[0][2])
        || allEqual(b[1][0], b[1][1], b[1][2])
        || allEqual(b[2][0], b[2][1], b[2][2])

        || allEqual(b[0][0], b[1][0], b[2][0])
        || allEqual(b[0][1], b[1][1], b[2][1])
        || allEqual(b[0][2], b[1][2], b[2][2])

        || allEqual(b[0][0], b[1][1], b[2][2])
        || allEqual(b[2][0], b[1][1], b[0][2]);

}

function isValidMove(tateti, row, col) {
    return tateti.board[row][col] == EMPTY;
}

function changeTurn(tateti) {
    if (tateti.turn == CIRCLE) {
        tateti.turn = CROSS;
    } else {
        tateti.turn = CIRCLE;
    }
}


function generateId() {

    return crypto.randomBytes(16).toString('hex');


}