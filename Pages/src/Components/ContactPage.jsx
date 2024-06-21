const ContactPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-6"
            style={{
                backgroundImage: `url('aboutUs.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="max-w-4xl bg-gray-800 bg-opacity-80 mt-14 rounded-lg shadow-md p-8 flex">
                <div className="bg-[#00b0f0] bg-opacity-80 rounded-lg p-8 flex-shrink-0 w-1/3">
                    <h2 className="text-white text-3xl font-bold mb-6">Contact information</h2>
                    <div className="text-white space-y-6">
                        <div>
                            <div className="flex items-center mb-2">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 2l4 4m0 0l-6.586 6.586a2 2 0 01-.707.293l-3.757.752a1 1 0 01-1.179-1.179l.752-3.757a2 2 0 01.293-.707L18 6m4-4L10 10m-7 5h3m4 0h6m-4-4h4m-4 4a9 9 0 110-18 9 9 0 0118 0z"></path></svg>
                                <span className="ml-2 text-lg">Email</span>
                            </div>
                            <p className="text-lg">support@esggp.org</p>
                        </div>
                        <div>
                            <div className="flex items-center mb-2">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l1-1m10-6H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2v-5M16 2h6m-3 3v6m0 0h6m-6 0H7a4 4 0 00-4 4v4a2 2 0 002 2h12a2 2 0 002-2v-5a9 9 0 00-9-9H4z"></path></svg>
                                <span className="ml-2 text-lg">Phone</span>
                            </div>
                            <p className="text-lg">+91 xxxxxxxxxx</p>
                        </div>
                       
                        <div>
                            <div className="flex items-center mb-2">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.38 0 2.5 1.12 2.5 2.5S13.38 13 12 13s-2.5-1.12-2.5-2.5S10.62 8 12 8zM5.5 21a2.5 2.5 0 01-2.5-2.5A2.5 2.5 0 015.5 16h13a2.5 2.5 0 012.5 2.5A2.5 2.5 0 0118.5 21h-13zM12 3c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"></path></svg>
                                <span className="ml-2 text-lg">Working hours</span>
                            </div>
                            <p className="text-lg">8 a.m. – 11 p.m.</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-gray-800 bg-opacity-80 rounded-lg p-8 ml-8">
                    <h2 className="text-white text-3xl font-bold mb-6">GET IN TOUCH</h2>
                    <form className="space-y-6">
                        <div className="flex space-x-4">
                            <input type="text" className="w-1/2 p-4 rounded-md bg-gray-700 bg-opacity-80 text-white" placeholder="Enter your name" required />
                            <input type="email" className="w-1/2 p-4 rounded-md bg-gray-700 bg-opacity-80 text-white" placeholder="Enter your email" required />
                        </div>
                        <input type="text" className="w-full p-4 rounded-md bg-gray-700 bg-opacity-80 text-white" placeholder="Subject" required />
                        <textarea className="w-full p-4 rounded-md bg-gray-700 bg-opacity-80 text-white" placeholder="Enter your message" required></textarea>
                        <button type="submit" className="w-full p-4 rounded-md bg-[#00b0f0] bg-opacity-80 text-white  transition-colors">Send message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;