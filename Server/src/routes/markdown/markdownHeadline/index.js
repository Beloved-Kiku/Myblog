//导入常量
const { MarkDown_HEADLINE_API } = require("../constant/constant");
//导入redis
const redis = require("../../../redis/connect");
//导入ORM对象
const { Article_title } = require("../../../database/Model/index");
//导入express路由
const Route = require("express").Router();
Route.get(`${MarkDown_HEADLINE_API}`, async (req, res) => {
  //判断redis中是否有数据
  let redisResult = await redis.get(MarkDown_HEADLINE_API);
  if (redisResult !== null) { 
    return res.send(redisResult);
  }
  let findResult = await Article_title.findAll();
  redis.set(MarkDown_HEADLINE_API, JSON.stringify(findResult));
  return res.send(findResult);
});
module.exports = Route;
