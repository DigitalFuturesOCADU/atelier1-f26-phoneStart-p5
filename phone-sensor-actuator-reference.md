# The Phone as an Interaction Kit

Use this guide to treat a phone as a situated collection of inputs, outputs, and social conditions, not as a small laptop. It supports p5-phone and three-phone projects, from a first browser prototype through advanced physical and networked work.

This is not a menu of features to add. A strong first prototype usually uses one input, one output, one clear interaction relation, and a meaningful fallback.

## Start Here: From an Idea to a First Prototype

Before planning code, write five short decisions in `brief.md`.

1. **Situation:** Where is the phone, who is holding it, and what changes in their attention, body, or relation to another person?
2. **Public form:** How is the work shared, witnessed, passed, distributed, or made collective? The first prototype may be smaller, but name the future four-or-more-person encounter.
3. **Input:** What does the work notice? Choose one direct phone capability first.
4. **Output:** What changes in response: display, sound, vibration, light, another device, or another person?
5. **Fallback:** What remains possible on a laptop, without permission, or on a different phone platform?

Use this sentence frame:

```text
When [a person / environment / second device] does [input condition],
the phone changes [output] so that [intended experience].
If that input is unavailable, [fallback] still makes the experience meaningful.
```

Add one public-horizon sentence:

```text
In the larger four-or-more-person version, [roles / shared condition / handoff / common output].
```

Example:

```text
When a person slowly tilts the phone, a dense field of color drifts away
from level, making the screen feel like an unstable surface. If motion is
unavailable, dragging moves the field instead.
```

### Build an Interaction Loop

Avoid thinking only in the form `sensor -> effect`. An experimental interaction usually has a loop:

```text
invitation -> participant action or condition -> sensed value -> transformation
-> visible/audible/tactile response -> changed expectation -> next action
```

The invitation can be a permission button, a visual cue, an object in the room, another person, or a deliberate lack of instruction. The response can be continuous, event-like, delayed, ambiguous, resistant, or social. Decide what the participant is likely to notice and try next.

### Choose a Starting Material

Start with one of the first four pathways. Add another capability only after the first version works and has been tested.

| Pathway           | Input                                          | Output                     | Why start here                                                 | First prototype question                                                    |
| ----------------- | ---------------------------------------------- | -------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Touch surface     | Touch, drag, hold, two touches                 | Display                    | Works on every phone and desktop without a permission prompt   | Can the screen feel like a material surface rather than a button interface? |
| Held orientation  | Tilt or rotation                               | Display or sound           | Makes the hand and posture part of the work                    | Can the phone's angle become a condition rather than a controller?          |
| Listening surface | Microphone level or sound onset                | Display or generated sound | Makes the immediate environment part of the work               | What changes when a screen listens rather than waits to be touched?         |
| Camera lens       | Brightness, color, motion, or raw camera image | Display                    | Connects the screen to what is in front of or behind the phone | Can the phone act as a lens, witness, mirror, or light-sensitive object?    |

These pathways are sequenced deliberately. Touch is the safest first material. Motion adds permission and bodily orientation. Microphone and camera add privacy, environmental context, and a stronger need for real-device testing.

### Choose a Public Form

The first prototype can test one relation, but the project must have a public horizon. Do not treat the first prototype as a private solo app that is later copied onto several phones.

| Public form              | What a first prototype can test                         | What a four-or-more-person version can develop                                    |
| ------------------------ | ------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Shared device            | A handoff, group gesture, or temporary screen condition | Passing, turn-taking, coordinated holding, and residue from previous participants |
| Many phones, one space   | One participant's local behavior and its legibility     | Roles, synchronization, aggregation, contrast, and shared timing                  |
| Phone plus shared output | One phone's sensor-to-display or sound relation         | Group contribution to a projection, sound field, object, or installation          |
| Witnessed action         | What an observer can perceive when one person acts      | Interpretation, invitation, spectatorship, response, and collective consequence   |
| Distributed network      | A single shared value or event                          | Multiple devices, remote participants, shared state, and connection-loss behavior |

Public participation needs clear conditions. Explain when camera, microphone, location, or other data is used; give people a meaningful observer or alternate role; and design refusal as a valid condition rather than a failure.

### Save These for Later

| Material                          | Why it is later-stage                                                                    | Important condition                                                         |
| --------------------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Location and compass              | Accuracy, battery use, and site-specific testing change the work                         | HTTPS, permission, and meaningful non-location fallback                     |
| Machine-learning vision           | Adds model loading, inference delay, confidence, and consent concerns                    | Camera permission, performance testing, and visible failure state           |
| Networked interaction             | Introduces another person, server state, timing, and connection failure                  | A social protocol and a plan for connection loss                            |
| NFC, BLE, vibration, torch, WebXR | Platform support is uneven and some require additional hardware or a specialized browser | Treat Android Chrome or Bluefy as a project constraint, not an afterthought |

### Before Asking an Agent to Plan

Give the Planner a brief that names the interaction material. Ask for a single small slice, not an entire application.

```text
Read brief.md, this reference as needed, test-plan.md, and the current files.
Do not write code. Plan the smallest prototype that tests this relation:
[input] -> [transformation] -> [output], with [fallback].
State the permission flow, one real-phone test, and one assumption I need to decide.
```

The detailed catalogue below is evidence for the plan. It tells you what a browser can actually access, what data is direct or derived, what works on target devices, and what must be tested. Do not expect an agent or a code example to make a hardware capability available on an unsupported phone.

## Compatibility at a Glance

| Category             | Usually practical on iOS Safari and Android Chrome | Needs special care or has uneven support                                |
| -------------------- | -------------------------------------------------- | ----------------------------------------------------------------------- |
| Direct interaction   | Touch and display                                  | Multitouch gestures need a desktop alternative for mouse-only testing   |
| Held phone           | Motion and orientation after a user gesture        | Test orientation and permission flow on the actual device               |
| Audio                | Microphone and speaker after a user gesture        | Speech recognition varies by browser and language support               |
| Camera               | Front/rear camera after a user gesture             | Camera performance, framing, and light vary substantially               |
| Place                | Geolocation after a user gesture                   | Indoor accuracy may be poor; always test the intended site              |
| Android-focused      | NFC, vibration, torch, Web Bluetooth, WebXR        | Do not make these mandatory unless target phones and browsers are known |
| Networked / external | HTTP, WebSocket, BLE peripherals                   | Requires a server or external device plus a connection-loss behavior    |

## How to Read the Detailed Catalogue

- **Hardware** explains the physical component and its limitations.
- **First-order data** is what the browser provides directly: a touch coordinate, acceleration value, audio level, camera frame, location, or command.
- **Second-order data** is what the sketch or library derives: a shake, stillness, swipe, color match, threshold, gesture, route, or shared state.
- **Examples of use** are starting relations, not assignments to copy. Alter the situation, participant role, mapping, output, and fallback.
- **Platform** is part of the design. If a feature is Android-only, that can be a purposeful project boundary, but it must be stated in the brief and tested.

---

## Technical Catalogue

## 1. Framing

A phone is a microcontroller with a battery, a radio, a display, and a set of sensors and actuators, packaged for consumer use. The operating system and its applications restrict which hardware is exposed and how. A mobile browser exposes a subset of that hardware through web APIs. This document lists that subset and describes each component in the same terms used for a sensor on a development board: what the hardware is, what it measures or drives, the data it produces or accepts, and how that data is read or written from code.

Only hardware reachable from a mobile browser is included. Ambient light, proximity, barometric pressure, fingerprint, raw magnetometer readings and the second and third camera lenses on multi-lens phones are present in the hardware but are not exposed to web pages, and are omitted. Where a component is available on one platform only, the platform column records it.

Hardware that both senses and acts appears in both the Sensors and Actuators sections. The touchscreen senses contact and emits light. The Bluetooth radio receives and transmits. The network interface receives and transmits.

## 2. Data orders

Data from each component is divided into two orders.

**First-order data** is read directly from the hardware through the browser API without further computation. It is the raw measurement or the raw command: a coordinate, an acceleration, a loudness level, a video frame, a vibration duration. First-order data is classified as _continuous_ (a stream of numbers updated at the sensor rate or the frame rate) or _event_ (a discrete occurrence with no duration).

**Second-order data** is computed from first-order data. Computation includes thresholds that convert a stream into an event, time windows that convert a stream into an average, peak or duration, geometry between two or more values, sensor fusion that combines two sensors into one value, and inference by a machine learning model. Second-order data is where most interactions are defined. Some second-order values are supplied by the libraries; the remainder are computed in the sketch. The API column states which.

For actuators, first-order data is the direct command the hardware accepts. Second-order data is a behaviour composed from those commands over time or from a sensor value.

## 3. Access, Permission, and Testing

Powerful browser capabilities such as motion, microphone, camera, location, NFC, BLE, torch, and WebXR need a secure context: HTTPS on a phone or `localhost` on the same device. A laptop's `localhost` does not make a phone visit secure. Touch and basic display work without these permissions, but projects should still be served from a local server or deployed URL while testing.

Both libraries use one permission model: `enable<Feature><Style>()`, where Feature is `Sensor`, `Gyro`, `Mic`, `Sound`, `Speech`, `Camera`, `Nfc`, `Geo`, `Ble`, `Vibration`, `Torch`, `AR`, `XR`, `Hardware` or `All`, and Style is `Tap`, `Button`, `Canvas`, `Banner` or `On`. The call requests access from a user gesture and sets a status flag such as `sensorsEnabled` or `micEnabled` to `true` when access is granted. iOS requires the gesture for motion sensors and audio output. Android may read motion sensors without a prompt but still requires a gesture for audio output. `lockGestures()` disables browser zoom, pull to refresh, and back swipe so the page receives all touch input. `showDebug()` prints an on-screen console.

Plan permission as part of the participant journey. Name why the work asks for access, let a person decline, and make the unavailable state legible rather than treating it as an error.

Sensor update rates are set by the operating system and are not adjustable from the browser. Motion sensors report at approximately 60 Hz. The microphone and cameras report at the audio sample rate and the video frame rate respectively. Values are read once per frame in the sketch's draw loop, so the effective rate is the frame rate, typically 60 Hz.

## Catalogue Map

| Section | Component                       | Senses       | Acts | iOS        | Android |
| ------- | ------------------------------- | ------------ | ---- | ---------- | ------- |
| 4, 15   | Touchscreen                     | yes          | yes  | yes        | yes     |
| 5       | Accelerometer                   | yes          |      | yes        | yes     |
| 6       | Gyroscope                       | yes          |      | yes        | yes     |
| 7       | Magnetometer                    | heading only |      | yes        | yes     |
| 8       | Microphone                      | yes          |      | yes        | yes     |
| 9       | Camera, raw image               | yes          |      | yes        | yes     |
| 10      | Camera, machine learning models | yes          |      | yes        | yes     |
| 11      | NFC reader                      | yes          |      |            | Chrome  |
| 12      | GPS                             | yes          |      | yes        | yes     |
| 13, 19  | Bluetooth Low Energy radio      | yes          | yes  | Bluefy app | Chrome  |
| 14, 20  | Network                         | yes          | yes  | yes        | yes     |
| 16      | Speaker                         |              | yes  | yes        | yes     |
| 17      | Vibration motor                 |              | yes  |            | yes     |
| 18      | Torch                           |              | yes  |            | Chrome  |

