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

function happyBirthday(persona) {
    let hoy = new Date();
    let cumpleaniero;
    let cumpleCercano;

    persona.forEach(p => {
        let cumple = new Date(p.dob);
        let sigCumple = new Date(hoy.getFullYear(), cumple.getMonth(), cumple.getDate());

        if (sigCumple < hoy) {
            sigCumple.setFullYear(sigCumple.getFullYear() + 1);
        }

        let diff = sigCumple.getTime() - hoy.getTime()

        if (!cumpleaniero || diff < cumpleCercano) {
            cumpleaniero = p;
            cumpleCercano = diff;
        }
    });
    return cumpleaniero;
}

console.log(happyBirthday(JSON.parse(jsonStr)).name);