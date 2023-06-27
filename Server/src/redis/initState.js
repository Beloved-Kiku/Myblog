//初始化数据 将mysql中的数据放入一个list列表中后续所有操作都对该列表进行操作
//导入ORM模型
const { markDownTables, videoTablesModel } = require("../database/Model/index");

async function initStateMarkDown(redis) {
  //初始化文章列表信息
  if (!(await redis.LLEN("RedisCache"))) {
    let findResult = await markDownTables.findAll();
    if (findResult) {
      for (let i = 0; i < findResult.length; i++) {
        findResult[i].markdownValue = new Buffer.from(
          findResult[i].markdownValue
        ).toString("utf8");
        redis.LPUSH("RedisCache", JSON.stringify(findResult[i]));
      }
    }
  }
}
async function initStateVideoList(redis) {
  //初始化视频列表信息
  if (!(await redis.LLEN("RedisCacheVideoList"))) {
    console.log("初始化视频列表成功");
    const result = await videoTablesModel.findAll();
    result.forEach((res) => {
      redis.LPUSH(`RedisCacheVideoList`, JSON.stringify(res));
    });
  }
}
module.exports = {
  initStateMarkDown,
  initStateVideoList,
};
