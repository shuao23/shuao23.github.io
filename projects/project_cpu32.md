---
layout: project
type: project
image: images/project-cover/large/cpu32-banner.png
title:  Design and Synthesis of CPUs [WIP]
id: cpu32
permalink: projects/cpu32
# All dates must be YYYY-MM-DD format!
date: "2018-03-25"
labels:
  - Verilog
  - Virtuoso
summary: A integrated circuit layout of a simple 32 bit CPU implemented in Verilog for ECE 429
---

  <img class="ui large centered rounded image" src="/images/cpu32/layout.png">
  <p>
    The project was about applying what I have learned about CMOS VLSI design throughout the semester to create a simple 32 bit cpu in Verilog. Throughout the semester, I learned about the process of designing complex CMOS systems from the micro-level to the macro-level. At the lowest level of the layout design, rectangular boxes of pwells, nwells, poly, and other components are drawn to create simple circuits such as gates and inverters. When designing a more complex system, hierarchical design was used where simple layouts were reused to create a more complex design. The design was also tested by using equivalence checking where the functionality of the design was compared to a more simple model (such as register-transfer level code written in Verilog).
  </p>