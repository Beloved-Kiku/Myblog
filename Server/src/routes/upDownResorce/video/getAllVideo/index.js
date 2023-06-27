const { GET_VIDEO_LIST_API } = require("../constant/constant");
const redis = require("../../../../redis/connect");
const Route = require("express").Router();
Route.get(`${GET_VIDEO_LIST_API}`, async (req, res) => {
  //判断当前redis中是否有缓存列表
  if (await redis.LLEN(`RedisCacheVideoList`)) {
    const ResultData = await redis.LRANGE(`RedisCacheVideoList`, 0, -1);
    const temp = [];
    ResultData.forEach((res) => {
      temp.push(JSON.parse(res));
    });
    return res.send(temp);
  }
  //调用初始化
});
module.exports = Route;
