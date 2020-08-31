const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.post('/', controller.application.createApplication);
router.get('/id/:id', controller.application.getApplicationById);
router.get('/', controller.application.getApplications);
router.patch('/id/:id', controller.application.updateApplication);
router.delete('/id/:id', controller.application.deleteApplication);

module.exports = router;
