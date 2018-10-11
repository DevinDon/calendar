import * as Express from 'express';

const app: Express.Application = Express();

app.use('/', Express.static('dist/calendar/'));

app.get('/api', (req, res) => {
  res.end('API get');
});

app.get('/api/test', (req, res) => {
  res.end('API test');
});

/** API Servers. */
const servers = [];
const port: number = 10000;

/**
 * Init servers.
 * @param server Server amount.
 */
function init(server: number): void {
  while (server-- > 0) {
    const p = port + server;
    servers.push({
      port: p,
      server: app
        .listen(p, () => {
          console.log(`Server start on port: ${p}.`);
        })
        .on('error', (error) => {
          console.warn(`Server on port: ${p} errors: ${error}.`);
        })
    });
  }
}

init(2);
