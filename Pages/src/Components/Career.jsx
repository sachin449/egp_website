 

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

 
// Job Data
const jobsData = [
  {
    location: "India | Delhi NCR",
    title: "Associate- Environment",
    more: "Learn More"
  },
  {
    location: "India | Delhi NCR",
    title: "Associate- Social",
    more: "Learn More"
  },
  {
    location: "India | Delhi NCR",
    title: "Manager- Accounts & Ops",
    more: "Learn More"
  },
  {
    location: "India | Delhi NCR",
    title: "Associate- Human Resource",
    more: "Learn More"
  },
  {
    location: "New Delhi",
    title: "Tech Consultant",
    more: "Learn More"
  }
];
 
// Job Details Data
const jobDetailsData = [
  {
    title: "Associate- Environment",
    positions: "02",
    location: "Delhi NCR, India",
    about: `ESG Global Partners is hiring an Environment Associate to join our team in India. The successful candidate will work on a variety of technical projects and programs for Clients in diverse sectors, both within the country and internationally. This role will provide a platform to the candidate to engage with international consultants in sharing and developing best practices across the industry while gaining ongoing learning opportunities. This is an excellent career opportunity to work with a consulting firm in supporting diverse set of Clients with challenging business needs.`,
    duties: [
      "Assess regulatory compliance, perform regulatory applicability evaluations and implement environmental compliance management systems and processes.",
      "Perform fieldwork such as sampling, inspections, audits, compilation of field data, conduct interviews with site representatives and stakeholders.",
      "Able to write reports based on field visits and assessments under the guidance of senior team members.",
      "Collect, organize, review and analyze documents and datasets.",
      "Contribute towards drafting of working papers on environmental issues, policy, ecosystem services, sustainable development, etc.",
      "Support project teams with other tasks and management aspects as defined by the team",
      "Promote a culture of safety, collaboration and excellence."
    ],
    required: [
      "Bachelor’s/Master’s Degree in Environmental Science/Engineering or related discipline;",
      "0-7 years of professional experience in environmental permitting and compliance preferably in the areas of EIA/ESIA, Environmental Auditing, EHS Audits, Management Systems Design, Implementation, Regulatory Advisory etc."
    ],
    preferred: [
      "Demonstrated ability to manage multiple assignments while maintaining clear communication with clients and colleagues.",
      "Ability to multi-task, maintain flexibility, travel and work independently with minimal supervision.",
      "Ability to read, understand and apply environmental regulations and agency guidance documents.",
      "Strong analytical and computational skills to solve technical problems and implement effective solutions.",
      "Excellent written and verbal communication skills including technical writing experience.",
      "Strong self-management skills including time management and organisation.",
      "Strong MS Office computer skills with an advanced understanding of PowerPoint and Excel required.",
      "Ability to thrive in a fast paced consulting environment, handling multiple project assignments, meeting strict deadlines and travelling to Client’s Office as needed.",
      "Apply a collaborative approach and enjoy teaming with colleagues in different geographies.",
      "Positive and enthusiastic attitude, motivated to deliver outstanding client service and grow the business."
    ],
    apply: "Submit your updated CVs to hr@esggp.org."
  }
];
 
// Career Component
const Career = () => {
  return (
    <div>
      
      <div className="w-full h-screen relative">
    {/* Image Background */}
    <img src="career001.jpg" alt="Market Manufacturing" className="absolute top-0 left-0 w-full h-full object-cover" />

    {/* Overlay */}
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

    {/* Heading and Subheading */}
    <div className="relative container mx-auto flex flex-col justify-end h-full px-5 py-10 text-white">
        <div className="mb-20">
            <h1 className="text-3xl sm:text-6xl md:text-6xl font-medium-bold mb-6">Careers</h1>
            <h2 className="w-[800px] text-lg sm:text-xl md:text-xl md:text-medium-bold">
              We believe our people are our assets. We love what we do, and 
              if you share the same passion, you should get in touch with us.
               Apply to the open positions in this page or alternatively write to 
               us hr@esggp.org. We will find ways to join hands!
            </h2>
        </div>
    </div>
</div>






      {/* JOB's Card Section */}
      <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center">
        {/* Main container */}
        <header className="text-center py-8 mt-10">
          {/* Header section */}
          <h1 className="text-3xl font-bold text-white">Come join us ➡️</h1>
          {/* Header title */}
        </header>
        <div className="w-full max-w-7xl p-8">
          {/* Wrapper div for custom scrollbar */}
          <SimpleBar style={{ maxHeight: 500 }}>
            {/* Custom Scrollbar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Grid with 2 columns */}
              {jobsData.map((job, index) => (
                // Mapping through jobsData
                <div
                  key={index}
                  className="flex flex-col justify-between border-t-4 border-[#00a7ff] p-4 rounded-lg shadow-lg bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out w-full sm:w-10/12 mx-auto">
                  {/* Job box with top border and reduced width */}
                  <div>
                    <p className="text-gray-600 font-medium mb-1">{job.location}</p>
                    {/* Job location */}
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h2>
                    {/* Job title */}
                    <p className="text-gray-500 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac diam ac urna.</p>
                    {/* Job description */}
                  </div>
                  <button className="mt-2 px-3 py-1 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-800 text-white rounded-lg self-start transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg">
                    Learn More
                  </button>
                  {/* Learn More button */}
                </div>
              ))}
            </div>
          </SimpleBar>
        </div>
 
        {/* Job Details Section */}
        {jobDetailsData.map((jobDetail, index) => (
          <div key={index} className="w-full max-w-7xl p-8 bg-gray-900 text-white mt-10 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">{jobDetail.title}</h2>
            <p className="text-lg mb-2"><span className="font-semibold">No. of Positions:</span> {jobDetail.positions}</p>
            <p className="text-lg mb-2"><span className="font-semibold">Location:</span> {jobDetail.location}</p>
            <h3 className="text-2xl font-semibold mt-4">About</h3>
            <p className="text-sm mb-4">{jobDetail.about}</p>
            <h3 className="text-2xl font-semibold mt-4">Characteristic Duties and Responsibilities</h3>
            <ul className="list-disc ml-5 mb-4 text-sm">
              {jobDetail.duties.map((duty, i) => (
                <li key={i} className="transition-colors hover:text-blue-400">{duty}</li>
              ))}
            </ul>
            <h3 className="text-2xl font-semibold mt-4">Required Experience & Qualifications</h3>
            <ul className="list-disc ml-5 mb-4 text-sm">
              {jobDetail.required.map((req, i) => (
                <li key={i} className="transition-colors hover:text-blue-400">{req}</li>
              ))}
            </ul>
            <h3 className="text-2xl font-semibold mt-4">Preferred Experience & Qualifications</h3>
            <ul className="list-disc ml-5 mb-4 text-sm">
              {jobDetail.preferred.map((pref, i) => (
                <li key={i} className="transition-colors hover:text-blue-400">{pref}</li>
              ))}
            </ul>
            <h3 className="text-2xl font-semibold mt-4">How to Apply</h3>
            <p className="text-lg mb-4">{jobDetail.apply}</p>
            <button className="mt-2 px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-800 text-white rounded-lg transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Career;