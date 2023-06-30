

function decimalToBinary(decimal) {
  // Convert decimal to binary
  let binary = "";
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }

  // Return the binary representation
  return binary;
}

// Example usage
const decimalNumber = 42;
const binaryNumber = decimalToBinary(decimalNumber);
console.log(binaryNumber); // Output: 101010
