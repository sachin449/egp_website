// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// const services = [
//   {
//     id: 1,
//     backgroundImage: "url(sec8.jpg)",
//     heading: "ESG Risk Advisory",
//     subheading:
//       "The risks and impacts emanating from environment, social and governance...",
//     link: "/services-risk",
//   },
//   {
//     id: 2,
//     backgroundImage: "url(sec7.jpg)",
//     heading: "Merger & Acquisition",
//     subheading:
//       "EGP offers services to Clients in Mergers & Acquisitions (M&A) through ...",
//     link: "/services-mergers",
//   },
//   {
//     id: 3,
//     backgroundImage: "url(sec6.jpg)",
//     heading: "EHS & Social Advisory",
//     subheading:
//       "EGP provides advisory services to identify, measure and manage the ESG ...",
//     link: "/services-ehs",
//   },
//   {
//     id: 4,
//     backgroundImage: "url(sec9.jpg)",
//     heading: "Social Impact",
//     subheading:
//       "With growing economies around the world and ever-changing business needs...",
//     link: "/services-social",
//   },
// ];

// const Services = () => {
//   const [hoveredService, setHoveredService] = useState(0);

//   return (
//     <div className="relative flex w-full h-screen">
//       {/* "Our Services" Heading */}
//       <div className="absolute top-16 left-10 z-20 text-white text-6xl ">
//         Our Services
//       </div>

//       {/* Background Image */}
//       <div
//         className="absolute inset-0 z-0 transition duration-500 ease-in-out"
//         style={{
//           backgroundImage: services[hoveredService].backgroundImage,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       ></div>

//       {/* Services Content */}
//       {services.map((service, index) => (
//         <div
//           key={service.id}
//           className="relative flex-1 flex items-center justify-center feature z-10"
//           onMouseEnter={() => setHoveredService(index)}
//           onMouseLeave={() => setHoveredService(0)}
//         >
//           <div className="relative flex flex-col items-start justify-end w-full h-full p-4 text-white bg-black bg-opacity-10 hover:bg-opacity-30 border-2 border-transparent transition duration-500 ease-in-out border-s-gray-900 ">
//             <div className=" relative flex flex-col items-start transition-all duration-1000 ease-in-out">
//               <h2
//                 className={` text-balance text-2xl sm:text-2xl md:text-3xl transition-all duration-700 ease-in-out ${
//                   hoveredService === index
//                     ? "mb-2 translate-y-[-50px]"
//                     : "mb-0 translate-y-[10px]"
//                 }`}
//               >
//                 {service.heading}
//               </h2>
//               <p
//                 className={`  absolute  w-64  text-lg sm:text-base transition-opacity duration-700 ease-in-out ${
//                   hoveredService === index ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 {service.subheading}
//               </p>
//               <NavLink
//                 to={service.link}
//                 className="py-2 px-4 rounded mt-4 transition duration-500 ease-in-out relative overflow-hidden text-white bg-transparent border-none flex items-center"
//               >
//                 <span
//                   className={` mt-5 relative transition-all duration-1000 ease-in-out ${
//                     hoveredService === index
//                       ? "opacity-100 translate-x-[-10px]"
//                       : "opacity-0 translate-x-2"
//                   }`}
//                 >
//                   Discover
//                 </span>
//                 <span
//                   className={`mt-5 absolute ml-2 transition-all duration-1000 ease-in-out ${
//                     hoveredService === index
//                       ? "opacity-100 translate-x-[50px]"
//                       : "opacity-100 -translate-x-2"
//                   }`}
//                 >
//                   →
//                 </span>
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Services;



import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const services = [
  {
    id: 1,
    backgroundImage: "url(sec8.jpg)",
    heading: "ESG Risk Advisory",
    subheading:
      "The risks and impacts emanating from environment, social and governance...",
    link: "/services-risk",
  },
  {
    id: 2,
    backgroundImage: "url(sec7.jpg)",
    heading: "Merger & Acquisition",
    subheading:
      "EGP offers services to Clients in Mergers & Acquisitions (M&A) through ...",
    link: "/services-mergers",
  },
  {
    id: 3,
    backgroundImage: "url(sec6.jpg)",
    heading: "EHS & Social Advisory",
    subheading:
      "EGP provides advisory services to identify, measure and manage the ESG ...",
    link: "/services-ehs",
  },
  {
    id: 4,
    backgroundImage: "url(sec9.jpg)",
    heading: "Social Impact",
    subheading:
      "With growing economies around the world and ever-changing business needs...",
    link: "/services-social",
  },
];

