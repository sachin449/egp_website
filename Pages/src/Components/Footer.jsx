
import { NavLink } from "react-router-dom";
import {  FaLinkedin, FaEnvelope, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
    { name: "Careers", link: "/careers" },
    { name: "Terms & Conditions", link: "/" },
    { name: "Privacy Policy", link: "/" },
  ];

  return (
    <footer className="bg-black text-gray-400 p-6 md:p-10 inset-x-0 bottom-0">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-start">
        {/* Sustainatrix Section */}
        <div className="w-full md:w-auto flex flex-col items-start md:items-start mb-6 md:mb-0">
          <div className="flex items-center mb-3 w-full md:w-auto">
            <img
              src="egplogo.png"
              alt="Sustainatrix Logo"
              className="w-30 h-12 md:w-30 md:h-16 lg:w-[300px] lg:h-18"
            />
          </div>
          {/* Social Media Logos */}
          <div className="flex space-x-6 md:space-x-10 mt-4 mr-6 ml-14 md:mt-8">
            <a
              href="mailto:info@sustainatrix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
            >
              <FaXTwitter  size={24} />
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
        <div className="w-full md:w-auto mb-6 md:mb-0">
          <h5 className="text-[#00a7ff] font-bold mb-3 transition duration-500 ease-in-out transform hover:scale-105">
            Markets
          </h5>
          <ul className="space-y-2 text-sm md:text-sm">
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
        <div className="w-full md:w-auto mb-6 md:mb-0">
          <h5 className="text-[#00a7ff] font-bold mb-3 transition duration-500 ease-in-out transform hover:scale-105">
            Our Services
          </h5>
          <ul className="space-y-2 text-sm">
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
        <div className="w-full md:w-auto mb-6 md:mb-0">
          <h5 className="text-[#00a7ff] font-bold mb-3 transition duration-500 ease-in-out transform hover:scale-105">
            Quick Links
          </h5>
          <ul className="space-y-2 text-sm">
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

      <div className="text-center bg-black text-gray-300 text-xs mt-6 md:mt-10">
      Copyright © 2021 | Powered by ESG Global Partners Private Limited
        <br />
        esggp.org
      </div>
    </footer>
  );
};

export default Footer;
