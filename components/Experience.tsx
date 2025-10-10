"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const experiencesList = [
  {
    organization: "Sukkur IBA University (AACSB Accredited)",
    duration: "Dec 2015 - Present",
    position: "Director (Professor) Executive Development Center",
    skills: [
      "Entrepreneurship",
      "Training & Development",
      "Higher Education Administration",
      "People Management",
      "Project Management",
      "Higher Education Leadership"
    ],
    description: `Designed and managed a diverse array of development, research, consultancy, and training programs,
    thereby significantly impacting over 15,000 individuals, particularly youth and marginalized communities, over the past
    five years. This work encompasses organizational development aimed at enhancing effectiveness through strategic
    training initiatives, equipping professionals across various disciplines with the essential tools and knowledge to
    bolster their managerial capabilities. Developed and excelled in executive education and management development by
    creating and delivering open-enrollment courses, comprehensive training programs, and customized client-specific
    programs. Additionally, managed consultancy services to provide tailored solutions to meet the unique needs of
    different organizations, ensuring the successful implementation of development initiatives. Furthermore, demonstrated
    proficiency in development program management and grant writing, facilitating the acquisition of substantial funding
    to support impactful projects and initiatives.`
  },
  {
    organization: "USAID HECFAD Program at IBA",
    duration: "Mar 2010 - Nov 2015",
    position: "Director",
    skills: [
      "Organization Skills",
      "Training & Development",
      "Higher Education Administration",
      "Research",
      "Project Management",
      "Higher Education Leadership"
    ],
    description: `Established the Career Development Center at IBA with the support of USAID. Developed a fundraising
    strategy and section within the Career Development Center. Instituted training and career guidance programs for current
    students and alumni, alongside developing a comprehensive alumni database. Developed and implemented strategic and
    operational plans for university advancement, focusing on job market preparedness, entrepreneurship, financial
    assistance, career development, and skill development programs. Forged partnerships with national and multinational
    companies, government agencies, NGOs, and international universities to promote entrepreneurship in Pakistan. Secured
    a $250,000 grant from USAID to support community colleges in Pakistan in collaboration with John Halder, former
    president of the Community College for International Development (CCID), USA. Designed the criteria for career
    counseling and financial assistance systems, leading to over 1,000 students receiving scholarships in under four years,
    sourced from various donor agencies, multinationals, and individual philanthropists. Developed strategies to enhance
    the female student ratio at IBA and its community college. Awarded a certificate of achievement by USAID for promoting
    gender issues in entrepreneurship education.`
  },
  {
    organization: "Asian Development Bank",
    duration: "Apr 2009 - Mar 2010",
    position: "Project Administrator & National Consultant",
    skills: [
      "Market Research",
      "Training & Development",
      "Problem Solving",
      "Research",
      "Analysis",
      "Project Management"
    ],
    description: `Performed daily project administration. Obtained data, assistance, and information from officials to
    accomplish TA objectives. Conducted gap analysis and Training Needs Assessments (TNA) for Financial Institutions, and
    suggested different training programs. Assisted international consultants in developing and delivering workshops and
    seminars. Assisted the Team Leader and other international consultants in developing a National AML CFT Strategic
    Plan, a national AML CFT Training Needs Assessment, and operating procedures for the FMU.`
  },
  {
    organization: "UNDP/IBA",
    duration: "Jul 2008 - Mar 2009",
    position: "Training Coordinator",
    skills: [
      "Training & Development",
      "Problem Solving",
      "Organization Skills",
      "People Management",
      "Project Management"
    ],
    description: `Liaised with UNDP and IBA for the training of elected representatives. Interacted with various strategic
    partners to ensure that the applicable courses could be developed and presented up to the required standards. Managed
    the training staff, budgeting, and the overall day-to-day management of a training facility. Developed the training
    schedule in consultation with PPIU GBG. Developed pre-and post-training evaluation reports for PPIU GBG (UNDP) and
    Sukkur IBA.`
  },
  {
    organization: "Sukkur IBA University (AACSB Accredited)",
    duration: "Oct 2003 - Mar 2008",
    position: "Assistant Professor",
    skills: [
      "Training & Development",
      "Entrepreneurship",
      "Higher Education Administration",
      "Proposal Writing",
      "Project Management"
    ],
    description: `Taught the following subjects: Security analysis, Financial management, Analysis of financial statements,
    Analysis of Pakistan industries, Principles of management, Small business management.`
  }
];

  // --- GSAP Animations ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#experience h2", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#experience h2",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.utils.toArray(".experience").forEach((exp:any) => {
        gsap.from(exp, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: exp,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-white md:px-16 py-16"
      id="experience"
    >
      <div className="w-full flex justify-between gap-8 mb-10">
        <div className="w-1/3">
          <h2 className="text-7xl bebas-neue-regular">Experience</h2>
        </div>
        <div className="w-2/3">
          {/* <p className="text-lg leading-7 font-light">
            With over 20 years of experience in consulting, project management,
            education, and entrepreneurship — I’ve led projects with national
            and international organizations across Pakistan.
          </p> */}
        </div>
      </div>

      <div id="experience-container">
        {experiencesList.map((exp, id) => (
          <div
            key={id}
            className={`experience border-b border-gray-300 py-8 px-4 cursor-pointer transition-all duration-500 ${
              activeIndex === id ? "bg-gray-50 active" : ""
            }`}
            onClick={() =>
              setActiveIndex((prev) => (prev === id ? -1 : id))
            }
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-2/5">
                <h3 className="text-2xl font-medium mb-2">
                  {exp.organization}
                </h3>
                <p className="ml-4 text-lg">&bull; {exp.duration}</p>
              </div>
              <div className="w-full md:w-1/5 text-center md:text-left">
                <p className="text-lg font-light">{exp.position}</p>
              </div>
              <div className="w-full md:w-2/5 flex justify-end flex-wrap gap-2 skills">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="border border-gray-200 bg-gray-50 rounded-full px-3 py-1 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {activeIndex === id && (
              <div className="mt-6 experience-description w-full">
                <p className="text-lg text-gray-700 leading-7">
                  {exp.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
