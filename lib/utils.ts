import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}

export function generateImageSrcSet(imageSrc: string): string {
  const baseSrcSet: string[] = [];

  // Add variations for different screen sizes
  const sizes = [640, 960, 1280, 1920];
  sizes.forEach((size) => {
    // For Pexels images, use their sizing parameters
    if (imageSrc.includes("pexels.com")) {
      const sizedImg = `${imageSrc}?auto=compress&cs=tinysrgb&w=${size}`;
      baseSrcSet.push(`${sizedImg} ${size}w`);
    }
  });

  return baseSrcSet.join(", ");
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

export function calculateDiscount(originalPrice: number, salePrice: number): number {
  if (originalPrice <= 0 || salePrice >= originalPrice) return 0;
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
}
