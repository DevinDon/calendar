import * as Express from 'express';

const app: Express.Application = Express();

app.get('/api', (req, res) => {
  res.write('API get');
});

app.get('/api/test', (req, res) => {
  res.write('API test');
});

/** API Servers. */
const servers = [];
const port: number = 10000;

/**
 * Init servers.
 * @param server Server amount.
 */
function init(server: number): void {
  while (server > 0) {
    const p = port + server;
    servers.push({
      port: p,
      server: app
        .listen(port + server, () => {
          console.log(`Server start on port: ${port + server}.`);
        })
        .on('error', (error) => {
          console.warn(`Server on port: ${port + server} errors: ${error}.`);
        })
    });
  }
}

init(2);
