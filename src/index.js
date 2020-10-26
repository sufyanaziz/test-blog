const app = require("./app");

const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Port Running at : http://localhost:${port}/`);
});
