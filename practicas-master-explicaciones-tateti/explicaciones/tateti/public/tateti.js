
const prefix = 'http://localhost:8080/tateti'

tateti = function (method, url, data) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open(method, prefix + url, true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    resolve(JSON.parse(req.responseText));
                } else {
                    reject(JSON.parse((req.responseText)));
                }
            }
        };
        req.onerror = function () {
            reject(Error("network error"));
        };
        req.send(JSON.stringify(data));
    });
};


function joinGame() {

    let tdCollection = document.getElementsByTagName('td');
    let tds = [...tdCollection];
    tds.forEach((td) => td.addEventListener('click', play));

    const paramName = 'boardId=';
    let paramPos = window.location.search.indexOf(paramName);
    if (paramPos != -1) {
        tateti('PATCH', '/board/' + window.location.search.substring(paramPos + paramName.length))
            .then(initGame)
            .then(drawBoard)
            .catch(e => showError(e.message));
    } else {
        tateti('POST', '/board')
            .then(initGame)
            .then(drawBoard)
            .catch(e => showError(e.message));
    }
    setTimeout(pollGame, 2000);
}


function showError(msg) {
    document.getElementById('error').innerText = msg;
    console.error(msg)
}

function play(event) {
    if (!game.winner) {
        let rowcol = event.target.id.substring(3);
        let row = rowcol[0];
        let col = rowcol[1];

        document.getElementById('error').innerText = '';

        tateti('POST', '/board/' + game.boardId, { playerId: game.id, row: row, col: col })
            .then(initGame)
            .then(drawBoard)
            .catch(e => showError(e.message));
    }
}

function pollGame() {

    tateti('GET', '/board/' + game.boardId + '?playerId=' + game.id)
        .then(initGame)
        .then(drawBoard)
        .catch(e => showError(e.message));

    if (!game.winner) {
        setTimeout(pollGame, 2000);
    }
}

function initGame(response) {
    game = response;
    return response;
}

function drawBoard(response) {
    let board = response.board;
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            document.getElementById("pos" + row + col).innerText = board[row][col];
        }
    }

    document.getElementById("turn").innerText = response.turn;


    let boardElement = document.getElementById("board");

    while (boardElement.firstChild) {
        boardElement.removeChild(boardElement.firstChild);
    }

    let link = document.createElement('a');
    let joinUri = prefix + '.html?boardId=' + response.boardId;
    link.setAttribute('href', joinUri);
    link.appendChild(document.createTextNode(joinUri));

    boardElement.appendChild(link);

    if (response.winner) {
        showError(response.winner == game.id ? 'You win!' : 'You lose!');
    }
}
