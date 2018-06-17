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
  <img class="ui big centered rounded image" src="/images/alexa/alexa-v1.webp">
  <div class="image-caption paragraph">Gameplay of Alexa version 1</div>
</div>

<h3>Planning</h3>

<p>
  The first couple of days were spent on planning for the game. Since we had a limited time to work on the project (during summer break), we decided that we should split the development into different versions. We named the summer portion of the project version 1, so we can further improve on the project even after the summer has ended. During the planning phase, we discussed what can we finish to put into version 1 and placed deadlines for each milestone. The timeline for the project was created in a project management software which can be seen in the image below. Mainly speaking, modeling and animation tasks were done by Andrew and coding tasks were done by me.
</p>

<div class="paragraph">
  <img class="ui huge centered rounded image" src="/images/alexa/plan.webp">
</div>

<h3>Camera System</h3>

<p>

</p>

<div class="paragraph">
  <img class="ui big centered rounded image" src="/images/alexa/fov.webp">
  <div class="image-caption paragraph">Fov change and smooth follow</div>
</div>

<div class="paragraph">
  <img class="ui big centered rounded image" src="/images/alexa/small-space-camera.webp">
  <div class="image-caption paragraph">Demo stage demonstrating the camera rig in a narrow ally way</div>
</div>


<div class="paragraph rounded centered slide-show" style="max-width: 800px;" tabindex="1">
  <div class="slide-show-view">
    <div class="cursor slide-container">
      <img class="ref slide-content" src="/images/alexa/camera-shake-comparison.webp">
      <div class="slide-content" style="background-image: url(/images/alexa/perlin.webp);"></div>
      <div class="slide-content" style="background-image: url(/images/alexa/damped-sine.webp);"></div>
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
        <img class="slide-preview" src="/images/alexa/perlin.webp">
        <img class="slide-preview" src="/images/alexa/damped-sine.webp">
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

<h3>Character Controller System</h3>

<div class="paragraph">
  <img class="ui big centered rounded image" src="/images/alexa/debug-view-2.webp">
  <div class="image-caption paragraph">Testing area to test character controller system</div>
</div>

<p>

</p>

<h3>Enemy AI System</h3>

<div class="paragraph">
  <img class="ui big centered rounded image" src="/images/alexa/debug-view-1.webp">
  <div class="image-caption paragraph">Debug view of enemy AI</div>
</div>

<p>

</p>

<h3>Summary of Version 1</h3>

<p>

</p>

<div class="ui section divider"></div>

<h2>Development of Version 2</h2>

<div class="paragraph">
  <img class="ui big centered rounded image" src="/images/alexa/alexa-v2.webp">
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

