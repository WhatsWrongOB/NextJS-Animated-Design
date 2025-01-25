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
