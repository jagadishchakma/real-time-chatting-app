/**
 * Title: Inbox router
 * Description: Inbox management router
 * Author: Jagadish Chakma
 * Date: 12-06-2021
 * Version: 1.0.0
 */


// external modules
const express  = require('express');

// internal modules
const {getInbox} = require('../controllers/inboxController');
const decorationHtml = require('../middlewares/decorateHtml');

// make router
const router = express.Router();

// get inbox 
router.get('/', decorationHtml('Inbox Page'), getInbox);

// router exports
module.exports = router;