const Services = () => {
  const [hoveredService, setHoveredService] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isSmallScreen && !isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isSmallScreen, isHovered]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="relative flex w-full h-screen">
      <div className="absolute top-16 left-10 z-20 text-white text-6xl">
        Our Services
      </div>

      {isSmallScreen ? (
        <div className="relative flex w-full h-full overflow-hidden flex-nowrap">
          <div
            className="absolute inset-0 z-0 transition duration-500 ease-in-out"
            style={{
              backgroundImage: services[currentIndex].backgroundImage,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative flex-shrink-0 ${
                currentIndex === index ? "w-4/5" : "w-1/5"
              } transition-width duration-700`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative flex flex-col items-start justify-end w-full h-full p-4 text-white bg-black bg-opacity-10 hover:bg-opacity-30 border-2 border-transparent transition duration-500 ease-in-out border-s-gray-900">
                <div className="relative flex flex-col items-start transition-all duration-1000 ease-in-out">
                  <h2
                    className={`text-balance text-2xl sm:text-2xl md:text-3xl transition-all duration-700 ease-in-out ${
                      currentIndex === index
                        ? "mb-2 translate-y-[-50px]"
                        : "mb-0 translate-y-[10px]"
                    }`}
                  >
                    {service.heading}
                  </h2>
                  <p
                    className={`absolute w-64 text-lg sm:text-base transition-opacity duration-700 ease-in-out ${
                      currentIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {service.subheading}
                  </p>
                  <NavLink
                    to={service.link}
                    className="py-2 px-4 rounded mt-4 transition duration-500 ease-in-out relative overflow-hidden text-white bg-transparent border-none flex items-center"
                  >
                    <span
                      className={`mt-5 relative transition-all duration-1000 ease-in-out ${
                        currentIndex === index
                          ? "opacity-100 translate-x-[-10px]"
                          : "opacity-0 translate-x-2"
                      }`}
                    >
                      Discover
                    </span>
                    <span
                      className={`mt-5 absolute ml-2 transition-all duration-1000 ease-in-out ${
                        currentIndex === index
                          ? "opacity-100 translate-x-[50px]"
                          : "opacity-100 -translate-x-2"
                      }`}
                    >
                      →
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative flex w-full h-full">
          <div
            className="absolute inset-0 z-0 transition duration-500 ease-in-out"
            style={{
              backgroundImage: services[hoveredService].backgroundImage,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative flex-1 flex items-center justify-center feature z-10"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(0)}
            >
              <div className="relative flex flex-col items-start justify-end w-full h-full p-4 text-white bg-black bg-opacity-10 hover:bg-opacity-30 border-2 border-transparent transition duration-500 ease-in-out border-s-gray-900">
                <div className="relative flex flex-col items-start transition-all duration-1000 ease-in-out">
                  <h2
                    className={`text-balance text-2xl sm:text-2xl md:text-3xl transition-all duration-700 ease-in-out ${
                      hoveredService === index
                        ? "mb-2 translate-y-[-50px]"
                        : "mb-0 translate-y-[10px]"
                    }`}
                  >
                    {service.heading}
                  </h2>
                  <p
                    className={`absolute w-64 text-lg sm:text-base transition-opacity duration-700 ease-in-out ${
                      hoveredService === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {service.subheading}
                  </p>
                  <NavLink
                    to={service.link}
                    className="py-2 px-4 rounded mt-4 transition duration-500 ease-in-out relative overflow-hidden text-white bg-transparent border-none flex items-center"
                  >
                    <span
                      className={`mt-5 relative transition-all duration-1000 ease-in-out ${
                        hoveredService === index
                          ? "opacity-100 translate-x-[-10px]"
                          : "opacity-0 translate-x-2"
                      }`}
                    >
                      Discover
                    </span>
                    <span
                      className={`mt-5 absolute ml-2 transition-all duration-1000 ease-in-out ${
                        hoveredService === index
                          ? "opacity-100 translate-x-[50px]"
                          : "opacity-100 -translate-x-2"
                      }`}
                    >
                      →
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
