import { Testimonial } from '../models/Testimoniales.js'

const guardarTestimonial = async (req, res) => {

    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(nombre.trim() === ''){
        errores.push('El nombre esta vacio')
    }
    if(correo.trim() === ''){
        errores.push('El correo esta vacio')
    }
    if(mensaje.trim() === ''){
        errores.push('El mensaje esta vacio')
    }

    if(errores.length > 0){

        const resultados = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            resultados,
            errores,
            nombre,
            correo,
            mensaje
        })
    } else {
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }

}

export {
    guardarTestimonial
}