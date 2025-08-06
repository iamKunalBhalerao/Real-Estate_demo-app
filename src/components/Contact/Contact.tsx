import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <div id="contact-us" className="px-6 sm:px-16 md:px-8 xl:px-16 w-full 2xl:max-w-7xl 2xl:mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* left side */}
        <div className="flex flex-col justify-center items-start flex-1 gap-2">
          <span className="text-orange-500 text-xl sm:text-2xl font-semibold">Our Contact Us</span>
          <span className="text-[#1f3e72] font-bold text-2xl sm:text-4xl">Easy to contact us</span>
          <span className="text-gray-400 text-sm">
            We always ready to help by providing the best services for you. We
            believe a good place to live can make your life better{" "}
          </span>

          <div className="flex flex-col justify-center items-start mt-8 gap-4 w-full">
            {/* first row */}
            <div className="flex flex-col lg:flex-row justify-start items-center gap-6 w-full">
              <div className="flex flex-col justify-center items-center w-full lg:w-64 p-4 border border-gray-300 border-opacity-40 rounded-md gap-4 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <div className="flex justify-start items-center w-full gap-6">
                  <div className="flex justify-center items-center">
                    <MdCall size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <span className="text-[#1f3e72] font-bold text-lg">Call</span>
                    <span className="text-gray-400 text-sm">021 123 145 14</span>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full bg-[#eeeeff] text-[#4066ff] text-sm font-semibold py-2 px-4 rounded transition-all duration-300 hover:scale-90 hover:bg-gradient-to-r hover:from-[#4066ff] hover:to-[#2949c6] hover:text-white cursor-pointer">
                  Call now
                </div>
              </div>

              <div className="flex flex-col justify-center items-center w-full lg:w-64 p-4 border border-gray-300 border-opacity-40 rounded-md gap-4 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <div className="flex justify-start items-center w-full gap-6">
                  <div className="flex justify-center items-center">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <span className="text-[#1f3e72] font-bold text-lg">Chat</span>
                    <span className="text-gray-400 text-sm">021 123 145 14</span>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full bg-[#eeeeff] text-[#4066ff] text-sm font-semibold py-2 px-4 rounded transition-all duration-300 hover:scale-90 hover:bg-gradient-to-r hover:from-[#4066ff] hover:to-[#2949c6] hover:text-white cursor-pointer">
                  Chat now
                </div>
              </div>
            </div>

            {/* second row */}
            <div className="flex flex-col lg:flex-row justify-start items-center gap-6 w-full">
              <div className="flex flex-col justify-center items-center w-full lg:w-64 p-4 border border-gray-300 border-opacity-40 rounded-md gap-4 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <div className="flex justify-start items-center w-full gap-6">
                  <div className="flex justify-center items-center">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <span className="text-[#1f3e72] font-bold text-lg">Video Call</span>
                    <span className="text-gray-400 text-sm">021 123 145 14</span>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full bg-[#eeeeff] text-[#4066ff] text-sm font-semibold py-2 px-4 rounded transition-all duration-300 hover:scale-90 hover:bg-gradient-to-r hover:from-[#4066ff] hover:to-[#2949c6] hover:text-white cursor-pointer">
                  Video Call now
                </div>
              </div>

              <div className="flex flex-col justify-center items-center w-full lg:w-64 p-4 border border-gray-300 border-opacity-40 rounded-md gap-4 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <div className="flex justify-start items-center w-full gap-6">
                  <div className="flex justify-center items-center">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <span className="text-[#1f3e72] font-bold text-lg">Message</span>
                    <span className="text-gray-400 text-sm">021 123 145 14</span>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full bg-[#eeeeff] text-[#4066ff] text-sm font-semibold py-2 px-4 rounded transition-all duration-300 hover:scale-90 hover:bg-gradient-to-r hover:from-[#4066ff] hover:to-[#2949c6] hover:text-white cursor-pointer">
                  Message now
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flex justify-end items-center w-full flex-1">
          <div className="w-full">
            <img src="./contact.jpg" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
