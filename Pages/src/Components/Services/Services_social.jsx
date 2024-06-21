import { useState } from 'react';

import { FaPlus, FaMinus } from 'react-icons/fa';

 const Services_social = () => {

    const categories = [
        {
          title: 'Stakeholder Engagement',
          description: 'We facilitate stakeholder engagement processes to ensure that all voices are heard and considered in project planning and execution.'
        },
        {
          title: 'Social Impact Assessment',
          description: 'Our team conducts thorough social impact assessments to evaluate the potential effects of projects on communities and propose mitigation strategies.'
        },
        {
          title: 'Resettlement & Rehabilitation',
          description: 'We provide comprehensive support for resettlement and rehabilitation processes to ensure that displaced communities are adequately compensated and supported.'
        },
        {
          title: 'Socio-economic Baseline – Diagnostic Evaluation',
          description: 'We perform socio-economic baseline studies and diagnostic evaluations to establish benchmarks and inform project planning and impact assessments.'
        },
        {
          title: 'Community Development',
          description: 'Our community development programs focus on enhancing the well-being and economic prospects of communities affected by projects.'
        },
        {
          title: 'Cultural Heritage Management',
          description: 'We offer cultural heritage management services to preserve and protect cultural sites and practices impacted by development projects.'
        },
        {
          title: 'Indigenous People Management',
          description: 'Our services include developing and implementing strategies to engage and support indigenous communities in project areas.'
        },
        {
          title: 'Participatory Evaluation',
          description: 'We use participatory evaluation methods to involve community members in assessing the impacts and outcomes of projects.'
        },
        {
          title: 'Traditional Knowledge Preservation',
          description: 'We work with communities to document and preserve traditional knowledge and practices that are at risk of being lost.'
        },
        {
          title: 'Value Creation',
          description: 'Our value creation services aim to maximize the positive impacts of projects, ensuring benefits for all stakeholders.'
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
          <source src="Services-social-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35"></div>

        {/* Heading and Subheading */}
        <div className="absolute bottom-0 left-0 w-full text-white px-5 py-10">
          <div className="container mx-auto flex flex-col justify-end h-full">  
            <div className="mb-20">
              <h1 className="text-3xl sm:text-6xl md:text-6xl font-medium-bold mb-6">SOCIAL IMPACT</h1>
              <h2 className="w-[800px] text-lg sm:text-xl md:text-xl md:text-medium-bold">
                With growing economies around the world and ever-changing business needs, 
                managing social risks and impacts has become an absolute necessity. Right
                community engagement processes, and addressing community needs, help obtain
                social license to operate, supporting businesses in overall operational excellence.
              </h2>
            </div>
          </div>
        </div>
      </div>




      
      
      {/* New Section: Case Showcase */}
      <div className=" bg-gray-100  py-16">
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
                  <h2 className="text-lg sm:text-lg flex-1">{category.title}</h2>
                  <span className="text-xl sm:text-xl flex-shrink-0 ml-4">
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

export default Services_social;



