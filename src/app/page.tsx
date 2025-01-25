"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Skills } from "@/types";
import { useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import CourseCard from "@/components/shared/CourseCard";
import QualityCard from "@/components/shared/QualityCard";
import TrainerCard from "@/components/shared/TrainerCard";
import { statics, conditions, courses, qualities, trainers } from "@/data";

export default function Home() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const skills: Skills[] = [
    { label: "Lorem Ipsum", icon: "fa-star", color: "text-yellow-500" },
    { label: "Dolor Sitema", icon: "fa-heart", color: "text-red-500" },
    {
      label: "Sed perspiciatis",
      icon: "fa-check-circle",
      color: "text-green-500",
    },
    { label: "Magni Dolores", icon: "fa-cloud", color: "text-blue-500" },
    { label: "Nemo Enim", icon: "fa-cogs", color: "text-purple-500" },
    { label: "Eiusmod Tempor", icon: "fa-briefcase", color: "text-pink-500" },
    { label: "Midela Teren", icon: "fa-bell", color: "text-orange-500" },
    { label: "Pira Neve", icon: "fa-cog", color: "text-teal-500" },
    { label: "Dirada Pack", icon: "fa-pencil-alt", color: "text-indigo-500" },
    { label: "Moton Ideal", icon: "fa-eye", color: "text-gray-500" },
    { label: "Verdo Park", icon: "fa-leaf", color: "text-amber-500" },
    { label: "Flavor Nivelanda", icon: "fa-palette", color: "text-lime-500" },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="space-y-10 lg:space-y-0">
      {/* Hero Section */}

      <div id="hero" className="w-full h-[75vh] sm:h-[80vh] relative">
        <div
          data-aos="fade-up"
          className="text-white absolute top-[30%] sm:top-32 left-4 sm:left-24 space-y-7 sm:space-y-12"
        >
          <div className="space-y-1 md:space-y-3">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              Learning Today,
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-6xl  font-bold">
              Leading Tomorrow
            </h1>
            <p className="text-[1.05rem] md:text-[1.35rem]">
              We are a team of talented designers making websites with NextJs &
              TailwindCss
            </p>
          </div>
          <button className="w-44 border-2 border-white rounded-3xl p-[10px] text-[0.9rem] mt-10">
            Get Started
          </button>
        </div>
      </div>

      {/* About Section */}

      <div className="w-full h-auto lg:h-[80vh] flex flex-wrap gap-8 sm:gap-6 items-center justify-center px-4 sm:px-5 ">
        <div
          data-aos="fade-up"
          className="w-full lg:w-[44%] flex flex-col justify-center h-full space-y-3"
        >
          <h1 className="text-[1.5rem] md:text-[1.8rem] font-extrabold text-heading">
            Voluptatem dignissimos provident quasi corporis
          </h1>
          <p className="text-[0.95rem] text-default">
            <i>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </i>
          </p>
          <ul className="text-default text-[0.95rem] space-y-4">
            {conditions.map((condition, i) => (
              <li key={i}>
                <i className="fas fa-check-circle text-accent-color mr-2"></i>
                {condition}
              </li>
            ))}
          </ul>
          <button className="text-[0.92rem] p-3 w-44 bg-accent-color text-white rounded-3xl">
            Read More <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>

        <div data-aos="fade-up" className="w-full lg:w-[42%]">
          <Image
            className="m-auto rounded-md object-cover"
            src="/about.jpg"
            width="550"
            height="500"
            alt="about"
          />
        </div>
      </div>

      {/* Stats Section */}

      <div
        ref={ref}
        className="w-full h-auto md:h-[35vh] bg-gray-50 flex flex-wrap gap-4 justify-evenly items-center"
      >
        {statics.map((item, i) => (
          <div
            key={i}
            className="space-y-1 min-w-[250px]  h-[150px] flex flex-col justify-center items-center"
          >
            <h2 className="text-accent-color text-5xl font-extrabold">
              {inView && (
                <CountUp
                  start={0}
                  end={item.stats}
                  duration={2}
                  className="text-4xl font-bold text-accent-color"
                />
              )}
            </h2>
            <p className="text-default text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Quality Section */}

      <div className="flex h-auto lg:h-[75vh] justify-center items-center">
        <div className="flex flex-col lg:flex-row  gap-4 items-center w-[95%] lg:w-[88%]">
          <div className="flex justify-end w-full md:w-[90%] lg:w-[350px]">
            <div
              data-aos="fade-up"
              className="w-full h-auto lg:h-[430px] bg-accent-color text-white p-5 sm:p-9 space-y-6 rounded"
            >
              <h1 className="text-2xl sm:text-3xl font-bold">
                Why Choose Our Products?
              </h1>
              <p className="text-[0.95rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit Asperiores dolores sed et.
                Tenetur quia eos. Autem tempore quibusdam vel necessitatibus
                optio ad corporis.
              </p>
              <button className="text-[0.92rem] p-2 w-64 text-white rounded-3xl text-center">
                Read More <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>

          <div className="w-full md:w-[90%] lg:w-[67%] flex flex-col lg:flex-row gap-5 items-center justify-evenly">
            {qualities.map((quality) => (
              <QualityCard key={quality._id} quality={quality} />
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}

      <div className="w-full h-auto lg:h-[55vh] flex justify-center items-center">
        <div className="w-[95%] md:w-[90%] flex flex-wrap justify-around gap-4">
          {skills.map((skill, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="group flex items-center pl-6 gap-4 w-full md:w-[260px] h-[70px] border hover:border-accent-color cursor-pointer"
            >
              <i className={`fas ${skill.icon}  ${skill.color} text-2xl`}></i>
              <p className="text-heading font-semibold text-[0.93rem] group-hover:text-accent-color transition-colors duration-300">
                {skill.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Courses Section */}

      <div className="w-full h-auto lg:h-screen flex justify-center">
        <div className="w-[95%] sm:w-[88%] space-y-7 lg:space-y-0">
          <div data-aos="fade-up" className="pl-3 md:pl-0">
            <p className="text-default flex items-center gap-3">
              COURSES
              <div className="h-[1.3px] w-28 bg-accent-color"></div>
            </p>
            <h1 className="text-heading text-2xl md:text-4xl font-extrabold">
              POPULAR COURSES
            </h1>
          </div>

          <div className="h-full gap-5 w-full flex flex-wrap justify-evenly items-center">
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        </div>
      </div>

      {/* Trainer Section */}

      <div className="w-full h-auto lg:h-[110vh] flex justify-center items-center py-24">
        <div className="w-[95%] md:w-[90%] flex flex-wrap gap-5 justify-evenly items-center">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer._id} trainer={trainer} />
          ))}
        </div>
      </div>
    </section>
  );
}
