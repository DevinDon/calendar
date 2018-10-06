import * as Express from 'express';

const app: Express.Application = Express();

app.use(Express.static('./dist/calendar'));

app.get('/', function (req, res) {
  res.send('Hello World');
});

const server = app.listen(80, function () {
  console.log(`请在浏览器导航栏中输入 localhost 来访问应用.`)
});

server.on('error', (error) => {
  console.log(`Something wrong: ${error}`);
});
