// local modules
const {add, name} = require('./other');

const res = add(1, 2);
// console.log(res);

// core modules
const http = require('http');

const server = http.createServer((req, res) => {
    // res.end('Hello Monu');
    // console.log(req.url);
    if(req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<p>Home Page</p>');
        res.end();
    }

    else if(req.url == '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<p>Contact Page</p>');
        res.end();
    }

    else if(req.url == '/products') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({name: 'Monowar', age: 22}));
        res.end();
    }

    else if(req.url == '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<p>About Page</p>');
        res.end();
    }

    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<p>404 Page Not Found</p>');
        res.end();
    }
});

const PORT = 5000;

server.listen(PORT);
console.log(`Server is running on port ${PORT}`);


// there are 3 types of modules in nodejs
// 1. core modules
// 2. local modules
// 3. third party modules

// core modules:
// core modules are modules that are built into nodejs and are available to use without installing them.
// to use a core module, you just require it by name and use it.
// example:
//const fs = require('fs');
// fs is a core module that allows you to work with the file system on your computer.
// you can use it to create, read, update, and delete files and folders.

// local modules:
// local modules are modules that you create yourself.
// to use a local module, you just require it by name and use it.
// example:
//const myModule = require('./myModule');
// myModule is a local module that is located in the same folder as the file that requires it.

// third party modules:
// third party modules are modules that are created by other developers and are available to use on npm.
// to use a third party module, you just require it by name and use it.
// example:
//const _ = require('lodash');
// lodash is a third party module that is available to use on npm.
// you can use it to perform a variety of tasks such as sorting arrays, removing duplicates, and more.
