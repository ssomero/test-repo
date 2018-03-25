const Router = require('koa-router');
const db = require('../db');

const hello = database => async (ctx) => {
  ctx.body = 'Hello World from backend';
};

console.log('hello routes');
const router = new Router()
  .get('/world', hello(db));

module.exports = {
  router,
};
