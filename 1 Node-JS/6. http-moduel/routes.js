// Creating simple routes in Node js

const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plane" });
    res.end("Home Page");
  } else if (url === "/projects") {
    res.writeHead(200, { "Content-Type": "text/plane" });
    res.end("Projects Page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plane" });
    res.end("This page is not found!");
  }
});

const port = 3001;
server.listen(port, () => {
  console.log(`Server is now listening to port ${port}`);
});
