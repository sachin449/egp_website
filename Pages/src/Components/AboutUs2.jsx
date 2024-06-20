
 
import "../App.css";
import { useRef, useEffect, useState } from "react";
 
const AboutUs2 = () => {
  const textSections = [
    {
      id: 1,
      heading: "WHO WE ARE",
      subheading: "Resource management and circular economy",
      paragraph:
        "Founded in early 2021, and headquartered in National Capital Region of India, ESG Global Partners (EGP) has been set up as a global provider of social and environmental consulting services.EGP is an association of world class professionals – Business Leaders, Project Managers, Thematic Area Experts, Scientists, Engineers & Analysts, who have come together from different geographies, to deliver best in class ESG services.",
      diffsection: "Learn More",
    },
    {
      id: 2,
      heading: "SUSTAINABILITY",
      subheading: "Sustainability and the future",
      paragraph:
        "Recycling plays a crucial role in managing waste and preserving natural resources. It helps reduce pollution and conserves materials that can be reused in new products.Rapid urbanisation in Southeast Asia means increased waste that needs to be managed. While this is clearly a challenge given that the regionopulation is ex",
      diffsection: "Learn More",
    },
    {
      id: 3,
      heading: "OUR PEOPLES",
      subheading: "Modern solutions",
      paragraph:
        "Innovation in waste management includes new technologies and practices that aim to reduce waste and increase efficiency in waste handling and recycling processes.Rapid urbanisation in Southeast Asia means increased waste that needs to be managed. While this is clearly a challenge given that the regionpopulation is ex",
      diffsection: "Learn More",
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
    if (direction === "left") {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + textSections.length) % textSections.length
      );
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textSections.length);
    }
  };
 
  useEffect(() => {
    const interval = setInterval(scrollCarousel, 3000);
    return () => clearInterval(interval);
  }, []);
 
  return (
    <div className="h-screen relative flex mb-16">
      {/* Text Carousel */}
      <div
        className="text-background-container absolute w-[42%] ml-10 h-screen bg-gray-300  z-10 overflow-hidden mt-10 mb-10"
        ref={textScrollRef}
      >
        <div
          className="relative w-full h-full flex"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 1s ease-in-out",
          }}
        >
          {textSections.map((section) => (
            <div key={section.id} className="w-full h-full flex-shrink-0">
              <div className="p-8 bg-transparent z-10 flex-shrink-0">
                <h2 className="subheading text-lg mt-20 mb-10 mr-10 text-balance">
                  {section.subheading}
                </h2>
                <h1 className="heading text-4xl mb-16 mr-20 text-balance">
                  {section.heading}
                </h1>
                <p className="paragraph text-lg mr-20 font-normal text-balance">
                  {section.paragraph}
                </p>
                <h1 className="mt-8 text-blue-600 text-highlight transition duration-300 ease-in-out transform hover:text-black hover:translate-x-1">
                  {section.diffsection}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
 
      {/* Image Carousel */}
      <div
        className="image-container absolute top-1/4 right-[100px] w-[54%] h-[70vh] bg-white z-20 overflow-hidden"
        ref={imageScrollRef}
        style={{ top: "15%" }}
      >
        <div
          className="relative w-full h-full flex"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 1s ease-in-out",
          }}
        >
          {imageSections.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                onError={() =>
                  console.error(`Error loading image ${image.src}`)
                }
              />
            </div>
          ))}
        </div>
      </div>
 
      {/* Arrow Buttons */}
      <div className="absolute bottom-4 right-[30%] flex space-x-4">
        <button
          onClick={() => handleManualScroll("left")}
          className="bg-gray-300 text-black p-3 rounded-full shadow-lg hover:bg-gray-400 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => handleManualScroll("right")}
          className="bg-gray-300 text-black p-3 rounded-full shadow-lg hover:bg-gray-400 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
 
export default AboutUs2;