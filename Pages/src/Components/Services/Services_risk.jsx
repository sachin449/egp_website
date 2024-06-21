import { useState } from 'react';



export const Services_risk = () => {

  const categories = [
    {
      title: 'Siting, Project Feasibility and Permitting Strategy',
      description: 'We assist in determining the most suitable locations for projects, evaluating their feasibility, and strategizing the necessary permitting process.'
    },
    {
      title: 'Policy Development',
      description: 'Our team helps in the formulation and development of policies that guide environmental, social, and governance practices.'
    },
    {
      title: 'Screening, Scoping and Impact Assessment',
      description: 'We conduct thorough assessments to screen, scope, and evaluate the environmental and social impacts of projects.'
    },
    {
      title: 'Baseline Field Studies',
      description: 'We carry out detailed field studies to establish baseline data for environmental and social conditions.'
    },
    {
      title: 'Ecology & Biodiversity Assessment',
      description: 'Our experts assess the ecological and biodiversity aspects of projects to ensure sustainability.'
    },
    {
      title: 'Project Permitting Program Management',
      description: 'We manage the entire permitting process for projects, ensuring compliance with regulatory requirements.'
    },
    {
      title: 'Environmental Mitigation, Monitoring and Planning',
      description: 'We develop and implement plans to mitigate environmental impacts and monitor ongoing compliance.'
    },
    {
      title: 'Regulatory Permitting/Negotiation',
      description: 'Our team negotiates with regulatory bodies to secure necessary permits for projects.'
    },
    {
      title: 'Stakeholder/Public Engagement',
      description: 'We facilitate engagement with stakeholders and the public to gather input and support for projects.'
    },
    {
      title: 'Risk Assessment',
      description: 'We perform comprehensive risk assessments to identify and mitigate potential environmental and social risks.'
    },
    {
      title: 'Environmental Modelling',
      description: 'Our environmental modelling services help predict the impacts of projects on various environmental factors.'
    },
    {
      title: 'Program Management for Large Programs',
      description: 'We offer program management services for large-scale projects to ensure they are completed on time and within budget.'
    },
    {
      title: 'Climate Risk',
      description: 'We assess and manage climate risks associated with projects to promote sustainability and resilience.'
    },
    {
      title: 'Screening and Scoping of Due Diligence',
      description: 'We provide due diligence services to screen and scope potential investments for environmental and social risks.'
    },
    {
      title: 'ESG Due Diligence & ESAP Development',
      description: 'We conduct ESG due diligence and develop Environmental and Social Action Plans (ESAP) for projects.'
    },
    {
      title: 'ESAP Implementation Support, Tracking, and Advisory',
      description: 'Our team supports the implementation of ESAPs, tracks progress, and provides advisory services to ensure compliance.'
    },
    {
      title: 'Portfolio Management',
      description: 'We offer portfolio management services to help manage and optimize investments in various projects.'
    },
    {
      title: 'Review of Action Plans, ESAP Implementation',
      description: 'We review action plans and support the implementation of ESAPs to ensure environmental and social compliance.'
    },
    {
      title: 'Developing and Tracking ESG Metrics',
      description: 'We develop and track ESG metrics to measure the environmental, social, and governance performance of projects.'
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
          <source src="Services-risk-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35"></div>

        {/* Heading and Subheading */}
        <div className="absolute bottom-0 left-0 w-full text-white px-5 py-10">
          <div className="container mx-auto flex flex-col justify-end h-full">  
            <div className="mb-20">
              <h1 className="text-3xl sm:text-6xl md:text-6xl font-medium-bold mb-6">ESG RISK ADVISORY</h1>
              <h2 className="w-[800px] text-lg sm:text-xl md:text-xl md:text-medium-bold">
              The risks and impacts emanating from environment, social and governance (ESG) factors 
              and their management entails a business’s commitment to improve their ESG risk management. 
              EGP provides advisory services to businesses in identifying ESG risks and management 
              measures to enhance their ESG performance.
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

export default Services_risk;



