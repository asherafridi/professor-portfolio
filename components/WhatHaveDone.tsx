"use client"
import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhatHaveDone = () => {

    useEffect(() => {
        gsap.from("#done-heading", {
  y: -100,
  duration: 0.3,
  scale: 4,
  scrollTrigger: {
    trigger: "#done-heading",
    start: "top 50%",
    end: "bottom 90%",
    scrub: 1,
  },
});
    }, []);

  return (
    <section className="min-h-screen py-16 bg-white overflow-hidden pt-[400px]">
        <h1 id="done-heading" className="text-center text-7xl bebas-neue-regular">WHAT I HAVE<br/>RECIEVED IN THIS<br/>JOURNEY
        </h1>
    </section>
  )
}

export default WhatHaveDone