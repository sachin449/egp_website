import { FaTwitter, FaYoutube, FaFacebook, FaGithub } from 'react-icons/fa';
 
const Footer = () => {
  const industries = ['Healthcare', 'Sports', 'Ecommerce', 'Construction', 'Club'];
  const quickLinks = ['Reviews', 'Terms & Condition', 'Disclaimer', 'Site Map'];
 
  return (
    <footer className="bg-black text-gray-400 p-10 relative inset-x-0 bottom-0 h-[50vh]">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-start h-full">
        {/* Sustainatrix Section */}
        <div className="flex flex-col">
          <div className="flex items-center mb-3 w-full md:w-auto">
            <img src="./src/assets/logo222.png" alt="Sustainatrix Logo" className="w-16 h-16 mr-4"/>
            <h5 className="text-white text-3xl font-bold ">
              ESG Global Partners
            </h5>
          </div>
          {/* Social Media Logos */}
          <div className="flex space-x-10 mt-12 ml-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
              <FaTwitter size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
              <FaYoutube size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
              <FaFacebook size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
 
        {/* Industries Section */}
        <div className="flex flex-col mb-3 w-full sm:w-auto">
          <h5 className="text-white font-bold mb-3 transition duration-500 ease-in-out transform hover:scale-105">
            Industries
          </h5>
          <ul>
            {industries.map((industry, index) => (
              <li
                key={index}
                className="transition duration-300 ease-in-out transform hover:text-white hover:translate-x-1"
              >
                {industry}
              </li>
            ))}
          </ul>
        </div>
 
        {/* Our Services */}
        <div className="flex flex-col mb-3 w-full sm:w-auto">
          <h5 className="text-white font-bold mb-3 transition duration-500 ease-in-out transform hover:scale-105">
            Our Services
          </h5>
          <ul>
            {industries.map((industry, index) => (
              <li
                key={index}
                className="transition duration-300 ease-in-out transform hover:text-white hover:translate-x-1"
              >
                {industry}
              </li>
            ))}
          </ul>
        </div>
 
        {/* Our Achievements */}
        <div className="flex flex-col mb-3 w-full sm:w-auto">
          <h5 className="text-white font-bold mb-3 transition duration-500 ease-in-out transform hover:scale-105">
            Achievements
          </h5>
          <ul>
            {industries.map((industry, index) => (
              <li
                key={index}
                className="transition duration-300 ease-in-out transform hover:text-white hover:translate-x-1"
              >
                {industry}
              </li>
            ))}
          </ul>
        </div>
 
        {/* Quick Links */}
        <div className="flex flex-col mb-3 w-full sm:w-auto">
          <h5 className="text-white font-bold mb-3 transition duration-500 ease-in-out transform hover:scale-105">
            Quick Links
          </h5>
          <ul>
            {quickLinks.map((link, index) => (
              <li
                key={index}
                className="transition duration-300 ease-in-out transform hover:text-white hover:translate-x-1"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
 
      <div className="text-center bg-black text-gray-300 text-xs  w-full">
        © All Rights Reserved 2021-2024<br/>
        esggp.org
      </div>
    </footer>
  );
};
 
export default Footer;
 