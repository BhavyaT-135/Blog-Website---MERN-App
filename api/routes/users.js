const router = require('express').Router();

const { updateUser, deleteUser, getUser } = require('../controllers/users');

//UPDATE
router.put('/:id',updateUser);

// //DELETE
router.delete('/:id', deleteUser);

//GET
router.get('/:id', getUser);

module.exports = router; 