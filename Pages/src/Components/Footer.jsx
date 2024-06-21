import { NavLink } from "react-router-dom";
import { FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const Markets = [
    { name: "Manufacturing", link: "/market-manufacturing" },
    { name: "Infrastructure & Real Estate", link: "/market-real-estate" },
    { name: "Financial Institution & Funds", link: "/market-finance" },
    { name: "Agri-business & Forestry", link: "/" }, // Update the link when available
    { name: "Retail & Hospitality", link: "/" }, // Update the link when available
    { name: "Health & Education", link: "/" } // Update the link when available
  ];
  const Services = [
    { name: "ESG Risk Advisory", link: "/services-risk" },
    { name: "Mergers & Acquisitions", link: "/services-mergers" },
    { name: "EHS & Social Advisory", link: "/services-ehs" },
    { name: "Social Impact", link: "/services-social" }
  ];
  const QuickLinks = [
    { name: "About Us", link: "/about-us" },
    { name: "Contact Us", link: "/contact-page" },
    { name: "Careers", link: "/careers" }
  ];

  return (
    <footer className="bg-black text-gray-400 p-10 inset-x-0 bottom-0 h-[50vh]">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-start h-full">
        {/* Sustainatrix Section */}
        <div className="flex flex-col">
          <div className="items-center mb-3 w-full md:w-auto">
            <img
              src="egplogo.png"
              alt="Sustainatrix Logo"
              className="w-30 h-16 mt-4 mr-4"
            />
          </div>
          {/* Social Media Logos */}
          <div className="flex space-x-10 mt-8 ml-16">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
            >
              <img src="twitter.png" alt="X Logo" width={24} height={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Markets Section */}
        <div className="flex flex-col mb-3 w-full sm:w-auto">
          <h5 className="text-[#00a7ff] font-bold mb-3 transition duration-500 ease-in-out transform hover:scale-105">
            Markets
          </h5>
          <ul>
            {Markets.map((market, index) => (
              <li
                key={index}
                className="transition duration-300 ease-in-out transform hover:text-white hover:translate-x-1"
              >
                <NavLink to={market.link}>{market.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div className="flex flex-col mb-3 w-full sm:w-auto">
          <h5 className="text-[#00a7ff] font-bold mb-3 transition duration-500 ease-in-out transform hover:scale-105">
            Our Services
          </h5>
          <ul>
            {Services.map((service, index) => (
              <li
                key={index}
                className="transition duration-300 ease-in-out transform hover:text-white hover:translate-x-1"
              >
                <NavLink to={service.link}>{service.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

      

        {/* Quick Links */}
        <div className="flex flex-col mb-3 w-full sm:w-auto">
          <h5 className="text-[#00a7ff] font-bold mb-3 transition duration-500 ease-in-out transform hover:scale-105">
            Quick Links
          </h5>
          <ul>
            {QuickLinks.map((link, index) => (
              <li
                key={index}
                className="transition duration-300 ease-in-out transform hover:text-white hover:translate-x-1"
              >
                <NavLink to={link.link}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center bg-black text-gray-300 text-xs w-full">
        © All Rights Reserved 2021-2024
        <br />
        esggp.org
      </div>
    </footer>
  );
};

export default Footer;
