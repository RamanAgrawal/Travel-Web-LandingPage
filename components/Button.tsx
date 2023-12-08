"use client"
import Image from "next/image";
import React from "react";
interface ButtonI {
  type: "button" | "submit";
  title: string;
  variant:
    | "btn_dark_green"
    | "btn_dark_green_outline"
    | "btn_white"
    | "btn_green"
    | "btn_white_text";
  icon?: string;
  full?:boolean;
  onClick?:()=>void;
}
const Button = ({ title, type, icon, variant,onClick ,full}: ButtonI) => {
  return (
    <button
    onClick={onClick}
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;
