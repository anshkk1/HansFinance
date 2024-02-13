import React from "react";
import styles from "../style";
import { discount } from "../assets";
import GetStarted from "./GetStarted";
import cc2 from "../assets/pngegg.png";
import cc3 from "../assets/cc4.png";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img
          src={discount}
          alt="discount"
          className="w-[32px] h-[32px] blue-logo"
        />
        <p className={`${styles.paragraph} ml-2`}>
          2 year Fixed rate - <span className="text-white">6.6%</span> on{" "}
          <span className="text-white">Home Financing!</span>
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Tommorow's <span className="text-gradient">Banking </span>
          <br className="sm:block hidden" />
          Today's <span className="text-gradient">Innovation</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0 bounce">
          <GetStarted />
        </div>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>
        Maximize your financial potential with our bank's low-rate home loans,
        exclusive credit cards, and expert financial strategies.
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}>
      <div className={`md:flex hidden`}>
        <img
          src={cc2}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>
      <div className={`md:hidden ${styles.flexCenter}`}>
        <img
          src={cc3}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] paypal"
        />
      </div>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[40%] h-[35%] right-0 bottom-20 blue__gradient" />
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </div>
  </section>
);

export default Hero;