---

# Sensors

## 4. Touchscreen

**Hardware.** A capacitive grid laminated to the display glass. Contact with a conductive object, usually a finger, changes the capacitance at grid intersections. The controller resolves each contact to a coordinate and tracks up to ten contacts simultaneously. Contact through thin non-conductive material such as paper or fabric is detected if the material is thin enough for the finger's capacitance to reach the grid. Gloves, pen caps and dry fabric block detection. Pressure is not reported in the browser.

### First-order data

| Value                   | Type       | Range and units                                 | p5-phone                                           | three-phone           | Platform     |
| ----------------------- | ---------- | ----------------------------------------------- | -------------------------------------------------- | --------------------- | ------------ |
| Touch position          | Continuous | x, y in canvas pixels                           | `mouseX`, `mouseY`, `touches[i].x`, `touches[i].y` | same                  | iOS, Android |
| Previous touch position | Continuous | x, y in canvas pixels, previous frame           | `pmouseX`, `pmouseY`                               | same                  | iOS, Android |
| Touch count             | Continuous | 0 to 10                                         | `touches.length`                                   | same                  | iOS, Android |
| Touch identifier        | Continuous | integer, stable for the duration of one contact | `touches[i].id`                                    | same                  | iOS, Android |
| Touch start             | Event      | none                                            | `mousePressed()`                                   | `touchStarted(event)` | iOS, Android |
| Touch move              | Event      | none                                            | `mouseDragged()`                                   | `touchMoved(event)`   | iOS, Android |
| Touch end               | Event      | none                                            | `mouseReleased()`                                  | `touchEnded(event)`   | iOS, Android |
| Pressed state           | Continuous | true or false                                   | `mouseIsPressed`                                   | `touches.length > 0`  | iOS, Android |

### Second-order data

| Value                        | Type       | Range and units                                          | p5-phone                                  | three-phone                       | Platform     |
| ---------------------------- | ---------- | -------------------------------------------------------- | ----------------------------------------- | --------------------------------- | ------------ |
| Touch in zone                | Event      | true or false for a defined rectangle or circle          | comparison on position in sketch          | same                              | iOS, Android |
| Zone index                   | Continuous | integer, which of several zones contains the touch       | integer division of position in sketch    | same                              | iOS, Android |
| Drag velocity                | Continuous | pixels per frame on each axis                            | `mouseX - pmouseX`, `mouseY - pmouseY`    | same                              | iOS, Android |
| Drag speed                   | Continuous | pixels per frame, magnitude                              | `dist(mouseX, mouseY, pmouseX, pmouseY)`  | same                              | iOS, Android |
| Drag direction               | Continuous | radians                                                  | `atan2()` on the velocity                 | same                              | iOS, Android |
| Swipe                        | Event      | direction when drag speed exceeds a threshold at release | comparison in `mouseReleased()`           | same                              | iOS, Android |
| Tap                          | Event      | press and release within a short time and distance       | timer in sketch                           | same                              | iOS, Android |
| Double tap                   | Event      | two taps within an interval                              | timer in sketch                           | same                              | iOS, Android |
| Hold                         | Event      | press longer than a duration without moving              | timer in sketch                           | same                              | iOS, Android |
| Hold duration                | Continuous | milliseconds since press                                 | `millis()` difference in sketch           | same                              | iOS, Android |
| Distance between two touches | Continuous | pixels                                                   | `dist()` on `touches[0]` and `touches[1]` | same computation                  | iOS, Android |
| Angle between two touches    | Continuous | radians                                                  | `atan2()` on the touch delta              | same computation                  | iOS, Android |
| Centroid of touches          | Continuous | x, y in pixels, mean of all touch positions              | mean in sketch                            | same                              | iOS, Android |
| Pinch scale                  | Continuous | ratio of current to initial two-touch distance           | stored at second touch start in sketch    | same                              | iOS, Android |
| Rotation gesture             | Continuous | change in angle between two touches, radians             | difference from initial angle in sketch   | same                              | iOS, Android |
| Path                         | Continuous | array of positions during one drag                       | accumulated in `mouseDragged()`           | same                              | iOS, Android |
| Path length                  | Continuous | pixels, sum of segment lengths                           | accumulated in sketch                     | same                              | iOS, Android |
| 3D object under touch        | Derived    | object reference or null                                 | not applicable                            | `getTouchRaycaster(x, y, camera)` | iOS, Android |
| Screen point in world space  | Derived    | 3D coordinates at a given depth                          | not applicable                            | `screenToWorld(x, y, camera, z)`  | iOS, Android |

### Examples of use

Example 4.1. The canvas is divided into a grid of six rectangles. On each touch start, the zone index is computed from the touch position. Each index is assigned a sound file, which is played. A paper mask with six cut-outs is placed over the screen so that the zones are visible and touch is confined to them. (Touch Zones)

Example 4.2. Two touches are held on the screen. The distance between them is computed each frame and mapped from a range of 50 to 400 pixels to a circle diameter of 10 to 300 pixels. The angle between them is mapped to a hue. (Touch Distance, Touch Angle)

Example 4.3. The number of active touches is read each frame and used as an integer input. One touch plays a tone; two touches play a chord; three touches stop playback. (Touch Count)

Example 4.4. A single touch start toggles a Boolean variable. The variable controls whether the flashlight is on. This is the minimal case of a touch acting as a switch for an actuator. (Torch Touch Toggle)

Example 4.5. In three-phone, a touch start casts a ray from the touch position into the scene. If the ray intersects an object, that object is selected and its colour is changed.

## 5. Accelerometer

**Hardware.** A three-axis micro-electromechanical (MEMS) sensor. A proof mass is suspended on silicon springs; its displacement under acceleration changes a capacitance, which is converted to a value on each axis. The sensor measures proper acceleration, which includes gravity. A phone at rest reports approximately 9.8 m/s² on the axis pointing up. Typical range is ±2 g to ±16 g depending on the part; the browser reports in m/s² and does not expose the range setting. The axes are fixed to the phone body: X across the short side, Y along the long side, Z out of the screen.

### First-order data

| Value                 | Type       | Range and units                                | p5-phone                                             | three-phone | Platform                  |
| --------------------- | ---------- | ---------------------------------------------- | ---------------------------------------------------- | ----------- | ------------------------- |
| Acceleration X        | Continuous | approximately -20 to 20 m/s², includes gravity | `accelerationX`                                      | same        | iOS (permission), Android |
| Acceleration Y        | Continuous | approximately -20 to 20 m/s²                   | `accelerationY`                                      | same        | iOS (permission), Android |
| Acceleration Z        | Continuous | approximately -20 to 20 m/s²                   | `accelerationZ`                                      | same        | iOS (permission), Android |
| Previous acceleration | Continuous | same units, previous frame                     | `pAccelerationX`, `pAccelerationY`, `pAccelerationZ` | same        | iOS, Android              |
| Sensor enabled        | Continuous | true or false                                  | `sensorsEnabled`                                     | same        | iOS, Android              |

### Second-order data

| Value               | Type       | Range and units                                                  | p5-phone                                     | three-phone | Platform     |
| ------------------- | ---------- | ---------------------------------------------------------------- | -------------------------------------------- | ----------- | ------------ |
| Device moved        | Event      | fires when the per-frame change exceeds the move threshold       | `deviceMoved()`, `setMoveThreshold(value)`   | same        | iOS, Android |
| Device shaken       | Event      | fires when the per-frame change exceeds the shake threshold      | `deviceShaken()`, `setShakeThreshold(value)` | same        | iOS, Android |
| Change per axis     | Continuous | m/s², current minus previous                                     | `accelerationX - pAccelerationX`             | same        | iOS, Android |
| Movement magnitude  | Continuous | m/s², vector length of the change on three axes                  | computed in sketch                           | same        | iOS, Android |
| Total magnitude     | Continuous | m/s², vector length of the three axes; approximately 9.8 at rest | computed in sketch                           | same        | iOS, Android |
| Gravity direction   | Continuous | unit vector, low-pass filtered acceleration                      | `lerp()` per axis in sketch                  | same        | iOS, Android |
| Linear acceleration | Continuous | m/s², acceleration minus gravity estimate                        | subtraction in sketch                        | same        | iOS, Android |
| Dominant axis       | Derived    | x, y or z                                                        | comparison of absolute values                | same        | iOS, Android |
| Impact              | Event      | magnitude exceeds a high threshold within one frame              | comparison in sketch                         | same        | iOS, Android |
| Free fall           | Event      | total magnitude near zero for several frames                     | comparison in sketch                         | same        | iOS, Android |
| Stillness           | Event      | movement magnitude below a threshold for a set duration          | timer in sketch                              | same        | iOS, Android |
| Step                | Event      | periodic peak in magnitude within a walking frequency band       | peak detection in sketch                     | same        | iOS, Android |
| Shake count         | Continuous | integer                                                          | counter in `deviceShaken()`                  | same        | iOS, Android |
| Shake rate          | Continuous | shakes per second over a window                                  | timestamps in sketch                         | same        | iOS, Android |
| Peak magnitude      | Continuous | m/s², maximum over a window, decaying                            | comparison and decay in sketch               | same        | iOS, Android |
| Smoothed magnitude  | Continuous | m/s², averaged over frames                                       | `lerp()` in sketch                           | same        | iOS, Android |

### Examples of use

Example 5.1. The three axes are read each frame. Each axis is mapped from -10 to 10 m/s² to a bar length. Three bars are drawn. (Acceleration)

Example 5.2. `setShakeThreshold(30)` is called in setup. `deviceShaken()` increments a counter and plays a sound. The counter is displayed. (Device Shaken)

Example 5.3. Movement magnitude is computed each frame and stored in a global variable. The variable scales the number of particles emitted. When `deviceShaken()` fires, `vibrate(100)` is called. The same measurement drives a continuous output and an event output. (Shake Spark Vibration)

Example 5.4. The phone is taped inside a ball. The ball is rolled across a table. Total magnitude rises during the roll and on each impact with the table edge. Impacts above a threshold trigger a sample.

Example 5.5. The phone is placed face up on a table. Stillness is detected when movement magnitude stays below 0.2 m/s² for two seconds. Stillness starts a slow animation; any movement stops it.

## 6. Gyroscope

**Hardware.** A three-axis MEMS sensor. A vibrating structure experiences a Coriolis force when the phone rotates; the force is measured and converted to angular velocity on each axis. The gyroscope reports rate, not angle. Angle is obtained by integrating rate over time, which drifts, so the operating system fuses gyroscope and accelerometer data to produce a stable orientation. The browser exposes the raw rates and the fused orientation angles; the fusion itself is not adjustable.

### First-order data

