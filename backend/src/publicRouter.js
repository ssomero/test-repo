const Router = require('koa-router');
const { API_POSTFIX } = require('./constants');
const { router: helloWorld } = require('./controllers/helloWorld');

const router = new Router({ prefix: API_POSTFIX });
router.use('/hello', helloWorld.routes(), helloWorld.allowedMethods());
module.exports = router;
