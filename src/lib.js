import fs from 'fs';

import day01 from './day-01';
import day02 from './day-02';
import day03 from './day-03';
import day04 from './day-04';
import day05 from './day-05';
import day06 from './day-06';
import day07 from './day-07';

export const DAYS = [day01, day02, day03, day04, day05, day06, day07];

export const getFileLines = (path) =>
  fs.readFileSync(path, 'utf-8').split('\n');

export const groupLines = (lines) =>
  lines.reduce(
    (groups, line) => {
      if (line === '') return [...groups, []];
      groups[groups.length - 1].push(line);
      return groups;
    },
    [[]]
  );

export const solve = (day, dayNumber) => `Day ${dayNumber}
  Puzzle 01 - ${day.label}: ${day.solutionOne(getFileLines(day.path))}
  Puzzle 02 - ${day.label}: ${day.solutionTwo(getFileLines(day.path))}
`;

export const aoc = () => DAYS.map((day, i) => solve(day, i + 1)).join('\n');
