const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

  const server = http.createServer(function(req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    if (page == '/') {
      fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
    }else if (page == 'style.css'){
  fs.readFile('style.css', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(data);
    res.end();
  })
  }else if (page == 'main.js'){
  fs.readFile('main.js', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(data);
    res.end();
  })
  }else if (page == "/calculation") {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var calc = (Math.floor(Math.random()*10))%2==0 ? "heads":"tails"
    let objToSend = {
      face: calc
    }
    res.end();
  };
  res.end(JSON.stringify(objToSend));
}
else{
  figlet('404!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    res.write(data);
    res.end();
  });
  }
  }) ;

server.listen(8000);