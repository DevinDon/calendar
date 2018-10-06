"use strict";
exports.__esModule = true;
var Express = require("express");
var app = Express();
app.use(Express.static('./dist/calendar'));
var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("\u8BF7\u5728\u6D4F\u89C8\u5668\u5BFC\u822A\u680F\u4E2D\u8F93\u5165 localhost \u6765\u8BBF\u95EE\u5E94\u7528.");
});
