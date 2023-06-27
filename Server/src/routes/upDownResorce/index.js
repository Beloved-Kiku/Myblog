//初始化阿里云
let OSS = require("ali-oss");
const headers = {
  // 指定Object的存储类型。
  "x-oss-storage-class": "Standard",
  // 指定Object的访问权限。
  "x-oss-object-acl": "private",
  // 通过文件URL访问文件时，指定以附件形式下载文件，下载后的文件名称定义为example.jpg。
  // 'Content-Disposition': 'attachment; filename="example.jpg"'
  // 设置Object的标签，可同时设置多个标签。
  "x-oss-tagging": "Tag1=1&Tag2=2",
  // 指定PutObject操作时是否覆盖同名目标Object。此处设置为true，表示禁止覆盖同名Object。
  //开启缓存(只在服务端)
  "Cache-Control": "private",
  "x-oss-forbid-overwrite": "true",
  //关闭默认下载行为
  "x-oss-force-download": "false",
  "Content-Disposition": "inline",
  "Cache-Control": "public",
  "x-oss-forbid-overwrite": "true",
};
let client = new OSS({
  // yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
  region: "oss-cn-chengdu",
  // 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
  accessKeyId: "  LTAI5tPvf1Em2NGuUJeF5WAu",
  accessKeySecret: "VaXEXqbTRX5uw7UcqehxkItFqqTnXP",
  bucket: "belovedvscode",
  headers,
});
module.exports = client;
