const express = require('express');
const app = express();

app.use(express.static('assets'));
let port = 7500;
app.listen(port, () => {
    console.log(`服务已开启,当前地址为：http://localhost:${port}`);
})