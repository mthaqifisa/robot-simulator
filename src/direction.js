/* eslint-disable valid-jsdoc */
const validate = require('./validate');
const printLog = require('./response');

/**
 * To move the robot to the new position
 * @param {Array} requestedPosition input command
 * e.g. 'POSITION 1,1,N', 'MOVE', 'RIGHT', 'LEFT'
 * @param {Array} currentPosition current position of the robot e.g. [0,0,N]
 * @return Array of new position e.g. [1,2,N]
 */
function moveRobot(requestedPosition, currentPosition) {
  try {
    const command = requestedPosition.split(' ')[0];
    let newPosition = currentPosition;

    if (command.includes('PLACE')) {
      newPosition = requestedPosition.split(' ')[1].split(',');
    } else if (command.includes('MOVE')) {
      newPosition = moveCommand(currentPosition);
    } else if (command.includes('LEFT')) {
      newPosition = leftCommand(currentPosition);
    } else if (command.includes('RIGHT')) {
      newPosition = rightCommand(currentPosition);
    }

    return newPosition;
  } catch (error) {
    throw new Error(error.message);
  }
}


/**
 * To move the robot to the next grid
 * @param {Array} currentPosition current position of the robot
 * @return new position of the robot in array
 */
function moveCommand(currentPosition) {
  try {
    const face = currentPosition[2];
    const newPosition = currentPosition;

    if (face.includes('NORTH')) {
      newPosition[1]++;
    } else if (face.includes('EAST')) {
      newPosition[0]++;
    } else if (face.includes('SOUTH')) {
      newPosition[1]--;
    } else if (face.includes('WEST')) {
      newPosition[0]--;
    }

    if (ifOffTheGrid(newPosition)) {
      return resetGrid(currentPosition);
    }
    return newPosition;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * To move the direction of the robot to the left
 * @param {Array} currentPosition current position of the robot
 * @return new position of the robot in array
 */
function leftCommand(currentPosition) {
  try {
    const face = currentPosition[2];
    const newPosition = currentPosition;

    if (face.includes('NORTH')) {
      newPosition[2] = 'WEST';
    } else if (face.includes('EAST')) {
      newPosition[2] = 'NORTH';
    } else if (face.includes('SOUTH')) {
      newPosition[2] = 'EAST';
    } else if (face.includes('WEST')) {
      newPosition[2] = 'SOUTH';
    }

    return newPosition;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * To move the direction of the robot to the right
 * @param {Array} currentPosition current position of the robot
 * @return new position of the robot in array
 */
function rightCommand(currentPosition) {
  try {
    const face = currentPosition[2];
    const newPosition = currentPosition;

    if (face.includes('NORTH')) {
      newPosition[2] = 'EAST';
    } else if (face.includes('EAST')) {
      newPosition[2] = 'SOUTH';
    } else if (face.includes('SOUTH')) {
      newPosition[2] = 'WEST';
    } else if (face.includes('WEST')) {
      newPosition[2] = 'NORTH';
    }

    return newPosition;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * To check if new position is still within the defined grid
 * @param {Array} newPosition new position in array E.g. [1,1,'N']
 * @return boolean false if position is still inside grid
 */
function ifOffTheGrid(newPosition) {
  let result = true;
  try {
    validate.isInsideGrid(newPosition);
    result = false;
  } catch (error) {
    printLog.error(error.message);
  }
  return result;
}

/**
 * To reset back position to its original coordinate before getting user input
 * @param {Array} currentPosition latest position after if get changed
 * @return reverted position
 */
function resetGrid(currentPosition) {
  try {
    const face = currentPosition[2];
    const newPosition = currentPosition;

    if (face.includes('NORTH')) {
      newPosition[1]--;
    } else if (face.includes('EAST')) {
      newPosition[0]--;
    } else if (face.includes('SOUTH')) {
      newPosition[1]++;
    } else if (face.includes('WEST')) {
      newPosition[0]++;
    }

    if (ifOffTheGrid(newPosition)) {
      return currentPosition;
    }
    return newPosition;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  moveRobot,
};
