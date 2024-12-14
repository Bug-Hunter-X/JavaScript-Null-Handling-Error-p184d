function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined || a === 0 || b === 0) {
    return 0; // Handle null, undefined and zero values
  }

  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo(0, 2)); // Output: 0
console.log(foo(1, 0)); // Output: 0