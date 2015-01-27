# Uber
## Sudoku

Please provide a README that outlines the structure of your application and technologies used, the reasoning behind your technical choices, and any trade-offs you made or changes you would have implemented had you had additional time

I used HTML5 Boilerplate to handle the out-of-the-box markup and styling. I initially wrote the style in main.css. I currently use Sass at work so afterward decided to refactor most of my custom style into sudoku.scss which is a little tidier and is better at supporting the Uber branding through use of color variables.

In main.js there are two objects. One contains the initial hints for the game; the other the solution set.