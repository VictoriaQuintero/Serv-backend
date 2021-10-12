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
    
        encontrado == false ? res.status(400).send("La edificacion que desea editar no existe") :  res.send(' Se edito, corretamente la edifición ' + edif);
    }
    
    //funcion para mostrarpor grupos
    function mostrarEdif(tipo, res) {
    
        if (tipo.toLowerCase() === "casas") {
            let casas = ciudad.filter(estructura => estructura.tipo.toLowerCase() === "casa");
            res.json(casas);
            res.status(200);
        
        } else if (tipo.toLowerCase() === "edificios") {
            let edificios = ciudad.filter(estructura => estructura.tipo.toLowerCase() === "edificio");
            res.json(edificios);
            res.status(200);
        } else if (tipo.toLowerCase() === "carreteras") {
            let carreteras = ciudad.filter(estructura => estructura.tipo.toLowerCase() === "carretera");
            res.json(carreteras);
            res.status(200);
        } else if (tipo.toLowerCase() === "puentes") {
            let puentes = ciudad.filter(estructura => estructura.tipo.toLowerCase() === "puente");
            res.json(puentes);
            res.status(200);
        } else if (tipo.toLowerCase() === "parques") {
            let parques = ciudad.filter(estructura => estructura.tipo.toLowerCase() === "parque");
            res.json(parques);
            res.status(200);
        } else if (tipo.toLowerCase() === "apartamentos") {
            let apartamentos = ciudad.filter(estructura => estructura.tipo.toLowerCase() === "apartamento");
            res.json(apartamentos);
            res.status(200);
        }else if (tipo.toLowerCase() === "zonascomerciales") {
            let zonascomerciales = ciudad.filter(estructura => estructura.tipo.toLowerCase() === "zona comercial");
            res.json(zonascomerciales);
            res.status(200);
        }else {
            res.send("La edificacion que desea no existe");
            res.status(400);
        }
    }
    //funcion para mostrar individual por id
    function MostrarPorId(id, info, res) {
        let encontrado = false;
        ciudad.forEach(edif => {
            if (edif.id === id) {
                res.json(edif);
                encontrado = true;
                res.status(200);
            }
        });
        encontrado == false ? res.status(400).send("La edificacion que busca no existe") :  res.json(info);
    }

    module.exports.editarEdif = editarEdif;
    module.exports.eliminarEdif = eliminarEdif;
    module.exports.mostrarEdif = mostrarEdif;
    module.exports.MostrarPorId = MostrarPorId;
