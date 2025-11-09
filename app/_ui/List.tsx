// components/List.tsx
import React from "react";

type ListProps = {
  children: React.ReactNode;
};

export function List({ children }: ListProps) {
  return <ul className="list-none flex flex-col gap-[1.6rem]">{children}</ul>;
}
