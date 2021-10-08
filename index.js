const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Hola, está es tu cuidad", ciudad);
});
app.post('/', (req, res)=>{
    ciudad.push(request.body);
})
app.get('/ciudad', (req, res)=>{
    res.send(ciudad);
})
app.listen(5000, ()=>{
    console.log("servidor en el puerto 5000");
});