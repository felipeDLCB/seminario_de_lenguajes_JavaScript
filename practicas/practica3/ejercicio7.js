let pagActual = 1;
let datos = [];

function borrar(id) {
    let listado = document.getElementById(id);
    while (listado.firstChild) 
        listado.removeChild(listado.firstChild);
}

function contador() {
    document.getElementById('pagina').innerHTML='Página: ' + pagActual + '/9';    
}

function incrementar() {
    if (pagActual < 9) {
        pagActual++;
        contador();
        personajes(pagActual);
    }
}

function decrementar() {
    if (pagActual > 1) {
        pagActual--;
        contador();
        personajes(pagActual);
    }
}

function personajes(numeroPagina) {
    borrar('personajes');
    fetch("https://swapi.dev/api/people/?page=" + numeroPagina)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.results.length; i++) {
                let pj = document.createElement('li');
                let texto = document.createElement('span');
                pj.id = 'personaje' + i;
                pj.value = i + 1;
                texto.addEventListener('click', function () { mostrarInfo(i); });
                texto.innerHTML = data.results[i].name.toLowerCase();
                pj.appendChild(texto);
                document.getElementById('personajes').appendChild(pj);
            }
            datos = data.results;
        });
}
let existe = false;
function crearBorde() {
    const infoPersonaje = document.getElementById('infoPersonaje');
    infoPersonaje.style.borderWidth = 'medium';
    infoPersonaje.style.borderStyle = 'dotted';
    infoPersonaje.style.borderColor = 'rgb(97, 205, 255)';
    existe = true;
}

function solicitarPeli(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let peli = document.createElement('li');
            peli.innerHTML = data.title;
            document.getElementById('listaPelis').appendChild(peli);
        });
}

function solicitarPlaneta(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let planeta = document.createElement('p');
            if (data.name.toLowerCase() == 'unknown') 
                planeta.innerHTML = 'Desconocido';
            else 
                planeta.innerHTML = data.name;
            document.getElementById('infoPersonaje').appendChild(planeta);
        });
}

function mostrarInfo(numero) {
    borrar('infoPersonaje');
    const valuePersonaje = document.getElementById('personaje' + numero).value - 1;
    const infoPersonaje = document.getElementById('infoPersonaje');

    if (!existe) 
        crearBorde();

    let txtTitulo = document.createElement('span');
    txtTitulo.className = 'titulos';
    txtTitulo.innerHTML = 'información del personaje: ' + datos[valuePersonaje].name.toLowerCase();
    let titulo = document.createElement('h2');
    titulo.id = "tituloPersonaje";
    infoPersonaje.appendChild(titulo);
    document.getElementById("tituloPersonaje").appendChild(txtTitulo);
    infoPersonaje.style.paddingLeft = '2%';

    let nacimiento = document.createElement('h3');
    nacimiento.innerHTML = 'Año de nacimiento:';
    infoPersonaje.appendChild(nacimiento);

    let anio = document.createElement('p');
    if (datos[valuePersonaje].birth_year.toLowerCase() == 'unknown') 
        anio.innerHTML = 'Desconocido';
    else 
        anio.innerHTML = datos[valuePersonaje].birth_year;
    infoPersonaje.appendChild(anio);

    let genero = document.createElement('h3');
    genero.innerHTML = 'Género:';
    infoPersonaje.appendChild(genero);

    let gender = document.createElement('p');
    if (datos[valuePersonaje].gender.toLowerCase() === 'male') 
        gender.innerHTML = 'Masculino';
    else if (datos[valuePersonaje].gender.toLowerCase() === 'female') 
        gender.innerHTML = 'Femenino';
    else 
        gender.innerHTML = 'N/A';
    infoPersonaje.appendChild(gender);

    let peliculas = document.createElement('h3');
    peliculas.innerHTML = 'Películas:';
    let listado = document.createElement('ul');
    listado.id = 'listaPelis';
    listado.style.listStyle = 'none';
    listado.style.padding = '0%';
    infoPersonaje.appendChild(peliculas);
    infoPersonaje.appendChild(listado);

    datos[valuePersonaje].films.forEach(element => {
        solicitarPeli(element);
    });

    let planeta = document.createElement('h3');
    planeta.innerHTML = 'Planeta de nacimiento:';
    infoPersonaje.appendChild(planeta);
    solicitarPlaneta(datos[valuePersonaje].homeworld);
}

personajes(pagActual);
contador();