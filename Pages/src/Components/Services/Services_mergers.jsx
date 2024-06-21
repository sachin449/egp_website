import { useState } from 'react';



 const Services_mergers = () => {

  const categories = [
    {
        title: 'Environmental Site Assessment – ASTM',
        description: 'We provide Environmental Site Assessment services according to ASTM standards to evaluate the environmental condition of properties.'
      },
      {
        title: 'Merger and Acquisition Support',
        description: 'We offer support for mergers and acquisitions by conducting thorough due diligence on assets and transactions to identify potential risks and liabilities.'
      },
      {
        title: 'Asset/Transaction Due Diligence',
        description: 'We conduct comprehensive due diligence on assets and transactions to identify potential risks and liabilities.'
      },
      {
        title: 'Implementation Support',
        description: 'Our team provides comprehensive support during the implementation phase of projects to ensure all environmental and social requirements are met.'
      }
  ];
  

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='relative w-full'>
      <div className="w-full h-screen relative overflow-hidden">
        {/* Video Background */}
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
          <source src="Services-merger-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Heading and Subheading */}
        <div className="absolute bottom-0 left-0 w-full text-white px-5 py-10">
          <div className="container mx-auto flex flex-col justify-end h-full">
            <div className="mb-20">
              <h1 className="text-3xl sm:text-6xl md:text-6xl font-medium-bold mb-6">MERGERS & ACQUISITIONS</h1>
              <h2 className="w-[800px] text-lg sm:text-xl md:text-xl md:text-medium-bold">
              EGP offers services to Clients in Mergers & Acquisitions (M&A) through all stages
              of investment lifecycle. By providing experienced advisory services EGP supports 
              the Client on target businesses which may be pertinent to making a well-informed M&A decision.
              </h2>
            </div>
          </div>
        </div>
      </div>
      

      
       {/* New Section: Case Showcase */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h1 className="text-5xl sm:text-4xl font-medium-bold text-center text-[#00a7ff] mb-12">Our Areas Of Expertise</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            {categories.map((category, index) => (
              <div key={index} className="mb-8">
                <div
                  className="flex justify-between items-center cursor-pointer bg-transparent text-gray-700 border-b border-gray-300 py-2"
                  onClick={() => handleToggle(index)}
                >
                  <h2 className="text-xl sm:text-xl ">{category.title}</h2>
                  <span className="text-xl sm:text-xl">
                  {activeIndex === index ? '-' : '+'}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="bg-transparent p-2 mt-2">
                    <p className="text-lg sm:text-xl text-gray-700">{category.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>




      
    </div>
  );
};

export default Services_mergers;



