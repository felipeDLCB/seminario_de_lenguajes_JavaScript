function obtenerListado() {
    const listado = document.getElementById('paises')
    listado.innerHTML = "";
    fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => {
            let hayAlguno = false;
            for (let i = 0; i < 10; i++) {
                //NOMBRE PAIS
                const nombre = document.getElementById('nombre').value.toUpperCase();
                const nombrePais = data[i].name.common.toUpperCase();
                if ((nombrePais.includes(nombre)) && (nombre !== '')) {
                    hayAlguno = true;
                    let item = document.createElement('li');
                    item.id = 'pais' + i;
                    item.innerHTML = data[i].name.common;
                    document.getElementById('paises').appendChild(item);

                    //SUBINDICES PAIS
                    let informacionPais = document.createElement('ul');
                    informacionPais.id = 'infopais' + i;

                    let capital = document.createElement('li');
                    capital.innerHTML = 'Capital: ' + data[i].capital[0];
                    let idioma = document.createElement('li');
                    idioma.innerHTML = 'Idioma principal: ' + Object.values(data[i].languages)[0];
                    let continente = document.createElement('li');
                    continente.innerHTML = 'Continente: ' + data[i].continents[0];
                    let emoji = document.createElement('li');
                    emoji.innerHTML = "Bandera: " + data[i].flag;
                    document.getElementById('pais' + i).appendChild(informacionPais);
                    document.getElementById('infopais' + i).appendChild(capital);
                    document.getElementById('infopais' + i).appendChild(idioma);
                    document.getElementById('infopais' + i).appendChild(continente);
                    document.getElementById('infopais' + i).appendChild(emoji);
                }
            }
            if (!hayAlguno) {
                parrafo.innerHTML = "No hay ningun país con que contenga ese texto.";
            }
            else {
                parrafo.innerHTML = "";
            }
        }
        );
    const mensaje = document.getElementById('parrafo');
}
//obtenerListado();