const expect = require('expect');
const direction = require('../src/direction');
const { errorMessage, gridSize } = require('../src/reference');

before(() => {
    process.env.NODE_ENV = 'test';
  });

  it('Should MOVE to North with Y+1 without error', () => {
    let result = direction.moveRobot('MOVE',[0,0,'N']);
    expect(result).toEqual([0,1,'N']);
  });

  it('Should face to East without error', () => {
    let result = direction.moveRobot('RIGHT',[0,0,'N']);
    expect(result).toEqual([0,0,'E']);
  });

  it('Should face to WEST without error', () => {
    let result = direction.moveRobot('LEFT',[0,0,'N']);
    expect(result).toEqual([0,0,'W']);
  });

  it('Should PLACE to new position without error', () => {
    let result = direction.moveRobot('PLACE 1,1,W',[0,0,'N']);
    expect(result).toEqual(['1','1','W']);
  });

  it('Should return an error of grid value exceeded', () => {
    try { 
        direction.moveRobot('MOVE',[gridSize.x,gridSize.y,'N']);
      }
      catch(err) {
        expect(err).toEqual(new Error(errorMessage.exceedGrid));
      }
  });

  it('Should revert back to original position due to grid exceeded error', () => {
    let result = direction.moveRobot('MOVE',[gridSize.x,gridSize.y,'N']);
    expect(result).toEqual([gridSize.x,gridSize.y,'N']);
  });
