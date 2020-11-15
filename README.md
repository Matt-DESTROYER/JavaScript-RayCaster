# JavaScript-RayCaster
A RayCaster made using JavaScript.

# Try it out
Want to see the engine in action? Visit the this link:
simple-javascript-raycaster.vercel.app

# Controls
Movement:
- Forward: W
- Backward: S
- Left: A
- Right: D

Direction:
- Left: Left Arrow Key
- Right: Right Arrow Key

# Customise
Create your own levels:
- All level data is stored in the `levelData` object.
- To add a level, create a new nested object named `level` and the level number (must be named this or the renderer will fail to get the data). Then add an array and within that array add 32 seperate numbers. Each number will be a cube shaped area when rendered. Now to create your actual level you need to change those numbers to be one of the following:
- 0 (Invisible cube.)
- 1 (Basic blue brick cube.)
- 2 (Cage with skeleton cube.)
- 3 (Grey brick cube.)
- 4 (Wood plank cube.)
- 5 (Pink level finish cube.)
- (Note 0 and 5 are not solid.)

- To edit a level skip the adding a nested object and simply replace the numbers with the ones you choose.
