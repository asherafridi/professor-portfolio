"use client"; // ✅ Important for GSAP in Next.js (client-side only)

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    // ✅ Run GSAP only on the client after the component mounts
    useEffect(() => {
        const scrollDownArrow = document.querySelector("#scroll-down i");

        if (scrollDownArrow) {
            gsap.to(scrollDownArrow, {
                y: -10,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });
        }


        const statsDiv = document.querySelectorAll(
            "#stats div, .intro-heading p, #scroll-down, #hero-image"
        );
        if (statsDiv) {
            gsap.from(statsDiv, {
                y: 50,
                delay: 1,
                duration: 0.3,
                opacity: 0,
                stagger: 0.1,
            });
        }


        // Split and animate hero name
        const heroName = document.querySelector("#hero-name");
        if (heroName) {
            const text = heroName.textContent.trim();
            heroName.innerHTML = text
                .split("")
                .map((char) => `<span class="a">${char}</span>`)
                .join("");

            gsap.from("#hero-name .a", {
                y: 50,
                duration: 0.3,
                ease: "back.out(1.7)",
                delay: 1,
                stagger: 0.05,
                opacity: 0,
            });
        }


        gsap.from("#about h2", {
  y: 50,
  duration: 0.1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#about h2",
    start: "top 90%",
    end: "bottom 60%",
    scrub: 3,
  },
});

gsap.from("#about p, #about blockquote, #about .center-ele, #about img, #about h3, #about i", {
  y: 50,
  duration: 0.3,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#about h2",
    start: "top 60%",
    end: "bottom 90%",
    scrub: 3,
  },
});

    }, []); // empty dependency → runs once on mount

    return (
        <div className="parallax">
            {/* Hero Section */}
            <section className="hero min-h-screen flex flex-col md:flex-row items-center justify-end md:px-16">
                <div className="w-full h-full md:h-screen md:w-2/5 flex flex-col items-start p-8 justify-around">
                    <div
                        id="stats"
                        className="hidden intro-stats md:flex items-center justify-space w-full"
                    >
                        <div className="w-1/2">
                            <blockquote className="font-light text-5xl">+15K</blockquote>
                            <p className="font-regular">&emsp;&emsp;&nbsp;Individuals Empowered</p>
                        </div>
                        <div className="w-1/2">
                            <blockquote className="font-light text-5xl">+50</blockquote>
                            <p className="font-regular">&emsp;&emsp;Projects Managed</p>
                        </div>
                    </div>

                    <div className="intro-heading mb-16 md:mb-0">
                        <p className="text-2xl md:text-3xl font-light">Hello, It&apos;s</p>
                        <h1
                            className="text-7xl md:text-9xl font-regular bebas-neue-regular"
                            id="hero-name"
                        >
                            Dr. Altaf <br/>Hussain Samo
                        </h1>
                    </div>

                    <div className="hidden md:flex items-center gap-2" id="scroll-down">
                        <p>Scroll down</p>
                        <i className="ri-arrow-down-long-line block"></i>
                    </div>
                </div>

                <div
                    id="hero-image"
                    className="w-full h-full md:min-h-screen md:w-3/5 flex flex-col items-end justify-end"
                >
                    <img
                        src="/img/altaf_hussain_samo.png"
                        className="w-full md:w-6/6 grayscale-10 brightness-110"
                        alt=""
                    />
                </div>
            </section>

            {/* About Section */}
            <section
                className="min-h-screen bg-background about flex flex-col md:flex-row gap-4 p-4 md:px-16 py-8"
                id="about"
            >
                <div className="px-4 md:px-0 w-full h-full md:w-3/8">
                    <h2 className="text-7xl font-500 mb-4 bebas-neue-regular">About Me</h2>
                    <p className="text-xl font-400 break-normal leading-9">
                        I head the Executive Development Center at Sukkur IBA University,
                        leading projects with global partners like USAID, UNDP, UNICEF, and
                        the EU. With 15,000+ lives impacted, my work drives
                        entrepreneurship, climate action, youth empowerment, and rural
                        development—recognized by the UN for its impact.
                    </p>
                    <img
                        src="/img/arrow.png"
                        className="hidden md:block w-4/5 opacity-20"
                        alt=""
                    />
                </div>

                <div className="hidden md:block w-full md:w-2/8">
                    <div className="center-ele bg-white shadow-md/5 rounded-md h-full p-8 py-8">
                        <img src="/img/globe.png" className="w-16 mb-4" alt="" />
                        <blockquote className="text-6xl">25+</blockquote>
                        <p className="text-xl font-400 break-normal leading-9 mt-4">
                            Collaborated with 20+ international partners, with 4 partnerships
                            involving UN-affiliated and globally recognized organizations
                        </p>
                        <img
                            src="/img/internation.jpg"
                            className="w-full rounded-md mt-8"
                            alt=""
                        />
                    </div>
                </div>

                <div className="w-full md:w-3/8">
                    <div className="flex items-center justify-center">
                        <img
                            src="/img/dr-altaf-samo.jpg"
                            className="hidden md:block w-full md:w-4/5 rounded-md"
                            alt=""
                        />
                    </div>

                    <div className="px-4 md:px-8 mt-16 text-xl leading-7">
                        <div className="flex gap-4 mb-4">
                            <i className="ri-gemini-fill"></i>
                            <p>
                                Transformative Leadership: Guided AACSB-accredited universities
                                to become catalysts for community empowerment and innovation,
                                leveraging education as the most powerful tool for social change.
                            </p>
                        </div>
                        <div className="flex gap-4 mb-4">
                            <i className="ri-gemini-fill"></i>
                            <p>
                                Bridge Builder & Connector – Built impactful networks by
                                fostering partnerships with USAID, UNDP, UNICEF, and leading
                                global universities, creating collaborations that drive lasting
                                impact.
                            </p>
                        </div>
                        <div className="flex gap-4 mb-4">
                            <i className="ri-gemini-fill"></i>
                            <p>
                                Future-Forward Visionary – Pioneered green entrepreneurship
                                programs that inspire leaders to align business success with
                                environmental responsibility, proving that profit and planet can
                                thrive together.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
