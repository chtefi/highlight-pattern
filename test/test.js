import highlightPattern from '../index.js';

const tests = [
  ['AAAbAAbAA', 'b'],
  ['AAAbAAbAA', 'AAb'],
  ['AAAbAAbAAbbAA', 'AbA'],
  ['ZZzzzZz', 'Zyy'],
  ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices, odio eget laoreet vehicula, leo purus rhoncus justo, aliquam tincidunt odio ante quis erat. Aliquam feugiat pharetra sodales. Maecenas vel tempus neque. Phasellus massa tortor, elementum quis arcu ac, lacinia semper libero. Sed at ipsum nec eros efficitur laoreet at non neque. Pellentesque tincidunt luctus massa vel dictum. Morbi arcu orci, placerat nec porta vel, consectetur quis quam. Fusce varius est in arcu sollicitudin vestibulum. Vestibulum ac ligula arcu. In hac habitasse platea dictumst. Donec congue ante pulvinar tortor placerat tempor. Pellentesque pulvinar mauris eu odio tempor mollis ac a.', 'te'],
];

tests.forEach(t => {
  console.log(`Find "${t[1]}"`);
  console.log(t[0]);
  console.log(highlightPattern(t[0], t[1]));
  console.log();
});
