import React from "react";
import man from "../../assets/man.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

function HomeBanner() {
  return (
    <div className="bg-[#F9F9FF] dark:bg-slate-800">
      <div className=" mx-[20px]  md:mx-[120px] py-[40px] flex gap-5 flex-wrap md:flex-nowrap">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
          // navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/images/slide1.jpg" alt="man" />
            <p className="absolute bg-black p-[20px] bottom-[30px]">
              Expand Your Horizons: Unlock New Cultures and Connect with People
              through the Power of Language Learning.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/slide2.jpg" alt="man" />
            <p className="absolute bg-black p-[20px] bottom-[30px]">
              Discover the Beauty of Language: Immerse Yourself in Words that
              Open Doors to Endless Opportunities.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/slide3.jpg" alt="man" />
            <p className="absolute bg-black p-[20px] bottom-[30px]">
              Master the Art of Multilingualism: Unleash Your Potential and
              Embrace a World of Languages.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/slide4.jpg" alt="man" />
            <p className="absolute bg-black p-[20px] bottom-[30px]">
              Journey into Language: Explore the Depths of Communication and
              Embrace the Global Tapestry of Words.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/slide5.jpg" alt="man" />
            <p className="absolute bg-black p-[20px] bottom-[30px]">
              Language: The Key to a Global Adventure. Begin Your Quest for
              Fluency and Unlock Boundless Experiences.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeBanner;
