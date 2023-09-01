/*
const fs = require('fs');
//here the above code is for the importing of the common core module using the common js imports.

fs.readFile('./starter.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})

console.log('hello...');                                //this console log statement will the processed first and then the read file will be read later.

//this is the syntax for the err and data
//to read the starter file, we need to specify the file. then we have a call back function for error and read
// the console window first shows the buffer data, then put .toString() to the data to read the data or we can also add a parameter which defines the incoding i.e 'utf8' after the path

//exit on uncaught errors
process.on('uncaughtException', err => {                  //process is available in node itself, then error to the callback
  console.error(`there was an uncaught error: ${err}`);
  process.exit(1);                                       //exit the application
})


//the above program is to read a file with Node.js 

*/


/*
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, '/starter.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})

console.log('hello...');

fs.writeFile(path.join(__dirname, 'reply.txt'), 'nice to meet you', (err) => {
  if (err) throw err;
  console.log('write complete');
})

fs.appendFile(path.join(__dirname, 'test.txt'), 'i am now learning', (err) => { //the append file can modify a file or append to it and also create afile if there is no existing file
  if (err) throw err;
  console.log('append complete');
})

//exit on uncaught errors
process.on('uncaughtException', err => {                  //process is available in node itself, then error to the callback
  console.error(`there was an uncaught error: ${err}`);
  process.exit(1);                                       //exit the application
})


//the above program is for how to write a file using Node.js and the nested operations */



/*
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'starter.txt'),'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})

console.log('hello...');              

fs.writeFile(path.join(__dirname,'reply.txt'), 'nice to meet you', (err) => {
    if (err) throw err;
    console.log('write complete');

  fs.appendFile(path.join(__dirname,'reply.txt'), '\n\n i am now learning', (err) => { //the append file can modify a file or append to it and also create afile if there is no existing file
    if (err) throw err;
    console.log('append complete');

  fs.rename(path.join(__dirname,'reply.txt'), path.join(__dirname,'Newreply.txt'), (err) => { //the rename can modify the file name 
    if (err) throw err;
    console.log('rename complete');
    })
  })
})

//exit on uncaught errors
process.on('uncaughtException',err => {                  //process is available in node itself, then error to the callback
  console.error(`there was an uncaught error: ${err}`);
  process.exit(1);                                       //exit the application
})


the above program is for call back hell operations*/




/*
const fsPromises= require('fs').promises;
const path = require('path');

const fileOps = async () =>{
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'starter.txt'), 'utf8');
        console.log(data);

    } catch(err) {
        console.error(err)
    }

}

fileOps();

//exit on uncaught errors
 process.on('uncaughtException',err => {                  //process is available in node itself, then error to the callback
   console.error(`there was an uncaught error: ${err}`);
   process.exit(1);                                       //exit the application
 })


the above program is for fsPromises*/






/*
const fsPromises= require('fs').promises;
const path = require('path');

const fileOps = async () =>{
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'starter.txt'), 'utf8'); //reading data from a file
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, 'PromiseWrite.txt'), data); //write it to a new file
        await fsPromises.appendFile(path.join(__dirname, 'PromiseWrite.txt'), '\n\n\n nice to meet you'); //append the new file
        await fsPromises.rename(path.join(__dirname, 'PromiseWrite.txt'), path.join(__dirname, 'Promisecomplete.txt')); // rename the new file 
        const newData = await fsPromises.readFile(path.join(__dirname, 'Promisecomplete.txt'), 'utf8'); //log in the data in the new file
        console.log(newData);

    } catch(err) {
        console.error(err)
    }

}
 fileOps();

 //exit on uncaught errors
 process.on('uncaughtException',err => {                  //process is available in node itself, then error to the callback
   console.error(`there was an uncaught error: ${err}`);
   process.exit(1);                                       //exit the application
 })



 the above program is for replace callback hell with async await*/







/*
 const fsPromises= require('fs').promises;
 const path = require('path');
 
 const fileOps = async () =>{
     try {
         const data = await fsPromises.readFile(path.join(__dirname, 'starter.txt'), 'utf8'); //reading data from a file
         console.log(data);
         await fsPromises.unlink(path.join(__dirname, 'starter.txt'));
         await fsPromises.writeFile(path.join(__dirname, 'PromiseWrite.txt'), data); //write it to a new file
         await fsPromises.appendFile(path.join(__dirname, 'PromiseWrite.txt'), '\n\n\n nice to meet you'); //append the new file
         await fsPromises.rename(path.join(__dirname, 'PromiseWrite.txt'), path.join(__dirname, 'Promisecomplete.txt')); // rename the new file 
         const newData = await fsPromises.readFile(path.join(__dirname, 'Promisecomplete.txt'), 'utf8'); //log in the data in the new file
         console.log(newData);
 
     } catch(err) {
         console.error(err)
     }
 
 }
  fileOps();

  //exit on uncaught errors
 process.on('uncaughtException',err => {                  //process is available in node itself, then error to the callback
  console.error(`there was an uncaught error: ${err}`);
  process.exit(1);                                       //exit the application
})
 
  //the above program is about how to delete a file using Node.js
 
 */





