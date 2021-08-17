const expect = require('expect');
const direction = require('../src/direction');
const {errorMessage, gridSize} = require('../src/reference');

before(() => {
  process.env.NODE_ENV = 'test';
});

it('Should MOVE to North with Y+1 without error', () => {
  const result = direction.moveRobot('MOVE', [0, 0, 'NORTH']);
  expect(result).toEqual([0, 1, 'NORTH']);
});

it('Should face to East without error', () => {
  const result = direction.moveRobot('RIGHT', [0, 0, 'NORTH']);
  expect(result).toEqual([0, 0, 'EAST']);
});

it('Should face to WEST without error', () => {
  const result = direction.moveRobot('LEFT', [0, 0, 'NORTH']);
  expect(result).toEqual([0, 0, 'WEST']);
});

it('Should PLACE to new position without error', () => {
  const result = direction.moveRobot('PLACE 1,1,WEST', [0, 0, 'NORTH']);
  expect(result).toEqual(['1', '1', 'WEST']);
});

it('Should return an error of grid value exceeded', () => {
  try {
    direction.moveRobot('MOVE', [gridSize.x, gridSize.y, 'NORTH']);
  } catch (err) {
    expect(err).toEqual(new Error(errorMessage.exceedGrid));
  }
});

it('Should revert back to original position due to grid exceeded error', () => {
  const result = direction.moveRobot('MOVE', [gridSize.x, gridSize.y, 'NORTH']);
  expect(result).toEqual([gridSize.x, gridSize.y, 'NORTH']);
});
