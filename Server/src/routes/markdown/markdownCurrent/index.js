const { Markdown_CURRENT_API } = require("../constant/constant");
const redis = require("../../../redis/connect");
const Route = require("express").Router();
Route.get(`${Markdown_CURRENT_API}`, async (req, res) => {
  const { keyWords } = req.params;
  //判断redis列表中是否有数据中是否有数据
  if (await redis.LLEN("RedisCache")) {
    //查询redis list中的所有数据
    let CacheList = await redis.LRANGE("RedisCache", 0, -1);
    const temporaryArray = [];
    let index = 0;
    CacheList.forEach((res) => temporaryArray.push(JSON.parse(res)));
    const end = temporaryArray.filter((res) => {
      if (res.markdownCurrent == keyWords && index < 5) {
        index++;
        return res;
      }
    });
    res.send({ total: temporaryArray.length, end });
  }
  //通知初始化数据
});
module.exports = Route;
