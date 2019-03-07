function growingPlant(upSpeed, downSpeed, desiredHeight) {

  // Your solution here...

}

// Avoid editing this code below because
// it tests the accuracy of your solution.
(function test(fn) {
  const tests = [
    [[100, 10, 910], 10],
    [[10, 9, 4], 1],
    [[5, 2, 7], 2],
    [[6, 5, 10], 5]
  ];
  for (let [[us, ds, dh], output] of tests) {
    const result = fn(us, ds, dh);
    if (result != output) {
      console.log("Failure...");
      console.log(`Given upSpeed = ${us}, downSpeed = ${ds}, and desiredHeight = ${dh}, the expected answer is ${output}, while your answer was ${result}.`);
      return;
    }
  }
  console.log("CONGRATULATIONS!!! YOU HAVE CREATED A WORKING SOLUTION!!!");
})(growingPlant);
