'use strict'
require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

//cors
const cors = require('cors')
app.use(cors())

//directorio global
global.__basedir = __dirname;

let url =  process.env.URL;

var producto_routes = require('./routes/productoRoute');


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api', producto_routes);

app.get("/", (req, res) => {
    res.json({ message: "Este es un demo de MEVN" });
  });

const PORT = process.env.PORT || 3000;

// CONEXION A BASE DE DATOS
/*mongoose.connect(url, (err,res) =>{    
    app.listen(PORT, ()=>{
        console.log('Esta corriendo en puerto',PORT );
    })
})*/

mongoose.connect(
    url, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }, (err) => {
    app.listen(PORT, ()=>{
        console.log('Esta corriendo en puerto',PORT );
    }) 
});