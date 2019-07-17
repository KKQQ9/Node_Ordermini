const moment = require('moment');
const appModel = require('../models/app.models');
// 保存用户数据
module.exports.getData = function(req, res) {
    // 解构获取手机号与对应的食物
    let { phone, food } = req.query;
    let data = {
        phone,
        food,
        date: moment(new Date()).format('YYYY-MM-DD , hh:mm:ss'),
    }
    appModel.saveData(phone, data, (msg) => {
        res.send(msg);
    });
}

// 显示全部订单
module.exports.getAllData = function(req, res) {
    appModel.showData((phoneList) => {
        res.render('all', {
            phoneList
        })
    });
}

// 显示单条数据
module.exports.getOneData = function(req, res) {
    let phone = req.params.phone;
    appModel.showOneData(phone, (data) => {
        console.log(data);
        res.render('one', data)
    })
}