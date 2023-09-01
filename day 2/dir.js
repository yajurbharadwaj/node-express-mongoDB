/*
const fs = require('fs'); 

fs.mkdir('./new', (err) => {
    if (err) throw err;
    console.log('directory created')
})

//the above program is on how to create a directory using node.js
*/




/*
const fs = require('fs'); 

if (!fs.existsSync('./new')){
    fs.mkdir('./new', (err) => {
    if (err) throw err;
    console.log('directory created')
})
}

//the above program is to check if the file or the directory exist and if not creating that directory using node.js
*/

/*
const fs = require('fs'); 

if (!fs.existsSync('./new')){
    fs.mkdir('./new', (err) => { //this mkdir statement specifies to make or create a directory
    if (err) throw err;
    console.log('directory created');
})
}

if (fs.existsSync('./new')){      //we are removing the ! sign 
    fs.rmdir('./new', (err) => {  //this rmdir tag statement specifies to remove the specified directory
    if (err) throw err;
    console.log('directory removed');
})
}

//the above program is to create a directory and remove a directory using node.js 
*/