import { useEffect, useRef } from "react";
import { Tri } from "../Icons";
import Diamond from "../../assets/images/diamond.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Welcome = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    Aos.init();
  }, []);

  const scrollTo = () => {
    const getStarted = document.getElementById("getStarted");
    getStarted.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  function parallax(e) {
    const container = containerRef.current;
    const shiftElements = container.querySelectorAll(".plx");

    shiftElements.forEach((shift) => {
      const position = shift.getAttribute("value");
      const x = (window.innerWidth - e.pageX * position) / 90;
      const y = (window.innerHeight - e.pageY * position) / 90;

      // Uses GPU-accelerated transformations for better performance
      shift.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  }

  return (
    <section>
      <div
        className="bg-mainBg select-none"
        onMouseMove={parallax}
        ref={containerRef}
        style={{ willChange: "transform" }}
      >
        <div className="container relative flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32">
          <h1
            className="text-5xl z-10 text-textBg font-rubik leading-none sm:text-7xl xl:max-w-3xl"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Explore the World of Cryptocurrencies.
          </h1>

          <p
            className="mt-6 mb-8 z-10 font-raj text-slate-300 text-lg sm:mb-12 xl:max-w-3xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            View cryptocurrency statuses, add them to your cart, proceed to
            checkout, and sign in or register to get started.
          </p>
          <div className="flex flex-wrap justify-center">
            <button
              type="button"
              onClick={scrollTo}
              className="flex mx-auto z-10 mt-12 py-1 px-4 font-raj  mb-10 font-semibold text-lg text-slate-300 border-2 border-btnBorder rounded-xl hover:border-btnHover shadow-btnHover shadow-3xl focus:outline-btnHover "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Get started
            </button>
          </div>
          <div
            className="absolute top-16 plx -left-80 md:-left-24 lg:left-20  bg-blend-color-burn"
            value="1"
          >
            <Tri />
          </div>

          <div className="absolute w-[500px] -right-80 md:-right-24 lg:right-40 top-40">
            <img src={Diamond} value="-1" className="plx" alt="" />
          </div>

          <div className="absolute w-[500px] h-[500px] -left-[450px] sm:-left-96 top-10 gradient-bg-ball rounded-full blur-3xl animate-blob animation-delay-2000 opacity-30"></div>
          <div className="absolute w-[200px] h-[200px] -left-[500px] sm:-left-48 top-48 gradient-bg-ball rounded-full blur-3xl animation-delay-2000 animate-blob"></div>
          <div className="absolute w-[500px] h-[500px] -right-[450px] sm:-right-96 top-72 gradient-bg-ball1 rounded-full blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute w-[200px] h-[200px] -right-[500px] sm:-right-56 top-[450px] gradient-bg-ball1 rounded-full blur-3xl animate-blob"></div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
