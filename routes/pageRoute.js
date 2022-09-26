const express = require('express');
const { showHomePage, showAboutPage } = require('../controllers/pageController');


//init router
const router = express.Router();

//routes
router.get('/', showHomePage);
router.get('/about', showAboutPage);

//export router
module.exports = router;