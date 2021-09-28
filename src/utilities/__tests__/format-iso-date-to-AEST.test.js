const convertISODateToAEST = require('../format-iso-date-to-AEST').convertISODateToAEST;

const mockData = {
  validDate: '2021-03-12T15:30:00.000Z',
  invalidDate: '2021-03-12T15:30:00.000Ztet',
}

const expectedReturnData = {
  validResponse: '13/03/2021, 2:30:00 am AEST',
  invalidResponse: 'Error: Please enter a valid date',
}

describe('Date converter should', () => {
  it('correct format date into AEST', () => {
    expect(convertISODateToAEST(mockData.validDate)).toBe(expectedReturnData.validResponse);
  });

  it('should return error message if date is invalid', () => {
    try {
      convertISODateToAEST(mockData.invalidResponse)
    } catch(error) {
      expect(error).toMatch(expectedReturnData.invalidResponse);
    }
  });
});
