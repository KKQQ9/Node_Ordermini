const fs = require('fs');
const moment = require('moment');

// 保存用户数据
module.exports.saveData = function(phone, data, callback) {
    fs.writeFile(`./data/${phone}.txt`, `${JSON.stringify(data)},`, { flag: 'a' }, (err) => {
        if (!err) callback('订单成功，请耐心等待')
    })
}

// 显示用户数据
module.exports.showData = function(callback) {
    fs.readdir('./data', (err, fileList) => {
        let arrList = fileList.map((value) => {
            return value.replace('.txt', '')
        });
        if (!err) {
            callback(arrList)
        }
    });
}

// 显示单条用户数据
module.exports.showOneData = function(phone, callback) {
    fs.readFile(`./data/${phone}.txt`, (err, data) => {
        if (err) {
            callback(-1)
        } else {
            // 去掉由于追加产生的末端`,`号
            let res = data.toString().substring(0, data.toString().lastIndexOf(','));
            // 转为JSON对象 `[{phone:'1',food:'包子'},{phone:'1',food:'馒头'}]`
            let res2 = JSON.parse(`[${res}]`);
            // 获取food数组
            let arr1 = [];
            let arr2 = [];
            for (var i in res2) {　
                arr1.push(res2[i].food)　　
                arr2.push(res2[i].date)　
            }
            /**获取最后的对象
             * { phone: '1',
             * food: [ '包子', '馒头' ],
             * date: ['2019-07-17 , 12:24:16','2019-07-17 , 12:24:46'] }
             */
            let obj = {
                phone: phone,
                food: arr1,
                date: arr2,
            };
            callback(obj);
        }
    });
}