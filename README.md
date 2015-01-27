# Uber
## Sudoku

I used [HTML5 Boilerplate](https://html5boilerplate.com/) to handle the out-of-the-box markup and styling. I initially wrote the style in main.css. I currently use Sass at work so afterward decided to refactor most of my custom style into sudoku.scss which is a little tidier and is better at supporting the Uber branding through use of color variables.

In main.js there are two objects. One contains the initial hints for the game; the other the solution set. If I were to design the game to include a generator, I might refactor the object keys to be sequentially numbered from 0 to 80  to represent the cells instead of the current row column notation. There are a handful of functions that I made appropriately modular. There's a mixture of vanilla JavaScript and jQuery. I appreciate substack's approach so used his [approach](http://substack.net/weaning_yourself_off_jquery). The variables are declared at the top followed by binding the functions to the buttons.

