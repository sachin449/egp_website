import { useState, useEffect } from "react";

const Header = () => {
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlHeader = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down
                setShowHeader(false);
            } else { // if scroll up
                setShowHeader(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlHeader);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlHeader);
            };
        }
    }, [lastScrollY]);

    return (
        <header className={`fixed top-0 left-0 z-30 w-full bg-gray-800 transition-transform duration-1000 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto flex items-center justify-between px-5 py-3">
                <div className="flex items-center space-x-3">
                    <img src="egplogo.png" alt="Logo" className="h-[60px]" />
                </div>
                <nav>
                    <ul className="flex items-center space-x-8">
                        <li>
                            <a href="#" className="text-white text-lg leading-none py-2 hover:text-gray-300">
                                ABOUT US
                            </a>
                        </li>
                        <li className="relative">
                            <button
                                className="text-white text-lg leading-none py-2 hover:text-gray-300"
                                onMouseEnter={() => setSolutionsOpen(true)}
                                onMouseLeave={() => setSolutionsOpen(false)}
                            >
                                SERVICES
                            </button>
                            {solutionsOpen && (
                                <div
                                    className="absolute top-full left-0 mt-1 w-56 bg-gray-800 shadow-lg rounded-lg bg-opacity-90"
                                    onMouseEnter={() => setSolutionsOpen(true)}
                                    onMouseLeave={() => setSolutionsOpen(false)}
                                >
                                    <ul className="py-2 text-white">
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/solution1">ESG Risk Advisory</a>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/solution2">Mergers & Acquisitions</a>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/solution3">EHS & Social Advisory</a>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/solution4">Social Impact</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="relative">
                            <button
                                className="text-white text-lg leading-none py-2 hover:text-gray-300"
                                onMouseEnter={() => setResourcesOpen(true)}
                                onMouseLeave={() => setResourcesOpen(false)}
                            >
                                MARKETS
                            </button>
                            {resourcesOpen && (
                                <div
                                    className="absolute top-full left-0 mt-1 w-60 bg-gray-800 shadow-lg rounded-lg bg-opacity-90"
                                    onMouseEnter={() => setResourcesOpen(true)}
                                    onMouseLeave={() => setResourcesOpen(false)}
                                >
                                    <ul className="py-2 text-white">
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/resource1">Manufacturing</a>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/resource2">Agri-business & Forestry</a>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/resource3">Retail & Hospitality</a>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/resource4">Health & Education</a>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/resource5">Infrastructure & Real Estate</a>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/resource6">Financial Institutions & Funds</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <a href="#" className="text-white text-lg leading-none py-2 hover:text-gray-300">
                                CAREERS
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white text-lg leading-none py-2 px-4 rounded-md hover:text-gray-300 bg-blue-500">
                                CONTACT US
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
