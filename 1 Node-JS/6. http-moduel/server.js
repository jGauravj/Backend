const http = require("http");

// Create a Server-->

const server = http.createServer((req, res) => {
  console.log("Req", req);
  res.writeHead(200, { "Content-Type": "text/plane" });
  res.end("Hello node js from http moduel");
});

const port = 3001;
server.listen(port, () => {
  console.log(`server is now listening to port ${port}`);
});
