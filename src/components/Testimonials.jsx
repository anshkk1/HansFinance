import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} flex-col ${styles.flexCenter} relative`}
  >
    <div className="absolute z-[0] left-1/2 bottom-0 w-[100%] h-[50%] pink__gradient rounded-full opacity-15" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        Read testimonials from <br className="sm:block hidden" /> satisfied
        customers
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} max-w-[450px] text-left`}>
          Explore glowing reviews and heartfelt testimonials from our satisfied
          customers, sharing their positive experiences and exceptional service
          encounters.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
