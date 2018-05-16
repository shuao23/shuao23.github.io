---
layout: project
type: project
image: images/project-cover/large/shapeshifter_banner.png
title: Shape Shifter
permalink: projects/shapeshifter
# All dates must be YYYY-MM-DD format!
date: "2016-06-01" 
labels:
  - Unity3D
  - C#
  - Game Development
  - Summer Project
summary: A personal summer project to develop an android game on Unity3d. 
---
<div class="player-container-16-9">
  <iframe class="embedded-player" width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/QfJwRI0-1ho?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
<div class="image-caption paragraph">Trailer showing the gameplay of Shape Shifter</div>

<p>
Shape Shifter is an Android game built with Unity3D in C#. The game was one of my personal projects during the summer of 2016. The project started off with brainstorming and creating as many game concepts on a piece of paper. After thinking of many ideas, the most interesting games were put into Unity as a prototype. The most entertaining prototype was a game where the player morphs into a triangle, square, pentagon, or a hexagon, to match the edges which flies towards the player. This game is now known as <i>Shape Shifter</i>. The purpose of this summer project was to experience the whole process of developing a game to publishing it to the <a href="https://play.google.com/store/apps/details?id=com.Azuligno.ShapeShifter" target="_blank">Google Play Store</a>. 
</p>

<div class="ui section divider"></div>

<h2>Brainstorming</h2>

<p>
  The project started off by brainstorming ideas on to a piece of paper and sketching out many concepts as possible. Some of the game concepts that made it into the prototyping stage are:
</p>

<div class="horizontal mediumSmall images">
    <img class="ui rounded image" src="/images/shape-shifter/prototype-1.jpg" tittle="Color Balance Prototype">
    <img class="ui rounded image" src="/images/shape-shifter/prototype-2.jpg" tittle="Monkey Climb Prototype">
</div>  
<div class="image-caption paragraph">Screenshots of the prototypes for Color Balance and Monkey Climb</div>

<ul>
  <li>
    <b>Color Balance</b> - Connect colorful circles together to try to stop them from growing. The circles will continue to grow unless it is connected to another circle with an opposite color. For example, if a red circle and a green circle is connected together, the two colors will cancel each other and start to shrink. The game ends when the colorful circles fill up the screen and the score is calculated by the amount of time the player was able to survive. The prototype did not feel fun to play and finding the right circle with opposite colors were confusing for the players.
  </li>
  <li>
    <b>Monkey Climb</b> - Navigate the cheerful monkey up the tree that seems to be growing infinitely into the sky. Use your fingers to control the monkey by swiping your fingers up on the screen. The direction, and speed will determine how the monkey will jump. The prototype was more difficult than you think since the player can not control the monkey in midair once it leaves the branch.
  </li>
  <li>
    <b>Shape Shifter</b> - Morph your shape into a triangle, square, pentagon, or a hexagon to dodge the incoming edges flying towards the shape.
  </li>
</ul>

<p>
  The Monkey Climb and Shape Shifter prototypes were the most fun to play out of all of the prototypes that I had built. After contemplating on which prototype I should continue to make it into a full game, I decided to go with Shape Shifter. Although the Monkey Climb prototype was fun to play, there were too many obstacles at that time (such as creating higher quality art assets and problems with the platform spawning algorithm) for me to finish before the summer ends.
</p>

<div class="ui section divider"></div>

<h2>Development</h2>

<div class="paragraph">
  <img class="ui centered large rounded image" src="/images/shape-shifter/main-menu.png">
</div>

<p>
  The development of Shape Shifter can be split into smaller parts. The development first began from the prototyping stages where the game mechanics were implemented. The game mechanics include the generation of the morphing shape mesh, the mechanics for the  flying edges and the design of the user interface such as the main menu seen above. Next, the Google Play system was integrated into the project and lastly, the game was exported and published to the Play Store.
</p>

<h3>
  Gameplay System
</h3>

<p>
  The gameplay system was almost completed by the end of the prototyping phase. The morphing shape was created by dividing a unit circle into the number of sides needed as seen in the code below.
</p>

```cs
public Vector3 GetVertexPos(float shapeSides, int vertexIdx) {
    float angle = ((vertexIdx * 360 / shapeSides) + _startAngle) * Mathf.Deg2Rad;
    return new Vector3(Mathf.Cos(angle), Mathf.Sin(angle), 0);
}
```

<p>
  The parameter shapeSides is the number of sides the generated shape is supposed to have. The type of shapeSides is a float instead of an integer since the game will interpolate between shapes with different number of sides. The parameter vertexIdx is the nth vertex in the shape and should be less than or equal to the ceiling of shapeSides. When generating the mesh, a loop will iterate through each available vertices and create a triangle face using the current, next, and root vertices.
</p>

<div class="ui hidden divider"></div>

<div class="paragraph">
  <img class="ui centered large rounded image" src="/images/shape-shifter/edges.png">
  <div class="image-caption">The edges used in Shape Shifter, rendered in Blender</div>
