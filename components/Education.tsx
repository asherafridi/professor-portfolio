"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);

const Education = () => {
  useEffect(() => {
    gsap.defaults({ ease: "none" });

    // Pulse animation for the points
    const pulses = gsap.timeline({
      defaults: {
        scale: 2,
        autoAlpha: 1,
        transformOrigin: "center",
        ease: "elastic(2.5, 1)",
      },
    })
      .to(".ball02, .text01", {}, 0.84)
      .to(".ball03, .text02", {}, 1.36)
      .to(".ball04, .text03", {}, 1.92);

    // Main SVG motion timeline
    const main = gsap.timeline({
      scrollTrigger: {
        trigger: "#svg",
        scrub: true,
        start: "top center",
        end: "bottom center",
      },
    });

    main
      .to(".ball01", { autoAlpha: 1, duration: 0.05 })
      .from(".theLine", { drawSVG: 0, duration: 4 }, 0)
      .to(
        ".ball01",
        {
          motionPath: {
            path: ".theLine",
            align: ".theLine",
            alignOrigin: [0.5, 0.5],
          },
          duration: 4,
        },
        0
      )
      .add(pulses, 0);

    // Text fade-in animations
    gsap.from("#education h2", {
      y: 50,
      duration: 0.6,
      opacity: 0,
      scrollTrigger: {
        trigger: "#education h2",
        start: "top 70%",
        end: "bottom 90%",
        scrub: 1,
      },
    });

    gsap.from(
      "#education text, #education p, #education blockquote, #education img, #education h3, #education i",
      {
        y: 100,
        duration: 0.8,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#education svg",
          start: "top 80%",
          end: "bottom 90%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section className="education py-16" id="education">
      <div className="w-full flex justify-between gap-1/2 px-16">
        <div className="w-full md:w-1/3">
          <h2 className="text-7xl bebas-neue-regular">Education</h2>
        </div>
      </div>

      <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 1200">
        <text className="text01" x="550" y="200">
          I obtained my MBA in Finance from IBA, Pakistan in 1998.
        </text>
        <text className="text02" x="750" y="400">
          I completed my Master's in Management Sciences from the Institute of
          Administrative Enterprise, France in 2003.
        </text>
        <text className="text03" x="550" y="620">
          I earned my PhD in Entrepreneurship from CEDI, UUM, Malaysia in 2015.
        </text>

        <path
          className="theLine"
          d="M -5,0 Q 450 230 300 450 T 130 750 Q 100 850 300 1000 T 150 1200 T -100 1200"
          fill="none"
          stroke="black"
          strokeWidth="12px"
        />

        <circle className="ball ball01" r="20" cx="50" cy="100" fill="black" />
        <circle className="ball ball02" r="20" cx="278" cy="201" fill="black" />
        <circle className="ball ball03" r="20" cx="327" cy="405" fill="black" />
        <circle className="ball ball04" r="20" cx="193" cy="621" fill="black" />
      </svg>
    </section>
  );
};

export default Education;
