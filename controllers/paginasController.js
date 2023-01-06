import { Viaje } from '../models/Viajes.js'
import { Testimonial } from '../models/Testimoniales.js'

const paginaInicio = async (req, res) => {

    const promiseDB = []

    promiseDB.push(Viaje.findAll({ limit: 3}))
    promiseDB.push(Testimonial.findAll({ limit: 3}))

    try {
        const informacion = await Promise.all( promiseDB )
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: informacion[0],
            resultados: informacion[1]
        })
    } catch (error) {
        console.log(error)
    }

    
};

const paginaViajes = async (req, res) => {

    const viajes = await Viaje.findAll()

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    })
};

const paginaViajeSeleccionado = async (req, res) => {

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where: { slug } });
        res.render('viaje', {
            pagina: 'Información viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
    
}


const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
};


const paginaContacto = (req, res) => {
    res.render('contacto', {
        pagina: 'Contacto'
    })
};


const paginaTestimoniales = async (req, res) => {

    try {
        const resultados = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            resultados
        })
    } catch (error) {
        console.log(error)
    }
    
};





export {
    paginaInicio,
    paginaViajes,
    paginaNosotros,
    paginaContacto,
    paginaTestimoniales,
    paginaViajeSeleccionado
}