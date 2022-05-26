// Streams help use read through chunks of data at a time and perform actions on them
// even though the entire file has not been read

const fs = require('fs')

// we enconding is used sother wont be need to use the toString method on the chunk
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'})
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data', (chunk) => {
//     console.log('--- new chunk ---: '.toUpperCase())
//     console.log(chunk)
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk)
// })


// PIPING
readStream.pipe(writeStream)