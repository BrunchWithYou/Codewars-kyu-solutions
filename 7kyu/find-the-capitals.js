// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// my solution

var capitals = function (word) {
	let answer = []
  word.split('').forEach((e,i)=>e===e.toUpperCase()?answer.push(i):'')
  return answer
};