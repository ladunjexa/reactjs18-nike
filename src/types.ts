interface Imageable {
  imgUrl: string;
}

interface Labelable {
  label: string;
}

type INavLink = Labelable & {
  href: string;
};

type IShoe = {
  thumbnail: string;
  bigShoe: string;
};

type IStatistic = Labelable & {
  value: string;
};

type IProduct = Imageable & {
  name: string;
  price: string;
  rating: number;
};

type IService = Imageable &
  Labelable & {
    subtext: string;
  };

type IReview = Imageable & {
  customerName: string;
  rating: number;
  feedback: string;
};

type IFooterSection = {
  title: string;
  links: IFooterLink[];
};

type IFooterLink = {
  name: string;
  link: string;
};

type ISocialMedia = {
  src: string;
  alt: string;
};

export type {
  INavLink,
  IShoe,
  IStatistic,
  IProduct,
  IService,
  IReview,
  IFooterSection,
  IFooterLink,
  ISocialMedia,
};
