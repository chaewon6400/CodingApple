const express = require("express");
const res = require("express/lib/response");
const app = express();
app.use(express.urlencoded({ extended: true }));
const MongoClient = require("mongodb").MongoClient;
// EJS 관련코드
app.set("view engine", "ejs");

// 데이터를 저장할 변수
var db;

MongoClient.connect(
  "mongodb+srv://chaewon:wjs304815@cluster0.mrcdqgw.mongodb.net/?retryWrites=true&w=majority",
  function (에러, client) {
    // 에러가 난다면
    if (에러) return console.log(에러);
    // todoapp 이라는 database에 연결 좀 해주세요
    db = client.db("todoapp");
    // db.collection("post").insertOne(
    //   { 이름: "chaewon", 나이: 20 },
    //   function (에러, 결과) {
    //     console.log("저장 완료!");
    //   }
    // );

    app.listen(8080, function () {
      console.log("listening on 8080");
    });
  }
);

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
  //res.send("폼 전송 완료");
  console.log(req.body.title);
  console.log(req.body.date);
  // 이제 데이터에 저장해주세요라고 요청해야 함
  db.collection("post").insertOne(
    { 제목: req.body.title, 날짜: req.body.date },
    function (에러, 결과) {
      console.log("저장 완료!");
    }
  );
});

// 저장된 데이터를 /list로 접속하면(GET요청) 데이터들로 꾸민 HTML로 보여주기
app.get("/list", function (req, res) {
  // DB데이터를 꺼내보자 (post라는 collection안의 데이터)
  // MongoDB에서 데이터를 꺼내고 싶다면
  // db.collection('post').find()
  // db.colleciton('post').findOne()

  // post의 모든 데이터를 꺼내주세요 -> db.collection('post').find().toArray(function(에러, 결과){}

  // 1. DB에서 자료를 찾아주세요
  // 2. 찾은 자료를 ejs파일에 집어넣어주세요
  db.collection("post")
    .find()
    .toArray(function (에러, 결과) {
      console.log(결과);
      res.render("list.ejs", { posts: 결과 });
    });
});
