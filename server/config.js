const path = require('path');
const log4js = require('log4js');
const logger = log4js.getLogger();

logger.level = 'info';

module.exports = {
  PROJECT_DIR : path.dirname(__dirname)
};
