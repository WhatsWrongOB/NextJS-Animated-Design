import { Course } from "@/types";
import Image from "next/image";
import React from "react";

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div className="w-full sm:w-[350px] border rounded-md">
      <div>
        <Image
          className="m-auto rounded-md w-full"
          src={course.thumbnail}
          width="550"
          height="600"
          alt="about"
        />
      </div>
      <div className="px-4 py-2 space-y-4">
        <div className="flex justify-between items-center my-3">
          <button className="text-white bg-accent-color p-2 rounded-md text-xs font-semibold">
            {course.type}
          </button>
          <p className="text-heading font-bold text-lg">$ {course.price}</p>
        </div>
        <div className="space-y-2">
          <h1 className="text-heading font-bold text-[1.23rem]">
            {course.title}
          </h1>
          <p className="text-default text-[0.9rem]">
            Et architecto provident deleniti facere repellat nobis iste. Id
            facere quia quae dolores dolorem tempore.
          </p>
        </div>
        <div className="border-t flex justify-between py-1">
          <div className="flex items-center gap-2 p-2">
            <div className="w-[50px] h-[50px]  rounded-full overflow-hidden">
              <Image
                className="m-auto rounded-md"
                src={course.trainerImage}
                width="550"
                height="600"
                alt="about"
              />
            </div>
            <p className="text-default font-semibold">{course.trainerName}</p>
          </div>
          <div className="flex items-center gap-2 text-[0.93rem] pr-2">
            <div className="flex items-center gap-1 text-default">
              <i className="fas fa-user text-gray-400"></i>
              20
            </div>
            <div className="flex items-center gap-1 text-default">
              <i className="fas fa-heart text-gray-400"></i>
              20
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
