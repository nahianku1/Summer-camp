import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import useSWR from "swr";
import Testimonial from "../Testimonial/Testimonial";
// import RecipeDetails from "../RecipeDetails/RecipeDetails";
import { RotatingLines } from "react-loader-spinner";
import TopClasses from "../TopClasses/TopClasses";
import TopInstructors from "../TopInstructors/TopInstructors";

let chefReccipes = async () => {
  let res = await fetch(`https://chef-cafe-server.vercel.app/chef-details`);
  let data = await res.json();
  return data;
};

function Home() {
  let { data: chefdetails } = useSWR("chef-details", chefReccipes);
  console.log(chefdetails);
  if (!chefdetails)
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-45px)]">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="200"
          visible={true}
        />
      </div>
    );

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
