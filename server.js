const http = require("http");
const data = require("./todo.json");
const { getTodo, getSingleTodo } = require("./controllers/todoController");

const server = http.createServer((req, res) => {
  if (req.url === "/api/products" && req.method === "GET") {
    getTodo(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === "GET"
  ) {
    const id = req.url.split("/")[3];
    console.log(id);
    getSingleTodo(req, res, id);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "route not found" }));
  }
});
const PORT = process.env.PORT || 1234;

server.listen(PORT, () => console.log(`server running on ${PORT}`));
