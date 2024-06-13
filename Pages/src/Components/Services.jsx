import { useState } from "react";

const services = [
  {
    id: 1,
    backgroundImage: 'url(sec1.jpg)',
    heading: 'ESG Risk Advisory',
    subheading: 'The risks and impacts emanating from environment, social and governance (ESG) factors and their management entails...',
    link: '/page1',
  },
  {
    id: 2,
    backgroundImage: 'url(sec2.jpg)',
    heading: 'Mergers & Acquisitions',
    subheading: 'EGP offers services to Clients in Mergers & Acquisitions (M&A) through all stages of investment lifecycle. By providing...',
    link: '/page2',
  },
  {
    id: 3,
    backgroundImage: 'url(sec5.jpg)',
    heading: 'EHS & Social Advisory',
    subheading: "EGP provides advisory services to identify, measure and manage the ESG performance of Clients to achieve improved...",
    link: '/page3',
  },
  {
    id: 4,
    backgroundImage: 'url(sec4.jpg)',
    heading: 'Social Impact',
    subheading: 'With growing economies around the world and ever-changing business needs, managing social risks and impacts has...',
    link: '/page4',
  },
];

const Services = () => {
  const [hoveredService, setHoveredService] = useState(0);

  return (
    <div className="relative flex w-full h-screen">
      <div
        className="absolute inset-0 z-0 transition duration-500 ease-in-out"
        style={{
          backgroundImage: services[hoveredService].backgroundImage,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      {services.map((service, index) => (
        <div
          key={service.id}
          className="relative flex-1 flex items-center justify-center feature z-10"
          onMouseEnter={() => setHoveredService(index)}
          onMouseLeave={() => setHoveredService(0)}
        >
          <div className="relative flex flex-col items-center justify-end w-full h-full p-12 text-white bg-black bg-opacity-10 hover:bg-opacity-20 border-2 border-transparent transition duration-500 ease-in-out border-s-gray-900 ">
            <div className="absolute bottom-[50px] flex flex-col items-start transition-all duration-1000 ease-in-out left-[30px]">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl  ${hoveredService === index ? 'mb-8' : 'mb-2'}`}>
                {service.heading}
              </h2>
              <p className={`text-lg sm:text-xl transition-opacity duration-500 ease-in-out ${hoveredService === index ? 'opacity-100' : 'opacity-0'}`}>
                {service.subheading}
              </p>
              <button
                className={`py-2 px-4 rounded mt-4 transition duration-500 ease-in-out ${hoveredService === index ? 'bg-[#00a7ff] text-black' : 'bg-gray-800 text-white'}`}
                onClick={() => {
                  window.location.href = service.link;
                }}
                style={{ marginLeft: '10px' }} // Shifting button 10px to the left
              >
                Discover →
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
