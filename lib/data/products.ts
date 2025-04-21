export const featuredProducts = [
  {
    id: "1",
    name: "Premium Coozie",
    slug: "premium-coozie",
    description:
      "High-quality insulated coozie featuring our signature design. Perfect for keeping your beverages cold.",
    price: 14.99,
    medium: "Neoprene",
    images: ["/images/coozie.png", "/images/coozie.png", "/images/coozie.png"],
    dimensions: {
      height: 4.75,
      diameter: 2.75,
      capacity: "12oz",
      unit: "in",
    },
    variants: [
      { name: "Black", price: 14.99 },
      { name: "Navy", price: 14.99 },
    ],
    isLimited: false,
    available: 999,
    rating: 4.8,
    reviewCount: 42,
  },
  {
    id: "2",
    name: "Embroidered Baseball Cap",
    slug: "embroidered-baseball-cap",
    description:
      "Premium cotton baseball cap with our embroidered design. Adjustable strap for the perfect fit.",
    price: 29.99,
    medium: "Cotton",
    images: ["/images/hat.png", "/images/hat.png", "/images/hat.png"],
    dimensions: {
      size: "One Size",
      adjustable: true,
      unit: "in",
    },
    variants: [
      { name: "Navy", price: 29.99 },
      { name: "Black", price: 29.99 },
      { name: "Gray", price: 29.99 },
    ],
    isLimited: false,
    available: 999,
    rating: 4.7,
    reviewCount: 28,
  },
  {
    id: "3",
    name: "Enamel Pin",
    slug: "enamel-pin",
    description:
      "High-quality hard enamel pin with our signature design. Perfect for jackets, bags, or lapels.",
    price: 12.99,
    medium: "Hard Enamel",
    images: ["/images/pin.png", "/images/pin.png", "/images/pin.png"],
    dimensions: {
      width: 1.25,
      height: 1.25,
      unit: "in",
    },
    variants: [
      { name: "Gold/Black", price: 12.99 },
      { name: "Silver/Blue", price: 12.99 },
    ],
    isLimited: false,
    available: 999,
    rating: 4.9,
    reviewCount: 15,
  },
];
