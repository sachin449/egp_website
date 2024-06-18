

const images = [
  { src: 'sec1.jpg', title: 'Manufacturing', link: '/Manufacturing' },
  { src: 'sec2.jpg', title: 'Infra & Real Estate', link: '/Infra & Real Estate' },
  { src: 'sec3.jpg', title: 'Agri Business & Forestry', link: '/Agri Business & Forestry' },
  { src: 'sec4.jpg', title: 'Health & Education', link: '/Health & Education' },
  { src: 'sec5.jpg', title: 'Retail & Hospitality', link: '/Retail & Hospitality' },
  { src: 'sec6.jpg', title: 'Financial Institution & Funds', link: '/Financial Institution & Funds' }
];

export const Market = () => {
  return (
    <div className="w-full h-screen relative">
      {/* Video Background */}
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="realestatevideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35"></div>

      {/* Heading and Subheading */}
      <div className="relative container mx-auto flex flex-col justify-end h-full px-5 py-10 text-white">
        <div className="mb-20"> {/* Adjusted margin-bottom for spacing */}
          <h1 className=" text-3xl sm:text-5xl md:text-5xl  font-medium-bold mb-6">Infrastructure & Real Estate</h1>
          <h2 className="w-[800px] text-lg sm:text-xl md:text-2xl md:text-medium-bold">
          We have been providing services to Client in sectors of Infrastructure & Real Estate,
           Manufacturing, Agri-Business & Forestry, Retail & Hospitality, Financial Institution &
            Funds and Health & Education.
          </h2>
        </div>
      </div>

      {/* Content Below Video */}
      <div className="bg-white pr-40  py-16 ">
        <div className="container w-[900px] pr-[200px] mx-auto">
          
          <h4 className="text-4xl sm:text-4xl font-medium-bold text-blue-600 mb-6">
            Hydropower in Nepal
          </h4>
          <p className="my-12  sm:text-xl text-gray-700 text-balance">
          
          EGP has undertaken development of Management Plan for a 50 MW hydropower project in Nepal. Our team has provided
           services related to development of EHS management plan and supported the Project Company with advice on
            managing risks related construction phase of the Project.
          </p>
          <h4 className="text-4xl sm:text-4xl font-medium-bold text-blue-600 mb-6">
            Solar Power Project in India
          </h4>
          <p className="my-12  sm:text-xl text-gray-700 text-balance">
          
            Members of our team was involved in developing an Environment and Social Impact Assessment (ESIA) for a 250 MW
            Solar Power Project in India. The project entailed assessing the risks and impacts of the project and
            developing appropriate mitigation measures as part of the Environment and Social Management Plan. 
            Critical Habitat Assessment and Advisory was also carried out for the project.
          </p>
          
        </div>
      </div>

      {/* Images Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap -mx-3">
            {images.map((image, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-3">
                <div className="relative overflow-hidden bg-white shadow-lg rounded-lg">
                  <img className="w-full h-64 object-cover" src={image.src} alt={image.title} />
                  <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-10 flex items-end p-5">
                    <a href={image.link} className="text-white text-2xl font-bold hover:text-gray-300">
                      {image.title}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
