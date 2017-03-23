var express = require('express');
var router = express.Router();
var locks = require('./locks.controller');

router.post('/create', locks.create); 
router.get('/list', locks.list); 
router.put('/update/:id', locks.update);
router.delete('/delete/:id', locks.delete); 


module.exports = router;