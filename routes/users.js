const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { check } = require('express-validator');

//Registra un usuario /api/users
router.post('/', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 })
    ],
    userController.createUser
);

module.exports = router;

