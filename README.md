# The monster's vault game

## Story
You find yourself locked in some sort of a
 creepy dungeon in the pitch darkness. You don't
 remember how you got here (because I'm too
 lazy to make up this part of the story). Anyway,
 the only way out is through this metal door
 ahead of you, and you need to find out how
 to open it.  
 
 And by the way, what's inside those boxes?..
 
## How to play
Push down the levers to open doors.
You can guess where the opened door is by the
sound it makes (use your headphones).  
Don't get caught by the monster! You can also
guess its position and direction by the sound
it makes.

[**Play the game**](https://alvov.github.io/the-monsters-vault-game/)
_(you need a desktop browser, Chrome would be the best choice
at the moment of writing this)_

## Controls
### Keyboard
`W` — move forward  
`S` — move backward  
`A` — move left  
`D` — move right  
`Mouse/Touchpad` — look around  
`SHIFT` — run  
`E` — interact with stuff  
`Q` — quit to main menu  

### Gamepad (Xbox 360/One, wired)
`Left stick` — move around  
`Right stick` — look around  
`Right trigger` — run  
`X` — interact with stuff  
`Back` — quit to main menu  
`A` — select item in menu  
`B` — go up one level in menu  

![gamepad gameplay](./assets/screencapture-001.gif)

## Motivation
* Make a 3d (well, more like 2.5d)
horror game with CSS 3d transforms only
* Use React/Redux/Webpack 2/Tape stack
* Try out various web APIs and interfaces like:
  * [Pointer Lock events](https://w3c.github.io/pointerlock/)
  * [Web Audio API](https://webaudio.github.io/web-audio-api/)
  * [Gamepad API](https://w3c.github.io/gamepad/)
  * [Service Workers](https://www.w3.org/TR/service-workers/)
  * [KeyboardEvent Interface](https://w3c.github.io/uievents/#interface-keyboardevent)
* Use SVG lighting filters for textures
(also as a test of my laptop's cooling system)

## Features
- [x] No canvases
- [x] 3d positioned audio (_use your headphones_)
- [x] Gamepad support
- [x] Offline support (_after first launch_)
- [x] Level generator:  
![level generator](./assets/screencapture-002-level.gif)

## Credits
* **Inspired by** — the [famous CSS 3d scene](http://keithclark.co.uk/labs/css-fps/)
by [@keithclarkcouk](https://twitter.com/keithclarkcouk)
* **Textures** — https://freestocktextures.com/
by [@PinkOnHead](https://twitter.com/pinkonhead)
and [@PawelWoz](https://twitter.com/PawelWoz)
* **Sounds effects**  
  * http://www.littlerobotsoundfactory.com/
  * http://www.bigsoundbank.com/
  * http://opengameart.org/

* **Xbox controller driver for MacOs** —
[360Controller on GitHub](https://github.com/360Controller/360Controller'>)
