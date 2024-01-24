
function obtenerImg() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            document.getElementById("imagen").innerHTML = '<img height="300px" width="300px" src=' + data[0].url + ' id= ' + data[0].id + ' >';
        })
}

setInterval(() => {
    obtenerImg();
}, 2000);