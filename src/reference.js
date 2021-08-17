const gridSize = {
  x: 5,
  y: 5,
};

const errorMessage = {
  exceedGrid: 'The robot is on the edge of the grid. Change direction ' +
    'to avoid it from falling.',
  invalidFormat: 'Invalid input format. Valid input are "MOVE", "LEFT", ' +
    '"RIGHT", "REPORT", "PLACE <x-grid>,<y-grid>,<NORTH/EAST/SOUTH/WEST>"',
  emptyLocation: 'Robot is not on the table. Please PLACE the robot to begin.',
};

const infoMessage = {
  currentPosition: 'Current position of the robot is : ',
};

module.exports = {
  gridSize,
  errorMessage,
  infoMessage,
};
