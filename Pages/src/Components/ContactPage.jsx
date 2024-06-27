import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEnvelope, } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";


const ContactPage = () => {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        const templateParams = {
            to_name: 'ESG Experts',
            from_name: formData.name,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        emailjs.send('service_4orpryt', 'template_kqn420e', templateParams, 'PZPUEW2FC7OIPcR70')
            .then((result) => {
                toast.success('Message sent successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
                formRef.current.reset(); // Reset the form
            }, (error) => {
                toast.error('Failed to send message.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-10 sm:p-10 md:p-16 lg:p-24 xl:p-32"
            style={{
                backgroundImage: `url('aboutUs.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="max-w-4xl w-full bg-gray-800 bg-opacity-80 mt-14 rounded-lg shadow-md p-8 flex flex-col lg:flex-row">
                <div className="bg-[#00b0f0] bg-opacity-80 rounded-lg p-8 flex-shrink-0 w-full lg:w-1/3 mb-6 lg:mb-0">
                    <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6">Contact information</h2>
                    <div className="text-white space-y-6">
                        <div>
                            <div className="flex items-center mb-2">
                            <a
              href="mailto:info@sustainatrix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition duration-300 ease-in-out"
            >
              <FaEnvelope size={24} />
            </a>
                                <span className="ml-2 text-sm sm:text-lg">Email</span>
                            </div>
                            <p className="text-sm sm:text-lg">support@esggp.org</p>
                        </div>
                        <div>
                            <div className="flex items-center mb-2">
                            <a
              href="mailto:info@sustainatrix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition duration-300 ease-in-out"
            >
              <FaPhoneVolume size={24} />
            </a>
                                <span className="ml-2 text-sm sm:text-lg">Phone</span>
                            </div>
                            <p className="text-sm sm:text-lg">+91 xxxxxxxxxx</p>
                        </div>
                        <div>
                            <div className="flex items-center mb-2">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.38 0 2.5 1.12 2.5 2.5S13.38 13 12 13s-2.5-1.12-2.5-2.5S10.62 8 12 8zM5.5 21a2.5 2.5 0 01-2.5-2.5A2.5 2.5 0 015.5 16h13a2.5 2.5 0 012.5 2.5A2.5 2.5 0 0118.5 21h-13zM12 3c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"></path>
                                </svg>
                                <span className="ml-2 text-sm sm:text-lg">Working hours</span>
                            </div>
                            <p className="text-sm sm:text-lg">8 a.m. – 11 p.m.</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-gray-800 bg-opacity-80 rounded-lg p-8 lg:ml-8">
                    <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6">GET IN TOUCH</h2>
                    <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <input type="text" name="name" className="w-full sm:w-1/2 p-4 rounded-md bg-gray-700 bg-opacity-80 text-white" placeholder="Enter your name" required />
                            <input type="email" name="email" className="w-full sm:w-1/2 p-4 rounded-md bg-gray-700 bg-opacity-80 text-white" placeholder="Enter your email" required />
                        </div>
                        <input type="text" name="subject" className="w-full p-4 rounded-md bg-gray-700 bg-opacity-80 text-white" placeholder="Subject" required />
                        <textarea name="message" className="w-full p-4 rounded-md bg-gray-700 bg-opacity-80 text-white" placeholder="Enter your message" required></textarea>
                        <button type="submit" className="w-full p-4 rounded-md bg-[#00b0f0] bg-opacity-80 text-white transition-colors">Send message</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ContactPage;
