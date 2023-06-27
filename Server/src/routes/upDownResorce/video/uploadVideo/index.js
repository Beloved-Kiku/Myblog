//采用分片上传视频
const aliClient = require("../../index");
const redis = require("../../../../database/index");
const { videoTablesModel } = require("../../../../database/Model/index");
const Route = require("express").Router();
const formidable = require("formidable");
const { UPLOAD_VIDEO_API } = require("../constant/constant");
Route.post(`${UPLOAD_VIDEO_API}`, (req, res) => {
  const form = formidable({});
  //解析form文件
  form.parse(req, (err, fields, files) => {
    multipartUpload(
      files.file.filepath,
      files.file.originalFilename,
      res,
      fields.title
    );
  });
});
// 开始分片上传。
async function multipartUpload(filePath, id, res, title) {
  //分片上传前首先进行判断是否有该文件
  try {
    const isHave = await aliClient.head(`videos/${id}`);
    return res.send("你已上传过该文件");
  } catch (error) {
    await aliClient.multipartUpload(`videos/${id}`, filePath);
    const head = await aliClient.head(`videos/${id}`);
    await videoTablesModel.create({
      video_name: id,
      video_path: filePath,
      video_aliyunpath: head.res.requestUrls[0],
      video_title: title,
    });
    return res.send(head.res.statusMessage);
  }
}
module.exports = Route;