</div>

<p>
  The flying edges were modeled in blender as seen above. As the number of sides increases, the angles of the edges increases and the length decreases. The player will look for these small differences in the angle and length to determine which shape the edge is for. The edge spawning algorithm increases it's difficulty as time passes. The spawning algorithm spawns a set of edges for a random shape (triangle, square, pentagon, or a hexagon). The number of edges per set is also set as random (i.e. a triangle has a maximum of three edges but the set can contain only one or all of the edges). The difficulty of the algorithm is determined by the speed of the flying edges and the number of edges spawned at once. When all the edges for a shape is spawned at once, it is easy to see what shape it belongs to, but it is difficult if only one edge spawns.
</p>

<div class="ui hidden divider"></div>

<div class="paragraph">
  <img class="ui centered large rounded image" src="/images/shape-shifter/gameplay.png">
</div>

<p>
  The flying edges uses a custom unlit shader written in C for graphics in order to lower the rendering cost as much as possible. The custom unlit shader adds the ability to have a different color for the inside of the edge such as making the inside yellow seen in the screenshot above. Since the player has three lives for each run and the remaining lives is represented by the color of the shape, coloring the inside of the edges gives an emphasis on the remaining lives. Additionally, since I wanted the morphing shape to be glowing, coloring the inside of the edges according to the color of the shape created a cool lighting effect. The fake lighting was implemented by using the vertex color as a mask to determine which vertex should be lit by the fake light. The vertex and fragment shader can be seen below. The parameters for the vertex and fragment shader are structs to hold the vertex position, color, and UV coordinates for each vertex and fragment respectively.
</p>

```c
//Parameters
fixed4 _ColorIn;    //The color for the fake lighting
fixed4 _ColorOut;   //The color for the non-lit area
float _Pow;         //Spread of ambient occlusion

//vertex shader
v2f vert (appdata v)
{
  v2f o;
  o.vertex = UnityObjectToClipPos(v.vertex);
  o.color.xyz = v.color * _ColorOut + (fixed4(1, 1, 1, 1) - v.color) * _ColorIn;
  o.color.w = _ColorIn.w;
  UNITY_TRANSFER_FOG(o,o.vertex);
  o.uv = v.uv;
  return o;
}

//fragment (pixel) shader
fixed4 frag (v2f i) : SV_Target
{
  // apply fog
  fixed4 alpha = fixed4(1, 0, 0, 0);
  UNITY_APPLY_FOG(i.fogCoord, alpha);
  i.color.w = alpha.x;
  i.color.xyz *= 1 - _ColorOut.w * pow(i.uv.x, _Pow);
  return i.color;
}
```
<p>
  The custom unlit shader also adds fake ambient occlusion to the inner corners of the edge. This gave the edges a more crisp look for the players to see. The fake ambient occlusion uses UV coordinates (which is applied during the modeling process) to determine how much shadow should each pixel should get. The UV coordinates is passed through a power function to control the spread of the ambient occlusion.
</p>

<h3>
  Integrating Third Party Systems
</h3>

<div class="paragraph">
  <img class="ui centered large rounded image" src="/images/shape-shifter/highscore.png">
  <div class="image-caption">Scoreboard in Shape Shifter</div>
</div>

<p>
  One of the most interesting part of the development of Shape Shifter was integrating the Google Play system into the game. I implemented a global score board using the Google Play API. Integrating the Google Play system was interesting because there were many different dependencies and steps that I had to take for the system to work properly. In addition I integrated Unity Ads to the game as well. When comparing the difficulty of integrating the two systems,the Unity Ads system was much more simple, perhaps because Unity Ads is a proprietary system. However, I realized the importance of ease of integration when writing systems/frameworks and the careful planning needed before hand to make it work.
</p>

<h3>
  Publishing
</h3>

<p>
  This was my first experience publishing a software to the public. The process involved creating graphics for the icon, capturing fun gameplay screenshots, and creating a trailer for the game. Additionally, I had to be careful for legal issues such as the target age for the app. Ideally when releasing a game to the public, I would need to spend more time and money towards marketing the game. However, since this was a summer project, the experience of the whole process was more important than the number of installs.
</p>


<div class="ui section divider"></div>

<h2>Conclusion</h2>

<p>
  Developing Shape Shifter for my personal summer project was a good experience for me. I was able to learn the whole process of creating and publishing a game. Additionally I gave myself a deadline to finish before the summer ends. This gave me the motivation to complete the summer project. When working on projects, it is easy to overload the project with unrealistic expectations. However, by setting a solid deadline and through rapid prototyping, I was able create a fun mobile game on time.
</p>

<p style="text-align: right;">
  Shape Shifter is on the <a href="https://play.google.com/store/apps/details?id=com.Azuligno.ShapeShifter" target="_blank">Google Play Store</a>
</p>

<div class="paragraph">
  <img class="ui fluid rounded image" src="/images/shape-shifter/cover-photo.png">
</div>


