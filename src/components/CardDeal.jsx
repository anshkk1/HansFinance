import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Fuel your adventures with our <br className="sm:block hidden" />
        flexible card options.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Empower your dreams with our fluid credit and debit card choices,
        amplifying your financial flexibility for every adventure life brings
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
