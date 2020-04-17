const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');


//Iniciar sesión
//Crea un usuario /api/auth
router.post('/', 
    authController.authenticateUser
);

//Obtiene el usuario autenticado 
router.get('/', 
    auth,
    authController.authenticatedUser
);

module.exports = router;