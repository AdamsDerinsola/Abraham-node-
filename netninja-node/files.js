const fs = require ('fs')

// READING FILES
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err){
//         console.log(err)
//     }
//     // we use the toStirng method bcos without it logging data returns a buffer
//     console.log(data.toString())
// })

// console.log('last line')

// WRITING FILES (replaces content of file)
// NOTE: if we do this for a file that doesnt exist it is automatically created

fs.writeFile('./docs/blog1.txt', 'Hello, World', () => {
    console.log('file was written')
})


// DIRECTORIES
// the code below initaially checks if the folder exists or not 
// if it DOESNT exist, the folder is created
// if it DOES exist, the folder is deleted

if (!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=> {
        if (err){
            console.log(err)
        }
        console.log('folder created')
    })
} else {
    // now this code will run if the above statement is false
    fs.rmdir('./assets', (err) => {
        if (err){
            console.log(err)
        }
        console.log('folder deleted')
    })
}

// DELETING FILES

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err){
            console.log(err)
        }
        console.log('file has been deleted')
    })
} 