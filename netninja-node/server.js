const http = require('http');
const fs = require ('fs');
const _ = require ('lodash');


const server = http.createServer((req, res) => {
    
    // lodash
    // the RANDOM method generates a random number between the two arguments passed
    const num = _.random(0, 20);
    console.log(num)

    // the  ONCE method ensures a function runs just once
    const greet = _.once(() => {
        console.log('hello')
    });

    greet();
    greet();

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/' //the html files are in this folder
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        // to redirect to about page
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end()
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // send html file
    fs.readFile(path, (err, data) => {
        // we add the end method here so if the error occurs the code doesnt just hang
        if (err){
            console.log(err);
            res.end();
        } else{
            // res.write(data)

            res.end(data);
        }
    })
    
})

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});

