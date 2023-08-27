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
app.use(express.static(path.join(__dirname, '/public')));
app.use('/subdir', express.static(path.join(__dirname, '/public')));

//routes
app.use('/',require('./routes/root'))
app.use('/subdir', require('./routes/subdir'))
app.use('/employees', require('./routes/api/employees'))

// app.use('/')
app.all('*', (req, res) => { 
    res.status(404);
    if (req.accepts('html')) {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); 
    }
    else if (req.accepts('json')) {
    res.json({error: "404 not found"}); 
    }
    else {
        res.type('txt').send("404 not found");
    }
})

app.use (errorHandler)

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
 








   