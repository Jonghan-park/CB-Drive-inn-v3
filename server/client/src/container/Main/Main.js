import React from "react";
import Slider from "../../components/Slider/Slider";
import BestMenu from "../BestMenu/BestMenu";
import Testimonials from "../Testimonials/Testimonials";
import Welcome from "../Welcome/Welcome";

const Main = () => (
  <>
    <Slider />
    <Welcome />
    <BestMenu />
    <Testimonials />
  </>
);

export default Main;
