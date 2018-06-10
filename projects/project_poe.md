---
layout: project
type: project
image: images/project-cover/large/poe-banner.png
title:  Power over Ethernet [WIP]
id: poe
permalink: projects/poe
# All dates must be YYYY-MM-DD format!
date: "2018-01-08"
labels:
  - Web Development
  - HTML/CSS
  - Javascript
  - Powerhubb
  - Hubbell
summary: An inter-professional projects program to explore the benefits of power over ethernet 
---

<img src="/images/poe/schematic.jpg" class="ui big centered rounded image">

<p>
  The goal of the project was to explore the benefits of powering LED fixtures using power over ethernet (PoE) when compared to traditional AC power. In a traditional lighting system, the high voltage AC lines need to be placed in electrical conduit specified by the US National Electrical Code. However since ethernet cables are used to pass DC with much lower voltage, the regulation for ethernet cables are much more lenient. The ethernet cables can be run through walls and ceilings without the need for conduits and special licence to install them. As a result, the installation cost is reduced and the installation is much more flexible. In addition to power, the PoE system delvers data similar to standard ethernet protocols.
</p>

<p>
  Since a single cable can carry data and power, it also adds the benefit of fine control of lights that are connected. The PoE lights are connected to a node which separates the power from the data supplied from the ethernet cable. In addition to the lights, the node can also connect sensors and switches which can control specific set of lights. The node is then connected to a special switch that can superimpose the power on the ethernet cables. In addition to the powered devices, a gateway server is connected to the same network to control all of the PoE lights. The server controls what switches and sensors effect which lights and the server can be controlled remotely through the cloud. The setup for this project can be seen in the schematic above.
</p>

<p>
  For this project, power over ethernet was demonstrated by creating scaled-down models of different environments. The project was worked on as a team which separated into smaller groups to work on construction, data analysis, networking, and software development. The construction team was responsible for building a small model for an office setting and school setting. The data analysis team took existing data for PoE lighting and traditional lighting for researching the characteristics of PoE lighting. The networking team was responsible for connecting and setting up the nodes and the switch. I was in the software development team which was responsible to develop a website to control the lights through a virtual switch. Although the server comes with a software to control the lights, it gives too much privilege to the user. The website serves it's purpose by providing a simplified stripped down version of the software to control only the lights which the user has access to. The website communicated with the server through the REST API provided by Hubbell. 
</p>

<p>
  Through this project I have learned the importance of PoE lighting and the impact that it brings for smart lighting choices. The flexibility of the PoE lighting brings control to each individual light fixture. Since switches and sensors are also connected to the server, the lights that the it controls can be modified at anytime without any hardware changes. Additionally, similar to what our team did in this project, the lights can be controlled through a virtual switch with a network capable device. With the power that the PoE system brings, there is a new possibility for smart lighting.
</p>

<div class="ui section divider"></div>

<h2>Screenshots</h2>

<div class="paragraph rounded centered slide-show" style="max-width: 800px;" tabindex="1">
  <div class="slide-show-view">
    <div class="cursor slide-container">
      <div class="ref slide-content" style="background-image: url(/images/poe/screenshot-home.PNG); height: 400px;"></div>
      <div class="slide-content" style="background-image: url(/images/poe/screenshot-switch.PNG);"></div>
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
        <img class="slide-preview" src="/images/poe/screenshot-home.PNG">
        <img class="slide-preview" src="/images/poe/screenshot-switch.PNG">
    </div>
    <div class="right small fadeout"></div>
    <div class="left small fadeout"></div>
  </div>

  <div class="slide-caption-view">
    <div class="slide-caption-container">
      <div class="slide-captions">
        <div class="active slide-caption">
          <h3 class="heading">Home Page</h3>
          <div class="desc">The home page that the programming team created for controlling the PoE lights. The two button below the introduction section is for connecting two the two environments that the construction team built. The school environment has special LEDs that has variable color temperature. The office environment has a daylight sensor to measure the amount of natural light so the lights can be dimmed when the sun is lighting the room.</div>
        </div>
        <div class="slide-caption">
          <h3 class="heading">Virtual Switch</h3>
          <div class="desc">The virtual switch page for the school environment which gives the user the control over the properties of light such as intensity and color temperature. </div>
        </div>
      </div>
      <div class="active gradient"></div>
    </div>
    <div class="cursor active read-more">
      <i class="ui down arrow icon"></i>Read More
    </div>
  </div>
</div>