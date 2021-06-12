/**
 * Title: User router
 * Description: User management router
 * Author: Jagadish Chakma
 * Date: 12-06-2021
 * Version: 1.0.0
 */


// external modules
const express  = require('express');

// internal modules
const {getUsers} = require('../controllers/userController');
const decorationHtml = require('../middlewares/decorateHtml');

// make router
const router = express.Router();

// get user 
router.get('/', decorationHtml('User Page'), getUsers);

// router exports
module.exports = router;