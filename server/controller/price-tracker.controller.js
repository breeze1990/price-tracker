const path = require('path');

module.exports = function (app) {
  app.get('/price-tracker', function (req, res) {
    res.sendFile(path.resolve(global.__base, 'dist/price-tracker-app/index.html'));
  })
};
