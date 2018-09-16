const log4js = require('log4js');
const { Pool } = require('pg');

const logger = log4js.getLogger(__filename);
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

module.exports = function (app) {
  app.get('/api/products', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM products');
      const results = {
        'results': (result) ? result.rows : null
      };
      res.send(results);
      client.release();
    } catch (err) {
      logger.error(err);
      res.send("Error " + err);
    }
  });
};

