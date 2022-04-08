function fibonacci(num) {
  // type your code here
  let res;
  if (num === 0)
    return 0;

  if (num === 1)
    return 1; 
  else {
    return res = fibonacci(num-2) + fibonacci(num-1);
    // console.log('n and n', num-2, num-1)
    // console.log('res', res)
  }
}

// or
// function fibonacci(num) {
//   // type your code here
//   let sum = -1;
//   let current = 1;
//   let previous = 0;

//   if (num === 0)
//   {  return 0; }

//   if (num === 1)
//   {  return 1; }

//     while(num >= 2) {
//       sum = current + previous;
//       previous = current;
//       current = sum;
//       --num;
//     }
//     return sum;
//   }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("---------");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("---------");
  console.log("Expecting: # 0, 1, 1, 2, 3, 5, 8.");
  console.log("=>", fibonacci(7));

  console.log("---------")

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
