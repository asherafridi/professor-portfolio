"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01/12",
    name: "Preventing Violent Extremism by Empowering Youth and Women",
    description: "The project funded by EU and implemented in coordination with UNODC and NACTA Pakistan to empower youth and females in Sindh and Baluchistan.",
    duration: "2024 - 2025",
    organization: "UNODC",
    skills: ["Entrepreneurship", "Soft Skills", "Higher Education", "Future Job Skills"]
  },
  {
    id: "02/12",
    name: "Youth Eco-Development through Green Entrepreneurship",
    description: "The project identifies youth from the Mirpurkhas Region to provide three trainings and incubation for venture plan development. This initiative enables them to design eco-friendly business ideas addressing environmental challenges.",
    duration: "Aug 2025 - Present",
    organization: "Sukkur IBA University (AACSB Accredited)",
    skills: ["Entrepreneurship"]
  },
  {
    id: "03/12",
    name: "UNICEF - Development and Delivery of the European Union’s Sindh Technical Assistance, Development through Enhanced Education Programme (STA-DEEP)",
    description: "Team Lead for the European Union’s STA-DEEP Project, awarded by UNICEF to EDC Sukkur IBA University in 2022. This project focuses on capacity development, monitoring & evaluation frameworks, and the development of education systems.",
    duration: "Apr 2022 - Present",
    organization: "Sukkur IBA University (AACSB Accredited)",
    skills: ["Research", "Analysis", "Proposal Writing", "Training", "Project Management"]
  },
  {
    id: "04/12",
    name: "Executing and Utilizing Labor Market Scans",
    description: "Consultant for Emerging Markets Foundation, equipping participants from Hong Kong, Indonesia, the Philippines, and Vietnam to conduct labor market scans. Responsibilities included designing a market scan framework and delivering related training.",
    duration: "Aug 2022 - May 2023",
    organization: "Freelance Consultant - Epower Hong Kong",
    skills: ["Career Counseling", "Training & Development", "Management Consulting", "Entrepreneurship", "Analytical Skills"]
  },
  {
    id: "05/12",
    name: "Regional Youth Digital Skills Strategies – Stage 1 (South Asia)",
    description: "Team lead for a project awarded by the Commonwealth Secretariat, evaluating digital skill gaps among youth in South and East Asia. The project proposed strategies and programs for digital skills development.",
    duration: "Jul 2021 - Jan 2022",
    organization: "Freelance Consultant - Commonwealth Secretariat UK",
    skills: ["Research", "Analysis", "Proposal Writing", "Training", "Project Management"]
  },
  {
    id: "06/12",
    name: "Country Lead - Global University Entrepreneurial Spirit Student Survey (GUESSS), Pakistan",
    description: "As Country Representative/Team Lead, led the Pakistani segment of GUESSS in collaboration with Sukkur IBA University and partner universities across Pakistan. Responsible for developing national and institutional research insights.",
    duration: "Dec 2015 - Sep 2021",
    organization: "Freelance Consultant",
    skills: ["Entrepreneurship", "Research", "Analysis", "Proposal Writing", "Training", "Project Management"]
  },
  {
    id: "07/12",
    name: "Key Expert for CERBM Project - Governance and Policy Project Balochistan (GPP)",
    description: "Key Expert providing training on data collection, ICT usage, and impact evaluation. Contributed to the development of executive dashboards, training reports, advocacy workshops, and a beneficiary service model.",
    duration: "Oct 2019 - Apr 2021",
    organization: "Freelance Consultant - Asian Institute of Technology (AIT), Thailand",
    skills: ["Research", "Analysis", "Proposal Writing", "Training", "Project Management"]
  },
  {
    id: "08/12",
    name: "Team Lead - 4000 School Teacher Training Project",
    description: "Headed the EDC and Sindh Education Foundation initiative to train 4,000 teachers in Science, English, Math, and Social Studies, strengthening content knowledge and pedagogy skills.",
    duration: "Jan 2018 - Jul 2019",
    organization: "Sukkur IBA University (AACSB Accredited) - Sindh Education Foundation",
    skills: ["Research", "Training", "Project Management"]
  },
  {
    id: "09/12",
    name: "Teach for Khairpur Initiative",
    description: "Led the &apos;Teach for Khairpur Initiative&apos; to enhance education quality through establishing science labs, providing a mobile science laboratory, and building ICT skills for approximately 1,000 students.",
    duration: "Jan 2018 - Mar 2019",
    organization: "Sukkur IBA University (AACSB Accredited)",
    skills: ["Entrepreneurship", "Training"]
  },
  {
    id: "10/12",
    name: "Sindh Education Foundation 600 Head Teachers Training Program",
    description: "Directed a program to train 600 head teachers, focusing on enhancing leadership and educational skills within the Sindh Education Foundation network.",
    duration: "Apr 2016 - Mar 2017",
    organization: "Sukkur IBA University (AACSB Accredited)",
    skills: ["Training"]
  },
  {
    id: "11/12",
    name: "Eco-entrepreneurship Program - Youth Eco-Development Project",
    description: "Under the &apos;Power to Youth&apos; Project funded by Norwegian Church Aid (NCA) and the European Union, this program trains youth in eco-friendly business ventures addressing climate change issues in Mirpurkhas.",
    duration: "2022 - 2024",
    organization: "Sukkur IBA Mirpurkhas Campus",
    skills: ["Entrepreneurship"]
  },
  {
    id: "12/12",
    name: "Developing Research Excellence Framework",
    description: "This project aims to develop a Research Excellence Framework (REF) for Pakistan&apos;s Higher Education Commission (HEC) in collaboration with Prof. Jeremy Hall, a renowned expert in research evaluation and policy development.",
    duration: "2025 - 2026",
    organization: "British Council / HEC Pakistan",
    skills: ["Research"]
  }
];


