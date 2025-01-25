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
  _id : number
  thumbnail: string;
  type: string;
  price: number;
  title: string;
  trainerName: string;
  trainerImage: string;
}

export interface Trainer{
  _id : number
  image : string
  name : string
  type : string
}

export interface Quality{
  _id : number
  image : string
  title : string
}
