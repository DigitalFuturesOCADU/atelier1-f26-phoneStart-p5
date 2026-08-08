---
name: p5-phone
description: Use when building or reviewing p5.js phone experiences with motion, touch, microphone, camera, GPS, NFC, BLE, vibration, torch, browser permissions, or p5-phone helpers.
---

# p5-phone

Use p5-phone for mobile browser hardware. It exposes helpers globally and pairs with p5.js globals.

## Required patterns

1. Call `lockGestures()` in `setup()`.
2. Request permissions from a user action with one `enable<Feature><Style>()` helper, such as `enableSensorTap('Tap to enable motion')`.
3. Only read hardware after the positive matching status flag is true, such as `window.sensorsEnabled` or `window.micEnabled`.
4. Serve phone hardware projects over HTTPS or `localhost`. A laptop's local URL does not make a phone visit secure.
5. Use `mousePressed()`, `mouseDragged()`, and `mouseReleased()` for pointer input in p5.js 2.x, not the legacy touch callbacks.

## Motion baseline

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
  lockGestures();
  enableSensorTap("Tap to enable motion sensors");
}

function draw() {
  background(20);
  if (!window.sensorsEnabled) return;
  circle(width / 2 + rotationY * 3, height / 2 + rotationX * 3, 60);
}
```

`rotationX`, `rotationY`, `rotationZ`, acceleration values, and `deviceMoved()` are p5.js globals. Do not create raw `DeviceOrientationEvent` listeners.

## Feature helpers

- Motion: `enableSensorTap()` then `window.sensorsEnabled`
- Microphone: `enableMicTap()` then `window.micEnabled`
- Camera: `enableCameraTap()` then `window.cameraEnabled`
- Location: `enableGeoTap()` then `window.geoEnabled`
- NFC: `enableNfcTap()` then `window.nfcEnabled`; Android Chrome + HTTPS only
- Vibration and torch: Android-focused; provide an alternative on iOS
- Combined permissions: `enablePermissionsTap(['sensors', 'mic'], message)`

Never ask for a permission automatically on page load. Provide a meaningful desktop and denied-permission fallback whenever feasible.
