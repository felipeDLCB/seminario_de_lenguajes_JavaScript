let dia1 = new Date();
let dia2 = new Date(1575978300000);

function imprimirFecha(date) {
    console.log(date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getSeconds());
}

console.log('Dia 1: ');
imprimirFecha(dia1);
console.log('Dia 2: ');
imprimirFecha(dia2);

function swapDates(date1,date2) {
    date2.setFullYear(date1.getFullYear());
    date1.setMonth(date2.getMonth());
    console.log('Dia 1, con diferente mes: ');
    imprimirFecha(date1);
    console.log('Dia 2, con diferente año: ');
    imprimirFecha(date2);
}
console.log('Swap de fechas: ');
swapDates(dia1,dia2);

function restarFechas(fecha1, fecha2) {
    let uno = fecha1.getTime();
    let dos = fecha2.getTime();
    let diferencia;
    if (uno >= dos) {
        diferencia = uno - dos;
    } else if (dos > uno) {
        diferencia = dos - uno;
    }
    let nuevaFecha = new Date(diferencia);
    return nuevaFecha;
}

imprimirFecha(new Date(999999999999));
imprimirFecha(restarFechas(new Date(999999999999), dia2));