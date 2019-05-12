import dateFilter from '../date';

const values = [
  // these will be different based on timezone
  // ['7834783748347', '4/11/2218 04:49 am'],
  // ['1557676877382', '5/12/2019 12:01 pm'],
  ['banana', 'unknown'],
];

describe('currencyFilter', () => {
  values.forEach((item) => {
    it(`${item[0]} to be formated to ${item[1]}`, () => {
      expect(dateFilter(item[0])).toEqual(item[1]);
    });
  });
});
