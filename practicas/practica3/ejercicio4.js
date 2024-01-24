function obtenerListado() {
    fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < 5; i++) {
                console.log(data[i]);
                //NOMBRE PAIS
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
                continente.innerHTML ='Continente: '+ data[i].continents[0];
                document.getElementById('pais' + i).appendChild(informacionPais);
                document.getElementById('infopais' + i).appendChild(capital);
                document.getElementById('infopais' + i).appendChild(idioma);
                document.getElementById('infopais' + i).appendChild(continente);
            }
        }
        );
}

obtenerListado();