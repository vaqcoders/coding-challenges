class Game {

  constructor(boundsX, boundsY, viewportX, viewportY, aiOn) {
    this.bounds = {
      x: boundsX,
      y: boundsY
    };
    this.viewport = {
      x: viewportX,
      y: viewportY
    };
    this.snake = new Snake({
      x: Math.floor(boundsX * 0.5),
      y: Math.floor(boundsY * 0.5)
    }, this.bounds);
    this.foods = new Foods(this.bounds);
    this.foods.spawn(10, this.snake);
    this.aiOn = aiOn;
    this.gameover = false;
  }

  step() {
    if (this.gameover) {
      console.log("game over");
    	return;
    }
    if (this.snake.checkIsDead())
      this.gameover = true;
    this.foods.data.forEach((food, i) => {
      const {x, y} = this.snake.tail[0].pos;
      if (food.pos.x == x && food.pos.y == y) {
        this.snake.eat();
        this.foods.despawn(i);
        this.foods.spawn(1, this.snake);
      }
    });
    this.snake.update();
  }

  render() {
    fill(255);
    const w = this.viewport.x / this.bounds.x,
          h = this.viewport.y / this.bounds.y;
    for (let y = 0; y < this.bounds.y; y++) {
      for (let x = 0; x < this.bounds.x; x++)
        rect(x * w, y * h, w, h);
    }
    this.foods.render(w, h);
    this.snake.render(w, h);
  }

  keyIn(k) {
    if (this.aiOn) {
      const closestFood = AI.locateNearestFood(this.snake, this.foods);
      //console.log(closestFood)
      this.snake.vel = AI.getOptimumVel(this.snake, closestFood);
    } else this.snake.changeDir(k);
  }

  changeViewport(w, h) {
    this.viewport = {x: w, y: h};
  }

}
