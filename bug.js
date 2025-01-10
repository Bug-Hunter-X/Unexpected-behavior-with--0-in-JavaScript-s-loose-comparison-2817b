function myFunc(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This line causes unexpected behavior when a or b is -0
  }
  // ... rest of the function
}