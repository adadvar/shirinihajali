import React from "react";
import CategoryItem from "./CategoryItem";

interface ItemProps {
  href: string;
  src: string;
  title: string;
  price: number;
}

const CategoryList = ({ items }: { items: ItemProps[] }) => {
  return (
    <>
      {items.map((item) => (
        <CategoryItem item={item} />
      ))}
    </>
  );
};

export default CategoryList;
