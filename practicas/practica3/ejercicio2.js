var jsonStr = '['
    + '{"name":"Alice","dob": "2001-04-10T00:00:00.000Z","h": 165,"w": 68},'
    + '{"name":"Robert","dob": "1997-01-31T00:00:00.000Z","h": 170,"w": 88},'
    + '{"name":"Charles","dob": "1978-02-15T00:00:00.000Z","h": 188,"w":102},'
    + '{"name":"Lucía","dob": "1955-04-28T00:00:00.000Z","h": 155,"w": 61},'
    + '{"name":"Peter","dob": "1988-03-26T00:00:00.000Z","h": 165,"w": 99},'
    + '{"name":"Lucas","dob": "1910-02-04T00:00:00.000Z","h": 172,"w": 75}]';

function overweightNames(people) {
    return people.filter(p => (p.w / Math.pow(p.h / 100, 2)) > 25)
        .map(p => p.name)
        .reduce((n1, n2) => n1 + ", " + n2);
}

function happyBirthday(people) {
    let hoy = new Date();
    people.map(x => x.dob = new Date(x.dob));
    let vectorNoCumplidos = [];
    let vectorCumplidos = [];
    people.forEach(element => {
        if (element.dob.getMonth() + 1 > hoy.getMonth() + 1) {
            vectorNoCumplidos.push(element);
        }
        else if (element.dob.getMonth() + 1 === hoy.getMonth() + 1) {
            if (element.dob.getDate() < hoy.getDate()) {
                vectorCumplidos.push(element);
            }
            else {
                vectorNoCumplidos.push(element);
            }
        }
        else {
            vectorCumplidos.push(element);
        }
    });
    let vector = (vectorNoCumplidos.length) ? vectorNoCumplidos : vectorCumplidos;
    let mesMinimo = 99;
    let min;
    vector.forEach((data) => {
        if (data.dob.getMonth() < mesMinimo) {
            mesMinimo = data.dob.getMonth();
            min = data;
        }
    })
    console.log("La proxima persona en cumplir anios es: " + min.name);
}


//console.log(overweightNames(JSON.parse(jsonStr)));
happyBirthday(JSON.parse(jsonStr));