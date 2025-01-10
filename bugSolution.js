function myFunc(a, b) {
  if (a === 0 || b === 0) {
    return 0; //This is still wrong, -0 will still pass
  }
  if (Object.is(a, 0) || Object.is(b, 0)) {
    return 0; // Correct way to handle both 0 and -0
  }
  // ... rest of the function
}