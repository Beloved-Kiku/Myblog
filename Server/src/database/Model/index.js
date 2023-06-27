const { DataTypes, Model, Op } = require("sequelize");
const { sequelize } = require("../index");
//导航栏模型
class Article_title extends Model {}
// Product.init(定义模型属性，其他模型参数)
Article_title.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    article_title: {
      type: DataTypes.STRING,
      allowNotNull: false,
    },
  },
  {
    tableName: "article_title",
    sequelize,
    timestamps: false,
  }
);
// markDownTables 所有文章模型
class markDownTables extends Model {}
markDownTables.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    markdownCurrent: DataTypes.STRING,
    markdownValue: DataTypes.BLOB,
    markdownTitle: DataTypes.STRING,
    is_delete: DataTypes.TINYINT,
  },
  { tableName: "markDownTables", sequelize }
);
//video视频模型
class videoTablesModel extends Model {}
videoTablesModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    video_name: DataTypes.STRING,
    video_aliyunpath: DataTypes.STRING,
    background_image: DataTypes.STRING,
    video_path: DataTypes.STRING,
    video_title: DataTypes.STRING,
  },
  {
    tableName: "uploadvideoTables",
    sequelize,
  }
);
module.exports = {
  Article_title,
  markDownTables,
  videoTablesModel,
  Op,
};
