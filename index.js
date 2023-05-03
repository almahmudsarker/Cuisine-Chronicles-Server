const express = require("express");
const app = express();
// const cors = require("cors");
const port = process.env.PORT || 5000;
const chefs = require("./data/chefs.json");
// const news = require("./data/news.json");

// app.use(cors());

app.get("/", (req, res) => {
  res.send("Assignment 10 is running");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

//show all news
// app.get("/news", (req, res) => {
//   res.send(news);
// });

// //specific news
// app.get("/news/:id", (req, res) => {
//   const id = req.params.id;
//   const selectedNews = news.find((n) => n._id === id);
//   res.send(selectedNews);
// });

// //category wise news
// app.get("/categories/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   if (id === 0) {
//     res.send(news);
//   } else {
//     const categoryNews = news.filter((n) => parseInt(n.category_id) === id);
//     res.send(categoryNews);
//   }
// });

app.listen(port, () => {
  console.log(`Assignment-10-server listening on port ${port}`);
});
