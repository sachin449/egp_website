import { useState, useEffect, useRef } from "react";

import "animate.css";

const HeroMain = () => {
  const [currentProgress, setCurrentProgress] = useState([0, 0, 0]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [spinAnimation, setSpinAnimation] = useState(false);

  const [textAnimationClass, setTextAnimationClass] = useState(
    "animate__fadeInLeft"
  );

  const animationRef = useRef();

  const sectionTexts = [
    {
      title: "Sustainable Resilience Impacting Lives",
      details:
        "To the ever-changing environment and business needs, we position ourselves with our deep understanding of technical, cultural and regulatory know-how, meeting client needs.",
    },

    {
      title: "About EGP: Integrating ESG Excellence",
      details:
        "EGP is an association of world class professionals, who have come together from different geographies, to deliver best in class ESG services.",
    },

    {
      title: "Sustainatrix: ESG Intelligence Solution",
      details:
        "Sustainatrix offfers a comprehensive suit of services to help financial institutions achieve their impact investing goals.",
    },
  ];

  useEffect(() => {
    startProgressBarAnimation();

    return () => cancelAnimationFrame(animationRef.current);
  }, [currentIndex]);

  const startProgressBarAnimation = () => {
    let startTime = null;

    const animateProgressBar = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;

      const progress = Math.min((elapsed / 10000) * 100, 100); // 10000ms = 10s

      setCurrentProgress((prevProgress) => {
        const newProgress = [0, 0, 0];

        newProgress[currentIndex] = progress;

        return newProgress;
      });

      if (progress < 100) {
        animationRef.current = requestAnimationFrame(animateProgressBar);
      } else {
        handleAnimationEnd();
      }
    };

    animationRef.current = requestAnimationFrame(animateProgressBar);
  };

  const handleAnimationEnd = () => {
    setTextAnimationClass("animate__rotateOutUpLeft");

    setSpinAnimation(true); // Start the spin animation

    setTimeout(() => {
      setSpinAnimation(false); // Disable the spin animation after 1s

      setCurrentProgress([0, 0, 0]); // Reset all progress bars

      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);

      // Set animation class based on the current index

      const nextIndex = (currentIndex + 1) % 3;

      if (nextIndex === 0) {
        setTextAnimationClass("animate__fadeInLeft");
      } else {
        setTextAnimationClass("animate__rotateInUpLeft");
      }

      startProgressBarAnimation();
    }, 1000);
  };

  const renderBackgroundMedia = () => {
    switch (currentIndex) {
      case 0:
        return (
          <video
            key={currentIndex}
            src="/coreValues.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        );

      case 1:
        return (
          <img
            key={currentIndex}
            src="/aboutUs.png"
            alt="About Us"
            className="w-full h-full object-cover animate-zoom"
          />
        );

      case 2:
        return (
          <video
            key={currentIndex}
            src="/sustainatrix.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative overflow-hidden w-full h-screen z-0">
      <div className="absolute top-0 left-0 w-full h-screen z-30 flex flex-col justify-between p-4">
        <div className="flex justify-center items-center h-full">
          <div
            className={`text-left text-white animate__animated w-[65vw] mb-[120px] z-999 ${textAnimationClass}`}
          >
            <p className="text-5xl leading-relaxed">
              {sectionTexts[currentIndex].title}
            </p>

            <p className="text-xl leading-normal mb-12">
              {sectionTexts[currentIndex].details}
            </p>

            <div className="flex items-center leading-none">
              <div className="h-[2px] bg-[#00A7FF] w-12 mr-6"></div>

              <a
                href={sectionTexts[currentIndex].link}
                className="text-white hover:text-custom-blue transition-color cursor-pointer transition-duration-300"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full flex justify-around">
          {["CORE VALUES", "WHO WE ARE", "ANNOUNCING ESG INTELLIGENCE"].map(
            (title, index) => (
              <div key={index} className="w-1/4 flex flex-col items-start">
                <h3
                  style={{
                    color: currentIndex === index ? "white" : "#BFBFBF",
                  }}
                  className="text-xl mb-6"
                >
                  {title}
                </h3>

                {currentIndex === index && (
                  <div className="w-full bg-gray-300 h-1.5">
                    <div
                      className="bg-[#00A7FF] h-1.5"
                      style={{ width: `${currentProgress[index]}%` }}
                    ></div>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-screen z-10">
        {renderBackgroundMedia()}
      </div>

      <div className="absolute top-0 left-0 bg-black opacity-50 w-full h-screen z-10"></div>

      <img
        src="/circle.png"
        alt="Circle Image"
        className={`absolute top-0 left-0 w-[1000px] h-[1000px] object-cover z-20 transform translate-x-[-400px] translate-y-[-270px] ${
          spinAnimation ? "animate-spin-once" : ""
        }`}
      />
    </div>
  );
};

export default HeroMain;
