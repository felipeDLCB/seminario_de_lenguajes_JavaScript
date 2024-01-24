// import crypto from 'crypto';


// function generateId() {
//   return crypto.randomBytes(4).toString('hex');
// }
let jugadorId = 0;

let estadoPartida = {
  tableroId: null,
  jugador1Id: null,
  jugador2Id: null,
  turno: null,
  tablero: null
}

function iniciar() {
  let parametro = '/partida/'
  let pos = window.location.pathname.indexOf(parametro)
  let id = window.location.pathname.substring(pos + parametro.length);
  fetch('/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ tableroId: id })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data.tableroId);
      if (data.jugador1Id && !data.jugador2Id) {
        console.log('entra al if');
        jugadorId = 1;
      }
      else if (data.jugador2Id) {
        console.log('entra al else');
        jugadorId = 2;
        actualizar();
      }
    });
}

function guardarEstado(response) {
  estadoPartida = response;
  return response;
}

function guardarCambios() {
  estadoPartida.tablero = document.getElementById('tablero').innerHTML;
  const element = estadoPartida;
  const data = {
    estado: element
  };

  fetch('/cambios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        console.log('Solicitud POST exitosa');
      } else {
        console.error('Error al enviar la solicitud POST');
      }
    })
    .catch(error => {
      console.error('Error en la solicitud POST', error);
    });
}

function actualizar() {
  fetch('/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      estadoPartida = data.estado;
      document.getElementById('tablero').innerHTML = estadoPartida.tablero;
    });

}

// function actualizar(response) {
//   document.getElementById('tablero').innerHTML = response.tablero;
// }

function numeroAleatorio() {
  return Math.floor(Math.random() * 6) + 1;
}

function mostrarNumero() {
  document.getElementById('parra').innerHTML = numeroAleatorio();
  guardarCambios();
}

function download() {
  if (jugadorId != estadoPartida.turno) {
    actualizar();
    setTimeout(download, 5000);
  }
  else upload();

}

function upload() {
  if (jugadorId == estadoPartida.turno) {
    guardarCambios();
    setTimeout(upload, 5000);
  }
  else download();
}

function switchingRoles() {
  if (estadoPartida.turno == 1) estadoPartida.turno = 2;
  else estadoPartida.turno = 1;
  guardarCambios();
}