const express = require("express");
const res = require("express/lib/response");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.listen(8080, function () {
  console.log("listening on 8080");
});

// 누군가가 /pet으로 방문을 하면 펫 관련 안내문을 띄워주자
app.get("/pet", function (req, res) {
  res.send("Welcome to PetGoodsShop 🐶🐱");
});

app.get("/beauty", function (req, res) {
  res.send("Welcome to BeautyShop 💘");
});

// /하나만 쓰면 home을 의미
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/write", function (req, res) {
  res.sendFile(__dirname + "/write.html");
});

// 폼 post 전송 -> 처리
app.post("/add", function (req, res) {
  res.send("폼 전송 완료");
  console.log(req.body.title);
  console.log(req.body.date);
});
