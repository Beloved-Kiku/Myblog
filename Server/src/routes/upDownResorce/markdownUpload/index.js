//处理上传markdown上传逻辑
const client = require("../index");
const path = require("path");
const fs = require("fs");
var marked = require("marked");
const formidable = require("formidable");
const { markDownTables } = require("../../../database/Model/index");
//模拟读取本地markdown文件上传
function upload() {
  console.log("函数执行");
  const File = fs.readFile(
    path.resolve(__dirname, "./ts概述.md"),
    "utf-8",
    async (err, res) => {
      //源文件上传阿里云 二进制存储进数据库
      const buffer = new Buffer.from(res);
      const data = {
        markdownCurrent: "Vue.js",
        markdownValue: buffer,
        markdownTitle: "Evan You",
      };
      const result = await markDownTables.create({
        markdownCurrent: data.markdownCurrent,
        markdownValue: data.markdownValue,
        markdownTitle: data.markdownTitle,
      });
      console.log(result);
    }
  );
}

module.exports = upload;
