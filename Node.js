// console.log("Hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');
//   res.end('Rohan Das');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Navigation</title>
      <style>
          .navbar{
              background-color: darkblue;
              border-radius: 36px;
          }
          .navbar ul{
              overflow: auto;
          }
          .navbar li{
              float: left;
              list-style: none;
              margin: 13px 20px;
          }
          .navbar li a{
              padding: 3px 3px;
              text-decoration: none;
              color: white;
          }
          .searchbox{
              float: right;
              padding: 13px 20px;
              text-decoration: none;
              color: white;
          }
          .navbar input{
              border: 3px solid blanchedalmond;
              padding: 4px 1px;
              border-radius: 3px 3px;
          }
      </style>
  </head>
  <body>
      <header>
          <nav class="navbar">
              <ul>
                  <li><a href="a">Home</a></li>
                  <li><a href="a">About</a></li>
                  <li><a href="a">Services</a></li>
                  <li><a href="a">Contact us</a></li>
                  <div class="searchbox">
                      <input type="text" name="search" id="search" placeholder="Search">
                  </div>
              </ul>
          </nav>
      </header>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});