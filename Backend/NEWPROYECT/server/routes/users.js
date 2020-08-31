const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

router.post('/', controller.user.createUser);
router.get('/id/:id', controller.user.getUserById);
router.get('/', controller.user.getUsers);
router.patch('/id/:id', controller.user.updateUser);
router.delete('/id/:id', controller.user.deleteUser);

module.exports = router;
