const appModel = require('../models/app.models');
// 保存用户数据
module.exports.getData = function(req, res) {
    // 解构获取手机号与对应的食物
    let { phone, food } = req.query;
    appModel.saveData(phone, req.query, (msg) => {
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