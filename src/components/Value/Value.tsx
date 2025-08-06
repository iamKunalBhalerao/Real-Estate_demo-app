import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import {
  MdOutlineArrowDropDown,
} from "react-icons/md";
import data from "../../utils/accordion";

// Define types for the accordion data
interface AccordionData {
  icon: React.ReactNode;
  heading: string;
  detail: string;
}

const Value = () => {
  return (
    <section id="value" className="px-6 sm:px-16 md:px-8 xl:px-16 w-full 2xl:max-w-7xl 2xl:mx-auto">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        {/* left side */}
        <div className="flex-1">
          <div className="border-8 border-gray-200 border-opacity-90">
            <img src="./value.png" alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col justify-center items-start flex-1 gap-2">
          <span className="text-orange-500 text-xl sm:text-2xl font-semibold">Our Value</span>

          <span className="text-[#1f3e72] font-bold text-2xl sm:text-4xl">Value We Give to You</span>

          <span className="text-gray-400 text-sm">
            We always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better
          </span>

          <Accordion
            className="mt-8 border-none w-full"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item: AccordionData, i: number) => {
              return (
                <AccordionItemWrapper key={i} item={item} index={i} />
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

// Separate component to handle useState properly
const AccordionItemWrapper = ({ item, index }: { item: AccordionData; index: number }) => {
  const [className, setClassName] = useState<string | null>(null);

  return (
    <AccordionItem 
      className={`bg-white border border-gray-300 border-opacity-40 rounded-lg overflow-hidden mb-5 ${className === 'expanded' ? 'custom-shadow rounded-md' : ''}`} 
      uuid={index} 
    >
      <AccordionItemHeading>
        <AccordionItemButton className="flex justify-between items-center bg-white p-4 w-full cursor-pointer">
          {/* just for getting state of item */}
          <AccordionItemState>
            {({ expanded }) => {
              if (expanded) {
                setClassName("expanded");
              } else {
                setClassName("collapsed");
              }
              return null;
            }}
          </AccordionItemState>
          <div className="flex justify-center items-center p-3 bg-[#eeeeff] rounded-md">
            <div className="[&>svg]:fill-[#4066ff]">
              {item.icon}
            </div>
          </div>
          <span className="text-[#1f3e72] font-bold text-lg flex-1 mx-4">
            {item.heading}
          </span>
          <div className="flex justify-center items-center">
            <MdOutlineArrowDropDown size={20} />
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p className="text-gray-400 text-sm px-4 pb-4">{item.detail}</p>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default Value;
