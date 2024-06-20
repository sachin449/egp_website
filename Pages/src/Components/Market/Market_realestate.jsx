import { useState} from "react";

// const images = [
//   { src: 'sec1.jpg', title: 'Manufacturing', link: '/Manufacturing' },
//   { src: 'sec2.jpg', title: 'Infra & Real Estate', link: '/Infra & Real Estate' },
//   { src: 'sec3.jpg', title: 'Agri Business & Forestry', link: '/Agri Business & Forestry' },
//   { src: 'sec4.jpg', title: 'Health & Education', link: '/Health & Education' },
//   { src: 'sec5.jpg', title: 'Retail & Hospitality', link: '/Retail & Hospitality' },
//   { src: 'sec6.jpg', title: 'Financial Institution & Funds', link: '/Financial Institution & Funds' }
// ];

export const Market_realestate = () => {
  const projects = [
    {
      title: 'Hydropower in Nepal',
      description: 'EGP has undertaken development of Management Plan for a 50 MW hydropower project in Nepal. Our team has provided services related to development of EHS management plan and supported the Project Company with advice on managing risks related construction phase of the Project.',
      image: 'sec1.jpg'
    },
    {
      title: 'Solar Power Project in India',
      description: 'Members of our team was involved in developing an Environment and Social Impact Assessment (ESIA) for a 250 MW Solar Power Project in India. The project entailed assessing the risks and impacts of the project and developing appropriate mitigation measures as part of the Environment and Social Management Plan. Critical Habitat Assessment and Advisory was also carried out for the project.',
      image: 'sec2.jpg'
    }
  ];

  const helpSections = [
    {
      title: 'Consulting Services',
      description: 'We provide expert consulting services to help you navigate the complexities of your projects. Our team of experienced professionals will guide you through every step, ensuring success and compliance.',
      content: 'Our consulting services cover a wide range of areas, including strategic planning, operational efficiency, and risk management. We tailor our approach to meet the unique needs of each client, ensuring that we provide the most relevant and effective solutions. Our consultants have deep industry knowledge and experience, allowing them to provide insights and advice that can drive significant improvements in your organization. Whether you need help with a specific project or ongoing support, we are here to help you achieve your goals and succeed in today’s competitive market.'
    },
    {
      title: 'Project Management',
      description: 'Our project management services ensure that your projects are completed on time and within budget. We use industry-leading tools and methodologies to manage your projects effectively.',
      content: 'Effective project management is crucial to the success of any initiative. Our team of experienced project managers uses proven methodologies and tools to ensure that your projects are delivered on time, within scope, and on budget. We provide comprehensive project management services, including planning, execution, monitoring, and closing. Our approach is collaborative, involving stakeholders at every stage to ensure that the project meets their needs and expectations. We also focus on risk management, identifying potential issues early and developing strategies to mitigate them. Trust us to manage your projects efficiently and effectively.'
    },
    {
      title: 'Risk Management',
      description: 'We help you identify, assess, and mitigate risks in your projects. Our comprehensive risk management strategies protect your investments and ensure project success.',
      content: 'Risk management is an essential aspect of any project. Our services include identifying potential risks, assessing their impact, and developing strategies to mitigate them. We use a structured approach to risk management, which involves regular monitoring and reporting to ensure that risks are managed proactively. Our team has experience managing risks in various industries, allowing us to provide insights and solutions that are tailored to your specific needs. By partnering with us, you can minimize the impact of risks on your projects and increase the likelihood of achieving your objectives. Let us help you manage risk effectively.'
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
        <source src="Market-realestate-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35"></div>

      {/* Heading and Subheading */}
      <div className="relative container mx-auto flex flex-col justify-end h-full px-5 py-10 text-white">
        <div className="mb-20">
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-medium-bold mb-6">Infrastructure & Real Estate</h1>
          <h2 className="w-[800px] text-lg sm:text-xl md:text-2xl md:text-medium-bold">
            We have been providing services to Client in sectors of Infrastructure & Real Estate, Manufacturing, Agri-Business & Forestry, Retail & Hospitality, Financial Institution & Funds and Health & Education.
          </h2>
        </div>
      </div>

      {/* Content Below Video */}
      <div className="bg-white py-16">
        <div className="container mx-auto">
          <h1 className="text-5xl sm:text-4xl font-medium-bold text-blue-600 mb-12 text-center">Market Experience</h1>
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col sm:flex-row ${index % 2 === 0 ? '' : 'sm:flex-row-reverse'} items-center mb-8`}>
              <div className="w-full sm:w-1/2 px-4">
                <h4 className="text-2xl sm:text-2xl font-medium-bold text-blue-600 mb-6">{project.title}</h4>
                <p className="my-6 sm:text-xl text-gray-700">{project.description}</p>
              </div>
              <div className="w-full sm:w-1/2 px-4">
                <img src={project.image} alt={project.title} className="w-[550px] h-[320px] object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* New Section: How we can help */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h1 className="text-5xl sm:text-4xl font-medium-bold text-center text-blue-600 mb-12">How we can help?</h1>
          <div className="mb-12">
            <p className="text-lg sm:text-xl px-20 text-gray-700 mb-6">
              The Supply Chain Reinvention framework can help your organization effect a fundamental
               change in its performance to support sales growth, become more cost-competitive, minimize
                risk and improve operational resilience.
            </p>
            <p className="text-lg sm:text-xl px-20 text-gray-700">
              We have reinvented the supply chain with agile, profitable, technology-enabled structures 
              we call demand response networks (DRNs). DRNs alter the product-centric, sequential
               plan-buy-make-sell-deliver-return view of supply chains to a demand-centric,
                networked, create-sense-shape-respond one that uses complex supply chain 
                analytics solutions to drive significant improvements.
            </p>
          </div>
          {helpSections.map((help, index) => (
            <div key={index} className="mb-4 px-20">
              <div
                className="flex justify-between items-center cursor-pointer border-b border-gray-300 py-4"
                onClick={() => handleToggle(index)}
              >
                <h4 className="text-2xl sm:text-2xl font-medium-bold text-blue-600">
                  {help.title}
                </h4>
                <span className="text-xl sm:text-2xl font-medium-bold text-blue-600">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>
              {activeIndex === index && (
                <div className="mt-4">
                  <p className="text-lg sm:text-xl text-gray-700">{help.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Images Section */}
      {/* <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap -mx-3">
            {images.map((image, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-3">
                <div className="relative overflow-hidden bg-white shadow-lg rounded-lg">
                  <img className="w-full h-64 object-cover" src={image.src} alt={image.title} />
                  <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-10 flex items-end p-5">
                    <a href={image.link} className="text-white text-3xl font-bold hover:text-gray-300">
                      {image.title}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Market_realestate;
