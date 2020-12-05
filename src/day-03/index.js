import { getFileLines, solve } from '../lib';
import { puzzleOne, puzzleTwo } from './code';

const parseInput = () => getFileLines(`${__dirname}/input.txt`);

const printOutput = (solution) => {
  console.log(`  Trees Encountered: ${solution}`);
  console.log('');
};

const day = () => solve(parseInput, [puzzleOne, puzzleTwo], printOutput);

export default day;
