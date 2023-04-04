import React from "react";

interface NavebarItemProps {
  label: string;
}
const NavbarItem: React.FC<NavebarItemProps> = ({ label }) => {
  return (
    <div className="ml-4 text-zinc-900 cursor-pointer hover:text-sky-300 transition">
      {label}
    </div>
  );
};

export default NavbarItem;
