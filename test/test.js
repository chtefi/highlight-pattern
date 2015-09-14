import highlightPattern from '../index.js';

const tests = [
  ['AAAbAAbAA', 'b'],
  ['AAAbAAbAA', 'AAb'],
  ['AAAbAAbAAbbAA', 'AbA'],
  ['ZZzzzZz', 'Zyy'],
];

tests.forEach(t => {
  console.log(`Find "${t[1]}"`);
  console.log(t[0]);
  console.log(highlightPattern(t[0], t[1]));
  console.log();
});
