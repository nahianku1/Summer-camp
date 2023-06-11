import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import useSWR from "swr";
import Testimonial from "../Testimonial/Testimonial";
// import RecipeDetails from "../RecipeDetails/RecipeDetails";
import { RotatingLines } from "react-loader-spinner";
import TopClasses from "../TopClasses/TopClasses";
import TopInstructors from "../TopInstructors/TopInstructors";
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";

function Home() {
  return (
    <div className="min-h-screen">
      <Slide>
        <HomeBanner />
      </Slide>
      <JackInTheBox>
        <TopClasses />
      </JackInTheBox>
      <Zoom>
        <TopInstructors />
      </Zoom>
      <Rotate>
        <Testimonial />
      </Rotate>
    </div>
  );
}

export default Home;
