

export  const Market = () => {
  return (
    <div className="w-full h-screen relative">
      {/* Video Background */}
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="path-to-your-video-file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Heading and Subheading */}
      <div className="relative container mx-auto flex flex-col justify-end h-full px-5 py-10 text-white">
        <div className="mb-20"> {/* Adjusted margin-bottom for spacing */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Building a better future</h1>
          <h2 className="text-lg sm:text-xl md:text-2xl">
            Creating buildings and urban areas where people, business, and nature thrive.
          </h2>
        </div>
      </div>

      {/* Content Below Video */}
      <div className="bg-white py-10 px-5">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-6">
            Designing sustainable, resilient, and attractive buildings and spaces for life to flourish
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            With the global real estate market projected to grow by 5% annually, the question of how to create thriving urban neighbourhoods and buildings is paramount. To be attractive, real estate must meet tenant and end user demands for sustainability, social interaction, and a good lifestyle. At the same time, the long term viability of developments depends on them being flexible to changing needs over time and resilient to shocks such as extreme weather and pandemics.
          </p>
        </div>
      </div>
    </div>
  );
};


