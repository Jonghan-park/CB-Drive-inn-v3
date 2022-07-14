import React from "react";
import Slider from "../../components/Slider/Slider";
import BestMenu from "../../container/BestMenu/BestMenu";
import Testimonials from "../../container/Testimonials/Testimonials";
import Welcome from "../../container/Welcome/Welcome";
window.onload = function () {
  if (!window.location.hash) {
    window.location = window.location + "#loaded";
    window.location.reload();
  }
};
const Main = () => (
  <>
    <Slider />
    <Welcome />
    <BestMenu />
    <Testimonials />
  </>
);

export default Main;
