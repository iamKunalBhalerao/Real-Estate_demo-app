import data from "../../utils/slider";
import type { SliderData } from "../../utils/slider";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { sliderSettings } from "../../utils/common";
import "swiper/swiper-bundle.css";
import "./Residencies.css"; // Assuming you have a CSS file for styles

const Residencies = () => {
  return (
    <div id="residencies" className="w-full max-w-full overflow-x-hidden">
      <div className="px-6 sm:px-16 md:px-8 xl:px-16 w-full max-w-7xl mx-auto flex flex-col gap-8 relative overflow-hidden">
        <div className="flex flex-col justify-center items-start sm:items-center mb-8">
          <span className="text-orange-400 text-2xl font-bold">
            Best Choices
          </span>
          <span className="text-[#1f3e72] font-bold text-3xl">
            Popular Residencies
          </span>
        </div>
        <Swiper {...sliderSettings} className="w-full overflow-visible">
          <SlideNextButton />
          {/* slider */}
          {data.map((card: SliderData, i: number) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col justify-center items-start r-card max-w-full">
                <img src={card.image} alt="home" className="w-full max-w-full object-cover" />

                <span className="text-[rgb(140 139 139)] text-md r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="text-[#1f3e72] font-bold text-3xl">
                  {card.name}
                </span>
                <span className="text-[rgb(140 139 139)] text-md">
                  {card.detail}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons flex gap-4">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
