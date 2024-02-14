const { postData, getData, delData } = require("./crud");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.get("/get", async (req, res) => {
  getData(req, res);
});

app.post("/post", async (req, res) => {
  postData(req, res);
});

app.post("/del", async (req, res) => {
  delData(req, res);
});

app.listen(PORT, () => {
  console.log("Port Connected");
});
