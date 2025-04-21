import { Metadata } from "next";
import { notFound } from "next/navigation";
import { featuredProducts } from "@/lib/data/products";
import ProductDetails from "./ProductDetails";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = featuredProducts.find((p) => p.slug === params.slug);
  
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }
  
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.images[0],
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [product.images[0]],
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = featuredProducts.find((p) => p.slug === params.slug);
  
  if (!product) {
    notFound();
  }
  
  return <ProductDetails product={product} />;
}