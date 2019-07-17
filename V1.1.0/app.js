const express = require('express');
const appController = require('./controllers/app.controller');
const app = express();
app.get('/order', appController.getData);
app.get('/all', appController.getAllData);
app.set('view engine', 'ejs');
app.use(express.static('assets'));
let port = 7500;
app.listen(port, () => {
    console.log(`服务已开启,当前地址为：http://localhost:${port}`);
})