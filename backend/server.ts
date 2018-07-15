import * as jsonServer from 'json-server'
import { Express } from 'express'
import * as fs from 'fs'
import * as https from 'https'

import { handleAuthentication } from './auth';
import { handleAuthorization } from './authz';

const server: Express = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

// rota personlizada
server.post('/login', (handleAuthentication))
server.use('/orders', handleAuthorization);

// Add custom routes before JSON Server router
server.use('/echo', (req, res) => {
  res.jsonp(req.query)
})

server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Use default router
server.use(router)

const options = {
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem')
}

https.createServer(options, server).listen(3001, () => {
  console.log('JSON Server is running on secure server')
})

server.listen(3000, () => {
  console.log('JSON Server is running')
})
