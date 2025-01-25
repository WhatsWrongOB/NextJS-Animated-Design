import { Quality } from "@/types";
import React from "react";

const QualityCard = ({ quality }: { quality: Quality }) => {
  return (
    <div className=" h-[260px] lg:h-[430px] w-full lg:w-[230px] rounded-lg px-6 space-y-3 lg:space-y-5 flex flex-col justify-center items-center border border-gray-200">
      <div className="w-[70px] h-[70px] bg-gray-100 rounded-full flex justify-center items-center text-xl">
        <i className={`fas ${quality.image} text-accent-color text-3xl`}></i>
      </div>

      <h2 className="text-[1.15rem] text-heading text-center font-semibold">
        {quality.title}
      </h2>

      <p className="text-default text-[0.9rem] text-center">
        Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris
        nisi ut aliquip
      </p>
    </div>
  );
};

export default QualityCard;
