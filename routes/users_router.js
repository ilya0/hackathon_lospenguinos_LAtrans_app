var express = require('express');
var router = express.Router();
var users = require('../controllers/users_controller');


//routes

router.get('/', users.index);
router.get('/stats', users.stats);

module.exports = router;
