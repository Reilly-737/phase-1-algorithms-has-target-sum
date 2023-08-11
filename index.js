function hasTargetSum(array, target) {
  let numSet = new Set();
  for(let i = 0; i < array.length; i++){ 
   if(numSet.has(target - array[i])){
    return true;
   }
   numSet.add(array[i]);
 }
 return false; 
}



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
