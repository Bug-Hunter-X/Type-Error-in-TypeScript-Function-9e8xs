function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  //Add error handling to check if the parsed values are valid numbers
  if(isNaN(numA) || isNaN(numB)){
    throw new Error("Invalid input: One or both parameters are not numbers");
  }
  return numA + numB;
}

let result = addSafe(10, "20"); //Fixed: uses a safer version of the add function
console.log(result); // Output: 30