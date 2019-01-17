# Snake AI Challenge
1/17/19

## Instructions:
Preview the demo [here](https://vaqcoders.github.io/coding-challenges/4/snake/).

Your goal is to edit the [ai.js file](snake/ai%20%5BCOME%20HERE%5D.js) to create two functions that will make the snake operate autonomously using an artificial intelligence strategy with your own logic. See the [VaqBot ReadMe](https://github.com/vaqcoders/vaqbot#how-to-update-on-github-desktop) for instructions on how to set your computer up for programming with JavaScript.

The first function is named `locateNearestFood()` and it takes two arguments: `snake`, which is an instance of the `Snake` class (see [snake.js](snake/snake.js)), and `foods`, which is an instance of the `Foods` class (also see [snake.js](snake/snake.js)). Using the available data from these two arguments, return a `Segment` instance (behaves like a vector) from `foods.data` that you find appropriate.

The second function is named `getOptimumVel()` and it takes two arguments: `snake`, which is an instance of the `Snake` class (see [snake.js](snake/snake.js)), and `segment`, which is an instance of the `Segment` class (also see [snake.js](snake/snake.js)). Your goal with this function is to return an object with an `x` and a `y` property, similar to `segment.pos`. This object is used to tell where the snake's head will move in the next frame of the game. For example, if the returned value is `{x: 1, y: 0}`, the head will move one unit to the right in the next frame. In order to not break the game, the rule is that you must return one of the following objects:
* `{x: 1, y: 0}` | right
* `{x: -1, y: 0}` | left
* `{x: 0, y: 1}` | down
* `{x: 0, y: -1}` | up

This way, the snake's head only moves either up, down, left, or right one unit per frame. You can probably guess that this is important because it prevents the snake's body from going diagonally and separating from itself.

A useful property that you probably need from `snake` would definitely be `snake.tail`, which is an array. The first item in the array is always the head of the snake, so the head of the snake = `snake.tail[0]`. Since the items in the array are all instances of `Segment`, the head's cartesian x and y positions on the grid = `snake.tail[0].pos.x` and `snake.tail[0].pos.y` respectively. A JavaScript shortcut to get the x and y positions quickly would be `let {x, y} = snake.tail[0].pos;` since the values are extracted from the object and are injected into those variables (see [Object Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring)).

The `foods` variable has a property called `data`, which is another array of `Segment` instances, just like `snake.tail`. To iterate through all of the foods, you have multiple options. The most  straightforward option is to use a *for loop* (see [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)). Another way would be to use the `Array.forEach()` method which would work like this:
```
foods.data.forEach(food => {
  let {x, y} = food.pos;
  // your code here
});
```

This should be all of the relevant information you should need to explore this challenge. It is not mandatory to have a good AI, just one that works. Please, do not be discouraged if you cannot complete this task at the moment because it is a rather tough exercise. Honestly, just taking the time to think about tough problems is as much of a success as actually solving it. Consider checking out previous coding challenges before tackling this one if you are frustrated. Contact a Vaqcoders officer if you have any questions. Visit our [homepage](https://vaqcoders.github.io/website/) for other resources.
