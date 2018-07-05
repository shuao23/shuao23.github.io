---
layout: project
type: project
image: images/project-cover/large/cpu32-banner.jpg
title:  Design and Synthesis of CPUs
id: cpu32
permalink: projects/cpu32
# All dates must be YYYY-MM-DD format!
date: "2018-03-25"
labels:
  - Verilog
  - Virtuoso
  - Design Compiler
  - Encounter
  - Formality
  - ASIC Design Flow
  - Standard Cell Design
summary: A integrated circuit layout of a simple 32 bit CPU implemented in Verilog for ECE 429
---

<img class="ui large centered rounded image" src="/images/cpu32/layout.jpg">

<p>
  The project was about applying what I have learned about CMOS VLSI design throughout the semester to create a simple 32 bit cpu in Verilog. Throughout the semester, I learned about the process of designing complex CMOS systems from the micro-level to the macro-level. At the lowest level of the layout design, rectangular boxes of pwells, nwells, poly, and other components are drawn to create simple circuits such as gates and inverters. When designing a more complex system, hierarchical design was used where simple layouts were reused. The designs were also tested by using equivalence checking where the functionality of the design was compared to a more simple model (such as RTL or register-transfer level code written in Verilog).
</p>

<img class="ui large centered rounded image" src="/images/cpu32/schematic.png">

<p>
  The simple CPU is made up of many smaller components as seen in the figure above. Each of the components were separately built with standard cells and was connected together in the cpu module. The memory/register module, which stores memory for the ALU to read and write, was created using an array of D flip-flops. The ALU had operations such as AND, OR, bit shift, load, jump, and addition. The addition was implemented with a carry look ahead adder to improve performance when compared to the ripple carry adder. The components were synthesized, placed and routed using design compiler, encounter and virtuoso. The output of the synthesizing process can be seen in the first image above. The output was then put into equivalence checking through Formality to compare and to insure correct functionality between the original RTL code.
</p>

<p>
  <p>
    
  </p>
</p>