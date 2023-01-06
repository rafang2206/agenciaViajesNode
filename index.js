import express from "express";
import db from './config/db.js'
import router  from './routes/index.js';

const app = express();

db.authenticate()
    .then(() => console.log('base de datos conectada'))
    .catch((error) => console.log(error))

// definir puerto
const port = process.env.PORT || 4000;


//habilitar pug
app.set('view engine', 'pug')

// agregar la carpeta public a express
app.use(express.static('public'))


// middleware para agregar un año
app.use((req, res, next) => {
    const date = new Date();

    res.locals.actualYear = date.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes'
    next();

});

// habilitar el body parset para el formulario
app.use(express.urlencoded({ extended: true} ))

// agregar router
app.use('/', router)

// iniciar el servidor
app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`)
})