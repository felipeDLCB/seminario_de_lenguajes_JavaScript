let texto = "Lorem ipsum dolor sit amet";
function ejercicio5(text) {
    console.log('La cantidad de caracteres es de: '+texto.length);
    console.log('La palabra ipsum empieza en la posicion: ' + texto.indexOf('ipsum'));
    /*for (let i=0;i<texto.length;i++) {
        if (texto[i]==='i' && texto[i+1]==='p' && texto[i+2]==='s' && texto[i+3]==='u' && texto[i+4]==='m') {
            console.log('La palabra ipsum empieza en la posicion: ',i);
            break;
        }
    }
    */
}

ejercicio5(texto);
for (let i=1;i<5;i++) {
    console.log(texto[i].toUpperCase());
}
