"use client"
import React, { useEffect } from 'react'
import { gsap } from 'gsap';

const Preloader = () => {
    useEffect(() => {
        window.addEventListener("load", () => {
            const tl = gsap.timeline({ defaults: { ease: "power2.inOut", duration: 1 } });

            tl.to(".preloader-top", { yPercent: -100 })
                .to(".preloader-bottom", { yPercent: 100 }, "<")
                .to("#preloader", { opacity: 0, pointerEvents: "none", duration: 0.5 })
                .from("#main-content", { opacity: 0, y: 50, duration: 1 }, "-=0.5");
        });

    }, []);
    return (
        <div id="preloader" className="fixed inset-0 z-50 flex flex-col">
            <div className="preloader-top bg-black flex-1"></div>
            <div className="preloader-bottom bg-black flex-1"></div>
        </div>
    )
}

export default Preloader