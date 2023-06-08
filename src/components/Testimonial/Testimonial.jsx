import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/pagination/pagination.min.css";

// Import Testimonials data
import testimonialsData from "/public/testimonialsData.json";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Testimonial = () => {
  return (
    <div className="py-10 px-5 lg:px-32 w-full bg-gray-100 dark:bg-slate-800">
      <h1 className="dark:text-white font-pacifico font-bold text-3xl my-[50px] text-center">
        Testimonial
      </h1>
      <div className=" mx-auto">
        <Swiper
          className="w-full"
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          slidesPerView={1}
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={crypto.randomUUID()}>
              <div className="flex flex-col items-center justify-center dark:bg-slate-700 bg-white w-full rounded-lg shadow-lg p-8 lg:p-12">
                <img
                  src={testimonial.image}
                  alt=''
                  className=" h-[200px] w-[200px] rounded-full mb-4 object-cover object-center"
                />
               
                <p className="text-base dark:text-white text-gray-600 text-center mb-4">
                  {testimonial?.comment}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
