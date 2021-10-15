const mysql = require('mysql');
// 创建数据库连接
// const db = mysql.createConnection({
//     host: '192.168.43.134',
//     user: 'root',
//     password: 'AbHc123!',
// });

// 创建指定数据库连接
const db = mysql.createConnection({
    host: '192.168.43.134',
    user: 'root',
    password: 'AbHc123!',
    database:'mysql'
});

// 连接数据库
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('连接成功');

    // 创建用户表
    // let sql = 'GRANT ALL PRIVILEGES ON *.* TO test@"%" IDENTIFIED BY "Abcd123!" WITH GRANT OPTION';
    // db.query(sql, (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log('创建用户成功');
    // });
})



// 创建数据库
// let sql = 'CREATE DATABASE test character set utf8';
// db.query(sql, (err, res) => {
//     if (err) {
//         throw err;
//     }
//     console.log('创建数据库成功');
// });

// 创建表
// let sql = 'CREATE TABLE nodejs_user(id int(11), name varchar(255), age int(8)) default charset = utf8';
// db.query(sql, (err, res) => {
//     if (err) {
//         throw err;
//     }
//     console.log('创建表成功');
// });

// 新增数据插入到表
// let sql = 'INSERT INTO nodejs_user(id,name,age) VALUES(?,?,?)';
// let sqlParams = [0, '张三', 18];
// db.query(sql,sqlParams, (err, res) => {
//     if (err) {
//         throw err;
//     }
//     console.log(res);
// });

// 修改表数据
// let sql = 'UPDATE nodejs_user SET id = ?,name = ?,age = ?';
// let sqlParams = [1, '李四', 20];
// db.query(sql,sqlParams, (err, res) => {
//     if (err) {
//         throw err;
//     }
//     console.log(res.affectedRows);
// });

// 删除表数据
// let sql = 'DELETE FROM nodejs_user where id=1';
// db.query(sql, (err, res) => {
//     if (err) {
//         throw err;
//     }
//     console.log(res.affectedRows);
// });



// 查询数据库表数据
let sql = 'SELECT * FROM nodejs_user';
db.query(sql, (err, res) => {
    if (err) {
        throw err;
    }
    console.log(res);
});



