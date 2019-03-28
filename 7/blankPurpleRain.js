// HELPER CLASS
class Droplet {
  constructor(x, h) {
    this.x = x;
    this.y = 0;
    this.spd = Math.random() + 0.2;
    this.bound = h;
  }
  drop() {
    this.y += this.spd;
    this.y %= this.bound;
  }
  render() {
    // **************************************************
    // insert drawing functions here.
    // fill with purple color
    // hint: use bezier(); https://p5js.org/reference/#/p5/bezier
    // **************************************************
  }
}

// MAIN PROCESS
// Here I created an empty array of droplets and
// declared how many droplets there shall be.
const droplets = [],
      density = 100;

function setup() {
  createCanvas(400, 400);

  // Here I filled the array with droplet objects
  // at random x positions.
  for (let i = 0; i < density; i++)
    droplets.push(new Droplet(Math.random() * width, height));

}

function draw() {
  background(220);
  // Here I iterate through all of the droplets each frame to
  // make them drop and to render them.
  for (let droplet of droplets) {
    droplet.drop();
    droplet.render();
  }
}
