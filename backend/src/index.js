const Koa = require('koa');
const publicRouter = require('./publicRouter');
const db = require('./db');
const { PORT, NODE_ENV } = require('./constants');

const koa = new Koa();

koa.use(publicRouter.routes());

const dbinit = () => db.sequelize.sync({ force: false }).then(() => console.log('*** DB synced ***'));
dbinit();
const app = koa.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = {
    app,
    dbinit,
};