| Value               | Type       | Range and units             | p5-phone            | three-phone | Platform                  |
| ------------------- | ---------- | --------------------------- | ------------------- | ----------- | ------------------------- |
| Rotation rate alpha | Continuous | degrees per second around Z | `rotationRateAlpha` | same        | iOS (permission), Android |
| Rotation rate beta  | Continuous | degrees per second around X | `rotationRateBeta`  | same        | iOS (permission), Android |
| Rotation rate gamma | Continuous | degrees per second around Y | `rotationRateGamma` | same        | iOS (permission), Android |

### Second-order data

| Value                                     | Type       | Range and units                                  | p5-phone                                 | three-phone                                                                                | Platform     |
| ----------------------------------------- | ---------- | ------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------------------------------------ | ------------ |
| Rotation X, tilt forward and back         | Continuous | -180 to 180 degrees, fused with accelerometer    | `rotationX`                              | same                                                                                       | iOS, Android |
| Rotation Y, tilt left and right           | Continuous | -90 to 90 degrees                                | `rotationY`                              | same                                                                                       | iOS, Android |
| Rotation Z, twist about the screen normal | Continuous | 0 to 360 degrees                                 | `rotationZ`                              | same                                                                                       | iOS, Android |
| Previous rotation                         | Continuous | same units, previous frame                       | `pRotationX`, `pRotationY`, `pRotationZ` | same                                                                                       | iOS, Android |
| Rotation change per axis                  | Continuous | degrees per frame                                | `rotationX - pRotationX`                 | same                                                                                       | iOS, Android |
| Screen orientation                        | Event      | `portrait` or `landscape`                        | `deviceOrientation`                      | same                                                                                       | iOS, Android |
| Angle in band                             | Event      | true when an axis is between two angles          | comparison in sketch                     | same                                                                                       | iOS, Android |
| Face up                                   | Event      | rotation X near 0 and rotation Y near 0          | comparison in sketch                     | same                                                                                       | iOS, Android |
| Face down                                 | Event      | rotation X near 180                              | comparison in sketch                     | same                                                                                       | iOS, Android |
| Upright                                   | Event      | rotation X near 90                               | comparison in sketch                     | same                                                                                       | iOS, Android |
| Level                                     | Event      | absolute rotation X and Y below a tolerance      | comparison in sketch                     | same                                                                                       | iOS, Android |
| Tilt magnitude                            | Continuous | degrees, distance from level                     | `dist(0, 0, rotationX, rotationY)`       | same                                                                                       | iOS, Android |
| Tilt direction                            | Continuous | radians, direction of tilt from level            | `atan2(rotationY, rotationX)`            | same                                                                                       | iOS, Android |
| Spin rate                                 | Continuous | degrees per second, magnitude of the three rates | computed in sketch                       | same                                                                                       | iOS, Android |
| Spinning                                  | Event      | spin rate above a threshold                      | comparison in sketch                     | same                                                                                       | iOS, Android |
| Full rotation                             | Event      | rotation Z has passed through 360 degrees        | wrap detection in sketch                 | same                                                                                       | iOS, Android |
| Rotation count                            | Continuous | integer, full rotations                          | counter in sketch                        | same                                                                                       | iOS, Android |
| Smoothed rotation                         | Continuous | degrees, averaged over frames                    | `lerp()` in sketch                       | same                                                                                       | iOS, Android |
| Zeroed rotation                           | Continuous | degrees relative to a stored reference           | subtraction from a value stored on tap   | same                                                                                       | iOS, Android |
| Device rotation as transform              | Derived    | quaternion or Euler                              | not applicable                           | `getRotationQuaternion()`, `getRotationEuler()`, `applyDeviceRotation(object, { smooth })` | iOS, Android |

### Examples of use

Example 6.1. Rotation X, Y and Z are read each frame and mapped to red, green and blue channels of the background. (Orientation)

Example 6.2. Rotation Y is mapped from -45 to 45 degrees to the radius of an orbit. Rotation X is mapped to the orbital speed. A shape is drawn at the orbit position. The phone is tilted in the hand or rested on a tilted surface to set the values. (Tilt Material Orbit)

Example 6.3. Rotation X is mapped to oscillator frequency in the range 200 to 800 Hz. Rotation Y is mapped to amplitude from 0 to 0.5. (Motion Synth)

Example 6.4. Spin rate is computed from the three rotation rates. When spin rate exceeds 300 degrees per second, a sample is triggered. The phone is suspended on a string and twisted. (Rotational Velocity)

Example 6.5. Rotation Y is mapped to the frame index and frame direction of a GIF. Tilting left plays backward; tilting right plays forward; the angle sets the speed. (Phone and GIF Roll)

Example 6.6. In three-phone, `applyDeviceRotation(camera, { smooth: 0.1 })` is called each frame. The virtual camera rotates with the phone, so the user looks around a 3D scene by turning the phone.

## 7. Magnetometer

**Hardware.** A three-axis magnetic sensor, usually Hall effect or magnetoresistive, measuring the ambient magnetic field in microtesla. The primary use is compass heading. Raw field values are not exposed to the browser. The magnetometer contributes to the absolute orientation event, which supplies a heading relative to magnetic north. Ferrous objects, electronics and building steel distort the field; indoor accuracy can be off by tens of degrees.

### First-order data

Not exposed.

### Second-order data

| Value                    | Type       | Range and units                                         | p5-phone                                                                                                | three-phone | Platform     |
| ------------------------ | ---------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ----------- | ------------ |
| Compass heading          | Continuous | 0 to 360 degrees from magnetic north                    | `webkitCompassHeading` (iOS) or `alpha` with `absolute` true (Android) on the `deviceorientation` event | same        | iOS, Android |
| Heading accuracy         | Continuous | degrees, iOS only                                       | `webkitCompassAccuracy`                                                                                 | same        | iOS          |
| Heading change per frame | Continuous | degrees                                                 | difference in sketch                                                                                    | same        | iOS, Android |
| Facing a direction       | Event      | true when heading is within a band                      | comparison in sketch                                                                                    | same        | iOS, Android |
| Bearing to a point       | Continuous | degrees, from GPS position to a target                  | computed from two positions in sketch                                                                   | same        | iOS, Android |
| Pointing at a target     | Event      | heading within a tolerance of the bearing to the target | comparison in sketch                                                                                    | same        | iOS, Android |
| Smoothed heading         | Continuous | degrees, with wraparound handled                        | circular mean in sketch                                                                                 | same        | iOS, Android |

### Examples of use

Example 7.1. Heading is read from the orientation event. A panorama image is offset horizontally by heading mapped to image width. Turning the phone scrolls the image.

Example 7.2. Four sound files are assigned to north, east, south and west. Heading is divided into four 90 degree bands. The file for the current band is played; the others are silenced.

Example 7.3. Heading and GPS position are combined. The bearing from the current position to a fixed target is computed. When heading is within 10 degrees of the bearing, the phone vibrates. The user finds the target by rotating until the phone vibrates.

## 8. Microphone

**Hardware.** One or more MEMS microphones. A diaphragm moves with air pressure changes; the movement is converted to a voltage and sampled at 44.1 or 48 kHz. The browser supplies the audio stream. Loudness is computed by the library as a root mean square of the samples in a short window. The spectrum is computed by a fast Fourier transform. Phones apply automatic gain control and noise suppression by default, which alters level readings; these can be requested off through stream constraints but are not always honoured.

### First-order data

| Value        | Type       | Range and units                         | p5-phone                                                      | three-phone                                                  | Platform                  |
| ------------ | ---------- | --------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------- |
| Audio stream | Continuous | `MediaStream` at the device sample rate | `mic = new p5.AudioIn()` after `enableMicTap()`, `mic.stream` | `getMicStream()`, `getAudioContext()` after `enableMicTap()` | iOS, Android (permission) |
| Level        | Continuous | 0 to 1, RMS over a short window         | `mic.getLevel()`                                              | `getMicLevel()`, `micLevel`                                  | iOS, Android              |
| Spectrum     | Continuous | array of 0 to 255 per frequency band    | `fft = new p5.FFT()`, `fft.setInput(mic)`, `fft.analyze()`    | `AnalyserNode` on `getMicStream()`                           | iOS, Android              |
| Waveform     | Continuous | array of -1 to 1 samples                | `fft.waveform()`                                              | `AnalyserNode.getFloatTimeDomainData()`                      | iOS, Android              |
| Mic enabled  | Continuous | true or false                           | `micEnabled`                                                  | same                                                         | iOS, Android              |

### Second-order data

| Value                 | Type       | Range and units                               | p5-phone                                                             | three-phone             | Platform            |
| --------------------- | ---------- | --------------------------------------------- | -------------------------------------------------------------------- | ----------------------- | ------------------- |
| Level above threshold | Event      | fires when level crosses a value upward       | comparison in sketch                                                 | same                    | iOS, Android        |
| Level below threshold | Event      | fires when level crosses a value downward     | comparison in sketch                                                 | same                    | iOS, Android        |
| Silence               | Event      | level below a value for a set duration        | timer in sketch                                                      | same                    | iOS, Android        |
| Sustained sound       | Event      | level above a value for a set duration        | timer in sketch                                                      | same                    | iOS, Android        |
| Onset                 | Event      | level rises by more than a delta in one frame | difference in sketch                                                 | same                    | iOS, Android        |
| Onset count           | Continuous | integer                                       | counter in sketch                                                    | same                    | iOS, Android        |
| Onset rate            | Continuous | onsets per second                             | timestamps in sketch                                                 | same                    | iOS, Android        |
| Smoothed level        | Continuous | 0 to 1, averaged over frames                  | `lerp()` in sketch                                                   | same                    | iOS, Android        |
| Peak level            | Continuous | 0 to 1, maximum over a window, decaying       | comparison and decay in sketch                                       | same                    | iOS, Android        |
| Level in decibels     | Continuous | approximately -60 to 0 dB                     | `20 * log10(level)` in sketch                                        | same                    | iOS, Android        |
| Band energy           | Continuous | 0 to 255 for a named or numeric band          | `fft.getEnergy('bass')`, `fft.getEnergy(low, high)`                  | sum over analyser bins  | iOS, Android        |
| Spectral centroid     | Continuous | hertz, brightness of the sound                | `fft.getCentroid()`                                                  | weighted mean over bins | iOS, Android        |
| Dominant frequency    | Continuous | hertz, bin with the highest energy            | index of maximum in `fft.analyze()`                                  | same                    | iOS, Android        |
| Pitch estimate        | Continuous | hertz                                         | dominant frequency or an autocorrelation routine                     | same                    | iOS, Android        |
| Pitch in band         | Event      | true when pitch is within a range             | comparison in sketch                                                 | same                    | iOS, Android        |
| Speech to text        | Event      | string, interim and final                     | `enableSpeechTap()` then a Web Speech API `SpeechRecognition` object | same                    | Android; iOS varies |
| Keyword match         | Event      | true when transcript contains a word          | string comparison in sketch                                          | same                    | Android; iOS varies |
| Word count            | Continuous | integer                                       | split on transcript in sketch                                        | same                    | Android; iOS varies |
| Speech confidence     | Continuous | 0 to 1                                        | `result.confidence`                                                  | same                    | Android; iOS varies |

