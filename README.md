# highlight-string-pattern

Highlight a pattern in a string.

## Example

```js
import highlight from 'highlight-string-pattern';

console.log(highlight('AAAbAAbAA', 'b'));
// ---b--b--

console.log(highlight(LOREM_IPSUM, 'te'));
/*
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices, odio eget laoreet vehicula, leo purus rhoncus justo, aliquam tincidunt odio ante quis erat. Aliquam feugiat pharetra sodales. Maecenas vel tempus neque. Phasellus massa tortor, elementum quis arcu ac, lacinia semper libero. Sed at ipsum nec eros efficitur laoreet at non neque. Pellentesque tincidunt luctus massa vel dictum. Morbi arcu orci, placerat nec porta vel, consectetur quis quam. Fusce varius est in arcu sollicitudin vestibulum. Vestibulum ac ligula arcu. In hac habitasse platea dictumst. Donec congue ante pulvinar tortor placerat tempor. Pellentesque pulvinar mauris eu odio tempor mollis ac a.
----------------------------------te-----------------------te--------------------------------------------------------------------------------------------te-----------------------------------------------------------te-----------------------------------------------------------------------------------------------------------------------------------------------te---------------------------------------------------------------------------------------te----------------------------------------------------------------------------------------------------------------te---------------------------te--------------------------te------------te-----------------------------te-----------------
*/

```


