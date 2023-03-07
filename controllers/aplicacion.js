const operaciones = require('../helpers/operaciones');
const Result = require('../models/Result');
const bcrypt = require('bcryptjs');


const createOperation = async(req, res) => {

    const { id, numero1, numero2, operacion } = req.body;
    const operador = operaciones[operacion];

    if(numero2 === '0' && operacion === 'division'){
        return res.status(400).json({
            ok: false, 
            message: 'No es posible dividir entre 0'
        });
    }

    try {
        let operacion = await Result.findOne({ id: id });
        if( operacion ){
            return  res.status(400).json({
                ok: false,
                message: 'Ya se ha usado ese id',
            });
        }

        var resultado = eval(numero1 + operador + numero2);

        const salt = bcrypt.genSaltSync();
        resultadoEncriptado = bcrypt.hashSync( resultado.toString(), salt );

        const result = new Result();
        result.id = id;
        result.contenido = JSON.stringify( req.body );
        result.resultado = resultadoEncriptado;
        const document = await result.save();

        res.status(201).json({
            ok: true, 
            id: id,
            resultado
        });

    } catch (error) {
        res.status(500).json({
            ok: false, 
            message: 'Internal Server Error'
        });
    }

}

module.exports = {
    createOperation
}