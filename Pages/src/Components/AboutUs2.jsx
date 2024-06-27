import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AboutUs2 = () => {
  const textSections = [
    {
      id: 1,
      heading: "WHO WE ARE",
      subheading: "Resource management and circular economy",
      paragraph:
        "Founded in early 2021, and headquartered in National Capital Region of India, ESG Global Partners (EGP) has been set up as a global provider of social and environmental consulting services. EGP is an association of world class professionals – Business Leaders, Project Managers, Thematic Area Experts, Scientists, Engineers & Analysts, who have come together from different geographies, to deliver best in class ESG services.",
    },
    {
      id: 2,
      heading: "SUSTAINABILITY",
      subheading: "Sustainability and the future",
      paragraph:
        "At EGP, we are committed to the ethos of sustainability and attempt to embed the same in all our practices & solutions we offer. We intend to address challenges by providing sustainable solutions which would have a positive impact on the environment and communities.",
    },
    {
      id: 3,
      heading: "OUR PEOPLES",
      subheading: "Modern solutions",
      paragraph:
        "Our team comprises of in-house Senior ESG Professionals, Environmental Scientists, Engineers, Social Scientists, Ecologists, Project Managers, etc. who have 10+ years of experience in various thematic areas. Our people are at the heart of our business, and we are committed to developing an organisation where people are their best, feel valued, and are safe. Our experts bring 30+ years of collective industry, leadership and technical experience in 41+ countries!",
    },
  ];

  const imageSections = [
    {
      src: "sec1.jpg",
      alt: "Building 1",
    },
    {
      src: "sec2.jpg",
      alt: "Building 2",
    },
    {
      src: "sec3.jpg",
      alt: "Building 3",
    },
  ];

  const textScrollRef = useRef(null);
  const imageScrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollCarousel = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % textSections.length);
  };

  const handleManualScroll = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + textSections.length) % textSections.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textSections.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(scrollCarousel, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen relative flex flex-col lg:flex-row">
      {/* Main Heading shifted to the left */}
      <h1 className="text-4xl font-bold text-gray-800 p-4 lg:absolute lg:top-10 lg:left-3 lg:ml-10 z-20">
        Market
      </h1>

      {/* Text Carousel */}
      <div className="text-background-container w-full lg:w-[42%] lg:ml-10 h-screen bg-gray-300 z-10 overflow-hidden" ref={textScrollRef}>
        <div className="relative w-full h-full flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {textSections.map((section) => (
            <div key={section.id} className="w-full h-full flex-shrink-0">
              <div className="p-8 bg-transparent z-10 flex-shrink-0">
                <h2 className="subheading text-lg mt-20 mb-10 mr-10">{section.subheading}</h2>
                <h1 className="heading text-3xl mb-16 mr-20">{section.heading}</h1>
                <p className="paragraph text-lg mr-20 font-normal">
                  {section.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Carousel */}
      <div className="image-container w-full lg:w-[54%] h-64 lg:h-[70vh] lg:absolute lg:top-[15%] lg:right-[100px] bg-white z-20 overflow-hidden" ref={imageScrollRef}>
        <div className="relative w-full h-full flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {imageSections.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-16 right-4 lg:right-[30%] flex space-x-4 z-30">
        <button onClick={() => handleManualScroll('left')}
          className="bg-gray-300 text-black p-3 rounded-full shadow-lg hover:bg-gray-400 transition-colors duration-300">
          <ChevronLeft size={24} />
        </button>
        <button onClick={() => handleManualScroll('right')}
          className="bg-gray-300 text-black p-3 rounded-full shadow-lg hover:bg-gray-400 transition-colors duration-300">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default AboutUs2;
