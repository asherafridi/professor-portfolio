"use client"
import React, { useEffect } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Achieved = () => {
    useEffect(() => {
        const doneContainer = document.querySelector("#done-container");
        if (doneContainer) {
            gsap.to(doneContainer, {
                x: () =>
                    -(doneContainer.scrollWidth - doneContainer.clientWidth) + "px",
                ease: "none",
                scrollTrigger: {
                    trigger: doneContainer,
                    start: "top top",
                    end: () =>
                        "+=" + (doneContainer.scrollWidth - window.innerWidth),
                    pin: true,
                    scrub: 2,
                },
            });
        }
    }, []);
    return (

        <section className="min-h-screen w-full overflow-hidden" id="awards-section">
            <div id="done-container" className="done-container min-h-screen w-full bg-black flex">
                {/* <!-- Award  --> */}
                <div className="awards min-h-screen min-w-full bg-white px-32 py-16 flex flex-col items-center  justify-around">
                    <p className="text-3xl text-center font-medium uppercase ">Honor & Awards</p>
                    <div>
                        <div className="flex w-full items-center justify-center mt-8">
                            <div className="bebas-neue-regular text-7xl bg-black inline text-white p-4 px-16 -rotate-2">THINC
                                Fellowship</div>
                        </div>
                        <div
                            className="w-full shadow-xl -mt-4 max-w-[900px] h-[600px] bg-gray-200 p-8 pt-16 flex flex-col justify-between">
                            <div>
                                <p className="text-lg leading-9">THINC (Technology, Humanity, Inclusion, Nurture, Changemakers)
                                    fellowship powered by Tencent and Viva la Vida. It brings together a diverse community of
                                    leaders from over 30 countries, including entrepreneurs, influencers, scholars, artists,
                                    politicians, investors, and activists. THINC fellows engage in intellectual discussions on
                                    the intersection of technology and humanity, embark on projects with significant social
                                    impact, and cultivate a close-knit network of the brightest minds worldwide.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-md lg:text-lg"><span className="font-medium"><i
                                    className="ri-organization-chart mr-1"></i>
                                    Issuer:</span> Tencent and Viva la Vida
                                </p>
                                <p className="text-md lg:text-lg"><span className="font-medium"><i className="ri-time-line mr-1"></i>
                                    Date Issued:</span> December 2023
                                </p>
                                <p className="text-md lg:text-lg"><span className="font-medium"><i className="ri-building-line mr-1"></i>
                                    Associated With:</span>
                                    Sukkur IBA University (AACSB Accredited)</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Award  --> */}
                <div className="awards min-h-screen min-w-full bg-white px-32 py-16 flex flex-col items-center  justify-around">
                    <p className="text-3xl text-center font-medium uppercase ">Honor & Awards</p>
                    <div>
                        <div className="flex w-full items-center justify-center mt-8">
                            <div className="bebas-neue-regular text-7xl bg-black inline text-white p-4 px-16 -rotate-2">Global
                                Goodwill Ambassador</div>
                        </div>
                        <div
                            className="w-full shadow-xl -mt-4 max-w-[900px] h-[600px] bg-gray-200 p-8 pt-16 flex flex-col justify-between">
                            <div>
                                <p className="text-lg leading-9">Nominated Global Goodwill Ambassador (Humanitarian) Pakistan by
                                    Richard Di Pilla for work on promoting and creating education, training opportunities for
                                    youth with a special focus on girls from humble backgrounds in rural areas of Pakistan,
                                    aiming to make the world a better place as Director of EDC Sukkur IBA.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-md lg:text-lg"><span className="font-medium"><i
                                    className="ri-organization-chart mr-1"></i>
                                    Issuer:</span> Richard Di Pilla, Founder Global Goodwill Ambassadors Foundation
                                </p>
                                <p className="text-md lg:text-lg"><span className="font-medium"><i className="ri-time-line mr-1"></i>
                                    Date Issued:</span> October 2018
                                </p>
                                <p className="text-md lg:text-lg"><span className="font-medium"><i className="ri-building-line mr-1"></i>
                                    Associated With:</span>
                                    Sukkur IBA University (AACSB Accredited)</p>
                                <p className="text-md lg:text-lg"><span className="font-medium"><i className="ri-links-line mr-1"></i>
                                    Links:</span>
                                    <a href="https://www.linkedin.com/feed/update/activity:6454119308007141376/"
                                        className="underline  underline-offset-4">LinkedIn</a>, <a
                                            href="https://www.globalgoodwillambassadors.org/"
                                            className="underline underline-offset-4">Global Goodwill Ambassadors</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <!-- Publication  --> */}
                <div className="awards min-h-screen min-w-full bg-gray-100 px-32 py-16 flex flex-col items-center  justify-around">
                    <p className="text-3xl text-center font-medium uppercase ">Publications</p>
                    <div className="min-w-[1200px] max-w-[1200px] min-h-[700px] shadow-lg mt-8 flex">
                        <div className="w-1/2 bg-gray-800 h-full flex flex-col p-4 py-8 justify-between">
                            <p className="text-center text-white font-light">Journal</p>
                            <div className="flex flex-col items-center">
                                <h1 className="text-gray-100 text-center bebas-neue-regular text-4xl">Business Ethics, the
                                    Environment & Responsibility</h1>
                            </div>

                            <p className="text-center text-white font-extralight">24th September 2024</p>
                        </div>
                        <div className="w-1/2 p-4 p-8 flex flex-col justify-between bg-white">
                            <div>
                                <h2 className="text-lg font-medium">Toward sustainable smart agriculture in a developing
                                    country: An empirical analysis of green firms determinants</h2>
                                <p className="text-sm mt-4">Green entrepreneurship&apos;s role in achieving socio-economic and
                                    environmental objectives has garnered significant scholarly attention. Yet, the internal
                                    and external factors influencing green agricultural enterprises&apos; growth and
                                    sustainability remain under-explored. This study aims to validate the Green Agriculture
                                    Support Framework (GASF), positing that strategic alignment of internal (technology,
                                    talent management) and external (formal institutions, government support, culture)
                                    support elements fosters green agriculture enterprise growth, particularly those
                                    leveraging Agriculture 4.0 technologies. Survey data from Pakistani green enterprise
                                    managers and employees were analyzed using structural equation modeling (SEM) with the
                                    partial least squares (PLS) approach in SmartPLS. Findings indicate that external
                                    variables significantly impact green enterprise development while internal factors have
                                    limited influence. Policymakers should focus on enhancing the external environment
                                    through intensive government support, less rigid formal institutions, entrepreneurial
                                    culture, and improved economic conditions. Internal factors like outdated technology and
                                    rigid talent management policies may hinder growth. This research contributes to the
                                    literature by providing empirical evidence supporting the organismic integration theory
                                    (OIT) and its implications for green policy development. Understanding these
                                    determinants assists in identifying areas requiring policymaker attention for effective
                                    green agricultural sector growth.</p>
                            </div>
                            <a target="_blank"
                                href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=gV0MDE8AAAAJ&sortby=pubdate&citation_for_view=gV0MDE8AAAAJ:t6usbXjVLHcC"><button
                                    className="w-full bg-gray-800 text-white py-4 hover:bg-gray-700 cursor-pointer">View
                                    Publication</button></a>
                        </div>
                    </div>
                </div>
                {/* <!-- Publication  --> */}
                <div className="awards min-h-screen min-w-full bg-gray-100 px-32 py-16 flex flex-col items-center justify-around">
                    <p className="text-3xl text-center font-medium uppercase ">Publications</p>
                    <div className="min-w-[1200px] max-w-[1200px] min-h-[700px] shadow-lg mt-8 flex">
                        <div className="w-1/2 bg-gray-800 h-full flex flex-col p-4 py-8 justify-between">
                            <p className="text-center text-white font-light">Journal</p>
                            <div className="flex flex-col items-center">
                                <h1 className="text-gray-100 text-center bebas-neue-regular text-4xl">GUESSS</h1>
                            </div>

                            <p className="text-center text-white font-extralight">1st June 2023</p>
                        </div>
                        <div className="w-1/2 p-4 p-8 flex flex-col justify-between bg-white">
                            <div>
                                <h2 className="text-lg font-medium">Global University Entrepreneurial Spirit Students&apos; Survey
                                    (GUESSS) , Pakistan Report.2023</h2>
                                <p className="text-sm mt-4">For its tenth edition, the GUESSS Survey 2023 has drawn
                                    participation from 57 countries and received 226,000 responses overall, demonstrating
                                    its growing worldwide reach. In Pakistan 354 students from 14 different public and
                                    private institutions took part in this study. The main conclusions are outlined below.
                                </p>
                            </div>
                            <a target="_blank"
                                href="https://www.guesssurvey.org/resources/nat_2023/GUESSS_Report_2023_Pakistan.pdf"><button
                                    className="w-full bg-gray-800 text-white py-4 hover:bg-gray-700 cursor-pointer">View
                                    Publication</button></a>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Achieved