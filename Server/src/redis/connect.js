//启动并且连接redis
const cron = require("node-cron");
var Redis = require("redis");
const redisClient = Redis.createClient(6379, "127.0.0.1");
const { initStateMarkDown, initStateVideoList } = require("./initState");
// 配置redis的监听事件
// 准备连接redis-server事件
(async () => {
  redisClient.on("ready", function () {
    console.log("Redis client: ready");
  });
  // 连接到redis-server回调事件
  redisClient.on("connect", function () {
    console.log("redis is now connected!");
  });
  redisClient.on("reconnecting", function () {
    console.log("redis reconnecting");
  });
  redisClient.on("end", function () {
    console.log("Redis Closed!");
  });
  redisClient.on("warning", function () {
    console.log("Redis client: warning");
  });
  redisClient.on("error", function (err) {
    console.error("Redis Error " + err);
  });
  //连接redis
  await redisClient.connect();
})();
cron.schedule("*/1 * * * *", async () => {
  await redisClient.FLUSHALL();
  console.log("清除后执行初始化");
  initStateMarkDown(redisClient);
  initStateVideoList(redisClient);
});

// 导出redis-client对象
module.exports = redisClient;
