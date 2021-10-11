const express = require("express");
const app = express();
const bodyParser = require("body-parser");
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
    }
]

function eliminarEdif(edif) {
    ciudad.forEach(x => {
        if (x.id === edif) {
            ciudad.splice(ciudad.indexOf(x), 1);
        }
    });
}
function editarEdif(edif, cont) {
    ciudad.forEach(x => {
        if (x.id === edif) {
            ciudad[ciudad.indexOf(x)] = cont;
            ciudad[ciudad.indexOf(cont)].id = edif;
        }
    });
}

function mostrarEdif(tipo, res) {

    if(tipo.toLowerCase() === "casas"){
        let casas = ciudad.filter(estructura => estructura.tipo.toLowerCase() === "casa");
        res.json(casas);
    }else if(tipo.toLowerCase() === "edificios"){
        let edificios = ciudad.filter(estructura => estructura.tipo.toLowerCase() === "edificio");
        res.json(edificios);
    }else if(tipo.toLowerCase() === "carreteras"){
        let carreteras = ciudad.filter(estructura => estructura.tipo.toLowerCase() === "carretera");
        res.json(carreteras);
    }else if(tipo.toLowerCase() === "puentes"){
        let puentes = ciudad.filter(estructura => estructura.tipo.toLowerCase() === "puente");
        res.json(puentes);
    }else if(tipo.toLowerCase() === "parques"){
        let parques = ciudad.filter(estructura => estructura.tipo.toLowerCase() === "parque");
        res.json(parques);
    }else{
        res.send("La edificacion que desea no existe");
    }
}



function MostrarPorId(id, res) {
    ciudad.forEach(edif => {
        if (edif.id === id) {
            res.json(edif);
        }
    })
}
app.get("/", (req, res) => {
    res.json(ciudad);
});
app.post('/agregar/:id', (req, res) => {
    ciudad.push(req.body);
    ciudad[ciudad.length - 1].id = req.params.id;
    res.send("Edificacion recibida Correctamente, la edificacion esta en el puesto: " + req.params.id + " si desea editarla debe utilizar ese id");
});

app.put('/editar/:id', (req, res) => {
    let a = req.params.id;
    let elim = ciudad[parseInt(a)];
    editarEdif(a, req.body);
    res.send(' se edito, ' + elim + ' por: ' + req.body);
});

app.delete('/eliminar/:id', (req, res) => {
    let b = req.params.id;
    let elim = ciudad[parseInt(b)];
    eliminarEdif(b);
    res.send("se ha eliminado la siguiente edificacion: " + elim);
})

app.get('/ciudad/:tipo', (req, res) => {
    mostrarEdif(req.params.tipo, res);
});
app.get('/edificaciones/:id', (req, res) => {
    let edificacion = req.params.id;
    mostrarEdif

})

app.listen(5000, () => {
    console.log("servidor en el puerto 5000");
});