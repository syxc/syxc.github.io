import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://syxc.github.io", // replace this with your deployed domain
  author: "syxc",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "syxc",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "zh", // html lang code. Set this empty and default will be "en"
  langTag: ["en-US"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/syxc",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/syxc",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
];
