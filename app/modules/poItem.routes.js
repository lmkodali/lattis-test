var express = require('express');
var router = express.Router();
var poItemmCtrl = require('./poItem.controller');

router.get('/items', poItemmCtrl.GET); 
router.post('/items', poItemmCtrl.POST);
router.delete('/items', poItemmCtrl.DELETE);


module.exports = router;