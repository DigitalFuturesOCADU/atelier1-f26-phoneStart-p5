---
name: p5js-2x
description: Use whenever writing, editing, or reviewing a p5.js 2.x sketch, especially assets, pointer input, shapes, and phone-oriented creative coding.
---

# p5.js 2.x

This project uses p5.js 2.x. Models often generate p5.js 1.x patterns; avoid them.

## Required patterns

- For new asset loading, use `async function setup()` and `await loadImage()`, `await loadJSON()`, or other `load...()` calls. Do not default to `preload()`.
- Use `mousePressed()`, `mouseDragged()`, and `mouseReleased()` for pointer interaction. These work for mouse and touch.
- Use `splineVertex()` instead of `curveVertex()` for new custom spline shapes.
- Use normal JavaScript arrays and objects instead of removed p5 dictionary and array utilities.
- Be explicit with vectors: `createVector(x, y)` for 2D.

For phone hardware, load the `p5-phone` skill as well. It handles permission helpers; this skill governs the surrounding p5.js 2.x code.
