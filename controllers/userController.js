const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {

    const errors = validationResult(req);
    if( !errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
    }

    //Extraer email y password 
    const { email, password } = req.body;

    try {
        //Revisa usuario único 
        let user = await User.findOne({ email });

        if(user) {
            return res.status(400).json({ msg : 'El usuario ya existe'});
        }

        //Crea nuevo usuario 
        user = new User(req.body);

        //Encriptar password
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(password, salt);

        //Guardar usario
        await user.save();

        //Crear y firmar el JWT 
        const payload = {
            user: {
                id: user.id
            }
        }

        //Firmar el JWT 
        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 3600 //1 hora
        }, (error, token) => {
            if(error) throw error;

            //Mensaje de confirmación
            res.json({ token });
        });

    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }   
}