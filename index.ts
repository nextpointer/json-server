// index.ts
import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

// To get __dirname in ES modules with TypeScript
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Apply default middlewares (logger, static, cors, no-cache)
server.use(middlewares);

// You can add custom middlewares here
// Example: server.use((req, res, next) => { console.log('Request received'); next(); });

// Use the default router
server.use(router);

// Start the server
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running at http://localhost:${PORT}`);
});
