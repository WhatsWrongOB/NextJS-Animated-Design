import { Trainer } from "@/types";
import Image from "next/image";
import React from "react";

const TrainerCard = ({ trainer }: { trainer: Trainer }) => {
  return (
    <div
      data-aos="fade-up"
      className="w-full sm:w-[350px] h-[570px] border rounded-md space-y-6"
    >
      <div>
        <Image
          className="m-auto rounded-md w-full"
          src={trainer.image}
          width="550"
          height="600"
          alt="about"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-center">
          <h2 className="text-default font-bold">{trainer.name}</h2>
          <p className="text-xs text-heading">
            <i>{trainer.type}</i>
          </p>
        </div>
        <div>
          <p className="text-sm text-heading text-center">
            <i>
              Magni qui quod omnis unde et eos fuga et exercitationem. Odio
              veritatis perspiciatis quaerat qui aut aut aut
            </i>
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <i className="text-gray-500 text-[1.15rem] fa-brands fa-twitter"></i>
            <i className="text-gray-500 text-[1.15rem] fa-brands fa-facebook"></i>
            <i className="text-gray-500 text-[1.15rem] fa-brands fa-instagram"></i>
            <i className="text-gray-500 text-[1.15rem] fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