### Examples of use

Example 8.1. Level is read each frame and mapped from 0 to 0.3 to a circle diameter from 10 to 400 pixels. (Microphone Level)

Example 8.2. Smoothed level is computed with `lerp(smoothed, level, 0.1)`. Smoothed level sets the size of a bloom shape and the number of particles emitted per frame. Silence is detected when smoothed level stays below 0.02 for one second, and the bloom closes. Blowing on the microphone opens the bloom; stopping closes it. (Breath Bloom)

Example 8.3. An onset is detected when level rises by more than 0.1 in one frame. Each onset advances a slideshow by one image. Clapping controls the slideshow.

Example 8.4. Band energy for bass and treble are read from the FFT. Bass energy sets the background brightness; treble energy sets the density of a line pattern. A speaker placed next to the phone drives the visual.

Example 8.5. A `SpeechRecognition` object is started after `enableSpeechTap()`. The final transcript is compared against the words "red", "green" and "blue". A match sets the fill colour. (Speech Recognition)

Example 8.6. The microphone is covered with a layer of felt. Level readings drop by a measured amount. The threshold for the onset event is lowered to compensate, and the felt-covered phone responds to touch on the felt as a soft percussive input.

## 9. Camera, raw image

**Hardware.** Two image sensors: a front sensor facing the user and a rear sensor facing away. Each is a CMOS array behind a fixed lens; the rear sensor is larger, higher resolution, and has autofocus. Phones with several rear lenses expose only one to the browser. The sensor delivers video at 30 fps at a resolution set by the library's mode parameter (`cover`, `contain`, or explicit dimensions). The front feed is mirrored by default so that it behaves as a mirror; the rear feed is not. Exposure and white balance are automatic and not controllable from the browser, so absolute colour and brightness values drift with the scene. Raw camera data is a stream of pixel arrays. Everything in this section is computed from pixels directly; model-based values are in Section 10.

### First-order data

| Value              | Type       | Range and units                  | p5-phone                                                                            | three-phone                                                 | Platform                  |
| ------------------ | ---------- | -------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------- |
| Video frame, front | Continuous | image, mirrored                  | `cam = createPhoneCamera('user', true, mode)` then `enableCameraTap()`, `cam.video` | `createPhoneCamera('user', true, mode)`, `cam.getTexture()` | iOS, Android (permission) |
| Video frame, rear  | Continuous | image, not mirrored              | `createPhoneCamera('environment', false, mode)`                                     | `createPhoneCamera('environment', false, 'cover')`          | iOS, Android (permission) |
| Pixel colour       | Continuous | r, g, b 0 to 255 at a coordinate | `cam.video.get(x, y)`                                                               | read from texture                                           | iOS, Android              |
| Pixel array        | Continuous | r, g, b, a per pixel, row major  | `cam.video.loadPixels()`, `cam.video.pixels`                                        | `readRenderTargetPixels()` or canvas readback               | iOS, Android              |
| Frame dimensions   | Continuous | pixels and scale factors         | `cam.getDimensions()`                                                               | same                                                        | iOS, Android              |
| Facing             | Setting    | `user` or `environment`          | first argument of `createPhoneCamera()`                                             | same                                                        | iOS, Android              |
| Mirror             | Setting    | true or false                    | second argument of `createPhoneCamera()`                                            | same                                                        | iOS, Android              |
| Camera ready       | Event      | none                             | `cam.onReady(callback)`                                                             | same                                                        | iOS, Android              |
| Camera enabled     | Continuous | true or false                    | `cameraEnabled`                                                                     | same                                                        | iOS, Android              |
| Camera stop        | Event      | releases the sensor              | `cam.stop()`                                                                        | same                                                        | iOS, Android              |

### Second-order data

| Value                      | Type       | Range and units                                            | p5-phone                                                 | three-phone                                                                           | Platform             |
| -------------------------- | ---------- | ---------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------- | -------------------- |
| Average colour in region   | Continuous | r, g, b 0 to 255                                           | mean of pixels in sketch                                 | same                                                                                  | iOS, Android         |
| Average brightness         | Continuous | 0 to 255, mean luminance                                   | computed in sketch                                       | same                                                                                  | iOS, Android         |
| Dark, bright               | Event      | brightness below or above a threshold                      | comparison in sketch                                     | same                                                                                  | iOS, Android         |
| Dominant hue               | Continuous | 0 to 360 degrees                                           | histogram of hue in sketch                               | same                                                                                  | iOS, Android         |
| Colour distance to target  | Continuous | 0 to 441, Euclidean in RGB                                 | computed in sketch                                       | same                                                                                  | iOS, Android         |
| Colour match               | Event      | colour distance below a tolerance                          | comparison in sketch                                     | same                                                                                  | iOS, Android         |
| Colour blob position       | Continuous | x, y, centroid of pixels within tolerance of a colour      | computed in sketch                                       | same                                                                                  | iOS, Android         |
| Colour blob size           | Continuous | pixel count                                                | computed in sketch                                       | same                                                                                  | iOS, Android         |
| Colour blob present        | Event      | blob size above threshold                                  | comparison in sketch                                     | same                                                                                  | iOS, Android         |
| Frame difference           | Continuous | 0 to 255, mean absolute difference from the previous frame | stored frame in sketch                                   | same                                                                                  | iOS, Android         |
| Motion present             | Event      | frame difference above a threshold                         | comparison in sketch                                     | same                                                                                  | iOS, Android         |
| Motion location            | Continuous | x, y, centroid of changed pixels                           | computed in sketch                                       | same                                                                                  | iOS, Android         |
| Motion amount by region    | Continuous | frame difference per grid cell                             | computed in sketch                                       | same                                                                                  | iOS, Android         |
| Brightness by region       | Continuous | luminance per grid cell                                    | computed in sketch                                       | same                                                                                  | iOS, Android         |
| Edge density               | Continuous | 0 to 1, proportion of high-gradient pixels                 | computed in sketch                                       | same                                                                                  | iOS, Android         |
| Column or row profile      | Continuous | array of brightness per column or row                      | computed in sketch                                       | same                                                                                  | iOS, Android         |
| Occlusion                  | Event      | brightness falls to near zero, lens covered                | comparison in sketch                                     | same                                                                                  | iOS, Android         |
| Flicker                    | Continuous | brightness change rate over a window                       | computed in sketch                                       | same                                                                                  | iOS, Android         |
| Time lapse frame           | Event      | frame stored on an interval                                | `cam.video.get()` on a timer                             | same                                                                                  | iOS, Android         |
| Snapshot                   | Event      | frame stored on an event                                   | `cam.video.get()` in a callback                          | same                                                                                  | iOS, Android         |
| QR or barcode content      | Event      | string                                                     | `BarcodeDetector` where supported, or a decoding library | same                                                                                  | Android; iOS partial |
| Camera as scene background | Continuous | texture                                                    | not applicable                                           | `cam.attachBackground(scene)`, `cam.updateBackground()`, `cam.createBackgroundMesh()` | iOS, Android         |
| Camera as material         | Continuous | texture on a mesh                                          | `texture(cam.video)` in WEBGL                            | `cam.getTexture()` on a material                                                      | iOS, Android         |
| AR magic window            | Derived    | camera feed plus device rotation on the virtual camera     | not applicable                                           | `enableARTap()`, `applyDeviceRotation(camera, { smooth })`, `arEnabled`               | iOS, Android         |
| Surface hit pose           | Derived    | position and quaternion of a detected real surface         | not applicable                                           | `setPhoneCanvas(renderer)`, `enableXRTap()`, `getXRHitPose(frame)`                    | Android Chrome only  |
| XR session state           | Continuous | true or false                                              | not applicable                                           | `xrActive`, `xrEnabled`, `isXRSupported()`                                            | Android Chrome only  |

### Examples of use

Example 9.1. A square is drawn at the centre of the rear camera view. The average colour inside the square is computed each frame. A tap stores the current average as a target. Thereafter, colour distance to the target is computed; when it is below 40, a match is reported. Pointing the phone at a red card, then at other objects, reports a match only on red objects. (Camera Color Tracking)

Example 9.2. Average brightness of the rear camera is computed. The phone is placed inside a box with a lid. Opening the lid raises brightness above 60 and triggers a sound. Closing it drops brightness and stops the sound.

Example 9.3. The front camera frame is compared to the previous frame. Frame difference is mapped from 0 to 30 to a circle diameter. The circle grows when the user moves and shrinks when still.

Example 9.4. The front camera view is divided into a 4 by 4 grid. Brightness per cell is computed. The cells are drawn as a 16-pixel image on the display, mapping the room to a low resolution light sensor array.

Example 9.5. Rear camera occlusion is detected when brightness falls below 10. The phone is placed lens down on a table. Lifting the phone raises brightness and starts playback; setting it down stops it.

Example 9.6. In three-phone, the rear camera is attached as the scene background. `applyDeviceRotation(camera)` is called each frame. A 3D object placed at a fixed position in the scene appears anchored in the room as the phone turns.

Example 9.7. In three-phone on Android, a WebXR session is started. `getXRHitPose(frame)` is called each frame and a reticle is drawn at the returned position. A tap places an object at the reticle, which remains on the detected floor surface.

## 10. Camera, machine learning models

**Hardware.** No additional hardware. Machine learning models run in the browser on the phone's processor, taking a video frame from Section 9 as input and returning a set of labelled landmark coordinates. The models are supplied by the ML5 library and run on TensorFlow.js. Three models are used: FaceMesh returns 468 points on one or more faces; HandPose returns 21 points per hand for up to two hands; BodyPose returns 17 points (MoveNet) or 33 points (BlazePose) per body. Landmarks are returned in video pixel coordinates and are mapped to canvas coordinates by `cam.mapKeypoints()`. Inference runs at 10 to 30 fps depending on the model and the device, slower than the video frame rate, so landmark values update less often than the display. Each model works on either camera lens. Model output is treated here as first-order data because the sketch reads it directly; geometry computed from landmarks is second-order.

### First-order data

| Value                    | Type       | Range and units                                               | p5-phone                                                                   | three-phone | Platform     |
| ------------------------ | ---------- | ------------------------------------------------------------- | -------------------------------------------------------------------------- | ----------- | ------------ |
| Face landmarks           | Continuous | 468 points, x and y in canvas pixels, z relative depth        | `ml5.faceMesh()` on `cam.videoElement`, `cam.mapKeypoints(face.keypoints)` | same        | iOS, Android |
| Face bounding box        | Continuous | x, y, width, height                                           | `cam.mapBox(face.box)`                                                     | same        | iOS, Android |
| Face count               | Continuous | 0 to the model's maximum                                      | array length                                                               | same        | iOS, Android |
| Face landmark groups     | Continuous | named subsets: lips, left eye, right eye, eyebrows, face oval | `face.lips`, `face.leftEye`, etc.                                          | same        | iOS, Android |
| Hand landmarks           | Continuous | 21 points per hand, x, y and z                                | `ml5.handPose()` on `cam.videoElement`, `cam.mapKeypoints(hand.keypoints)` | same        | iOS, Android |
| Handedness               | Continuous | `Left` or `Right`                                             | `hand.handedness`                                                          | same        | iOS, Android |
| Hand confidence          | Continuous | 0 to 1                                                        | `hand.confidence`                                                          | same        | iOS, Android |
| Hand count               | Continuous | 0 to 2                                                        | array length                                                               | same        | iOS, Android |
| Body landmarks           | Continuous | 17 or 33 points, x, y and confidence per point                | `ml5.bodyPose()` on `cam.videoElement`, `cam.mapKeypoints(pose.keypoints)` | same        | iOS, Android |
| Body landmark confidence | Continuous | 0 to 1 per point                                              | `keypoint.confidence`                                                      | same        | iOS, Android |
| Body count               | Continuous | integer                                                       | array length                                                               | same        | iOS, Android |
| Model ready              | Event      | none                                                          | model load callback                                                        | same        | iOS, Android |
| Model result             | Event      | fires on each inference                                       | `detectStart(video, callback)`                                             | same        | iOS, Android |

