import { StaticImageData } from "next/image";

export type AdvantagesType = {
  id: number;
  description: string;
  icon:
    | "call"
    | "burger"
    | "ex"
    | "rooby"
    | "lock"
    | "stellar"
    | "grand"
    | "dindin"
    | "lamp"
    | "vk"
    | "tg"
    | "ws"
    | "left"
    | "right"
    | "star";
};

export type StepType = {
  id: number;
  img: string;
  title: string;
  description: string;
};

export type DescriptionCategoryType = {
  id: number;
  title: string;
  description: string;
};
export type DescriptionCatType = {
  title: string;
  description: string;
};

export type MenuLinkType = {
  id: number;
  name: string;
  text: string;
};
export type SocialLinkType = {
  name: string;
  element: "vk" | "ws" | "tg";
  link: string | undefined;
};

export type InsructorsType = {
  id: number;
  experience: string;
  rating: string;
  name: string;
  img: StaticImageData | string;
};

export type ReviewsListType = StaticImageData | string;

export type QuestionType = {
  question: string;
  answer: string;
};

export type SOCIALType = {
  icon: "vk" | "ws" | "tg";
  bg: string;
  link: string | undefined;
};
