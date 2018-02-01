# Circuit Playground Course Plan

NOTE to Editors of this Doc: 
Since this plan largely just links in to the Code.org site, and it's quite likely the contents and location of those sections will change, it's important to provide a short, identifying description here with each link, so that future teachers can more easily adjust to those changes.

For this unit, we follow much of the [Physical Computing Unit](https://studio.code.org/s/csd6/) of the [Code.org Computer Science Discoveries course](https://studio.code.org/courses/csd)


## Class 1: Intro, Basic LED, and Buzzer

### Intro to Circuit Playground, LED, Event Handling

We start with [Lesson 5, Circuit Playground](https://studio.code.org/s/csd6/stage/5/puzzle/1) and go through the
following puzzles:

* [1. Welcome to the Circuit Playground](https://studio.code.org/s/csd6/stage/5/puzzle/1)
* [2. Test Your Board](https://studio.code.org/s/csd6/stage/5/puzzle/2)
* [3. Using the LED](https://studio.code.org/s/csd6/stage/5/puzzle/3)
* [4. Turn on the LED with a Button](https://studio.code.org/s/csd6/stage/5/puzzle/4)
* [5. Turn off the LED](https://studio.code.org/s/csd6/stage/5/puzzle/5)
* [6. Toggle the LED](https://studio.code.org/s/csd6/stage/5/puzzle/6)
* 7. Silent Alarm: SKIP because it requires completion of an earlier unit.

### Playing Sounds with the Buzzer

For this part we work with the buzzer, continuing at [Lesson 5, Circuit Playground, Puzzle 8](https://studio.code.org/s/csd6/stage/5/puzzle/8).

* [8. Producing Output](https://studio.code.org/s/csd6/stage/5/puzzle/8)
  * Brief discussion of frequencies and octaves, and how going up octave means doubling frequency.
* [9. Playing Sounds](https://studio.code.org/s/csd6/stage/5/puzzle/9)
* [10. Playing Longer Sounds](https://studio.code.org/s/csd6/stage/5/puzzle/10)
* 11. Noisy Alarm: SKIP because it requires completion of an earlier unit.
* [12. Challenge: LED and Buzzer](https://studio.code.org/s/csd6/stage/5/puzzle/12)
  * Nice idea, but we didn't have time.


## Class 2: NeoPixel Light Array

TODO(yozhipozhi): Fill out with links to lessons.

### Using NeoPixels

   1. Turn lights on and off by address.
   2. Set colors.
   3. Set intensity from slider control.
   4. Use functions to set groups of lights.
      * Review of functions.
   5. Dynamic lights with function input.
      * Base the addresses on function input and use to rotate with button press.

### Loops and Timed Loops

   1. Quick review of for loops.
   2. Quick discussion of timed loops.
   3. Apply dynamic lights to timed loops.

## Class 3: Sensor Input

### Event handling vs. polling.

Discuss with examples we've seen:

* Polling: Khan academy/Processing style: mouseX
* Events: Event handlers here
* Mix of both: Slider: Event told us changed; then we poll it to get value.
* Looking ahead: Buttons (events) vs. Light sensor (polling)
