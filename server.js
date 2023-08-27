const express = require('express');
const app = express();  
const path = require('path');
const cors  = require('cors');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');

const PORT = process.env.PORT || 3500;
 
//custom middleware logger
app.use(logger);

//cors - Cross Origin Resource Sharing
const whitelist = ['https://www.google.com','http://localhost:3500'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

//built in middlewarwe to handle url encoded data
// in other words form data:
// 'content type: application/x-www-form-urlencoded' 
app.use(express.urlencoded({extended: false}));

//built in middleware for json
app.use(express.json());

//serve static files
//app.use(express.static(path.join(__dirname, '/public')));

app.get('^/$|index(.html)?', (req, res) => {
    // res.sendFile('./views/index.html', { root: __dirname }); 
    res.sendFile(path.join(__dirname, 'views', 'index.html')); 

})
app.get('/newpage(.html)?', (req, res) => { 
    res.sendFile(path.join(__dirname, 'views', 'newpage.html')); 
})

app.get('/oldpage(.html)?', (req, res) => { 
    res.redirect (301, '/newpage.html'); //302 by default
})

//route handlers
app.get('/hello(.html)?', (req, res, next) => {
    console.log('attemted to load hello.html');
    next()
}, (req,res) => {
    res.send('hellooo world');
})

//chaining route handlers
const one = (req, res, next) => {
    console.log('one');
    next();
}
const two = (req, res, next) => {
    console.log('two');
    next();
}
const three = (req, res) => {
    console.log('three');
    res.send('finished');
}

app.get('/chain(.html)?', [ one, two, three]);

// app.use('/')
app.all('*', (req, res) => { 
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); 
})

app.use (errorHandler)

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
 








   