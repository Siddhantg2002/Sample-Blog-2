import Cards from "../Cards/Cards"
import FAQ from "../FAQ/FAQ";
import Client from "../Client/Client";
import Features from "../Features/Features";
import CallToAction from "../CallToAction/CallToAction";
import Logo from "../Logos/Logo";

import CustomButtonWithArrow from "../utils/Buttons/ArrowButton"

const Home = () => {
  return (
    <>
      <video
        className="opacity-100 brightness-70"
        src="/home/Mansion.mp4"
        autoPlay
        loop
        muted
        width="100%"
        height="auto"
        preload="auto"
        playsInline
      >
        Your browser does not support the video tag.
      </video>
      <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-white animate-fadeIn">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-white-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-medium font-medium italic">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware. Man bun next level coloring
              book skateboard four loko knausgaard.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-12 pt-4">
        <Cards />
        <div className='flex justify-center'>
           <CustomButtonWithArrow 
           variant={"primary"}
           kind={"elevated"}
           size={"big"}
           colorMode={"dark"}
           path={"/all-blogs/1"}
           text={"Explore"}
           >
          </CustomButtonWithArrow> 
        </div>
      </section>
      <CallToAction />
      <Features />
      <Client />
      <FAQ />
      <Logo />
    </>
  );
};

export default Home;
