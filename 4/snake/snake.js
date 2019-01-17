class Snake {

  constructor(pos, bounds) {
    this.score = 1;
    this.vel = {x: 0, y: 1};
    this.tail = [new Segment(pos)];
    this.bounds = bounds;
  }

  update() {
    this.tail.unshift(this.tail[0].copy());
    this.tail[0].move(this.vel);
    this.tail.pop();
  }

  render(w, h) {
    fill(0);
    for (let segment of this.tail) {
      const {x, y} = segment.pos;
      rect(x * w, y * h, w, h);
    }
  }

  changeDir(key) {
    if (this.vel.y != 1 && (key == "ArrowUp" || key == "w")) this.vel = {x: 0, y: -1};
    if (this.vel.x != 1 && (key == "ArrowLeft" || key == "a")) this.vel = {x: -1, y: 0};
    if (this.vel.y != -1 && (key == "ArrowDown" || key == "s")) this.vel = {x: 0, y: 1};
    if (this.vel.x != -1 && (key == "ArrowRight" || key == "d")) this.vel = {x: 1, y: 0};
  }

  eat() {
    this.tail.unshift(this.tail[0].copy());
    this.score++;
  }

  futureCollision(vel) {
    return this.checkIsDead({
      x: this.tail[0].pos.x + vel.x,
      y: this.tail[0].pos.y + vel.y
    });
  }

  checkIsDead(pos = this.tail[0].pos) {
    let dead = false;
    const {x, y} = pos;
    if (this.tail.length > 1) {
      for (let i = 1; i < this.tail.length; i++) {
      	const segment = this.tail[i];
      	if (segment.pos.x == x && segment.pos.y == y)
          return true;
    	}
    }
    if (x < 0 || x > this.bounds.x - 1 ||
        y < 0 || y > this.bounds.y - 1) return true;
    return false;
  }

  isInsideMe(food) {
    const x1 = food.pos.x, y1 = food.pos.y;
    for (let segment of this.tail) {
      const x2 = segment.pos.x, y2 = segment.pos.y;
      if (x1 == x2 && y1 == y2) return true;
    }
    return false;
  }

}

class Segment {

  constructor(pos) {
    this.pos = pos || {x: 0, y: 0};
  }

  move(vel) {
    this.pos.x += vel.x;
    this.pos.y += vel.y;
  }

  copy() {
    const {x, y} = this.pos;
    return new Segment({x, y});
  }

}

class Foods {

  constructor(bounds) {
    this.data = [];
    this.bounds = bounds;
  }

  spawn(n = 1, snake) {
    for (let i = 0; i < n; i++)
      this.data.push(this.createRandomFood(snake));
  }

  despawn(i) {
    this.data.splice(i, 1);
  }

  getData() {
    return this.data;
  }

  render(w, h) {
    fill(255, 0, 0);
    for (let segment of this.data) {
      const {x, y} = segment.pos;
      rect(x * w, y * h, w, h);
    }
  }

  createRandomFood(snake) {
    const genFood = () => {
      return new Segment({
        x: Math.floor(this.bounds.x * Math.random()),
        y: Math.floor(this.bounds.y * Math.random())
      });
    };
    let gimmeFood = genFood();
    while (snake.isInsideMe(gimmeFood))
      gimmeFood = genFood();
    return gimmeFood;
  }

}
