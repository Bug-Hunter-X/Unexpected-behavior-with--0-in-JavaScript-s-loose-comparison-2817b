# Unexpected -0 Behavior in JavaScript

This repository demonstrates a subtle bug in JavaScript related to the handling of `-0` and loose comparison (`==`).  The `bug.js` file contains a function that incorrectly handles `-0`, while `bugSolution.js` provides a corrected version.

## Bug Description

The original function intends to return `0` if either input (`a` or `b`) is `0`. However, it fails when one of the inputs is `-0` because `-0 == 0` evaluates to `true` in JavaScript's loose comparison.

## Solution

The solution uses strict equality (`===`) to differentiate between `0` and `-0`.  Strict equality does not perform type coercion, ensuring that `-0` and `0` are treated as distinct values.