import Image from "next/image";
import React from "react";

const TrainerCard = () => {
  const name = "Obaid";



  return (
    <div className="w-full sm:w-[350px] h-[570px] border rounded-md space-y-6">
      <div>
        <Image
          className="m-auto rounded-md w-full"
          src="/trainer-1.jpg"
          width="550"
          height="600"
          alt="about"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-center">
          <h2 className="text-default font-bold">Walter White</h2>
          <p className="text-xs text-heading">
            <i>Web Development</i>
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