Landmark indices used in the second-order table. FaceMesh: 13 upper lip, 14 lower lip, 61 and 291 mouth corners, 159 and 145 left eyelids, 386 and 374 right eyelids, 33 and 263 eye outer corners, 1 nose tip, 70 and 300 eyebrows. HandPose: 0 wrist, 4 thumb tip, 8 index tip, 12 middle tip, 16 ring tip, 20 pinky tip, 5, 9, 13, 17 knuckles. BodyPose (MoveNet): 0 nose, 5 and 6 shoulders, 7 and 8 elbows, 9 and 10 wrists, 11 and 12 hips, 13 and 14 knees, 15 and 16 ankles.

### Second-order data

| Value                 | Type       | Range and units                                                         | p5-phone                                               | three-phone | Platform     |
| --------------------- | ---------- | ----------------------------------------------------------------------- | ------------------------------------------------------ | ----------- | ------------ |
| Face present          | Event      | face count above zero                                                   | comparison in sketch                                   | same        | iOS, Android |
| Face position         | Continuous | x, y, centre of bounding box                                            | computed in sketch                                     | same        | iOS, Android |
| Face size             | Continuous | pixels, bounding box width; proxy for distance to camera                | computed in sketch                                     | same        | iOS, Android |
| Face in zone          | Event      | face position within a region                                           | comparison in sketch                                   | same        | iOS, Android |
| Head tilt             | Continuous | radians, angle between landmarks 33 and 263                             | `atan2()` in sketch                                    | same        | iOS, Android |
| Head turn             | Continuous | ratio of nose (1) offset to eye separation                              | computed in sketch                                     | same        | iOS, Android |
| Head nod              | Continuous | vertical velocity of nose (1)                                           | difference in sketch                                   | same        | iOS, Android |
| Mouth openness        | Continuous | pixels between 13 and 14                                                | `dist()` in sketch                                     | same        | iOS, Android |
| Mouth open            | Event      | openness above threshold                                                | comparison in sketch                                   | same        | iOS, Android |
| Mouth width           | Continuous | pixels between 61 and 291                                               | `dist()` in sketch                                     | same        | iOS, Android |
| Mouth aspect          | Continuous | openness divided by width                                               | computed in sketch                                     | same        | iOS, Android |
| Eye openness          | Continuous | pixels between 159 and 145, or 386 and 374                              | `dist()` in sketch                                     | same        | iOS, Android |
| Blink                 | Event      | both eyes below threshold for under 300 ms                              | timer in sketch                                        | same        | iOS, Android |
| Wink                  | Event      | one eye below threshold, other above                                    | comparison in sketch                                   | same        | iOS, Android |
| Blink count, rate     | Continuous | integer, blinks per minute                                              | counter and timestamps in sketch                       | same        | iOS, Android |
| Eyebrow height        | Continuous | pixels from 70 to 159, or 300 to 386                                    | `dist()` in sketch                                     | same        | iOS, Android |
| Eyebrow raise         | Event      | height above a stored baseline by a margin                              | comparison in sketch                                   | same        | iOS, Android |
| Gaze direction        | Derived    | left, centre, right                                                     | Gaze Detector class over iris and eye corner landmarks | same        | iOS, Android |
| Expression proxy      | Continuous | mouth width relative to face width                                      | computed in sketch                                     | same        | iOS, Android |
| Hand present          | Event      | hand count above zero                                                   | comparison in sketch                                   | same        | iOS, Android |
| Hand position         | Continuous | x, y of wrist (0) or mean of knuckles                                   | landmark index in sketch                               | same        | iOS, Android |
| Hand in zone          | Event      | hand position within a region                                           | comparison in sketch                                   | same        | iOS, Android |
| Hand velocity         | Continuous | pixels per frame                                                        | difference in sketch                                   | same        | iOS, Android |
| Hand size             | Continuous | pixels from wrist (0) to middle knuckle (9); proxy for distance         | `dist()` in sketch                                     | same        | iOS, Android |
| Pinch distance        | Continuous | pixels between 4 and 8                                                  | `dist()` in sketch                                     | same        | iOS, Android |
| Pinch                 | Event      | pinch distance below threshold                                          | comparison in sketch                                   | same        | iOS, Android |
| Pinch normalized      | Continuous | pinch distance divided by hand size                                     | computed in sketch                                     | same        | iOS, Android |
| Finger angle          | Continuous | radians between any two landmarks                                       | `atan2()` in sketch                                    | same        | iOS, Android |
| Finger extended       | Derived    | per finger, tip farther from wrist than knuckle                         | comparison in sketch                                   | same        | iOS, Android |
| Finger count          | Continuous | 0 to 5                                                                  | sum of extended fingers                                | same        | iOS, Android |
| Hand openness         | Continuous | mean distance from wrist to fingertips divided by hand size             | computed in sketch                                     | same        | iOS, Android |
| Fist                  | Event      | hand openness below threshold                                           | comparison in sketch                                   | same        | iOS, Android |
| Open palm             | Event      | hand openness above threshold                                           | comparison in sketch                                   | same        | iOS, Android |
| Pointing direction    | Continuous | radians from index knuckle (5) to index tip (8)                         | `atan2()` in sketch                                    | same        | iOS, Android |
| Two hand distance     | Continuous | pixels between the two wrists                                           | `dist()` in sketch                                     | same        | iOS, Android |
| Body present          | Event      | body count above zero                                                   | comparison in sketch                                   | same        | iOS, Android |
| Body position         | Continuous | x, y of a chosen joint or the hip midpoint                              | landmark index in sketch                               | same        | iOS, Android |
| Body height in frame  | Continuous | pixels from nose (0) to ankle midpoint; proxy for distance              | `dist()` in sketch                                     | same        | iOS, Android |
| Joint angle           | Continuous | radians at a joint from three landmarks, for example elbow from 5, 7, 9 | vector angle in sketch                                 | same        | iOS, Android |
| Arm raised            | Event      | wrist (9 or 10) above shoulder (5 or 6)                                 | comparison in sketch                                   | same        | iOS, Android |
| Arms spread           | Continuous | pixels between wrists divided by shoulder width                         | computed in sketch                                     | same        | iOS, Android |
| Lean                  | Continuous | radians, angle of shoulder midpoint to hip midpoint from vertical       | `atan2()` in sketch                                    | same        | iOS, Android |
| Crouch                | Event      | hip to knee vertical distance below threshold                           | comparison in sketch                                   | same        | iOS, Android |
| Step                  | Event      | ankle horizontal positions cross                                        | comparison in sketch                                   | same        | iOS, Android |
| Landmark velocity     | Continuous | pixels per frame for any point                                          | difference in sketch                                   | same        | iOS, Android |
| Landmark in zone      | Event      | any point within a region                                               | comparison in sketch                                   | same        | iOS, Android |
| Pose held             | Event      | a condition true for a set duration                                     | timer in sketch                                        | same        | iOS, Android |
| Pose sequence         | Event      | ordered conditions matched                                              | state machine in sketch                                | same        | iOS, Android |
| Confidence acceptable | Event      | landmark confidence above threshold                                     | comparison in sketch                                   | same        | iOS, Android |

### Examples of use

Example 10.1. FaceMesh runs on the front camera. Mouth openness is computed each frame as the distance between landmarks 13 and 14. When openness exceeds 15 pixels, particles are emitted from the midpoint of the two landmarks at a rate proportional to openness. (Mouth Particle Cannon)

Example 10.2. HandPose runs on the front camera. Pinch distance between landmarks 4 and 8 is mapped from 20 to 200 pixels to an image opacity from 0 to 255. (Hand Image Opacity)

Example 10.3. Two landmarks are selected by index. Their mapped positions are drawn as circles and the distance between them is displayed. This is the base case for any two-point measurement. (PHONE FaceMesh Two Points, PHONE HandPose Two Points)

Example 10.4. Face landmarks are passed to a class that computes the horizontal position of the iris relative to the eye corners and returns left, centre or right. The value selects one of three images. (Gaze Detector Class)

Example 10.5. Eye openness is computed for both eyes. A blink is detected when both fall below 4 pixels for fewer than 300 milliseconds. Each blink advances a counter and plays a click.

Example 10.6. Finger count is computed from hand landmarks. The count selects a tone from a five-note scale.

Example 10.7. BodyPose runs on the rear camera pointed at a second person. The vertical position of the left wrist (landmark 9) is mapped to oscillator frequency. The second person controls the sound by raising and lowering their arm.

Example 10.8. Lean is computed from the shoulder and hip midpoints. Lean is mapped from -0.3 to 0.3 radians to the horizontal position of a shape. The user steers by leaning.

## 11. NFC reader

**Hardware.** A near field communication coil operating at 13.56 MHz. The coil powers a passive tag within approximately 4 cm and reads its stored data. Tags cost a few cents, store a serial number and up to a few kilobytes of data, and can be embedded in stickers, cards, keyfobs and fabric labels. The browser reads tags through the Web NFC API, which is available in Android Chrome only.

### First-order data

| Value         | Type       | Range and units                        | p5-phone                                          | three-phone | Platform              |
| ------------- | ---------- | -------------------------------------- | ------------------------------------------------- | ----------- | --------------------- |
| Tag read      | Event      | fires on contact                       | `nfcRead(message, serial)` after `enableNfcTap()` | same        | Android Chrome, HTTPS |
| Serial number | Continuous | string, unique per tag                 | `lastNfcSerialNumber`                             | same        | Android               |
| Message       | Continuous | string stored on the tag, may be empty | `lastNfcMessage`                                  | same        | Android               |
| NFC enabled   | Continuous | true or false                          | `nfcEnabled`, `nfcStatus`, `nfcError`             | same        | Android               |

### Second-order data

