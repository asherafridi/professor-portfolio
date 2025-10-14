"use client"
import React, { use } from 'react'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
    useEffect(() => {

            const row = document.querySelector(".image-row");
            const gallery = document.querySelector(".horizontal-gallery");

            if (row && gallery) {
                const scrollDistance = row.scrollWidth - gallery.clientWidth;
                console.log(scrollDistance);

                gsap.to(row, {
                    x: `-${scrollDistance}px`,
                    ease: "none",
                    scrollTrigger: {
                        trigger: gallery,
                        start: "top 70%",
                        end: "bottom 30%",
                        scrub: 1,
                    },
                });
            }

    }, []);
    return (
        <section className="horizontal-section bg-background py-8">
            <div className="horizontal-gallery">
                <div className="image-row">
                    <img src="./img/1.jpg" alt="1" />
                    <img src="./img/2.jpg" alt="2" />
                    <img src="./img/3.jpg" alt="3" />
                    <img src="./img/4.jpg" alt="4" />
                    <img src="./img/5.jpg" alt="5" />
                </div>
            </div>
        </section>
    )
}

export default Gallery