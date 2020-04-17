const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

//Crea un form en /api/forms
router.post('/', 
    auth,
    formController.createForm
);

//Obtiene formulario por id 
router.get('/:id', 
    auth,
    formController.getForm
);

//Actualiza formulario por id
router.put('/:id',
    auth,
    formController.updateForm
) 

// Elimina un formulario por id
router.delete('/:id', 
    auth,
    formController.deleteForm
);

module.exports = router;




