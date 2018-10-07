import * as Express from 'express';
const app = Express();
app.use(Express.static('./dist/calendar'));
const server = app.listen(80, function () {
    console.log(`请在浏览器导航栏中输入 localhost 来访问应用.`);
});
server.on('error', (error) => {
    console.log(`Something wrong: ${error}`);
});
