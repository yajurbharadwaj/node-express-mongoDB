const fs = require('fs')

const rs = fs.createReadStream('./okay.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./new-okay.txt');                // the above three statements are for readstream for large files
/*
rs.on('data',(datachunk) => {
    ws.write(datachunk);
})*/

//the above program is for stream data listener. they are used for sharing a file with large data into new file. 
// this can be also done by commenting out the rs on statement and adding the below statement

rs.pipe(ws); 