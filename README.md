# JS Problem: Word Counter

For this problem you will write three functions: `countWords`, `findWords` and `printData`.

`countWords` takes has no parameters and fires on a `click` event. You will use the string `split()` method. 

`findWords` takes no parameters and fires on a `click` event. This function has a local variable `foundwords` that is an `array`. When you find a match you can `push` the match into this array. You can find matches using `forEach` or you can use the `filter()` method, but the latter approach uses `arrow functions`. 

`printData` takes two parameters... the data to print, and the destination (which node) to print to. This is _similar_ to the `writeTotal` function from the class example. `printData` is called from inside `countWords` and `findWords`. 

You are given all the necessary HTML and CSS. You will only write JS for this assignment. See the [screenshot](https://github.com/jsurmaczBU/js-problem-word-counter/blob/main/word-counter-screenshot.jpg) for sample output.

## Resources
- [MDN String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [javascript.info arrays](https://javascript.info/array)
- [javascript.info forEach](https://javascript.info/array-methods#iterate-foreach)
- [MDN Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

