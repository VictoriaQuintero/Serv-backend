const express = require("express");
const app = express();
const morgan = require("morgan");
const funciones = require('./funciones');


app.use(morgan("dev"));
app.use(express.json());



ciudad = [
    {
        'tipo': 'Casa',
        'color': 'verde',
        'ventanas': '8',
        "estado" : "remodelada",
        "tamaño" : "80m",
        "id": "0"
    },
    {
        'tipo': 'EDIFICIO',
        'tamaño': '100m',
        'estado': 'abandonado',
        "color" : "negro",
        "ventanas" : "40",
        "id": "1"
    },
    {
        'tipo': 'Casa',
        'color': 'rojo',
        'ventanas': '4',
        "estado" : "nueva",
        "tamaño" : "50m",
        "id": "2"
    },
    {
        "tipo" : "parque",
        "ubicación" : "este",
        "columpios" : "10",
        "estado" : "activo",
        "tamaño" : "400m",
        "id" : "3"
    },
    {
        "tipo" : "puente",
        "estado" : "nuevo",
        "largo" : "50m",
        "ubicación" : "norte",
        "altura" : "70m",
        "id" : "4"
    },
    {
        "tipo" : "zona comercial",
        "nombre" : "banco",
        "ubicación" : "sur",
        "tamaño" : "70m",
        "estado" : "activo",
        "id" : "5"
    },
    {
        "tipo" : "apartamento",
        "color" : "blanco",
        "estado" : "nuevo",
        "ubicación" : "oeste",
        "tamaño" : "20m",
        "id" : "6"
    },
    {
        "tipo" : "zona comercial",
        "nombre" : "zapateria",
        "ubicación" : "caracas",
        "tamaño" : "10m",
        "estado" : "clausurado",
        "id" : "7"
    },
    {
        "tipo" : "puente",
        "estado" : "viejo",
        "largo" : "30m",
        "ubicación" : "avenida miranda",
        "altura" : "55m",
        "id" : "8"
    }
]

//metodo get para mostrar la ciudad completa
app.get("/", (req, res) => {
    res.json(ciudad);
    res.status(200);
});

//metodo get para saber la cantidad de edificaciones
app.get('/cantidad', (req, res) =>{
    res.send("la cantidad de edificaciones construidas es: " + ciudad.length);
    res.status(200);
})

//metodo post para agregar alguna edificación 
app.post('/agregar/:id', (req, res) => {
    ciudad.push(req.body);
    ciudad[ciudad.length - 1].id = req.params.id;
    res.send("Edificacion recibida Correctamente, la edificacion esta en el puesto: " + req.params.id + " si desea editarla debe utilizar ese id");
    res.status(201);
});

//metodo put para editar alguna edificacion 
app.put('/editar/:id', (req, res) => {
    funciones.editarEdif(req.params.id, req.body, res);
});

//metodo delete para eliminar alguna edificacion 
app.delete('/eliminar/:id', (req, res) => {
    funciones.eliminarEdif(req.params.id, res);
});

//metodo get para mostrar un tipo de edificacion por grupos
app.get('/ciudad/:tipo', (req, res) => {
    funciones.mostrarEdif(req.params.tipo, res);
});

//metodo get para mostrar edificaciones especificas por el id 
app.get('/edificaciones/:id', (req, res) => {
    funciones.MostrarPorId(req.params.id, res);

})

app.listen(5000, () => {
    console.log("servidor en el puerto 5000");
});