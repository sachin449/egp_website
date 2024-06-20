import { useState } from 'react';

import { FaPlus, FaMinus } from 'react-icons/fa';

 const Services_ehs = () => {

    const categories = [
        {
          title: 'EHS & Social Compliance Program Development and Implementation',
          description: 'We develop and implement comprehensive EHS & Social Compliance programs tailored to your organization’s needs.'
        },
        {
          title: 'Outsourcing Support for EHS & Social Compliance and Management Programs',
          description: 'We provide outsourcing support for EHS & Social Compliance and Management programs to ensure ongoing compliance and effectiveness.'
        },
        {
          title: 'Process Safety Evaluations, Siting and Management',
          description: 'Our team conducts thorough process safety evaluations, siting assessments, and management to mitigate risks.'
        },
        {
          title: 'Industrial Hygiene Monitoring, Assessments and Management',
          description: 'We offer industrial hygiene monitoring, assessments, and management services to protect worker health and safety.'
        },
        {
          title: 'Compliance and Management Systems Design and Implementation Support',
          description: 'We assist in designing and implementing compliance and management systems to ensure regulatory adherence.'
        },
        {
          title: 'Global EHS & Social Regulatory Knowledge Support',
          description: 'Our experts provide global EHS & Social regulatory knowledge support to help you navigate complex regulations.'
        },
        {
          title: 'EHS & Social Training Program Development and Delivery Support',
          description: 'We develop and deliver EHS & Social training programs to enhance your team’s knowledge and skills.'
        },
        {
          title: 'EHS & Social Audit Program Development, Management',
          description: 'We develop and manage EHS & Social audit programs to ensure ongoing compliance and identify areas for improvement.'
        },
        {
          title: 'EHS & Social Audit Program Implementation and Third-party Evaluations',
          description: 'Our team implements EHS & Social audit programs and conducts third-party evaluations to provide an unbiased assessment.'
        }
      ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full h-screen relative">
      {/* Video Background */}
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="Services-ehs-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35"></div>

      {/* Heading and Subheading */}
      <div className="relative container mx-auto flex flex-col justify-end h-full px-5 py-10 text-white">
        <div className="mb-20">
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-medium-bold mb-6">EHS & SOCIAL ADVISORY</h1>
          <h2 className="w-[800px] text-lg sm:text-xl md:text-2xl md:text-medium-bold">
            EGP provides advisory services to identify, measure and manage the ESG performance
             of Clients to achieve improved operational benefits in the long run. The enhancement 
             of ESG performance will support the Client to demonstrate their commitment of ESG factors in their operations.
          </h2>
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
                  style={{ minHeight: '48px' }} // Ensure a minimum height for consistent baseline alignment
                >
                  <h2 className="text-2xl sm:text-2xl flex-1">{category.title}</h2>
                  <span className="text-xl sm:text-2xl flex-shrink-0 ml-4">
                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
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

export default Services_ehs;



