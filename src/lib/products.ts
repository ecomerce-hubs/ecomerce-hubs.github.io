export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  features: string[];
  inStock: boolean;
}

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Timepiece",
    price: 299.99,
    category: "Watches",
    image: product1,
    description: "Elegant timepiece with premium materials and precise movement. A perfect blend of style and functionality.",
    features: ["Stainless steel case", "Leather strap", "Water resistant", "2-year warranty"],
    inStock: true,
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 199.99,
    category: "Electronics",
    image: product2,
    description: "Premium wireless headphones with active noise cancellation and exceptional sound quality.",
    features: ["Active noise cancellation", "30-hour battery life", "Bluetooth 5.0", "Premium sound"],
    inStock: true,
  },
  {
    id: 3,
    name: "Leather Messenger Bag",
    price: 159.99,
    category: "Bags",
    image: product3,
    description: "Handcrafted leather bag with spacious compartments. Perfect for work or travel.",
    features: ["Genuine leather", "Multiple compartments", "Adjustable strap", "Laptop pocket"],
    inStock: true,
  },
  {
    id: 4,
    name: "Designer Sunglasses",
    price: 149.99,
    category: "Accessories",
    image: product4,
    description: "Stylish sunglasses with UV protection and polarized lenses for maximum clarity.",
    features: ["UV protection", "Polarized lenses", "Lightweight frame", "Includes case"],
    inStock: true,
  },
  {
    id: 5,
    name: "Smartphone Pro",
    price: 899.99,
    category: "Electronics",
    image: product5,
    description: "Latest smartphone with advanced camera system and powerful performance.",
    features: ["Triple camera system", "5G capable", "All-day battery", "Premium display"],
    inStock: true,
  },
  {
    id: 6,
    name: "Running Sneakers",
    price: 129.99,
    category: "Footwear",
    image: product6,
    description: "Comfortable running shoes with superior cushioning and breathable design.",
    features: ["Breathable mesh", "Cushioned sole", "Lightweight", "Multiple colors"],
    inStock: true,
  },
  {
    id: 7,
    name: "Luxury Fragrance",
    price: 89.99,
    category: "Beauty",
    image: product7,
    description: "Sophisticated fragrance with long-lasting notes of elegance and refinement.",
    features: ["Long-lasting", "Premium ingredients", "Elegant bottle", "100ml"],
    inStock: true,
  },
  {
    id: 8,
    name: "Laptop Pro",
    price: 1299.99,
    category: "Electronics",
    image: product8,
    description: "High-performance laptop for professionals. Powerful, portable, and built to last.",
    features: ["High-resolution display", "All-day battery", "Fast processor", "Lightweight design"],
    inStock: true,
  },
];
