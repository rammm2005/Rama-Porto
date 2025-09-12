import { MetadataRoute } from "next";

const projects = [
  {
    title: "Population Management Mobile Application",
  },
  {
    title: "E-commerce Platform for Semmaga Business",
  },
  {
    title: "Static Travel websites in Indonesia",
  },
  {
    title: "Portfolio Website Templates",
  },
  {
    title: "Tictactoe Game that",
  },
  {
    title: "Kill the Bird in the Air",
  },
  {
    title: "Data Visualization from Spreadsheet",
  },
  {
    title: "Freelancer Static Website gets First Winner on ITCC 2023",
  },
  {
    title: "Modern Eccommers Static Website get Third Winner on IDB Campus",
  },
  {
    title: "Modern Daily Me Tracking App for Young people to keep a healthy life",
  },
  {
    title: "3DES Encryption Decryption Algorithm with Python and Telegram Bot",
  },
];

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-") // spasi jadi -
    .replace(/[^\w-]+/g, ""); // buang karakter aneh
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domain = process.env.DOMAIN || "https://www.rama-dev.tech";

  return [
    {
      url: domain,
      lastModified: new Date(),
    },
    {
      url: `${domain}/projects`,
      lastModified: new Date(),
    },
    ...projects.map((p) => ({
      url: `${domain}/projects/${slugify(p.title)}`,
      lastModified: new Date(),
    })),
  ];
}
