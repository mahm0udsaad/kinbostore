// Central place for brand + contact details.
export const siteConfig = {
  name: "KINBO Store",
  shortName: "KINBO",
  tagline: "Heritage Cut. Street Built.",
  description:
    "KINBO Store — streetwear tees and sets, available to order directly.",
  whatsappNumber: "201109808027", // digits only, country code first
  instagramHandle: "kinbostore", // without the @
  facebookUrl:
    "https://www.facebook.com/people/KINBO-%D9%83%D9%8A%D9%86%D8%A8%D9%88/61592630960759/",
  email: "hello@kinbostore.com",
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function instagramLink() {
  return `https://instagram.com/${siteConfig.instagramHandle}`;
}

export type Category = "T Shirts" | "Sets";

export const categories: Category[] = ["T Shirts", "Sets"];

export type Product = {
  slug: string;
  name: string;
  category: Category;
  colours: number;
  images: string[]; // first image is the card/cover image
  description: string;
};

// Sourced from kinbo-ready-images — the current, ready-to-publish product renders.
export const products: Product[] = [
  {
    slug: "bad-intentions",
    name: "Bad Intentions",
    category: "T Shirts",
    colours: 3,
    images: ["/images/products/bad-intentions-tee.jpg"],
    description: "Oversized graphic tee with bold front print.",
  },
  {
    slug: "asan-error",
    name: "Asan Error",
    category: "T Shirts",
    colours: 3,
    images: ["/images/products/asanerror-tee.jpg"],
    description: "Washed-finish tee with back print lettering.",
  },
  {
    slug: "stop-bullying",
    name: "Stop Bullying",
    category: "T Shirts",
    colours: 3,
    images: ["/images/products/bullstop-tee.jpg"],
    description: "Statement graphic tee with an anti-bullying message.",
  },
  {
    slug: "linen-set",
    name: "Linen Set",
    category: "Sets",
    colours: 3,
    images: [
      "/images/products/linen-set-colours.png",
      "/images/products/linen-set-front.png",
      "/images/products/linen-set-back.png",
    ],
    description: "Textured linen shirt and pants set with a relaxed drape.",
  },
  {
    slug: "summer-set",
    name: "Summer Set",
    category: "Sets",
    colours: 4,
    images: [
      "/images/products/summer-set-light.png",
      "/images/products/summer-set-dark.png",
    ],
    description: "Patterned tee and shorts set, oversized cut.",
  },
];

export function productsByCategory(category: Category) {
  return products.filter((p) => p.category === category);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
