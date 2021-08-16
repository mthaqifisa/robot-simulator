const expect = require('expect');
const { errorMessage } = require('../src/reference');
const validate = require('../src/validate');

before(() => {
    process.env.NODE_ENV = 'test';
  });

  it('Should return an error of invalid input format', () => {
    try { 
        validate.isValidInputFormat('PLACE'); 
      }
      catch(err) {
        expect(err).toEqual(new Error(errorMessage.invalidFormat));
      }
  });

  it('Should return an error of grid value exceeded - using PLACE command', () => {
    try { 
        validate.isValidPlaceRange('PLACE 6,6,N'); 
      }
      catch(err) {
        expect(err).toEqual(new Error(errorMessage.exceedGrid));
      }
  });

  it('Should return an error of grid value exceeded - using location in array', () => {
    try { 
        validate.isInsideGrid([6,6,'N']); 
      }
      catch(err) {
        expect(err).toEqual(new Error(errorMessage.exceedGrid));
      }
  });

  it('Should return an error of empty location', () => {
    try { 
        validate.isValidRequest([]); 
      }
      catch(err) {
        expect(err).toEqual(new Error(errorMessage.emptyLocation));
      }
  });  

  it('Should not return an error of invalid input format', () => {
    try { 
        validate.isValidInputFormat('PLACE 0,0,N'); 
      }
      catch(err) {
        expect(err).toBeFalsy(new Error(errorMessage.invalidFormat));
      }
  });
