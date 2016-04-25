var express = require('express');
var router = express.Router();
var users = require('../controllers/users_controller');

router.get('/', users.index);
router.post('/', users.create);
router.put('/:id', users.update);

module.exports = router;
