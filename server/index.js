const express = require('express');
const path = require('path');
const log4js = require('log4js');
const glob = require('glob');
require('module-alias/register');

require('@config');

const logger = log4js.getLogger(__filename);
const app = express();
const port = process.env.PORT || 3000;

global.__base = path.dirname(__dirname);

app.use('/static', express.static('dist'));

// register controllers
const controllers = glob.sync('controller/**/*.js', { cwd: __dirname });

for (const controller of controllers) {
  const controllerPath = path.resolve(__dirname, controller);
  require(controllerPath)(app);
}

app.listen(port, () => logger.info(`Example app listening on port ${port}!`));
