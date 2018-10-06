import * as Express from 'express';

const app = Express();

app.use(Express.static('./dist/calendar'));

var server = app.listen(80, function () {

  var host = server.address().address
  var port = server.address().port

  console.log(`请在浏览器导航栏中输入 localhost 来访问应用.`)

});