| Value                | Type       | Range and units                       | p5-phone                                                                                  | three-phone | Platform |
| -------------------- | ---------- | ------------------------------------- | ----------------------------------------------------------------------------------------- | ----------- | -------- |
| Alias                | Derived    | name assigned to a serial             | `setNfcTagAlias(serial, name)`, `getNfcTagAlias(serial)`, `lastNfcAlias`, `nfcTagAliases` | same        | Android  |
| Named tag read       | Event      | true when a specific alias is read    | `isNfcTag(name, serial)`                                                                  | same        | Android  |
| Unknown tag read     | Event      | serial has no alias                   | comparison in sketch                                                                      | same        | Android  |
| Read count           | Continuous | integer per tag                       | counter in sketch                                                                         | same        | Android  |
| Time since last read | Continuous | milliseconds                          | `millis()` difference in sketch                                                           | same        | Android  |
| Tag sequence         | Event      | ordered reads match a stored pattern  | array comparison in sketch                                                                | same        | Android  |
| Tag as state         | Continuous | current mode set by the last tag read | variable in sketch                                                                        | same        | Android  |
| Tag as value         | Continuous | number parsed from the message        | `parseFloat()` on message                                                                 | same        | Android  |

### Examples of use

Example 11.1. Two tags are registered with aliases "a" and "b". Reading tag "a" sets the background to red and plays one sample. Reading tag "b" sets it to blue and plays another. (Two Tag Effects)

Example 11.2. Six tags are placed under six squares of a fabric mat. Each tag's message stores a number from 1 to 6. Reading a tag parses the number and sets a playback rate. The mat functions as a six-position selector.

Example 11.3. Three tags are registered. A sequence variable records the order of reads. When the sequence matches "a, c, b", a hidden image is shown. The tags function as a combination lock.

Example 11.4. A tag is attached to an object. Time since the last read is displayed. When it exceeds 60 seconds, the phone vibrates. The object must be tapped to the phone at least once a minute.

## 12. GPS

**Hardware.** A satellite positioning receiver using GPS, GLONASS, Galileo and BeiDou constellations, assisted by cellular and Wi-Fi positioning. Outdoor accuracy is 3 to 10 metres; indoor position falls back to Wi-Fi and cellular estimates with accuracy of tens to hundreds of metres. Speed and heading are computed by the receiver from successive positions and are valid only while moving. The browser exposes position through the Geolocation API.

### First-order data

| Value              | Type       | Range and units                | p5-phone                                                                          | three-phone | Platform            |
| ------------------ | ---------- | ------------------------------ | --------------------------------------------------------------------------------- | ----------- | ------------------- |
| Position           | Continuous | latitude, longitude in degrees | `geoRead(position)`, `getGeoPosition()`, `lastGeoPosition` after `enableGeoTap()` | same        | iOS, Android, HTTPS |
| Accuracy           | Continuous | metres, radius                 | `position.coords.accuracy`                                                        | same        | iOS, Android        |
| Altitude           | Continuous | metres                         | `position.coords.altitude`                                                        | same        | iOS, Android        |
| Altitude accuracy  | Continuous | metres                         | `position.coords.altitudeAccuracy`                                                | same        | iOS, Android        |
| Speed              | Continuous | m/s, while moving              | `position.coords.speed`                                                           | same        | iOS, Android        |
| Heading            | Continuous | degrees, while moving          | `position.coords.heading`                                                         | same        | iOS, Android        |
| Timestamp          | Continuous | milliseconds                   | `position.timestamp`                                                              | same        | iOS, Android        |
| Geo enabled        | Continuous | true or false                  | `geoEnabled`, `geoStatus`, `geoError`                                             | same        | iOS, Android        |
| High accuracy mode | Setting    | none                           | `setGeoOptions({ enableHighAccuracy: true })`                                     | same        | iOS, Android        |

### Second-order data

| Value                     | Type       | Range and units                                          | p5-phone                              | three-phone | Platform     |
| ------------------------- | ---------- | -------------------------------------------------------- | ------------------------------------- | ----------- | ------------ |
| Distance to point         | Continuous | metres                                                   | `geoDistance(lat1, lon1, lat2, lon2)` | same        | iOS, Android |
| Inside region             | Event      | true or false                                            | `geoInPolygon(position, polygon)`     | same        | iOS, Android |
| Entered region            | Event      | inside changes from false to true                        | comparison in sketch                  | same        | iOS, Android |
| Left region               | Event      | inside changes from true to false                        | comparison in sketch                  | same        | iOS, Android |
| Within radius             | Event      | distance to point below a value                          | comparison in sketch                  | same        | iOS, Android |
| Nearest of several points | Derived    | index                                                    | minimum of `geoDistance()` results    | same        | iOS, Android |
| Bearing to point          | Continuous | degrees                                                  | computed from two positions in sketch | same        | iOS, Android |
| Path                      | Continuous | array of positions                                       | accumulated in `geoRead()`            | same        | iOS, Android |
| Path length               | Continuous | metres, sum of `geoDistance()` between successive points | accumulated in sketch                 | same        | iOS, Android |
| Displacement              | Continuous | metres from the starting position                        | `geoDistance()` to the first point    | same        | iOS, Android |
| Average speed             | Continuous | m/s over a window                                        | path length divided by elapsed time   | same        | iOS, Android |
| Stationary                | Event      | speed below threshold for a duration                     | timer in sketch                       | same        | iOS, Android |
| Accuracy acceptable       | Event      | accuracy below a threshold                               | comparison in sketch                  | same        | iOS, Android |

### Examples of use

Example 12.1. Position is logged to an array each time `geoRead()` fires. The array is drawn as a polyline scaled to the canvas. (Geo Watch)

Example 12.2. A target position is stored. Distance to the target is computed on each read and mapped from 0 to 200 metres to a sample volume from 1 to 0. The sound becomes louder as the user approaches.

Example 12.3. A polygon of four coordinates enclosing a courtyard is stored. On each read, `geoInPolygon()` is evaluated. On the transition from outside to inside, an image is displayed.

Example 12.4. Average speed is computed over the last ten readings and mapped to the tempo of a metronome sound. Walking faster increases the tempo.

## 13. Bluetooth Low Energy, receive

**Hardware.** A 2.4 GHz radio implementing the Bluetooth Low Energy protocol. An external device such as an ESP32 or Arduino Nano advertises a service containing named characteristics. Each characteristic holds a typed value that the phone reads, or that the external device pushes as a notification. Range is approximately 10 metres indoors. The browser reads characteristics through the Web Bluetooth API, available in Android Chrome. iOS Safari does not implement Web Bluetooth; the Bluefy app provides it.

### First-order data

| Value                | Type       | Range and units                                                                      | p5-phone                                                                                                                                         | three-phone | Platform                              |
| -------------------- | ---------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | ------------------------------------- |
| Characteristic value | Continuous | typed: bool, int8, uint8, int16, uint16, int32, uint32, float, double, string, bytes | `bleSetup({ characteristics: [{ name, type, read, notify }] })`, `enableBleTap()`, `bleReceive(name, value)`, `bleValues[name]`, `bleRead(name)` | same        | Android Chrome, HTTPS; iOS via Bluefy |
| Connection state     | Event      | connected or disconnected                                                            | `bleConnected`, `bleStatus`                                                                                                                      | same        | Android                               |
| Connection error     | Event      | string                                                                               | `bleError`                                                                                                                                       | same        | Android                               |
| Device name          | Continuous | string                                                                               | `bleDeviceName`                                                                                                                                  | same        | Android                               |
| Supported            | Setting    | true or false                                                                        | `isBleSupported()`, `bleSupported`                                                                                                               | same        | Android                               |
| Connect, disconnect  | Event      | none                                                                                 | `bleConnect()`, `bleDisconnect()`                                                                                                                | same        | Android                               |

### Second-order data

| Value                     | Type       | Range and units                          | p5-phone                     | three-phone | Platform |
| ------------------------- | ---------- | ---------------------------------------- | ---------------------------- | ----------- | -------- |
| Mapped external value     | Continuous | any range                                | `map()` on `bleValues[name]` | same        | Android  |
| External threshold        | Event      | received value crosses a value           | comparison in sketch         | same        | Android  |
| External change           | Event      | received value differs from the previous | comparison in `bleReceive()` | same        | Android  |
| External rate             | Continuous | values per second                        | timestamps in sketch         | same        | Android  |
| Smoothed external value   | Continuous | averaged over frames                     | `lerp()` in sketch           | same        | Android  |
| Multiple sensors combined | Continuous | function of several characteristics      | computed in sketch           | same        | Android  |
| Connection lost           | Event      | connected changes to false               | comparison in sketch         | same        | Android  |

### Examples of use

Example 13.1. A microcontroller reads a potentiometer and notifies a `uint16` characteristic named `knob`. The phone maps `bleValues.knob` from 0 to 4095 to a circle diameter. (BLE Input)

Example 13.2. A microcontroller reads a pressure sensor made from Velostat and notifies a `float` characteristic. When the value exceeds a threshold, the phone plays a sample. The pressure sensor is placed under a cushion.

Example 13.3. A microcontroller reads a distance sensor. The phone maps distance to oscillator frequency. The phone supplies sound output for a sensor it does not contain.

## 14. Network, receive

**Hardware.** The Wi-Fi and cellular radios, exposed through standard HTTP and WebSocket APIs. The network is not a sensor but functions as an input channel for data from a server, another phone, or a public API. Requests require the remote server to permit cross-origin access.

### First-order data

| Value             | Type       | Range and units   | p5-phone                                | three-phone                    | Platform         |
| ----------------- | ---------- | ----------------- | --------------------------------------- | ------------------------------ | ---------------- |
| Image             | Event      | image on arrival  | `loadImage(url, callback)`              | `THREE.TextureLoader().load()` | HTTPS with CORS  |
| JSON              | Event      | object on arrival | `loadJSON(url, callback)`, `fetch(url)` | `fetch(url)`                   | HTTPS with CORS  |
| Text              | Event      | string on arrival | `loadStrings(url)`, `fetch(url)`        | `fetch(url)`                   | HTTPS with CORS  |
| Audio file        | Event      | sound on arrival  | `loadSound(url)`                        | `THREE.AudioLoader`            | HTTPS with CORS  |
| WebSocket message | Event      | string or object  | `WebSocket.onmessage`                   | same                           | WebSocket server |
| Online state      | Continuous | true or false     | `navigator.onLine`                      | same                           | all              |

### Second-order data

| Value               | Type       | Range and units                                | p5-phone                        | three-phone | Platform         |
| ------------------- | ---------- | ---------------------------------------------- | ------------------------------- | ----------- | ---------------- |
| Shared value        | Continuous | value from another phone via a server          | parsed from a message in sketch | same        | WebSocket server |
| Polled value        | Continuous | value fetched on an interval                   | `setInterval()` with `fetch()`  | same        | HTTPS with CORS  |
| Value changed       | Event      | polled or received value differs from previous | comparison in sketch            | same        | all              |
| Message rate        | Continuous | messages per second                            | timestamps in sketch            | same        | WebSocket server |
| Connected peers     | Continuous | integer, supplied by the server                | parsed from a message           | same        | WebSocket server |
| Remote sensor value | Continuous | another phone's sensor, relayed                | parsed from a message           | same        | WebSocket server |

### Examples of use

Example 14.1. A GIF is fetched from a URL and displayed. Rotation Y controls its playback. (GIF Fetch)

