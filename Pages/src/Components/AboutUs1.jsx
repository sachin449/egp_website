import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: 'Mission',
    content: 'Our mission is to provide services to Clients to make them sustainable resilient and impact the lives of people in areas they operate.',
    imageUrl: 'mission001.jpg',
    alt: 'Mission Image'
  },
  {
    title: 'Vision',
    content: "Our vision is to create an organisation which foster the spirit of inclusion by celebrating diversity of ideas and bringing together talented professionals with similar outlook of impacting lives through innovative thought process.",
    imageUrl: 'vision001.jpg',
    alt: 'Vision Image'
  }
];

const AboutUs1 = () => {
  const boxRefs = useRef([]); // Created ref array for boxes

  useEffect(() => {
    boxRefs.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        { x: -200, opacity: 0 }, // Initial state
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out', // Smooth easing
          scrollTrigger: {
            trigger: box,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          }
        }
      ); // GSAP animation for each box
    });
  }, []);

  return (
    <div>
      <div className="w-full h-screen relative">
        {/* Video Background */}
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
            <source src="about-image.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Heading and Subheading */}
        <div className="relative container mx-auto flex flex-col justify-end h-full px-5 py-10 text-white">
            <div className="mb-20">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium-bold mb-6">About Us</h1>
              <h2 className="w-full sm:w-[800px] text-lg sm:text-xl md:text-xl md:text-medium-bold">
                  We have been providing services to Client in sectors of Infrastructure &
                  Real Estate, Manufacturing, Agri-Business & Forestry, Retail & Hospitality,
                  Financial Institution & Funds and Health & Education.
              </h2>
            </div>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="relative min-h-screen bg-white p-8">
        <h2 className="text-3xl font-semi-bold text-left mt-14 ml-6 mb-8">OUR CORE PILLARS: MISSION, VISION</h2>
        <h3 className="text-xl font-semibold text-left ml-6 mb-14 text-[#00b0f0]">International Experience, Local Deliverance!</h3>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {sections.map((section, index) => (
            <div
              key={index}
              ref={el => boxRefs.current[index] = el} // Assign ref to each box
              className="relative bg-cover bg-center text-white p-6 sm:p-10 rounded-lg h-[90%] mb-16"
              style={{ backgroundImage: `url(${section.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-[#181818] opacity-40 rounded-lg "></div>
              <div className="relative z-10">
                <h4 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">{section.title}</h4>
                <p className="text-base sm:text-lg">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs1;
