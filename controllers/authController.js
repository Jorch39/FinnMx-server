const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken');

exports.authenticateUser = async (req, res) => {

    const errors = validationResult(req);
    if( !errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
    }

    //Extraer email y password 
    const { email, password } = req.body;

    try {
        //Revisa usuario único 
        let user = await User.findOne({ email });

        if(!user) {
            return res.status(400).json({ msg : 'El usuario no existe'});
        }

        //Checar password 
        const correctPassword = await bcryptjs.compare(password, user.password);
        if(!correctPassword) {
            return res.status(400).json({ msg : 'El password es incorrecto'});
        }
    
    //Crear y firmar el JWT 
    const payload = {
        user: {
            id: user.id
        }
    }

    //Si todo es correcto firmar el JWT 
    jwt.sign(payload, process.env.SECRET, {
        expiresIn: 3600 //1 hora
    }, (error, token) => {
        if(error) throw error;

        //Mensaje de confirmación

        console.log(token, 'token')
        res.json({ token });
    });


    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }   
}

//Obtiene que usuario está autenticado
exports.authenticatedUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json({ user })

    } catch (error) {
        console.log(error);
        res.status(500).send({msg: 'Hubo un error'});  
    }
}