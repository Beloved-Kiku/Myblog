//暴露一个对外连接express函数 以及各种express配置项
const express = require("express");
const app = express();
const Router = express.Router();
///使用body-parser插件
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
//解决跨域的中间件
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "content-type,AuthorigetArticleHeadlinezation"
  );
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() === "options") {
    return res.sendStatus(200);
  }
  next();
});

app.listen(3000, () => {

  app.use(require("./src/routes/markdown/markdownHeadline/index"));
  app.use(require("./src/routes/markdown/markdownDetails/index"));
  app.use(require("./src/routes/markdown/markdownCurrent/index"));
  app.use(require("./src/routes/markdown/markdownCurrentPage/index"));
  app.use(require("./src/routes/upDownResorce/video/uploadVideo/index"));
  app.use(require("./src/routes/upDownResorce/video/getAllVideo/index"));
  console.log("http://127.0.0.1:3000", "服务启动");
});
