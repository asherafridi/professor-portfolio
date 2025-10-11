import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    
    <section className="h-[500px] bg-gray-100 border-t border-gray-400  px-16 flex py-12 gap-8">
        <div className="w-1/3  h-full flex flex-col  items-start">
            <h1 className="text-5xl bebas-neue-regular text-black">Dr. Altaf Hussain Samo</h1>
            <p className="text-lg leading-7 mt-4">Dr. Altaf Hussain Samo is a visionary leader and executive, spearheading growth and innovation at the Executive Development Center (EDC) of Sukkur IBA University, an esteemed institution accredited by AACSB. With a multifaceted approach, he drives impactful consultancy, project management, and leadership initiatives, fostering excellence and transformation in various sectors.</p>
            <a href="" className="mt-4 px-16 py-4 bg-gray-800 text-white gap-2 flex justify-center text-lg"><i className="ri-send-plane-line"></i>Write a Message</a>
        </div>
        <div className="w-1/3">
            <h1 className="text-5xl bebas-neue-regular text-gray-600">Quick Links</h1>
            <ul className="mt-4">
                <li className="mt-1"><a href="/" className="text-lg hover:underline underline-offset-4">Home</a></li>
                <li className="mt-1"><a href="#" className="text-lg hover:underline underline-offset-4">Certificates</a></li>
                <li className="mt-1"><a href="#" className="text-lg hover:underline underline-offset-4">Honor & Awards</a></li>
                <li className="mt-1"><a href="#" className="text-lg hover:underline underline-offset-4">Publications</a></li>
                <li className="mt-1"><a href="#" className="text-lg hover:underline underline-offset-4">Skills</a></li>
                <li className="mt-1"><a href="#" className="text-lg hover:underline underline-offset-4">Student Resources</a></li>
            </ul>
        </div>
        <div className="w-1/3">
            <h1 className="text-5xl bebas-neue-regular text-gray-600">Social Links</h1>
            <ul className="mt-4">
                <li className="mt-1"><Link href="/" className="text-lg hover:underline underline-offset-4">Facebook</Link></li>
                <li className="mt-1"><Link href="#" className="text-lg hover:underline underline-offset-4">LinkedIn</Link></li>
            </ul>
        </div>
    </section>
  )
}

export default Footer