const Projects = () => {
  useEffect(() => {
    gsap.from("#projects h2", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: "#projects h2",
        start: "top 70%",
        end: "bottom 90%",
        scrub: 1,
      },
    });

    gsap.from(".project-card", {
      x: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
        end: "bottom 90%",
        scrub: 1,
      },
    });

    const horizontalSection = document.querySelector(".horizontal-container");
if (horizontalSection) {
  gsap.to(horizontalSection, {
    x: () =>
      -(horizontalSection.scrollWidth - horizontalSection.clientWidth) + "px",
    ease: "none",
    scrollTrigger: {
      trigger: ".projects",
      start: "top top",
      end: () =>
        "+=" + (horizontalSection.scrollWidth - window.innerWidth),
      pin: true,
      scrub: 3,
    },
  });
}
  }, []);

  return (
    <section
      className="projects min-h-screen py-16 bg-white overflow-hidden"
      id="projects"
    >
      <div className="w-full flex justify-between gap-1/2 px-16">
        <div className="w-full md:w-1/3">
          <h2 className="text-7xl bebas-neue-regular font-bold">Projects</h2>
        </div>
        <div className="w-1/3"></div>
      </div>

      <div
        className="horizontal-container flex gap-8 h-full items-center"
        id="project-container"
      >
        {projects.map((element, i) => (
          <div
            key={i}
            className="project-card flex-shrink-0 min-w-[350px] max-w-[350px] md:min-w-[500px] md:max-w-[500px] h-[600px] md:h-[600px] bg-white rounded-lg border-[5px] md:border-[10px] p-4 flex flex-col justify-between"
          >
            <div>
              <blockquote className="text-2xl md:text-7xl bebas-neue-regular">
                {element.id}
              </blockquote>
              <h3 className="text-lg md:text-2xl mt-4 uppercase font-bold">
                {element.name}
              </h3>
              <p className="text-md md:text-lg leading-7 mt-4">
                {element.description}
              </p>
            </div>
            <div>
              <p className="text-md lg:text-lg">
                <span className="font-medium">
                  <i className="ri-time-line"></i> Duration:
                </span>{" "}
                {element.duration}
              </p>
              <p className="text-md lg:text-lg">
                <span className="font-medium">
                  <i className="ri-building-line"></i> Organization:
                </span>{" "}
                {element.organization}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
