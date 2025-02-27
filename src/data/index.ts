import {
  Course,
  NavbarLinks,
  Quality,
  Statics,
  Trainer,
} from "@/types";

const statics: Statics[] = [
  { label: "Students", stats: 1334 },
  { label: "Courses", stats: 44 },
  { label: "Events", stats: 15 },
  { label: "Trainers", stats: 23 },
];

const conditions: string[] = [
  "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Ullamco laboris nisi ut aliquip ex ea commodo consequat. irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
];


const trainers: Trainer[] = [
  {
    _id: 1,
    name: "Walter White",
    image: "/trainer-1.jpg",
    type: "Web Development",
  },
  {
    _id: 2,
    name: "Sarah Jhinson",
    image: "/trainer-2.jpg",
    type: "Marketing",
  },
  {
    _id: 3,
    name: "William Anderson",
    image: "/trainer-3.jpg",
    type: "Content",
  },
];

const courses: Course[] = [
  {
    _id: 1,
    thumbnail: "/course-1.jpg",
    type: "Web Development",
    price: 369,
    title: "Website Design",
    trainerName: "Antonio",
    trainerImage: "/trainer-1-2.jpg",
  },
  {
    _id: 2,
    thumbnail: "/course-2.jpg",
    type: "Marketing",
    price: 250,
    title: "Search Engine Optimization",
    trainerName: "Lana",
    trainerImage: "/trainer-2-2.jpg",
  },
  {
    _id: 3,
    thumbnail: "/course-3.jpg",
    type: "Content",
    price: 150,
    title: "Content Writting",
    trainerName: "Brandon",
    trainerImage: "/trainer-3-2.jpg",
  },
];

const qualities: Quality[] = [
  {
    _id: 1,
    image: "fas fa-clipboard",
    title: "Corporis voluptates officia eiusmod",
  },
  {
    _id: 2,
    image: "fas fa-gem",
    title: "Ullamco laboris ladore panti tum esmod",
  },
  {
    _id: 3,
    image: "fas fa-heart",
    title: "Labore consequatur incidid dolore",
  },
];

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

export {
  statics,
  conditions,
  courses,
  qualities,
  trainers,
  navbarLinks,
};
