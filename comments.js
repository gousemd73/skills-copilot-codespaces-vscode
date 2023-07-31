// Create web server
const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello World</h1>");
    res.end();
});
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
