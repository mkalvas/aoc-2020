import days2015 from './2015';
import days2020 from './2020';
import days2021 from './2021';
import { getFileLines } from './lib';

const solutions = {
  2015: days2015,
  2020: days2020,
  2021: days2021,
};

const blacklist = ['2015-4'];

const solve = (day) => {
  const lines = getFileLines(day.path);
  return [day.solutionOne(lines), day.solutionTwo(lines)];
};

describe('e2e pinnning test for puzzle solutions', () => {
  process.env.NODE_ENV = 'production';
  Object.entries(solutions).forEach(([year, days]) => {
    describe(`${year}`, () => {
      Object.values(days).forEach((day, i) => {
        it(`solves day ${i + 1}`, () => {
          if (!blacklist.includes(`${year}-${i + 1}`)) {
            expect(solve(day)).toEqual(day.answers);
          }
        });
      });
    });
  });
});
