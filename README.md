[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=5665330&assignment_repo_type=AssignmentRepo)
# Assignment 1a
* Find anything in your surrounding whose name starts with C, H, or M (in English).
* Put the thing on a flat surface: table, floor, etc.
* Take photos of the thing from four different perspectives: top right, top left, top rear, top front (you are free to specify the angle).
* Create a README.md file consisting of the thing's name and the four photos you have taken.

* The JavaScript application comprises the definition of vertices that embody the shape of the object photographed in the previous assignment: Select two of the four photos.
* The definition of vertex includes position (x, y) and color (r, g, b) as represented on the selected photos.
* The shape as shown on one of the selected photos is rendered on the left side of the Canvas: Located in the clip space between X = -1.0 and X = 0.0 axes.
*  The shape as shown in another selected photo is rendered on the right side of the Canvas: Located in the clip space between X = 0.0 and X = 1.0 axes.
* The rendering result on the right side of the Canvas is animated vertically, bouncing back between the top and the bottom walls of the Canvas, with a speed of 0.0xxx units, where xxx is the last three digits of the NRP.

# The object : Cup 
* top right 
![top right](https://github.com/cg2021c/assignment-1-rihanfarih/blob/main/pictures/right.jpg)
* top left
 ![top left](https://github.com/cg2021c/assignment-1-rihanfarih/blob/main/pictures/left.jpg)
* top rear
 ![top rear](https://github.com/cg2021c/assignment-1-rihanfarih/blob/main/pictures/rear.jpg)
* top front
 ![top front](https://github.com/cg2021c/assignment-1-rihanfarih/blob/main/pictures/front.jpg)
 
 
 # Webgl Task : Top left - Top right model (assignment-1b)

 
 [View via Codepen](https://codepen.io/rihanfarih/pen/vYZqjYz)
 

 
 thank you :)

# Task 3 (assignment-1c)
Please continue your WebGL application on the same repository as the previous assignment (https://classroom.github.com/a/X2bMi7wC) with the following specifications: 

- [x] Create a 3D definition of the object being photographed in your very first assignment. 
- [x] Draw the object twice—on the left and on the right half of the canvas—with the two perspectives corresponding to the two photos selected in the previous assignment. 
- [x] Add a little cube in the center of canvas, right between the two objects.
- [x] Set the cube to glow white and become a light source.
- [x] Add an ambient effect with an intensity of 0.abc to both objects, where the value of abc is the last three digits of your Student ID plus 200.
- [x] Add a diffuse effect to both objects.
- [x] Add a plastic specular effect for the left object.
- [x] Add a metal specular effect for the object on the right.
- [x] Set the cube so that it can be moved upward with the W key-button and downward with the S key-button.
- [x] Set the camera to move leftward and rightward linearly (not orbitally) using the A and D key-buttons.
## reference link for making this assignment
https://cse.taylor.edu/~jdenning/classes/cos350/slides/08_Cylinders.html (for making cylinder and base code)


https://github.com/cg2021c/learn-webgl-hadziq (for lighting , moving , etc...)

# Hackathon
1. Clone or download your assignment-1-........ repository from GitHub to the local computer. This repository shall become the initial project of today's Hackathon. Change the HTML document title into "My Lovely WebGL - Your Student ID". Commit with a message of "Challenge #1", then push it back to the GitHub repository.
2. Delete all the codes with respect to model transformations that are responsible for the animation in the scene and keyboard's event handlers. Commit with a message of "Challenge #2", then push the changes to GitHub.
3. Add a plane whose color is #xyzxyz (note: this is a hex code with xyz is the last three digits of your student ID) and area is 20x20 units. This plane shall be positioned as a base of the main objects you have created. Commit with a message of "Challenge #3", then push the changes to GitHub. 
4. Apply a keyboard interaction assigning the SPACE key to be an ON/off switch. When it is ON, the little cube in the center lights up and all the shadings (ambient, diffuse, and specular) are on. When it is off, the cube goes out (it does not glow) and only ambient shading remains. Commit with a message of "Challenge #4", then push the changes to GitHub.
5. Create an interactive animation using keyboard. When W key is pressed, the cube moves to Z-. When S key is pressed, the cube moves to Z+. When A key is pressed, the cube moves to X-. When D is pressed, the cube moves to X+. When Up key is pressed, the camera zooms in. When Down key is pressed, the camera zooms out. When Left or Right key is pressed, the camera move to leftward or right ward respectively in an orbital manner about the center of the space. Commit with a message of "Challenge #5", then push the changes to GitHub.
6. Create an interactive animation with mouse so that the cube orbits about the center of the space (use virtual trackball or quaternion approach as taught last week). Commit with a message of "Challenge #6", then push the changes to GitHub.

