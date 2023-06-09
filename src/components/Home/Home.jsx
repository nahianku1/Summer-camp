import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import useSWR from "swr";
import Testimonial from "../Testimonial/Testimonial";
// import RecipeDetails from "../RecipeDetails/RecipeDetails";
import { RotatingLines } from "react-loader-spinner";
import TopClasses from "../TopClasses/TopClasses";
import TopInstructors from "../TopInstructors/TopInstructors";



function Home() {
  
  return (
    <div className="min-h-screen">
      <HomeBanner />
      <TopClasses />
      <TopInstructors />
      <Testimonial/>
    </div>
  );
}

export default Home;