Example 14.2. A weather API is polled every 60 seconds. The returned wind speed is mapped to the speed of a particle system.

Example 14.3. Two phones connect to a WebSocket server. Phone A sends its rotation X each frame. Phone B receives it and uses it as its own rotation X. Phone B's display is controlled by tilting phone A.

---

# Actuators

## 15. Touchscreen, display

**Hardware.** An OLED or LCD panel, typically 1080 by 2400 pixels at 400 to 500 pixels per inch, with a maximum brightness of 500 to 1500 nits. OLED panels emit light per pixel; a black pixel is off. The display is the phone's highest bandwidth actuator and its brightest light source after the torch. The browser draws to it through the canvas and WebGL.

### First-order data

| Value           | Type       | Range and units       | p5-phone                                                | three-phone                                               | Platform     |
| --------------- | ---------- | --------------------- | ------------------------------------------------------- | --------------------------------------------------------- | ------------ |
| Background fill | Continuous | r, g, b 0 to 255      | `background()`                                          | `renderer.setClearColor()`                                | iOS, Android |
| 2D shape        | Continuous | pixels                | `rect()`, `ellipse()`, `line()`, `vertex()`             | not applicable                                            | iOS, Android |
| 3D geometry     | Continuous | pixels                | `WEBGL` mode, `box()`, `sphere()`                       | `THREE.Mesh` in `scene`, `renderer.render(scene, camera)` | iOS, Android |
| Text            | Continuous | string                | `text()`                                                | HTML overlay, `TextGeometry` or sprite                    | iOS, Android |
| Image           | Continuous | image                 | `image()`                                               | `THREE.Texture` on a mesh                                 | iOS, Android |
| Video           | Continuous | video                 | `createVideo()`, `image(video)`                         | `THREE.VideoTexture`                                      | iOS, Android |
| Camera feed     | Continuous | video                 | `image(cam.video)`                                      | `cam.attachBackground(scene)`                             | iOS, Android |
| Canvas size     | Setting    | pixels                | `createCanvas(windowWidth, windowHeight)`               | `renderer.setSize()`                                      | iOS, Android |
| Frame rate      | Setting    | frames per second     | `frameRate()`                                           | `setAnimationLoop` timing                                 | iOS, Android |
| Debug overlay   | Continuous | string                | `showDebug()`, `debug()`, `debugWarn()`, `debugError()` | same                                                      | iOS, Android |
| Desktop QR code | Continuous | image of the page URL | `showDesktopQr()`, `setQrUrl()`                         | same                                                      | desktop only |

### Second-order data

| Value                  | Type       | Range and units                          | p5-phone                         | three-phone                   | Platform     |
| ---------------------- | ---------- | ---------------------------------------- | -------------------------------- | ----------------------------- | ------------ |
| Full-screen light      | Continuous | brightness 0 to 255                      | `background(value)`              | `setClearColor()`             | iOS, Android |
| Coloured light         | Continuous | hue 0 to 360                             | `background()` in HSB mode       | `setClearColor()`             | iOS, Android |
| Pulse                  | Continuous | brightness as a function of time         | `sin(millis() * rate)` in sketch | same                          | iOS, Android |
| Flash                  | Event      | brightness to maximum for one frame      | conditional in `draw()`          | same                          | iOS, Android |
| Fade                   | Continuous | brightness interpolated over time        | `lerp()` in sketch               | same                          | iOS, Android |
| Scene change           | Event      | state index                              | conditional in `draw()`          | swap scene or objects         | iOS, Android |
| Mapped size            | Continuous | pixels from a sensor value               | `map()` into a shape dimension   | `mesh.scale`                  | iOS, Android |
| Mapped colour          | Continuous | colour from a sensor value               | `map()` into `fill()`            | `material.color`              | iOS, Android |
| Mapped position        | Continuous | pixels from a sensor value               | `map()` into shape coordinates   | `mesh.position`               | iOS, Android |
| Mapped rotation        | Continuous | radians from a sensor value              | `rotate()`                       | `mesh.rotation`               | iOS, Android |
| Mapped opacity         | Continuous | 0 to 255 from a sensor value             | `tint()`, alpha in `fill()`      | `material.opacity`            | iOS, Android |
| Mapped playback        | Continuous | frame index or speed from a sensor value | frame counter in sketch          | `VideoTexture` element rate   | iOS, Android |
| Particle emission rate | Continuous | particles per frame from a sensor value  | loop count in sketch             | same                          | iOS, Android |
| Trail                  | Continuous | persistence by partial background clear  | `background()` with low alpha    | render target accumulation    | iOS, Android |
| Camera control         | Continuous | virtual camera from device rotation      | not applicable                   | `applyDeviceRotation(camera)` | iOS, Android |

### Examples of use

Example 15.1. `background()` is set each frame to a hue that cycles at 0.5 Hz. The screen is placed face down on a sheet of tracing paper. The paper is illuminated by the changing colour. (Torch Disco, display component)

Example 15.2. Smoothed microphone level is mapped to the radius of a set of concentric circles. (Breath Bloom, display component)

Example 15.3. Face landmark position for the mouth sets the origin of a particle system. Mouth openness sets emission rate. (Mouth Particle Cannon, display component)

Example 15.4. Rotation Y is mapped to the current frame index of a sequence of images. (Phone and GIF Roll, display component)

Example 15.5. `background(0)` is called with `deviceShaken()` setting a flag that draws `background(255)` for one frame. The phone flashes on each shake.

## 16. Speaker

**Hardware.** One or two small dynamic drivers, typically 10 to 15 mm, driven by an amplifier of approximately 1 watt. Frequency response is limited below 300 Hz. Output is mono or narrow stereo. The browser plays audio through the Web Audio API, which requires a user gesture before any sound can start. Both libraries satisfy the gesture with `enableSoundTap()`. Sound can also be routed to headphones or a Bluetooth speaker by the operating system without any change to the code.

### First-order data

| Value                     | Type       | Range and units                            | p5-phone                                                    | three-phone                                                         | Platform     |
| ------------------------- | ---------- | ------------------------------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------- | ------------ |
| Sample play               | Event      | none                                       | `p5.SoundFile.play()` after `enableSoundTap()`              | `THREE.Audio.play()` on `listener.context` after `enableSoundTap()` | iOS, Android |
| Sample stop, pause        | Event      | none                                       | `.stop()`, `.pause()`                                       | `.stop()`, `.pause()`                                               | iOS, Android |
| Sample loop               | Setting    | true or false                              | `.loop()`, `.setLoop()`                                     | `.setLoop()`                                                        | iOS, Android |
| Volume                    | Continuous | 0 to 1                                     | `.setVolume()`                                              | `.setVolume()`                                                      | iOS, Android |
| Playback rate             | Continuous | multiplier; negative reverses in p5        | `.rate()`                                                   | `.setPlaybackRate()`                                                | iOS, Android |
| Playback position         | Continuous | seconds                                    | `.jump()`, `.currentTime()`                                 | `.offset`                                                           | iOS, Android |
| Pan                       | Continuous | -1 to 1                                    | `.pan()`                                                    | `THREE.PositionalAudio` position                                    | iOS, Android |
| Oscillator frequency      | Continuous | hertz                                      | `p5.Oscillator`, `.freq()`                                  | `OscillatorNode.frequency` on `getAudioContext()`                   | iOS, Android |
| Oscillator amplitude      | Continuous | 0 to 1                                     | `.amp()`                                                    | `GainNode.gain`                                                     | iOS, Android |
| Oscillator waveform       | Setting    | sine, triangle, sawtooth, square           | `.setType()`                                                | `OscillatorNode.type`                                               | iOS, Android |
| Noise                     | Continuous | white, pink, brown                         | `p5.Noise`                                                  | buffer source                                                       | iOS, Android |
| Filter cutoff             | Continuous | hertz                                      | `p5.Filter`, `.freq()`                                      | `BiquadFilterNode`                                                  | iOS, Android |
| Envelope                  | Event      | attack, decay, sustain, release in seconds | `p5.Envelope`                                               | `GainNode` automation                                               | iOS, Android |
| Reverb, delay             | Continuous | seconds, feedback                          | `p5.Reverb`, `p5.Delay`                                     | `ConvolverNode`, `DelayNode`                                        | iOS, Android |
| Text to speech            | Event      | string                                     | `speechSynthesis.speak(new SpeechSynthesisUtterance(text))` | same                                                                | iOS, Android |
| Speech voice, rate, pitch | Setting    | voice object, 0.1 to 10, 0 to 2            | `utterance.voice`, `.rate`, `.pitch`                        | same                                                                | iOS, Android |
| Sound enabled             | Continuous | true or false                              | `soundEnabled`                                              | same                                                                | iOS, Android |

### Second-order data

| Value                     | Type       | Range and units                      | p5-phone                                   | three-phone | Platform     |
| ------------------------- | ---------- | ------------------------------------ | ------------------------------------------ | ----------- | ------------ |
| Sensor to pitch           | Continuous | hertz from a mapped value            | `map()` into `.freq()`                     | same        | iOS, Android |
| Sensor to quantized pitch | Continuous | hertz from a scale array             | `map()` to an index into a frequency array | same        | iOS, Android |
| Sensor to volume          | Continuous | 0 to 1 from a mapped value           | `map()` into `.setVolume()` or `.amp()`    | same        | iOS, Android |
| Sensor to rate            | Continuous | multiplier from a mapped value       | `map()` into `.rate()`                     | same        | iOS, Android |
| Sensor to position        | Continuous | seconds from a mapped value          | `map()` into `.jump()`                     | same        | iOS, Android |
| Sensor to filter          | Continuous | hertz from a mapped value            | `map()` into filter `.freq()`              | same        | iOS, Android |
| Crossfade                 | Continuous | two volumes from one value           | complementary `.setVolume()` calls         | same        | iOS, Android |
| Trigger sample on event   | Event      | none                                 | `.play()` inside an event callback         | same        | iOS, Android |
| Trigger envelope on event | Event      | none                                 | `env.play()` inside an event callback      | same        | iOS, Android |
| Sample select             | Event      | index from a zone, tag or count      | array of sound files                       | same        | iOS, Android |
| Sequence                  | Event      | samples on a timer                   | `setInterval()` or `millis()` in sketch    | same        | iOS, Android |
| Tempo from sensor         | Continuous | beats per minute from a mapped value | interval recomputed in sketch              | same        | iOS, Android |
| Spoken response           | Event      | string chosen by state               | `speechSynthesis.speak()` in a callback    | same        | iOS, Android |
| Spoken value              | Event      | number read aloud                    | string conversion into speech              | same        | iOS, Android |

### Examples of use

Example 16.1. An oscillator is started at zero amplitude. Rotation X is mapped to frequency from 200 to 800 Hz. Rotation Y is mapped to amplitude from 0 to 0.5. (Motion Synth)

Example 16.2. A sound file is loaded and looped. The number of active touches is mapped from 0 to 5 to volume from 0 to 1. (Volume Touches)

