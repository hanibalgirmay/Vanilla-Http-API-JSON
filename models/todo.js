const todo = require("../todo");

find = async () => {
  return await todo;
};

findById = (id) => {
  return new Promise((resolve, reject) => {
    const product = todo.find((p) => p.id === id);
    resolve(product);
  });
  //   const data = await todo.find((t) => t.id === id);
  //   console.log(data);
  //   return data;
};

module.exports = { find, findById };
