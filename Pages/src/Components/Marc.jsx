import  { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
 
const Marc = () => {
    const textSections = [
        {
            id: 1,
            heading: "Manufacturing",
            subheading: "Resource management and circular economy",
            paragraph: "Rapid urbanisation in Southeast Asia means increased waste that needs to be managed. While this is clearly a challenge given that the regions population Rapid urbanisation in Southeast Asia means increased waste that needs to be managed. While this is clearly a challenge given that the regionpopulation is exis expected to rise from about 686.825 million to 724.664 million...",
            diffsection: "Learn More"
        },
        {
            id: 2,
            heading: "Agri Business & Forestry",
            subheading: "Sustainability and the future",
            paragraph: "Recycling plays a crucial role in managing waste and preserving natural resources. It helps reduce pollution and conserves materials that can be reused in new products.Rapid urbanisation in Southeast Asia means increased waste that needs to be managed. While this is clearly a challenge given that the regionopulation is ex",
            diffsection: "Learn More"
        },
        {
            id: 3,
            heading: "Retail & Hospitality",
            subheading: "Modern solutions",
            paragraph: "Innovation in waste management includes new technologies and practices that aim to reduce waste and increase efficiency in waste handling and recycling processes.Rapid urbanisation in Southeast Asia means increased waste that needs to be managed. While this is clearly a challenge given that the regionpopulation is ex",
            diffsection: "Learn More"
        },
        {
            id: 4,
            heading: "Infrastructure & Real Estate",
            subheading: "Sustainable practices",
            paragraph: "Sustainable waste management practices are essential to protect the environment and human health. They help reduce pollution, conserve resources, and reduce greenhouse gas emissions.Rapid urbanisation in Southeast Asia means increased waste that needs to be managed. While this is clearly a challenge given that the regionpopulation is ex",
            diffsection: "Learn More"
        },
        {
            id: 5,
            heading: "Financial Institution & Funds",
            subheading: "Sustainable practices",
            paragraph: "Sustainable waste management practices are essential to protect the environment and human health. They help reduce pollution, conserve resources, and reduce greenhouse gas emissions.Rapid urbanisation in Southeast Asia means increased waste that needs to be managed. While this is clearly a challenge given that the regionpopulation is ex",
            diffsection: "Learn More"
        },
        {
            id: 6,
            heading: "Health & Education",
            subheading: "Sustainable practices",
            paragraph: "Sustainable waste management practices are essential to protect the environment and human health. They help reduce pollution, conserve resources, and reduce greenhouse gas emissions.Rapid urbanisation in Southeast Asia means increased waste that needs to be managed. While this is clearly a challenge given that the regionpopulation is ex",
            diffsection: "Learn More"
        }
    ];
 
    const imageSections = [
        {
            src: "Manufacturing.jpg",
            alt: "Building 1"
        },
        {
            src: "agri.jpg",
            alt: "Building 2"
        },
        {
            src: "retail.jpg",
            alt: "Building 3"
        },
        {
            src: "real estate.jpg",
            alt: "Building 4"
        },
        {
            src: "funds.jpg",
            alt: "Building 5"
        },
        {
            src: "healthcare.jpg",
            alt: "Building 6"
        }
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
                                <a href="#" className="mt-8 text-blue-600 inline-block hover:text-black transition duration-300 ease-in-out transform hover:translate-x-1">
                                    {section.diffsection}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
 
            {/* Image Carousel */}
            <div className="image-container w-full lg:w-[54%] h-64 lg:h-[70vh] lg:absolute lg:top-[15%] lg:right-[100px] bg-white z-20 overflow-hidden" ref={imageScrollRef}>
                {/* Shifted Image Carousel Upward by modifying the lg:top property */}
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
 
export default Marc;
 