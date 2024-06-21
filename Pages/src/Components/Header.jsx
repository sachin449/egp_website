import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
 
const Header = () => {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
 
  const solutionsTimer = useRef(null);
  const resourcesTimer = useRef(null);
 
  const handleMouseEnterServices = () => {
    clearTimeout(solutionsTimer.current);
    setSolutionsOpen(true);
    setResourcesOpen(false);
  };
 
  const handleMouseLeaveServices = () => {
    solutionsTimer.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 2000);
  };
 
  const handleMouseEnterMarkets = () => {
    clearTimeout(resourcesTimer.current);
    setResourcesOpen(true);
    setSolutionsOpen(false);
  };
 
  const handleMouseLeaveMarkets = () => {
    resourcesTimer.current = setTimeout(() => {
      setResourcesOpen(false);
    }, 2000);
  };
 
  const handleMouseEnterSolutionsDropdown = () => {
    clearTimeout(solutionsTimer.current);
  };
 
  const handleMouseLeaveSolutionsDropdown = () => {
    setSolutionsOpen(false);
  };
 
  const handleMouseEnterResourcesDropdown = () => {
    clearTimeout(resourcesTimer.current);
  };
 
  const handleMouseLeaveResourcesDropdown = () => {
    setResourcesOpen(false);
  };
 
  const controlHeader = () => {
    if (typeof window !== "undefined") {
      setIsAtTop(window.scrollY === 0);
      if (window.scrollY > lastScrollY) {
        // if scroll down
        setShowHeader(false);
      } else {
        // if scroll up
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
 
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);
 
      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);
 
  return (
    <header
      className={`fixed top-0 left-0 z-30 w-full transition-transform duration-1000 ${showHeader ? "translate-y-0" : "-translate-y-full"} ${isAtTop ? "bg-black bg-opacity-50" : "bg-black"}`}
    >
      <div className="container mx-auto flex items-center justify-between px-5 py-3">
        <div className="flex items-center space-x-3">
          <NavLink to="/">
            <img src="egplogo.png" alt="Logo" className="h-[60px]" />
          </NavLink>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-8">
            <li className="relative group hover:scale-105">
              <NavLink
                to="/about-us"
                className="text-white font-semibold text-md leading-none py-2 hover:text-[#00B0F0]"
              >
                About Us
                <span className="absolute left-0 bottom-[-8px] block h-0.5 w-0 bg-[#00B0F0] transition-all duration-500 group-hover:w-full"></span>
              </NavLink>
            </li>
            <li className="relative group hover:scale-105"
              onMouseLeave={handleMouseLeaveServices}>
              <button
                className="text-white font-semibold text-md leading-none py-2 hover:text-[#00B0F0]"
                onMouseEnter={handleMouseEnterServices}
              >
                Services
                <span className="absolute left-0 bottom-[-8px] block h-0.5 w-0 bg-[#00B0F0] transition-all duration-500 group-hover:w-full"></span>
              </button>
              {solutionsOpen && (
                <div
                  className="absolute top-full mt-[26px] w-56 bg-[#2B2B2B] shadow-lg rounded-lg"
                  onMouseEnter={handleMouseEnterSolutionsDropdown}
                  onMouseLeave={handleMouseLeaveSolutionsDropdown}
                >
                  <ul className="py-2 text-white">
                    <li className="px-4 py-2 hover:bg-gray-700">
                      <NavLink to="/services-risk">ESG Risk Advisory</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                      <NavLink to="/services-mergers">
                        Mergers & Acquisitions
                      </NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                      <NavLink to="/services-ehs">
                        EHS & Social Advisory
                      </NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                      <NavLink to="/services-social">Social Impact</NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="relative group hover:scale-105"
              onMouseLeave={handleMouseLeaveMarkets}>
              <button
                className="text-white font-semibold text-md leading-none py-2 hover:text-[#00B0F0]"
                onMouseEnter={handleMouseEnterMarkets}
              >
                Markets
                <span className="absolute left-0 bottom-[-8px] block h-0.5 w-0 bg-[#00B0F0] transition-all duration-500 group-hover:w-full"></span>
              </button>
              {resourcesOpen && (
                <div
                  className="absolute top-full mt-[26px] left-0 w-60 bg-[#2B2B2B] shadow-lg rounded-lg"
                  onMouseEnter={handleMouseEnterResourcesDropdown}
                  onMouseLeave={handleMouseLeaveResourcesDropdown}
                >
                  <ul className="py-2 text-white">
                    <li className="px-4 py-2 hover:bg-gray-700">
                      <NavLink to="/market-manufacturing">
                        Manufacturing
                      </NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                      <NavLink to="/market-real-estate">
                        Infrastructure & Real Estate
                      </NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                      <NavLink to="/market-finance">
                        Financial Institution & Funds
                      </NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                      <NavLink to="/">Agri-business & Forestry</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                      <NavLink to="/">Retail & Hospitality</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                      <NavLink to="/">Health & Education</NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="relative group hover:scale-105">
              <NavLink
                to="/careers"
                className="text-white font-semibold text-md leading-none py-2 hover:text-[#00B0F0]"
              >
                Career
                <span className="absolute left-0 bottom-[-8px] block h-0.5 w-0 bg-[#00B0F0] transition-all duration-500 group-hover:w-full"></span>
              </NavLink>
            </li>
            <li className="relative group hover:scale-105">
              <NavLink
                to="/contact-page"
                className="text-white font-semibold text-md leading-none py-2 hover:text-[#00B0F0]"
              >
                Contact Us
                <span className="absolute left-0 bottom-[-8px] block h-0.5 w-0 bg-[#00B0F0] transition-all duration-500 group-hover:w-full"></span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-90">
          <ul className="flex flex-col items-center space-y-4 py-5">
            <li>
              <NavLink
                to="/about-us"
                className="text-white text-md leading-none py-2 hover:text-gray-300"
              >
                ABOUT US
              </NavLink>
            </li>
            <li>
              <button
                className="text-white text-md leading-none py-2 hover:text-gray-300"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
              >
                SERVICES
              </button>
              {solutionsOpen && (
                <ul className="py-2 text-white">
                  <li className="px-4 py-2 hover:bg-gray-700">
                    <NavLink to="/services-risk">ESG Risk Advisory</NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700">
                    <NavLink to="/services-mergers">
                      Mergers & Acquisitions
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700">
                    <NavLink to="/services-ehs">EHS & Social Advisory</NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700">
                    <NavLink to="/services-social">Social Impact</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                className="text-white text-md leading-none py-2 hover:text-gray-300"
                onClick={() => setResourcesOpen(!resourcesOpen)}
              >
                MARKETS
              </button>
              {resourcesOpen && (
                <ul className="py-2 text-white">
                  <li className="px-4 py-2 hover:bg-gray-700">
                    <NavLink to="/market-manufacturing">Manufacturing</NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700">
                    <NavLink to="/market-real-estate">
                      Infrastructure & Real Estate
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700">
                    <NavLink to="/market-finance">
                      Financial Institution & Funds
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700">
                    <NavLink to="/">Agri-business & Forestry</NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700">
                    <NavLink to="/">Retail & Hospitality</NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700">
                    <NavLink to="/">Health & Education</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/careers"
                className="text-white text-md leading-none py-2 hover:[00A7FF]"
              >
                CAREER
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-page"
                className="text-white text-md leading-none py-2 px-4 rounded-md hover:text-gray-300 bg-[#00a7ff]"
              >
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
 
export default Header;