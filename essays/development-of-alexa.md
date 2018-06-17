---
layout: essay
type: essay
title: The Development of Project Alexa [WIP]
id: development-of-alexa
permalink: essays/2018/05/19/development-of-alexa
# All dates must be YYYY-MM-DD format!
date: "2018-05-19"
labels:
  - Unity3D
  - C#
  - Game Development
  - Game Design
  - Animation
  - Visual Studio
---

<div class="paragraph">
  <img class="ui huge centered rounded image" src="/images/alexa/gameplay.webp">
</div>

<h2>Introduction</h2>

<p>
  Project Alexa was started as a personal summer project to understand the flow for a 3d game development pipeline. When creating a game, there are many steps and processes involved from importing art assets to managing game scripts. Through the experience from this project I was able to learn what it takes to make a fun and intuitive video game. The team consisted of  <a href="https://andku23.github.io" target="_blank">Andrew Kurano</a> and I, a total of two people. I was the lead programmer, and Andrew was the lead artist. Since we only had two people, we shared many other roles that were necessary and also gave each other feedback for our work.
</p>

<div class="ui section divider"></div>

<h2>Development of Version 1</h2>

<div class="paragraph">
  <img class="ui huge centered rounded image" src="/images/alexa/alexa-v1.webp">
  <div class="image-caption paragraph">Gameplay of Alexa version 1</div>
</div>

<h3>Planning</h3>

<p>
  The first couple of days were spent on planning for the game. Since we had a limited time to work on the project (during summer break), we decided that we should split the development into different versions. We named the summer portion of the project version 1, so we can further improve on the project even after the summer has ended. During the planning phase, we discussed what can we finish to put into version 1 and placed deadlines for each milestone. The timeline for the project was created in a project management software which can be seen in the image below. Mainly speaking, modeling and animation tasks were done by Andrew and coding tasks were done by me.
</p>

<div class="paragraph">
  <img class="ui huge centered rounded image" src="/images/alexa/plan.webp">
  <div class="image-caption paragraph">Project timeline (originally made in Microsoft Project)</div>
</div>

<p>
  During the first few weeks of development, steady progress was made, and we thought there was more than enough time to complete the project. However as the weeks flew by, we realized that our progress was slower than expected, and due dates were repeatingly being pushed back. I was working on the camera rig script (which controls the third person camera) when I was supposed to be working on the character motor script (which controls the player and its animations) according to the initial plan. Since this was our first major 3d Unity project it may have been difficult for us to predict the amount of time needed for each task. Although the idea of the project being too ambitious crossed our minds, Andrew and I worked our butt off to complete this project before the summer ends.
</p>

<h3>Camera System</h3>

<div class="paragraph">
  <img class="ui huge centered rounded image" src="/images/alexa/fov.webp">
  <div class="image-caption paragraph">Field of view change and smooth follow</div>
</div>

<p>
  I believe that in order to have a good camera system, the player always needs to have a direct line of site from the character, and the control needs to feel seamless and smooth so that it becomes second nature for the user. In order to accomplish this, I first started by writing the code to smoothly follow the player (the behavior can be seen above). Smooth follow is when the camera does not follow the exact movements of the player. Instead, the camera is always trying to catch up with the player. The speed for the camera to catch up depends on the distance between the current camera position and the ideal position (where the camera was supposed to be without smooth follow). The farther the distance, the faster the camera tries to catch up. As a result, small rapid movements of the player will not translate to small rapid movements of the camera. However during testing, this implementation worked well in walking and running speeds, but if the subject moves extremely fast, the camera would fall behind too much and loose site of the subject. I solved this problem by clamping the distance between the subject and camera with a max value.
</p>

<p>
  After testing the camera rig so far in high speeds, I wanted some sort of visual cues on how fast the player was moving. I already knew that a wider field of view increase the sense of speed from a film making class I have taken before. I first increased the field of view of the camera but I did not feel the impact that I wanted. Next, I experimented with changing the field of view based on speed. The result (which can be seen in the image above) had a much better impact and I could tell the change of speed was happening. 
</p>

<div class="paragraph">
  <img class="ui huge centered rounded image" src="/images/alexa/small-space-camera.webp">
  <div class="image-caption paragraph">Demo stage demonstrating the camera rig in a narrow ally way</div>
</div>

<p>
  Next, I worked on always maintaining a direct line of site of the character from the camera. I implemented this by casting a ray from the character to the camera. If there was anything between the camera and the character, the camera adjusted the distance from the character so it would appear in front of the blocking object. Next, I smoothed the change in distance value using the same function I wrote for smooth follow. When the line of site is lost, the camera will immediately dolly forward to maintain the view of the character. After the blocking object has been cleared, the camera will dolly back slowly to its original distance. The behaviour can be seen in the image above.
