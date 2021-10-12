const express = require("express");
const app = express();
const morgan = require("morgan");
const funciones = require('./funciones');


app.use(morgan("dev"));
app.use(express.json());



ciudad = [
    {
        'tipo': 'casa',
        'altura': '10m',
        'estado': 'remodelada',
        "id": "0"
    },
    {
        'tipo': 'EDIFICIO',
        'altura': '100m',
        'estado': 'Vieja',
        "id": "1"
    },
    {
        'tipo': 'casa',
        'altura': '100m',
        'estado': 'nueva',
        "id": "2"
    },
    {
        "tipo" : "parque",
        "ubicacion" : "este",
        "columpios" : "3",
        "id" : "3"
    },
    {
        "tipo" : "edificio",
        "color" : "negro",
        "tamaño" : "50m",
        "id" : "4"
    }
]

//metodo get para mostrar la ciudad completa
app.get("/", (req, res) => {
    res.json(ciudad);
});

//metodo get para saber la cantidad de edificaciones
app.get('/cantidad', (req, res) =>{
    res.send("la cantidad de edificaciones construidas es: " + ciudad.length);
})

//metodo post para agregar alguna edificación 
app.post('/agregar/:id', (req, res) => {
    ciudad.push(req.body);
    ciudad[ciudad.length - 1].id = req.params.id;
    res.send("Edificacion recibida Correctamente, la edificacion esta en el puesto: " + req.params.id + " si desea editarla debe utilizar ese id");
});

//metodo put para editar alguna edificacion 
app.put('/editar/:id', (req, res) => {
    funciones.editarEdif(req.params.id, req.body, res);
});

//metodo delete para eliminar alguna edificacion 
app.delete('/eliminar/:id', (req, res) => {
    funciones.eliminarEdif(req.params.id, res);
})
//metodo get para mostrar un tipo de edificacion por grupos
app.get('/ciudad/:tipo', (req, res) => {
    funciones.mostrarEdif(req.params.tipo, res);
});

//metodo get para mostrar edificaciones especificas por el id 
app.get('/edificaciones/:id', (req, res) => {
    funciones.MostrarPorId(req.params.id, req.body, res);

})

app.listen(5000, () => {
    console.log("servidor en el puerto 5000");
});