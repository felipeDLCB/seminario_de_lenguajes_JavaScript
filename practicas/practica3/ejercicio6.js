function ordenarPorName(data) {
    return data.sort(function (a, b) {
        return a.name.common.localeCompare(b.name.common);
    });
}

function ordenarPorCapital(data) {
    return data.sort(function (a, b) {
        return a.capital[0].localeCompare(b.capital[0]);
    });
}

function ordenarPorLenguaje(data) {
    return data.sort(function (a, b) {
        return Object.values(a.languages)[0].localeCompare(Object.values(b.languages)[0]);
    });
}

function ordenarPorContinente(data) {
    return data.sort(function (a, b) {
        return a.continents[0].localeCompare(b.continents[0]);
    });
}

function ordenarPorPoblacion(data) {
    return data.sort(function (a, b) {
        return a.population - b.population;
    });
}

function obtenerListado() {
    let listado = document.getElementById('paises');
    while (listado.firstChild) {
        listado.removeChild(listado.firstChild);
    }
    fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => {
            const seleccion = document.getElementById('orden').value;
            let vectorPrimeros = [];
            for (let i = 0; i < 10; i++) {
                vectorPrimeros.push(data[i]);
            }
            switch (seleccion) {
                case 'name':
                    ordenarPorName(vectorPrimeros);
                    break;
                case 'capital':
                    ordenarPorCapital(vectorPrimeros);
                    break;
                case 'language':
                    ordenarPorLenguaje(vectorPrimeros);
                    break;
                case 'continent':
                    ordenarPorContinente(vectorPrimeros);
                    break;
                case 'population':
                    ordenarPorPoblacion(vectorPrimeros);
                    break;
            }
            for (let i = 0; i < 10; i++) {
                //NOMBRE PAIS
                let item = document.createElement('li');
                item.id = 'pais' + i;
                item.innerHTML = vectorPrimeros[i].name.common;
                document.getElementById('paises').appendChild(item);

                //SUBINDICES PAIS
                let informacionPais = document.createElement('ul');
                informacionPais.id = 'infopais' + i;

                let capital = document.createElement('li');
                capital.innerHTML = 'Capital: ' + vectorPrimeros[i].capital[0];
                let idioma = document.createElement('li');
                idioma.innerHTML = 'Idioma principal: ' + Object.values(vectorPrimeros[i].languages)[0];
                let continente = document.createElement('li');
                continente.innerHTML = 'Continente: ' + vectorPrimeros[i].continents[0];
                let emoji = document.createElement('li');
                emoji.innerHTML = "Bandera: " + vectorPrimeros[i].flag;
                let population = document.createElement('li');
                population.innerHTML = "Población: " + vectorPrimeros[i].population;
                document.getElementById('pais' + i).appendChild(informacionPais);
                document.getElementById('infopais' + i).appendChild(capital);
                document.getElementById('infopais' + i).appendChild(idioma);
                document.getElementById('infopais' + i).appendChild(continente);
                document.getElementById('infopais' + i).appendChild(emoji);
                document.getElementById('infopais' + i).appendChild(population);
            }
        }
        );
}

obtenerListado();