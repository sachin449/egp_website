import { NavLink } from "react-router-dom";
 
const Cta = () => {
  return (
    <div
      className="flex flex-col items-center bg-black bg-opacity-50 justify-center h-[50vh] bg-cover bg-center text-white p-6 md:p-12"
      style={{ backgroundImage: `url(green01.jpg)` }}
    >
      <div className=" p-4 md:p-8 rounded-lg text-center mb-8 shadow-lg">
        
        <h1 className="text-2xl md:text-4xl font-bold mb-4 transition duration-500 ease-in-out transform hover:scale-105">
          Join Us in Making a Positive Impact
        </h1>
        <p className="text-base md:text-lg">
          At ESG Global Partners, we drive positive ESG outcomes for a sustainable, equitable world. Join our mission today.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <NavLink to="/contact-page">
          <button className="bg-[#00B0F0] text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-500 ease-in-out transform hover:scale-105">
            Get Involved Today
          </button>
        </NavLink>
      </div>
    </div>
  );
};
 
export default Cta;