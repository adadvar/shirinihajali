import Link from "next/link";
import React from "react";
import { en2fa, formatPrice } from "../_lib/helpers";

interface Props {
  href: string;
  src: string;
  title: string;
  price: number;
}
const CategoryItem = ({ item }: { item: Props }) => {
  return (
    <Link href={item.href} className="category">
      <img src={item.src} className="category-img" alt="شیرینی خشک" />
      <div className="category-content">
        <p className="category-title">{item.title}</p>
        <div className="category-tags">
          <span className="tag tag--price">
            قیمت {en2fa(formatPrice(item.price))}
          </span>
        </div>
        <ul className="category-attributes"></ul>
      </div>
    </Link>
  );
};

export default CategoryItem;
