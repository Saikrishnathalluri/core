// Create a function that accepts an array called ‘myarray’ as an
// argument, iterates through ‘myarray’, and returns a new array which
// contains all the even numbers in ‘myarray’.
// Sample input: [1,2,3,4,5,6,7,8]
// Sample output: [2,4,6,8] 
let myarray = [1, 2, 3, 4, 5, 6, 7, 8]

let evenarray = []

function evenNum(myarray) {
  for (let i = 0; i < myarray.length; i++) {
    if (myarray[i] % 2 == 0) {
      evenarray.push(myarray[i])
    }
  }
  console.log(evenarray)
  return evenarray
}

evenNum(myarray)

module.exports = create;
