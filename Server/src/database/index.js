//配置连接 数据库
const mysql = require("mysql2");
const database = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  database: "blog_admin",
  password: "admin123",
  connectionLimit: 10,
});
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("blog_admin", "root", "admin123", {
  host: "localhost",
  dialect: "mysql",
});
sequelize.authenticate().then((res) => {
  console.log("连接数据库成功");
});

module.exports = {
  database,
  sequelize,
};
