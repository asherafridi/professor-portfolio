"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const footerText = document.querySelector("#footer-text");

    if (footerText) {
      const text = footerText.textContent.trim();
      footerText.innerHTML = text
  .split("")
  .map((char) => {
    if (char === " ") return `<span class="a inline-block">&nbsp;</span>`;
    return `<span class="a inline-block">${char}</span>`;
  })
  .join("");

      gsap.from("#footer-text .a", {
        y: 50,
        opacity: 0,
        delay: 1,
        duration: 0.1,
        ease: "back.out(1.7)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#footer-text",
          start: "top 80%", // animation starts when footer text enters viewport
          end: "bottom bottom", // animation ends when footer text is fully in viewport
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  return (
    <>
      <section className="h-[500px] bg-gray-100 text-black border-t border-b border-gray-400 flex">
        <div className="w-1/4 border-r border-gray-400 h-full flex flex-col justify-end py-10 px-8">
          <p className="text-md leading-7 mt-4">
            Dr. Altaf Hussain Samo is a visionary leader and executive,
            spearheading growth and innovation at the Executive Development
            Center (EDC) of Sukkur IBA University, an esteemed institution
            accredited by AACSB.
          </p>
        </div>

        <div className="w-1/4 px-8 py-10 flex flex-col justify-between border-r border-gray-400">
          <h1 className="text-sm uppercase">&#9632; Quick Links</h1>
          <ul className="text-md uppercase">
            <li className="mt-1">
              <Link href="/" className="hover:underline underline-offset-4">
                Home
              </Link>
            </li>
            <li className="mt-1">
              <Link href="#" className="hover:underline underline-offset-4">
                Certificates
              </Link>
            </li>
            <li className="mt-1">
              <Link href="#" className="hover:underline underline-offset-4">
                Honor & Awards
              </Link>
            </li>
            <li className="mt-1">
              <Link href="#" className="hover:underline underline-offset-4">
                Publications
              </Link>
            </li>
            <li className="mt-1">
              <Link href="#" className="hover:underline underline-offset-4">
                Skills
              </Link>
            </li>
            <li className="mt-1">
              <Link href="#" className="hover:underline underline-offset-4">
                Student Resources
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-1/4 px-8 py-10 flex flex-col justify-between border-r border-gray-400">
          <h1 className="text-sm uppercase">&#9632; Social Links</h1>
          <ul className="text-md uppercase">
            <li className="mt-1">
              <Link href="/" className="hover:underline underline-offset-4">
                Facebook
              </Link>
            </li>
            <li className="mt-1">
              <Link href="/" className="hover:underline underline-offset-4">
                Instagram
              </Link>
            </li>
            <li className="mt-1">
              <Link href="#" className="hover:underline underline-offset-4">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-1/4 px-8 py-10 flex flex-col justify-between">
          <h1 className="text-sm uppercase">&#9632; More Details</h1>
          <div className="text-md">
            <p className="font-bold uppercase mb-2">Email</p>
            <Link href="/" className="hover:underline underline-offset-4 mt-4">
              draltafsamo@gmail.com
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 text-black flex justify-center items-center overflow-hidden">
        <h2
          className="bebas-neue-regular text-[20vw]"
          id="footer-text"
        >
          Dr. Altaf Samo
        </h2>
      </section>
    </>
  );
};

export default Footer;
