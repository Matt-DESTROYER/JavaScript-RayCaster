# JavaScript-RayCaster
A RayCaster made using JavaScript. Raycasting was one of the first ever techniques used to create 3D games. Raycasting essentialy gets the distances between a player character and surrounding walls/objects and uses those distances to draw lines. The length of the line is determined by the distance from the player which creates the 3D look.

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
To add a level, create a new nested object named `level` and the level number (e.g. if I am creating a seventh level it must be named `level7`) (it must be named this or the renderer will fail to retrieve the level data). Then add an array and within that array add 32 seperate numbers. Each number will be a cube shaped area when rendered. Now to create your actual level you need to change those numbers to be one of the following:
- 0 (Invisible cube.)
- 1 (Basic blue brick cube.)
- 2 (Cage with skeleton cube.)
- 3 (Grey brick cube.)
- 4 (Wood plank cube.)
- 5 (Pink level finish cube.)
- (Note 0 and 5 are not solid.)
To edit a level skip the adding a nested object and simply replace the numbers with the ones you choose.
