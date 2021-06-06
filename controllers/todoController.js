const Todo = require("../models/todo");

/**
 * GET all Todo items
 */
getTodo = async (req, res) => {
  try {
    const todoItem = await Todo.find();
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(todoItem));
  } catch (error) {
    console.error(error);
  }
};

/**
 * Get Single Todo by Id
 */
getSingleTodo = async (req, res, id) => {
  try {
    const todo = Todo.findById(id);
    console.log("Controller-id/", todo);
    if (!todo) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Todo item is not found" }));
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(todo));
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getTodo, getSingleTodo };
