export interface NavbarLinks {
  label: string;
  href: string;
  childrens?: {
    label: string;
    href: string;
  }[];
}

export interface Statics {
  label: string;
  stats: number;
}

export interface Course {
  courseImage: string;
  courseType: string;
  coursePrice: number;
  courseTitle: string;
  trainerName: string;
  trainerImage: string;
}

export interface Trainer{
  id : number
  trainerName : string
  trainerType : string
}
