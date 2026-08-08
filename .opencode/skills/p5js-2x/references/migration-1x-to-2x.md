# p5.js 1.x to 2.x Quick Reference

| Older pattern               | p5.js 2.x pattern                             |
| --------------------------- | --------------------------------------------- |
| `preload()` + `loadImage()` | `async setup()` + `await loadImage()`         |
| `curveVertex()`             | `splineVertex()`                              |
| `touchStarted()`            | `mousePressed()` for unified pointer input    |
| `keyCode === UP_ARROW`      | `keyIsDown(UP_ARROW)` or `code === 'ArrowUp'` |
| p5 dictionary helpers       | Plain JavaScript object or `Map`              |
