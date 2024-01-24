document.getElementById('botonTirar').addEventListener('click', mostrarNumerosRapidos);

const numeroAleatorio = () => {
    return Math.floor(Math.random() * 6) + 1;
}

function mostrarImagen() {
    const imagen = document.getElementById('dado');
    setTimeout(function () {
        imagen.style.transition = 'opacity 1s ease-in';
        imagen.style.opacity = 1; 
    }, 100); 
}


function mostrarNumerosRapidos() {
    let numeroFinal;
    fetch('/numeroFinal').then(response => response.json())
        .then(data => {
            numeroFinal = data.numero;
        });
    const numerosContainer = document.getElementById("numeros-container");
    let contador = 0;
    let id;

    function mostrarSiguienteNumero() {
        if (contador < 18 || !numeroFinal) {
            numerosContainer.innerHTML = numeroAleatorio();
            contador++;
            id = setTimeout(mostrarSiguienteNumero, 100);
        } else {
            clearTimeout(id);
            let imagen = document.createElement('img');
            imagen.id = 'dado';
            imagen.style.opacity = 0;
            imagen.style.width = '3vw'
            imagen.style.height = '3vw'
            switch (numeroFinal) {
                case 1:
                    imagen.src = '/s/media/cara1.png';
                    break;
                case 2:
                    imagen.src = '/s/media/cara2.png';
                    break;
                case 3:
                    imagen.src = '/s/media/cara3.png';
                    break;
                case 4:
                    imagen.src = '/s/media/cara4.png';
                    break;
                case 5:
                    imagen.src = '/s/media/cara5.png';
                    break;
                case 6:
                    imagen.src = '/s/media/cara6.png';
                    break;
            }
            numerosContainer.innerHTML = '';
            numerosContainer.append(imagen);
            mostrarImagen();
            let texto = document.createElement('p');
            texto.style.margin = '0';
            texto.innerHTML = "El número que te tocó es: " + numeroFinal;
            numerosContainer.append(texto);
        }
    }
    mostrarSiguienteNumero();
}