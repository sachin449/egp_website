import { useRef, useEffect } from 'react';

const Marc = () => {
    const textSections = [
        {
            id: 1,
            heading: "Garbage in energy out: what you need to know when developing waste-to-energy projects",
            subheading: "Resource management and circular economy",
            paragraph: "Rapid urbanisation in Southeast Asia means increased waste that needs to be managed. While this is clearly a challenge given that the regions population Rapid urbanisation in Southeast Asia means increased waste that needs to be managed. While this is clearly a challenge given that the regionpopulation is exis expected to rise from about 686.825 million to 724.664 million..."
        },
        {
            id: 2,
            heading: "The importance of recycling: how it helps our environment",
            subheading: "Sustainability and the future",
            paragraph: "Recycling plays a crucial role in managing waste and preserving natural resources. It helps reduce pollution and conserves materials that can be reused in new products.Rapid urbanisation in Southeast Asia means increased waste that needs to be managed. While this is clearly a challenge given that the regionopulation is ex"
        },
        {
            id: 3,
            heading: "Innovative approaches to waste management",
            subheading: "Modern solutions",
            paragraph: "Innovation in waste management includes new technologies and practices that aim to reduce waste and increase efficiency in waste handling and recycling processes.Rapid urbanisation in Southeast Asia means increased waste that needs to be managed. While this is clearly a challenge given that the regionpopulation is ex"
        },
        {
            id: 4,
            heading: "Circular economy: a model for sustainable development",
            subheading: "Economic and environmental benefits",
            paragraph: "A circular economy promotes the reuse, repair, refurbishment, and recycling of materials to create a closed-loop system, minimizing waste and making the most of available resources.Rapid urbanisation in Southeast Asia means increased waste that needs to be managed. While this is clearly a challenge given that the regionpulation is ex"
        },
    ];

    const imageSections = [
        {
            src: "sec1.jpg",
            alt: "Building 1"
        },
        {
            src: "sec2.jpg",
            alt: "Building 2"
        },
        {
            src: "sec3.jpg",
            alt: "Building 3"
        },
        {
            src: "sec4.jpg",
            alt: "Building 4"
        }
    ];

    const textScrollRef = useRef(null);
    const imageScrollRef = useRef(null);

    const scrollTextCarousel = () => {
        if (textScrollRef.current) {
            const { scrollLeft, clientWidth, scrollWidth } = textScrollRef.current;
            if (scrollLeft + clientWidth >= scrollWidth) {
                textScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                textScrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
            }
        }
    };

    const scrollImageCarousel = () => {
        if (imageScrollRef.current) {
            const { scrollLeft, clientWidth, scrollWidth } = imageScrollRef.current;
            if (scrollLeft + clientWidth >= scrollWidth) {
                imageScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                imageScrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        const textInterval = setInterval(scrollTextCarousel, 3000);
        const imageInterval = setInterval(scrollImageCarousel, 3000);

        return () => {
            clearInterval(textInterval);
            clearInterval(imageInterval);
        };
    }, []);

    return (
        <div className="h-screen relative flex">
            {/* Text Carousel */}
            <div className="text-background-container absolute w-[42%] ml-10 h-screen bg-gray-300 z-10 overflow-hidden" ref={textScrollRef}>
                <div className="flex">
                    <h1></h1>
                    {textSections.map((section) => (
                        <div key={section.id} className=" w-full h-full relative p-8 bg-transparent z-10 flex-shrink-0 mt-28">
                            <h2 className="subheading text-xl my-14 text-balance">{section.subheading}</h2>
                            <h1 className="heading text-4xl mb-16 text-balance">{section.heading}</h1>
                            <p className="paragraph text-lg mr-20 font-normal text-balance">
                                {section.paragraph}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Carousel */}
            <div className="image-container absolute top-1/4 right-[160px] w-[50%] h-[62vh] bg-gray-500 z-20 overflow-hidden" ref={imageScrollRef}>
                <div className="flex">
                    {imageSections.map((image, index) => (
                        <div key={index} className="w-full h-full relative flex-shrink-0">
                            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" onError={() => console.error(`Error loading image ${image.src}`)} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marc;