const dbConnect = require("./mongodb");

async function postData(req, res) {
  let data = await dbConnect();
  let body = req.body;
  let id = (await data.find().toArray()).length;
  let result = await data.insertOne({ _id: id, body });
  console.log(req.body);
  res.status(200).send(result);
}

async function getData(req, res) {
  let data = await dbConnect();
  data = await data.find().toArray();
  res.send(data);
}

async function delData(req, res) {
  let data = await dbConnect();
  const { _id } = req.body;
  let id = Number(_id);
  let result = await data.deleteOne({ _id: id });
  res.send(result);
}

module.exports = { postData, getData, delData };
