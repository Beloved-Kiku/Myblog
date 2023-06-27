//分页请求数据api
const { Markdown_CURRENTPAGE_API } = require("../constant/constant");
const redis = require("../../../redis/connect");
const Route = require("express").Router();
Route.get(`${Markdown_CURRENTPAGE_API}`, async (req, res) => {
  const { NowPage } = req.params;
  console.log(NowPage);
  const limit = 5;
  //分页向redis列表中取值
  let result = await redis.LRANGE(
    "RedisCache",
    limit * (NowPage - 1),
    limit * (NowPage - 1) + (limit - 1)
  );
  const temporaryArray = [];
  result.forEach((res) => temporaryArray.push(JSON.parse(res)));
  return res.send(temporaryArray);
});
module.exports = Route;
