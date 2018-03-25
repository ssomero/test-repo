const {
  API_POSTFIX,
  DATABASE_URL,
  NODE_ENV,
  PORT,
  SHARED_SECRET = 'secret',
} = process.env;

module.exports = {
  API_POSTFIX,
  DATABASE_URL,
  NODE_ENV,
  PORT,
  SHARED_SECRET,
};
