# Snake

## Description
Whilst doing a tech test based on [Conways Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), I was interested in what else I could acheive with some javascript and a grid. This led me on to making a clone of the popular mobile game snake

## How to play
Clone this repository, then.
```
    $ cd Snake
    $ open Snake.html 
```

### Controls
Use the arrow keys on your keyboard to control the snake
To start the game, press any of the arrow keys and the snake (represented by a single grid item at the start of the game) will begin moving in that direction. 
PLEASE NOTE: I have no added a restart game button, refresh the page to restart the game.

### Rules
You need to try and run over the food squares(green) with the snake(red), each time you successfully eat a target the snake will increase in length by one square.
Your snake must not hit the edge of the grid canvas, or the game will end. 
Your snake must not run over part of its own body, or the game will end.

## Running the tests
Tests are currently limited, the main reason for this exercise was to experiment with the physics of the game, rather than make a complete app. As a result of this, tests currently only cover the methods relating to updating the coordinates of the snake and the target. To run these tests:
``` 
    $ cd Snake
    $ open SpecRunner.html
```

## Areas for Improvement
- I'd like to make the grid smaller, i overestimated the size of the actual snake game when designing this
- Definitely increased test coverage, feature tests are notably lacking.
- I'd like to add a scoring system.
- Currently, if you actually complete the game, I think you would get the "you lose" message. There is no functionality for winning and you would either leave the board or bite yoursel on the next turn. However, as I've never actually beaten snake, I'm not sure I want to accept that somebody else will win so I did consider this important on what is essentially an MVP.
- Add functionality for Snake 2 (The main difference is that crossing a wall boundary will cause the snake to emerge from the opposite boundary. 
