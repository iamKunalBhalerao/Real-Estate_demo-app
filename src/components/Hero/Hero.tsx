import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="text-white relative z-[1] mb-8 w-full max-w-full overflow-x-hidden">
      <div className="px-6 sm:px-16 md:px-8 xl:px-16 w-full max-w-7xl mx-auto mt-8 flex flex-wrap gap-2 justify-between items-end">
        {/* left side */}
        <div className="flex-1 min-w-[300px] flex flex-col justify-center items-start gap-12">
          <div className="relative z-10">
            <div 
              className="h-16 w-16 rounded-full absolute -z-10"
              style={{ 
                background: "var(--orange-gradient)",
                right: "28%",
                top: "-10%" 
              }}
            />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "decay",
              }}
              className="font-semibold text-4xl sm:text-6xl leading-12 sm:leading-20"
            >
              Discover <br />
              Most Suitable
              <br /> Property
            </motion.h1>
          </div>
          <div className="flex flex-col justify-center items-start text-gray-400 text-sm">
            <span>Find a variety of properties that suit you very easily</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flex justify-between items-center bg-white rounded-md border-2 border-gray-300 border-opacity-40 py-2 w-full max-w-md">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" className="border-none outline-none text-black flex-1 mx-2" />
            <button className="blue-gradient text-black font-medium px-6 py-2 rounded border-none transition-all duration-300 hover:cursor-pointer hover:scale-110">
              Search
            </button>
          </div>

          <div className="flex justify-between items-center w-full max-w-md flex-wrap gap-6">
            <div className="flex flex-col justify-center items-center">
              <span className="text-2xl sm:text-3xl">
                <CountUp start={8800} end={9000} duration={4} /> <span className="text-orange-500">+</span>
              </span>
              <span className="text-gray-400 text-sm">Premium Product</span>
            </div>

            <div className="flex flex-col justify-center items-center">
              <span className="text-2xl sm:text-3xl">
                <CountUp start={1950} end={2000} duration={4} /> <span className="text-orange-500">+</span>
              </span>
              <span className="text-gray-400 text-sm">Happy Customer</span>
            </div>

            <div className="flex flex-col justify-center items-center">
              <span className="text-2xl sm:text-3xl">
                <CountUp end={28} /> <span className="text-orange-500">+</span>
              </span>
              <span className="text-gray-400 text-sm">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flex-1 min-w-[300px] flex justify-center items-center">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "decay",
            }}
            className="w-full max-w-sm h-96 sm:h-[35rem] overflow-hidden rounded-t-full border-8 border-white border-opacity-20"
          >
            <img src="./hero-image.png" alt="houses" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
