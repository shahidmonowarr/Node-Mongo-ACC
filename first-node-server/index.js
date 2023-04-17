const http = require('http');
const fs = require('fs');

// Create an HTTP server:
const server = http.createServer((req, res) => {
  // handle request
  if (req.method === 'GET' && req.url === '/') {
    // send the welcome message
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<html><body><h1>Welcome to Full Stack Development</h1></body></html>');
  } else if (req.method === 'GET' && req.url === '/read') {
    // read the contents if first.txt file and send it to the client
    fs.readFile('first.txt', (err, data) => {
      if (err) {
        console.log(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      }
    });
  } else if (req.method === 'GET' && req.url === '/write') {
    // read the contents of first.txt and write it to second.txt
    fs.readFile('first.txt', (err, data) => {
      if (err) {
        console.log(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        fs.writeFile('second.txt', data, (err) => {
          if (err) {
            console.log(err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('File written successfully');
          }
        });
      }
    });
  } else if (req.method === 'GET' && req.url === '/append') {
    // append the text to first.txt
    fs.appendFile('first.txt', 'No! It will be full not pull 🙄 !!!', (err) => {
      if (err) {
        console.log(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('File appended successfully');
      }
    });
  } else if (req.method === 'GET' && req.url === '/delete') {
    // delete the second.txt file
    fs.unlink('second.txt', (err) => {
      if (err) {
        console.log(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('File deleted successfully');
      }
    });
  } else {
    // handle all other requests
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Not Found');
  }
});

// Start the server on port 3000:
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});