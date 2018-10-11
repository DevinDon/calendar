import * as Express from 'express';

const app: Express.Application = Express();

app.use(Express.static('./dist/calendar'));

/** API Servers. */
const servers = [];
const port: number = 10000;

/**
 * Init servers.
 * @param server Server amount.
 */
function init(server: number): void {
  while (server > 0) {
    servers.push(
      app.listen(port + server, () => {
        console.log(`Server start on port: ${port + server}.`);
      }).on('error', (error) => {
        console.warn(`Server on port: ${port + server} errors: ${error}.`);
      })
    );
  }
}

init(2);