Example 16.3. Two sound files are looped. Rotation Y is mapped from -45 to 45 degrees to a value from 0 to 1. Track A is set to that value; track B is set to one minus that value. Tilting crossfades. (Dual Audio)

Example 16.4. Five frequencies of a pentatonic scale are stored in an array. Finger count from the front camera selects the index. The oscillator frequency is set to the selected value.

Example 16.5. When an NFC tag with alias "door" is read, `speechSynthesis.speak()` is called with the string "door". The phone announces the tag.

Example 16.6. The phone is placed inside a glass jar with the lid closed. A sample is played. The jar resonates at its own frequency and colours the sound. Different containers produce different results with the same file.

## 17. Vibration motor

**Hardware.** An eccentric rotating mass motor or a linear resonant actuator. The browser exposes on and off durations only; amplitude and frequency are not controllable. Minimum reliable duration is approximately 20 milliseconds. iOS browsers do not implement the Vibration API; the calls return without effect.

### First-order data

| Value        | Type    | Range and units                        | p5-phone                                   | three-phone | Platform |
| ------------ | ------- | -------------------------------------- | ------------------------------------------ | ----------- | -------- |
| Buzz         | Event   | milliseconds                           | `vibrate(ms)` after `enableVibrationTap()` | same        | Android  |
| Pattern      | Event   | array of on, off, on, off milliseconds | `vibrate([on, off, on, ...])`              | same        | Android  |
| Stop         | Event   | none                                   | `stopVibration()`                          | same        | Android  |
| Availability | Setting | true or false                          | `vibrationEnabled`                         | same        | Android  |

### Second-order data

| Value                      | Type       | Range and units                               | p5-phone                                 | three-phone | Platform |
| -------------------------- | ---------- | --------------------------------------------- | ---------------------------------------- | ----------- | -------- |
| Sensor to duration         | Event      | milliseconds from a mapped value              | `vibrate(map(value, ...))`               | same        | Android  |
| Sensor to pattern density  | Event      | on and off durations from a mapped value      | array constructed in sketch              | same        | Android  |
| Rhythm                     | Event      | pattern from a tempo                          | array constructed from beats per minute  | same        | Android  |
| Buzz on event              | Event      | none                                          | `vibrate()` inside an event callback     | same        | Android  |
| Buzz on threshold crossing | Event      | none                                          | comparison then `vibrate()`              | same        | Android  |
| Continuous buzz            | Continuous | repeated short buzzes while a condition holds | `vibrate()` each frame under a condition | same        | Android  |
| Morse                      | Event      | pattern from a string                         | lookup table in sketch                   | same        | Android  |
| Countdown                  | Event      | buzz at decreasing intervals                  | timer in sketch                          | same        | Android  |

### Examples of use

Example 17.1. A touch start calls `vibrate(50)`. (Haptic Feedback)

Example 17.2. `deviceShaken()` calls `vibrate(100)`. The output confirms the event was detected. (Shake Spark Vibration)

Example 17.3. A pattern of `[100, 100, 100, 100, 300, 100]` is called on a timer of 2 seconds, in time with a pulsing display and torch. (Torch Disco, vibration component)

Example 17.4. The phone is placed face down on a drum skin. Microphone onset from a second phone, relayed over a WebSocket, calls `vibrate(30)`. The first phone taps the drum in response to sound at the second phone.

Example 17.5. Distance to a GPS target is mapped from 100 to 0 metres to a buzz interval from 2000 to 200 milliseconds. The buzz rate increases as the target is approached.

## 18. Torch, flashlight

**Hardware.** One or more high-output LEDs adjacent to the rear camera, driven at up to several hundred milliamps. Output is on or off from the browser; brightness levels are not exposed. The LED is controlled through the camera stream's torch constraint, so the camera permission is required and the camera must be active. Android Chrome only.

### First-order data

| Value        | Type       | Range and units           | p5-phone                                                                | three-phone | Platform                          |
| ------------ | ---------- | ------------------------- | ----------------------------------------------------------------------- | ----------- | --------------------------------- |
| On           | Event      | none                      | `torchOn()`, `flashlightOn()` after `enableTorchTap()`                  | same        | Android Chrome, camera permission |
| Off          | Event      | none                      | `torchOff()`, `flashlightOff()`                                         | same        | Android                           |
| Toggle       | Event      | none                      | `toggleTorch()`, `toggleFlashlight()`                                   | same        | Android                           |
| Set          | Event      | true or false             | `setTorch(bool)`, `setFlashlight(bool)`                                 | same        | Android                           |
| Stop         | Event      | releases the camera track | `stopTorch()`, `stopFlashlight()`                                       | same        | Android                           |
| State        | Continuous | true or false             | `torchActive`, `torchEnabled`                                           | same        | Android                           |
| Availability | Setting    | true or false             | `isTorchSupported()`, `torchSupported`, `torchCapability`, `torchError` | same        | Android                           |

### Second-order data

| Value                  | Type       | Range and units                       | p5-phone                                 | three-phone | Platform |
| ---------------------- | ---------- | ------------------------------------- | ---------------------------------------- | ----------- | -------- |
| Blink                  | Event      | on and off on an interval             | `setInterval()` with `toggleTorch()`     | same        | Android  |
| Blink rate from sensor | Continuous | interval from a mapped value          | interval recomputed in sketch            | same        | Android  |
| Strobe on threshold    | Event      | on while a value is above a threshold | `setTorch(value > threshold)` each frame | same        | Android  |
| Toggle on event        | Event      | none                                  | `toggleTorch()` inside an event callback | same        | Android  |
| Pulse pattern          | Event      | on and off durations from an array    | timer in sketch                          | same        | Android  |
| Morse                  | Event      | pattern from a string                 | lookup table in sketch                   | same        | Android  |
| Duration on            | Continuous | milliseconds since turned on          | `millis()` difference in sketch          | same        | Android  |

### Examples of use

Example 18.1. A touch start calls `toggleTorch()`. (Torch Touch Toggle)

Example 18.2. `deviceShaken()` calls `toggleTorch()`. The phone is sealed in a paper lantern; shaking the lantern lights it. (Shake Torch Toggle)

Example 18.3. `setTorch()` is called each frame with the result of microphone level exceeding 0.1. The torch strobes with sound.

Example 18.4. Two phones face each other across a room. Phone A blinks its torch in a pattern. Phone B reads rear camera brightness and decodes the pattern as a sequence of on and off durations.

## 19. Bluetooth Low Energy, send

**Hardware.** The same radio as Section 13. The phone writes typed values to a characteristic on the external device. The external device reads the value and acts on it, driving a motor, LED, solenoid or any actuator wired to the microcontroller. The phone becomes the sensor package and the microcontroller the actuator package.

### First-order data

| Value                | Type  | Range and units               | p5-phone                                                                | three-phone | Platform                              |
| -------------------- | ----- | ----------------------------- | ----------------------------------------------------------------------- | ----------- | ------------------------------------- |
| Characteristic write | Event | typed value, as in Section 13 | `bleWrite(name, value)` on a characteristic declared with `write: true` | same        | Android Chrome, HTTPS; iOS via Bluefy |

### Second-order data

| Value                               | Type       | Range and units                                          | p5-phone                                             | three-phone | Platform |
| ----------------------------------- | ---------- | -------------------------------------------------------- | ---------------------------------------------------- | ----------- | -------- |
| Sensor to external device           | Continuous | phone value written each frame                           | `bleWrite()` in `draw()`                             | same        | Android  |
| Sensor to external device on change | Continuous | written only when the value changes by more than a delta | comparison then `bleWrite()`                         | same        | Android  |
| Sensor to external device at rate   | Continuous | written on an interval                                   | `millis()` gate in sketch                            | same        | Android  |
| Event to external device            | Event      | fixed value written on an event                          | `bleWrite()` inside an event callback                | same        | Android  |
| Mapped value to external device     | Continuous | phone value mapped to the external range                 | `map()` then `bleWrite()`                            | same        | Android  |
| Multiple values to external device  | Continuous | several characteristics written together                 | several `bleWrite()` calls or a bytes characteristic | same        | Android  |

### Examples of use

Example 19.1. Rotation Y is mapped from -90 to 90 degrees to a `uint8` from 0 to 180 and written to a characteristic named `servo` every 50 milliseconds. The microcontroller sets a servo to that angle. (BLE Send)

Example 19.2. Microphone level is mapped to a `uint8` from 0 to 255 and written to a characteristic named `led`. The microcontroller sets an LED brightness.

Example 19.3. `deviceShaken()` writes `true` to a `bool` characteristic named `fire`. The microcontroller pulses a solenoid.

Example 19.4. A `knob` characteristic is received and a `led` characteristic is written on the same connection. The phone displays the knob value and echoes it to the LED. (BLE Both)

## 20. Network, send

**Hardware.** The same radios as Section 14. The phone posts values to a server or streams them over a WebSocket. A laptop, another phone or an installation controller subscribes to the stream. The phone becomes a wireless controller for hardware that has no sensors of its own.

### First-order data

| Value                 | Type  | Range and units  | p5-phone                                                              | three-phone | Platform         |
| --------------------- | ----- | ---------------- | --------------------------------------------------------------------- | ----------- | ---------------- |
| HTTP post             | Event | object           | `httpPost(url, 'json', data)`, `fetch(url, { method: 'POST', body })` | `fetch()`   | HTTPS endpoint   |
| WebSocket message     | Event | string or object | `socket.send()`                                                       | same        | WebSocket server |
| WebSocket open, close | Event | none             | `socket.onopen`, `socket.onclose`                                     | same        | WebSocket server |

### Second-order data

| Value                         | Type       | Range and units                                              | p5-phone                                           | three-phone | Platform                     |
| ----------------------------- | ---------- | ------------------------------------------------------------ | -------------------------------------------------- | ----------- | ---------------------------- |
| Sensor stream to server       | Continuous | value sent each frame or on an interval                      | `socket.send()` in `draw()` with a `millis()` gate | same        | WebSocket server             |
| Sensor stream on change       | Continuous | sent only when the value changes by a delta                  | comparison then `socket.send()`                    | same        | WebSocket server             |
| Event to server               | Event      | message sent on an event                                     | `socket.send()` inside a callback                  | same        | WebSocket server             |
| Bundled sensors               | Continuous | object containing several values                             | `JSON.stringify()` in sketch                       | same        | WebSocket server             |
| Multiple phones to one output | Continuous | server aggregates messages by client                         | server-side                                        | same        | WebSocket server             |
| Phone to OSC                  | Continuous | values bridged by the server to OSC for TouchDesigner or Max | server-side                                        | same        | WebSocket server plus bridge |

### Examples of use

Example 20.1. Rotation X, Y and Z are bundled into a JSON object and sent over a WebSocket at 30 Hz. A Processing sketch on a laptop receives them and rotates a 3D model.

Example 20.2. Ten phones send microphone level to one server. The server sums them and sends the total to a TouchDesigner network via OSC. The installation responds to the combined loudness of the room.

Example 20.3. `deviceShaken()` sends the string "shake" with the phone's identifier. A laptop counts shakes per phone and displays a leaderboard.
