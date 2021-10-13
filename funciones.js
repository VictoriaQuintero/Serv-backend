//funcion para eliminar
function eliminarEdif(edif, res) {
    encontrado = false;
    ciudad.forEach(x => {
        if (x.id === edif) {
            ciudad.splice(ciudad.indexOf(x), 1);
            encontrado = true;
            res.status(200);
        }
    });

    encontrado == false ? res.status(400).send("la edificacion que desea eliminar no existe") : res.send("se ha eliminado la edificacion: " + edif);
}
//funcion para editar
function editarEdif(edif, cont, res) {
    let encontrado = false;
    ciudad.forEach(x => {
        if (x.id === edif) {
            ciudad[ciudad.indexOf(x)] = cont;
            ciudad[ciudad.indexOf(cont)].id = edif;
            encontrado = true;
            res.status(201)
        }
    });

    encontrado == false ? res.status(400).send("La edificacion que desea editar no existe") : res.send(' Se edito, corretamente la edifición ' + edif);
}

//funcion para mostrarpor grupos
function mostrarEdif(tipo, res) {
    let a;
    ciudad.forEach(edif => {
        if (edif.tipo.toLowerCase() === tipo.toLowerCase()) {
            a = edif.tipo.toLowerCase();
        }
    });

    if (a) {
        let estruture = ciudad.filter(es => es.tipo.toLowerCase() === a);
        res.status(200).json(estruture);
    } else {
        res.status(400).send("el tipo de estructura que esta buscando no existe");
    }
}

//funcion para mostrar individual por id
function MostrarPorId(id, res) {
    let encontrado = false;
    ciudad.forEach(edif => {
        if (edif.id === id) {
            res.json(edif);
            encontrado = true;
            res.status(200);
        }
    });
    encontrado == false ? res.status(400).send("La edificacion que busca no existe") : console.log("Si existe");
}

module.exports.editarEdif = editarEdif;
module.exports.eliminarEdif = eliminarEdif;
module.exports.mostrarEdif = mostrarEdif;
module.exports.MostrarPorId = MostrarPorId;
