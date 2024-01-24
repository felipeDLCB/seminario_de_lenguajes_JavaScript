import fs from 'fs';

const preguntas = JSON.parse(fs.readFileSync('src/data/preguntas.json', 'utf8'));

let nombres = [];

const getPlaceholder = () => {
    let placeholder = 'Ingrese nombre del jugador ';
    if (!nombres[0])
        placeholder += 1;
    else if (!nombres[1])
        placeholder += 2;
    else
        placeholder = '';
    return placeholder;
};

const cargar = (req, res) => {
    !nombres[0] ? nombres[0] = req.body.jugador || undefined : nombres[1] = req.body.jugador || undefined;
    const placeholder = getPlaceholder();
    res.render('index', {
        preguntas: preguntas,
        nombres: nombres,
        placeholder: placeholder,
    });
};

const numeroRandom = (req, res) => {
    res.json( {
        numero: Math.floor(Math.random() * 6) + 1
    });
}

export { cargar, numeroRandom };