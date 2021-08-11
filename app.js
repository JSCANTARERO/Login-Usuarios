// Invocamos a express
const express = require('express');
const app = express();

// Seteamos urlencoded para capturar los datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Invocamos a dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

// Setear el directorio public
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
    res.send('Hello World');
})

app.listen(3000, (req, res) =>{
    console.log("Server running on port 3000");
});

