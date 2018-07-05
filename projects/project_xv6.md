---
layout: project
type: project
image: images/project-cover/large/xv6-banner.jpg
title:  Extending xv6
id: xv6
permalink: projects/xv6
# All dates must be YYYY-MM-DD format!
date: "2017-08-20"
labels:
  - Low-Level Programming
  - C
  - OS
summary: A project to extend the features of xv6, a bare-bones operating system 
---

<img src="/images/xv6/syscall.jpg" alt="" class="ui big rounded centered image">

<p>
  I modified the xv6 operating system to demonstrate what I have learned in CS 451 (Operating Systems) about how an operating system functions. The xv6 operating system is a reimplementation of sixth edition Unix written in ANSI C. Although xv6 is simple when compared to modern operating systems, xv6 has all of the important features that a operating system needs to have. I started this project by understanding how system calls (calls to the operating system) worked through tracing through the source code. After figuring out how the system calls worked, I extended xv6 by adding new syscalls such as uv2p (user virtual address to physical address), and ps (get process state). Additionally, I added extent, a new file system, to the operating system. The extent file system works by storing consecutive references to blocks similar to an array. 
</p>

<p>
  This project helped me further improve my knowledge of low-level programming and how an operating system works. In addition to this course, I have also taken a course on microcomputer which covered how the hardware functions for system calls through the use of supervisor mode. After completing this project, I can write more efficient higher level programs using the experience that I have with operating systems.
</p>