// components/ListItem.tsx
import React from "react";

type ListItemProps = {
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export function ListItem({ icon, children }: ListItemProps) {
  return (
    <li className="text-[1.8rem] flex items-center gap-4 leading-[1.2]">
      {icon && (
        <span className="w-[3rem] h-[3rem] text-orange-500">{icon}</span>
      )}
      <span>{children}</span>
    </li>
  );
}
