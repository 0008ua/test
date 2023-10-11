const http = require('http');

http
  .createServer((req, res) => {
    console.log('server started');
    // console.log("Url: " + req.url);
    // console.log("Тип запроса: " + req.method);
    // console.log("User-Agent: " + req.headers["user-agent"]);
    // console.log("Все заголовки");
    // console.log(req.headers);

    res.statusCode = 200;
    res.statusMessage = 'statusMessage sent';
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/redirect') {
      res.statusCode = 302;
      res.setHeader('Location', '/newpage');
    }
    res.write('<h1>Hello</h1>');
    if (req.url === '/home') {
      res.write('<h2>Home</h2>');
    }

    if (req.method === 'GET') {
      res.write('<h3>Method GET</h3>');
    }
    res.write('<h3>url: ' + req.url + '</h3>');

    // res.setHeader('Content-Type', 'application/json');
    // res.write(JSON.stringify({x: 25}));
    res.end();
  })
  .listen(3000);
