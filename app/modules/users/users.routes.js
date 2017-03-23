var express = require('express');
var router = express.Router();
var users = require('./users.controller');

router.get('/login/:username/:password', users.userLogin); 
router.get('/list', users.list); 
router.post('/singUp', users.singUp);
router.put('/changePassword', users.changePassword); 
router.put('/resetPassword', users.resetPassword); 


module.exports = router;