</p>


<div class="paragraph rounded centered slide-show" style="max-width: 800px;" tabindex="1">
  <div class="slide-show-view">
    <div class="cursor slide-container">
      <img class="ref slide-content" src="/images/alexa/camera-shake-comparison.webp">
      <div class="slide-content" style="background-image: url(/images/alexa/perlin.webp);"></div>
      <div class="slide-content" style="background-image: url(/images/alexa/damped-sine.webp);"></div>
      <div class="slide-content" style="background-image: url(/images/alexa/sword-impact.webp);"></div>
    </div>
    <a class="cursor left slide-navi">
      <div class="slide-navi-bkgnd"></div>
      <div class="slide-navi-arrow">❮</div>
    </a>
    <a class="cursor right slide-navi">
      <div class="slide-navi-bkgnd"></div>
      <div class="slide-navi-arrow">❯</div>
    </a>
    <div class="progress"></div>
  </div>

  <div class="slide-previews-container">
    <div class="slide-previews">
        <img class="slide-preview" src="/images/alexa/camera-shake-comparison.webp">
        <img class="slide-preview" src="/images/alexa/perlin-preview.webp">
        <img class="slide-preview" src="/images/alexa/damped-sine-preview.webp">
        <img class="slide-preview" src="/images/alexa/sword-impact-preview.webp">
    </div>
    <div class="right small fadeout"></div>
    <div class="left small fadeout"></div>
  </div>

  <div class="slide-caption-view">
    <div class="slide-caption-container">
      <div class="slide-captions">
        <div class="active slide-caption"></div>
        <div class="slide-caption"></div>
      </div>
      <div class="active gradient"></div>
    </div>
    <div class="cursor active read-more">
      <i class="ui down arrow icon"></i>Read More
    </div>
  </div>
</div>

<p>
  Lastly, I got a request from the artist to implement a camera shake to emphasize heavy impact. Camera shake works by applying a noise to the original position so it moves as if a shockwave had hit the camera. The noise needs to be a function of time so the camera will shake in a smooth manner. If the noise function is too random, the camera will appear to be teleporting randomly instead of properly shaking. Two functions that are well suited for camera shake are perlin noise and damped sine functions. These two different shake functions give a different sense of impact as seen in the images above. I implemented both functions and let the artist choose which function is better for the situation. In the final game, the camera shake was used when the enemy swinged the floor down into the ground which increased the feel for a much greater impact. 
</p>

<h3>Character Controller System</h3>

<div class="paragraph">
  <img class="ui huge centered rounded image" src="/images/alexa/debug-view-2.webp">
  <div class="image-caption paragraph">Testing area for the character controller system</div>
</div>

<div class="paragraph">
  <img class="ui huge centered rounded image" src="/images/alexa/testing-block.webp">
  <div class="image-caption paragraph">Testing blocking angles for right and left block</div>
</div>

<div class="paragraph">
  <img class="ui huge centered rounded image" src="/images/alexa/testing-onhit.webp">
  <div class="image-caption paragraph">Testing on-hit event by spawning on-hit particles</div>
</div>

<div class="paragraph">
  <img class="ui huge centered rounded image" src="/images/alexa/testing-slide.webp">
  <div class="image-caption paragraph">Testing the athletic ability of Alexa</div>
</div>

<p>

</p>

<h3>Enemy AI System</h3>

<div class="paragraph">
  <img class="ui huge centered rounded image" src="/images/alexa/debug-view-1.webp">
  <div class="image-caption paragraph">Debug view of enemy AI</div>
</div>

<p>

</p>

<h3>Summary of Version 1</h3>

<p>
  Insert something along the lines of "although games are known for there delays"
</p>

<div class="ui section divider"></div>

<h2>Development of Version 2</h2>

<div class="paragraph">
  <img class="ui huge centered rounded image" src="/images/alexa/alexa-v2.webp">
  <div class="image-caption paragraph">Gameplay of Alexa version 2</div>
</div>

<div class="ui section divider"></div>

<h2>Conclusion</h2>

<div class="player-container-16-9">
  <iframe class="embedded-player" width="100%" height="100%" src="https://www.youtube.com/embed/gkec_Adqm7M?rel=0&amp;" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<p>
  
</p>

<p style="width: 100%; text-align: right; margin-top: 3rem;">
  Go to <a href="/projects/alexa">project overview <i class="left arrow icon"></i></a>
</p>

