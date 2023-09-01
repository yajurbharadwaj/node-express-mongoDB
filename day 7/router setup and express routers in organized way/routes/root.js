const express = require('express');
const router = express.Router();
const path = require('path');


router.get('^/$|index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html')); 

})
router.get('/newpage(.html)?', (req, res) => { 
    res.sendFile(path.join(__dirname, '..','views', 'newpage.html')); 
})

router.get('/oldpage(.html)?', (req, res) => { 
    res.redirect (301, '/newpage.html'); //302 by default
})
module.exports = router;
