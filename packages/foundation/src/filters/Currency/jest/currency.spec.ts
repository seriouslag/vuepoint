import currencyFilter from '../currency';
import values from '../values';

describe('currencyFilter', () => {
  values.forEach((item, index: number) => {
    it(`${item[0]} to be formated to ${item[1]}`, () => {
      expect(currencyFilter(item[0])).toEqual(item[1]);
    });
  });
});
