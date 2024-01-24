'use strict';

const tateti = require('./tateti.js');
const assert = require('assert');

let p1 = tateti.join();

assert.strictEqual(p1.turn, 'X');
assert.ok(p1.boardId);
assert.ok(p1.id);

let p2 = tateti.joinExisting(p1.boardId);
assert.ok(p2.id);
assert.ok(p1.boardId);

assert.strictEqual(p1.boardId, p2.boardId, 'Must play on the same board.');

let board = tateti.play(p1.boardId, p1.id, 1, 1);

board = tateti.play(p2.boardId, p2.id, 0, 0);

board = tateti.play(p1.boardId, p1.id, 2, 2);

board = tateti.play(p2.boardId, p2.id, 2, 1);

board = tateti.play(p1.boardId, p1.id, 2, 0);

board = tateti.play(p2.boardId, p2.id, 0, 1);

board = tateti.play(p1.boardId, p1.id, 0, 2);

assert(board.winner, 'Must be a win');
assert.strictEqual(board.winner, p1.id, 'Player 1 must win.');

