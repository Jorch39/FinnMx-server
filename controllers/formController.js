const Form = require('../models/Form');
const { validationResult } = require('express-validator');

exports.createForm = async (req, res) => {
    console.log(req, 'req')

    //Revisa si hay errores 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        //Crea un nuevo formulario 
        const form = new Form(req.body);

        //Guarda el creador 
        form.created_by = req.user.id;

        //Guarda el formulario
        form.save();
        console.log(res, 'res form')
        res.status(200).json(form)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor');
    }
}

//Obtiene la info del formulario p
exports.getForm = async (req, res) => {
    try {
        let form = await Form.findById(req.params.id);
        console.log(form)
        
        //Si el formulario existe 
        if (!form) {
            return res.status(404).json({ msg: 'Formulario no encontrado' })
        }
        //Verificar el creador del formulario 
        if (form.created_by.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Usuario no autorizado' });
        }

        res.json({form});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor');
    }
        
}

//Actualizar formulario 
exports.updateForm = async (req, res) => {

    //Revisar si hay errores 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    //Extraer la info del formulario  
    const { info, percentage, term, options, value, risk } = req.body;
    const newForm = {};

    console.log(req.body)

    if (info) {
        newForm.info = info;
    }
    if (percentage) {
        newForm.percentage = percentage;
    }
    if (term) {
        newForm.term = term;
    }
    if (options) {
        newForm.options = options;
    }
    if (value) {
        newForm.value = value;
    }
    if (risk) {
        newForm.risk = risk;
    }

    try {
        //Revisar el id
        let form = await Form.findById(req.params.id);

        req.body.map

        //Si el formulario existe 
        if (!form) {
            return res.status(404).json({ msg: 'Formulario no encontrado' })
        }
        //Verificar el creador del formulario 
        if (form.created_by.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Usuario no autorizado' });
        }

        form

        // actualizar
        form = await Form.findByIdAndUpdate({ _id: req.params.id }, { $set: newForm }, { new: true });

        res.json({ form });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor');
    }
}

// Eliminar formulario
exports.deleteForm = async (req, res) => {
    try {
        //Revisar el id
        let form = await Form.findById(req.params.id);

        //Si el formulario existe 
        if (!form) {
            return res.status(404).json({ msg: 'Formulario no encontrado' })
        }
        //Verificar el creador del formulario 
        if (form.created_by.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Usuario no autorizado' });
        }

        // Eliminar
        await Form.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Formulario eliminado' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor');
    }


}
