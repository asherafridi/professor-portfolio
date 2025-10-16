"use client"
import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RecommendationText = () => {
    useEffect(() => {
        const recTitles = gsap.timeline({
  scrollTrigger: {
    trigger: "#recommendations",
    start: "top 60%",
    end: "bottom bottom",
    scrub: 3,
  },
});

recTitles
  .from("#recommendations h1:first-child", { xPercent: 50, opacity: 0 }, 0)
  .from("#recommendations h1:last-child", { xPercent: -50, opacity: 0 }, 0);

// Reading text effect
document.querySelectorAll(".recommendation-text .description").forEach((desc) => {
  const words = desc.textContent.split(" ");
  desc.innerHTML = words.map((w) => `<span class="word">${w}</span>`).join(" ");
});

document.querySelectorAll(".recommendation-text").forEach((section) => {
  const words = section.querySelectorAll(".word");
  gsap.from(words, {
    y: 50,
    duration: 0.3,
    color: "#aaa",
    stagger: 0.05,
    scrollTrigger: {
      trigger: section,
      start: "top 50%",
      end: "bottom bottom",
      scrub: 1,
      // markers: true,
    },
  });
});

    }, []);

  return (
    <>
    <section id="recommendations"
        className="min-h-screen py-16 bg-white overflow-hidden flex flex-col items-center w-full justify-center">
        <h1 className="text-center text-9xl uppercase bebas-neue-regular w-full ">Recommendations</h1>
        <h1 className="text-center text-9xl uppercase bebas-neue-regular w-full">Received</h1>
    </section>
    <div className="recommendation-text min-h-screen py-16 bg-gray-100 overflow-hidden px-16">
        <i className="ri-double-quotes-l text-9xl"></i>
        <p className="text-4xl font-medium description leading-12">Prof Dr. Altaf Samo is a rare Nationalist intellect who
            returned to Pakistan
            after completing his education at world-renowned universities overseas. He is an MIT Entrepreneurship
            Teacher Fellow and MIT Launch Club mentor with over 20 years of experience as an Academician, Project Head,
            Consultant, and Trainer. Through his work at the Executive Development Centre at IBA University in Sukkur,
            Pakistan, he trains and empowers entrepreneurs, focusing on economically backward regions. His special
            emphasis on supporting women entrepreneurs is critical in a developing country like Pakistan. The LinkedIn
            post by Dr. Ajit on Dr. Altaf received significant attention, reaching nearly 5,500 professionals and
            receiving over 115 likes, comments, or shares. He is now considered a hero in India and is more than a
            friend to Dr. Ajit Patil. </p>
        <p className="mt-4 text-lg"><span className="font-bold">Accolades:</span> &apos;LinkedIn Top Voice Award&apos;, Management
            Consultant & Writer, Leadership Coach,
            Corporate & Academic Trainer, &apos;Top-75 Influential Marketing Professors in the World&apos;</p>
        <div>
            <p className="text-2xl font-bold mt-8">- Dr. Ajit Patil</p>
            <p className="text-md">Founder & CEO at Ajit Patil & Associates, India</p>
        </div>
    </div>

    <div className="recommendation-text min-h-screen py-16 bg-white overflow-hidden px-16 ">
        <i className="ri-double-quotes-l text-9xl"></i>
        <p className="text-4xl font-medium description leading-12">Altaf Samo is a rare professional who not only understands the language of modern project administration but also executes it effectively. Known for his integrity, Altaf manages multiple project elements seamlessly, making it look effortless. He is multi-talented and highly motivated, and it was a privilege to work with him on a long and challenging project. </p>
        <p className="mt-4 text-lg"><span className="font-bold">Accolades:</span> &apos;Financial Crime Expert Consultant&apos;</p>
        <div>
            <p className="text-2xl font-bold mt-8">- Rowan Bosworth-Davies</p>
            <p className="text-md">Colleague</p>
        </div>
    </div>
    </>
  )
}

export default RecommendationText