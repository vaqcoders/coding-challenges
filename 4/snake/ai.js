class AI {

  static locateNearestFood(snake, foods) {
    const x1 = snake.tail[0].pos.x,
          y1 = snake.tail[0].pos.y;
    let lowestValue = Infinity,
        nearestFood = foods.data[0];
    for (let food of foods.data) {
      const x2 = food.pos.x,
            y2 = food.pos.y;
      const d = Math.sqrt(
        Math.pow(x2 - x1, 2) +
        Math.pow(y2 - y1, 2)
      );
      if (d < lowestValue && d > 0) {
        lowestValue = d;
        nearestFood = food;
      }
    }
    return nearestFood;
  }

  static getOptimumVel(snake, segment) {
    const x1 = snake.tail[0].pos.x, y1 = snake.tail[0].pos.y;
    const x2 = segment.pos.x, y2 = segment.pos.y;
    const dx = x2 - x1, dy = y2 - y1;
    let vel_i = (Math.abs(dx) > Math.abs(dy)) ? 0 : 1;
    let vels = [
      {x: (dx > 0 ? 1 : -1), y: 0},
      {x: 0, y: (dy > 0 ? 1 : -1)}
    ];
    if (snake.futureCollision(vels[vel_i])) {
      vel_i = vel_i == 0 ? 1 : 0;
      if (snake.futureCollision(vels[vel_i])) {
        let vel_i = 0;
        let vels = [
          {x: (dx > 0 ? -1 : 1), y: 0},
          {x: 0, y: (dy > 0 ? -1 : 1)}
        ];
        if (snake.futureCollision(vels[vel_i]))
          vel_i = 1;
      }
    }
    return vels[vel_i];
  }

}
