const chalk = require('chalk');

/**
 * To return info
 * @param {String} message custom info message in string
 */
function info(message){
    console.log(chalk.green(message));
}

/**
 * To return error
 * @param {String} message custom error message in string
 */
function error(message){
    console.log(chalk.red(message));
}

module.exports = {
    info,
    error
};