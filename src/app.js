/* eslint-disable valid-jsdoc */
const printLog = require('./response');
const validate = require('./validate');
const direction = require('./direction');
const reference = require('./reference');

/**
 * The main function of this application
 */
function main() {
  try {
    inputListener();
  } catch (error) {
    printLog.error(error.message);
  }
}

/**
 * To listen to user input via cmd/terminal
 */
function inputListener() {
  try {
    const stdin = process.openStdin();
    let currentLocation;
    stdin.addListener('data', function(userInput) {
      const inputList = userInput.toString().split('|');
      inputList.forEach((input) => {
        if (validateInput(input, currentLocation)) {
          if (!input.split(' ')[0].toString().includes('REPORT')) {
            currentLocation = direction.moveRobot(input, currentLocation);
          } else {
            const infoMessage = reference.infoMessage.currentPosition;
            printLog.info(infoMessage + currentLocation);
          }
        }
      });
    });
  } catch (error) {
    printLog.error(error.message);
  }
}

/**
 * To validate input
 * @param {String} input user input
 * @param {Array} currentLocation array of current location E.g. [0,0,'N']
 * @return boolean true if user input is valid
 */
function validateInput(input, currentLocation) {
  let result = false;
  try {
    validate.isValidInputFormat(input);
    validate.isValidPlaceRange(input);
    if (input.split(' ')[0] !== 'PLACE') {
      validate.isValidRequest(currentLocation);
    }
    result = true;
  } catch (error) {
    printLog.error(error.message);
  }
  return result;
}

main();
