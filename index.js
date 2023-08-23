
/*console.log('testing!');
*/


const { format } = require('date-fns');
const {v4: uuid} = require('uuid');

console.log(format(new Date(), 'yyyyMMdd\thh:mm:ss'))

console.log('helloooooo')

console.log(uuid()) //generate different IDs everytime you create another console.log() below console.log(uuid())
