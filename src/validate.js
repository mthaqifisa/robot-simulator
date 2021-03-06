const reference = require('./reference');
const _ = require('lodash');

const gridSize = reference.gridSize;
const errorMessageList = reference.errorMessage;

/**
 * To validate user input with regex
 * @param {String} userInput input from cmd/terminal
 */
function isValidInputFormat(userInput) {
  try {
    // eslint-disable-next-line max-len
    const result = /^(PLACE\s\d+[\,]\d+[\,](NORTH|EAST|SOUTH|WEST))$|^LEFT$|^RIGHT$|^MOVE$|^REPORT$/gm.test(userInput);
    if (!result) {
      throw new Error(errorMessageList.invalidFormat);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * To validate location initialization when using PLACE command
 * @param {String} userInput input from cmd/terminal
 */
function isValidPlaceRange(userInput) {
  try {
    if (/(PLACE\s\d+[\,]\d+[\,](NORTH|EAST|SOUTH|WEST))/.test(userInput)) {
      const position = userInput.split(' ')[1].split(',');
      isInsideGrid(position);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * To validate if coordinate given is still within the defined grid
 * @param {Arrray} position position in array E.g. [0,0,'N']
 */
function isInsideGrid(position) {
  try {
    if (position[0] > gridSize.x ||
      position[1] > gridSize.y ||
      position[0] < 0 ||
      position[1] < 0) {
      throw new Error(errorMessageList.exceedGrid);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * To validate if robot already on the grid when user input is other than PLACE
 * @param {Array} currentPosition current position in array E.g. [1,1,'W']
 */
function isValidRequest(currentPosition) {
  try {
    if (_.isNil(currentPosition)) {
      throw new Error(errorMessageList.emptyLocation);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  isValidInputFormat,
  isValidPlaceRange,
  isInsideGrid,
  isValidRequest,
};
