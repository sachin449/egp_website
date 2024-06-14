import { useState } from "react";

const services = [
  {
    id: 1,
    backgroundImage: 'url(sec8.jpg)',
    heading: 'ESG Risk Advisory',
    subheading: 'The risks and impacts emanating from environment, social and governance...',
    link: '/page1',
  },
  {
    id: 2,
    backgroundImage: 'url(sec7.jpg)',
    heading: 'Merger & Acquisition',
    subheading: 'EGP offers services to Clients in Mergers & Acquisitions (M&A) through ...',
    link: '/page2',
  },
  {
    id: 3,
    backgroundImage: 'url(sec6.jpg)',
    heading: 'EHS & Social Advisory',
    subheading: "EGP provides advisory services to identify, measure and manage the ESG ...",
    link: '/page3',
  },
  {
    id: 4,
    backgroundImage: 'url(sec9.jpg)',
    heading: 'Social Impact',
    subheading: 'With growing economies around the world and ever-changing business needs...',
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
          <div className="relative flex flex-col items-center justify-end w-full h-full p-4 text-white bg-black bg-opacity-10 hover:bg-opacity-30 border-2 border-transparent transition duration-500 ease-in-out border-s-gray-900 ">
            <div className=" relative flex flex-col items-start transition-all duration-1000 ease-in-out">
              <h2 className={` text-balance text-2xl sm:text-2xl md:text-3xl transition-all duration-700 ease-in-out ${hoveredService === index ? 'mb-2 translate-y-[-50px]' : 'mb-0 translate-y-[10px]'}`}>
                {service.heading}
              </h2>
              <p className={`  absolute  w-64  text-lg sm:text-base transition-opacity duration-700 ease-in-out ${hoveredService === index ? 'opacity-100' : 'opacity-0'}`}>
                {service.subheading}
              </p>
              <button
                className="py-2 px-4 rounded mt-4 transition duration-500 ease-in-out relative overflow-hidden text-white bg-transparent border-none flex items-center"
                onClick={() => {
                  window.location.href = service.link;
                }}
              >
                <span
                  className={` mt-5 relative transition-all duration-1000 ease-in-out ${hoveredService === index ? 'opacity-100 translate-x-[-10px]' : 'opacity-0 translate-x-2'}`}
                >
                  Discover
                </span>
                <span
                  className={`mt-5 absolute ml-2 transition-all duration-1000 ease-in-out ${hoveredService === index ? 'opacity-100 translate-x-[50px]' : 'opacity-100 -translate-x-2'}`}
                >
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
