import { NavLink } from "react-router-dom";

const Cta = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-[50vh] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(green01.jpg)` }}
    >
      <div className="text-center mb-8 transition duration-500 ease-in-out transform hover:scale-105">
        <p className="text-xl mb-2 transition duration-500 ease-in-out transform hover:translate-y-2">
          Be a Part of the Change for a Sustainable Future
        </p>
        <h1 className="text-4xl font-bold mb-2 transition duration-500 ease-in-out transform hover:scale-110">
          Join Us in Making a Positive Impact
        </h1>
        <p className="text-lg transition duration-500 ease-in-out transform hover:translate-y-1">
          At ESG Global Partners, we drive positive ESG outcomes for a sustainable, equitable world. Join our mission today.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <NavLink to="/contact-page">
          <button className="bg-[#00a7ff] text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform  hover:scale-105">
            Get Involved Today
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Cta;
