export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
  title: string;
 
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  equipments?: EqiupmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Youtube",
    icon: "youtube",
    username: "@doston_tech",
    description:
      "I'm passionate about learning and sharing knowledge. Join me in exploring these dynamic fields together!",
    color: "#FF0000",
    buttonTitle: "Subscribe",
    buttonLink: "https://www.youtube.com/@doston_tech",
    buttonSecondaryText: "21",
  },

  {
    layout: "2x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@dostontech",
    buttonTitle: "Follow",
    buttonSecondaryText: "73",
    buttonLink: "https://github.com/dostontech",
    color: "#070707",
    description:
    "Full-stack and Mobile Developer / I build AI products on my free time.",
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Skills",
    image: "/imgs.jpg",
    equipments: [
      {
        title: "JavaScript",
      },
      {
        title: "TypeScript",
      },
      {
        title: "Reactjs(Nextjs)",
      },
      {
        title: "Angular2+",
      },
      {
        title: "Dart",
      },
      {
        title: "Flutter",
      },
      {
        title: "Firebase, Superbase, AWS, MongoDB"
      },
    ],
  },
  {
    layout: "2x2",
    type: "social",
    title: "Twitter",
    icon: "twitter",
    username: "@dostontech",
    buttonTitle: "Follow",
    buttonLink: "https://twitter.com/dostontech",
    buttonSecondaryText: "44",
    color: "#1DA1F2",
    description:
      "Full-stack and Mobile Developer / I build AI products on my free time",
  },
  {
    layout: "2x1",
    type: "mentor",
    title: "Next.js Mentorship",
    icon: "superpeer",
    promotion: "DOSTONFELLOWS",
    oldPrice: "$50",
    price: "$15",
    buttonLink: "https://superpeer.com/doston/-/nextjs-mentor?s=d",
  },
  {
    layout: "2x1",
    type: "mentor",
    title: "Flutter Mentorship",
    icon: "superpeer",
    promotion: "DOSTONFELLOWS",
    oldPrice: "$100",
    price: "$50",
    buttonLink: "https://superpeer.com/doston/-/flutter-mentor",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Full-stack AI Interview Tool || Coming Soon",
    icon: "github",
    color: "#070707",
    buttonLink: "",
    stars: 0,
  },
  {
    layout: "2x2",
    type: "social",
    title: "Full-stack AI Interview Tool with Next.js 13",
    username: "@doston",
    description:
      "Explore advanced Next.js features to enhance the functionality and efficiency of the developed AI Interview To.",
    icon: "udemy",
    buttonTitle: "Enroll",
    buttonSecondaryText: "%90 OFF",
    buttonLink:
      "https://www.udemy.com/course/draft/5717768/?instructorPreviewMode=guest2",
  },
  {
    layout: "2x1",
    type: "project",
    title: "AI Blog Post Generator || Coming Soon",
    icon: "github",
    stars: 0,
    color: "#070707",
    buttonLink: "",
  },
];

export const siteConfig = {
  creator: "Doston Abdulboriev",
  title: "Developer & Creator",
  bio: "Frontend and Mobile Developer and Building AI products on my free time",
  location: "Kuala Lumpur",
  locationLink:
    "https://maps.app.goo.gl/Ny2KDKuRCdT4QHd27",
  email: "dbekk1i@gmail.com",
  items: GridItems,
} as const;
