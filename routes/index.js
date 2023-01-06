import express from 'express';
import { paginaInicio,
        paginaViajes,
        paginaNosotros,
        paginaContacto,
        paginaTestimoniales,
        paginaViajeSeleccionado
         } from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimoniales.js'

const router = express.Router();

router.get('/', paginaInicio)

router.get('/nosotros', paginaNosotros)

router.get('/contacto', paginaContacto)

router.get('/testimoniales', paginaTestimoniales)
router.post('/testimoniales', guardarTestimonial)

router.get('/viajes', paginaViajes)

router.get('/viajes/:slug', paginaViajeSeleccionado)

export default router;