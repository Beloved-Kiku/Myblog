const { MarkDown_DETALIS_API } = require("../constant/constant");
const redis = require("../../../redis/connect");
//导入ORM对象
const { markDownTables } = require("../../../database/Model/index");
const Route = require("express").Router();
Route.get(`${MarkDown_DETALIS_API}`, async (req, res) => {
  //判断redis中是否有数据
  let redisResult = await redis.LLEN(MarkDown_DETALIS_API);
  if (redisResult == 0) return res.send(JSON.parse(redisResult));
  let findResult = await markDownTables.findAll();
  //创建redis 列表 将查询数据放入redis列表 后续如果有新增数据只需要添加 而不需要重新加载整个data
  redis.LPUSH(MarkDown_DETALIS_API, JSON.stringify(findResult));
  return res.send(findResult);
});
module.exports = Route;
