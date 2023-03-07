/*
   Rutas de usuarios
   host + /api/aplicacion
*/

const { Router } = require('express');
const { createOperation } = require('../controllers/aplicacion');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');
const router = Router();


router.post(
    '/operacion',
    [
        check('numero1', 'El número 1 es obligatorio').not().isEmpty().isNumeric(),
        check('numero2', 'El número 2 es obligatorio').not().isEmpty().isNumeric(),
        check('operacion', 'El tipo de operación es obligatoria').not().isEmpty(),
        validateFields
    ],
    createOperation,
);

router.get('/', (req, res) => {
    res.json({
    ok: true
    });
});


module.exports = router;