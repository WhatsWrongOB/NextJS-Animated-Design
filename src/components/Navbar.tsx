"use client";

import { NavbarLinks } from "@/types";
import React, { useState } from "react";

export const Navbar = () => {
  const [showResponsiveMenu, setshowResponsiveMenu] = useState<boolean>(false);

  const navbarLinks: NavbarLinks[] = [
    {
      label: "Home",
      href: "/",
      childrens: [],
    },
    {
      label: "About",
      href: "/about",
      childrens: [],
    },
    {
      label: "Courses",
      href: "/courses",
      childrens: [],
    },
    {
      label: "Trainers",
      href: "/trainers",
      childrens: [],
    },
    {
      label: "Events",
      href: "/events",
      childrens: [],
    },
    {
      label: "Pricing",
      href: "/pricing",
      childrens: [],
    },
    {
      label: "Dropdown",
      href: "/dropdown",
      childrens: [
        {
          label: "Dropdown 1",
          href: "/",
        },
        {
          label: "Deep Dropdown",
          href: "/",
        },
        {
          label: "Dropdown 2",
          href: "/",
        },
        {
          label: "Dropdown 3",
          href: "/",
        },
        {
          label: "Dropdown 4",
          href: "/",
        },
      ],
    },
    {
      label: "Contact",
      href: "/contact",
      childrens: [],
    },
  ];

  function handleToggleResponsiveMenu(): void {
    setshowResponsiveMenu(!showResponsiveMenu);
  }

  return (
    <>
      <nav className="fixed top-0 left-0 bg-white z-40 w-full h-[65px] lg:h-[90px] flex justify-between px-6 lg:px-0 lg:justify-around items-center shadow-sm">
        <div>
          <h1 className="text-accent-color text-2xl sm:text-3xl font-bold">
            MENTOR
          </h1>
        </div>

        <div className="flex items-center gap-8">
          <ul className="hidden lg:flex items-center gap-8 text-nav-color relative">
            {navbarLinks.map((item, index) => (
              <li key={index} className="relative group">
                <div className="flex items-center cursor-pointer text-[0.95rem] font-normal">
                  {item.label}
                  {item.childrens && item.childrens.length > 0 && (
                    <i className="fas fa-chevron-down text-[0.7rem] ml-2"></i>
                  )}
                </div>
                {item.childrens && item.childrens.length > 0 && (
                  <ul className="absolute top-[30px] left-0 bg-white border border-gray-200 shadow-2xl p-2 pl-4 rounded-md w-48 z-10 hidden group-hover:block">
                    {item.childrens.map((child, childIndex) => (
                      <li key={childIndex} className="p-2 hover:bg-gray-100">
                        <a
                          href={child.href}
                          className="block text-nav-color text-sm"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <button className="text-sm bg-accent-color text-white w-28 p-2 rounded-3xl">
              Get Started
            </button>
            <button onClick={handleToggleResponsiveMenu} className="lg:hidden">
              <i className="fa fa-bars text-xl text-default"></i>
            </button>
          </div>
        </div>
      </nav>

      {showResponsiveMenu && (
        <main className="fixed inset-0 z-50 bg-black bg-opacity-65 flex justify-center items-center w-[100vw] h-[100vh]">
          <button
            onClick={handleToggleResponsiveMenu}
            className="absolute top-7 right-10"
          >
            <i className="fa fa-close text-white font-bold text-xl"></i>
          </button>
          <div className="fixed w-[95vw] h-[85vh] top-[4.2rem] bg-white rounded-xl overflow-auto"></div>
        </main>
      )}
    </>
  );
};
