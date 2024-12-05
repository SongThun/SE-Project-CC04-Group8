import React from "react";

const shapes = {
  round: "rounded-lg",
  circle: "rounded-[50%]",
} as const;

const variants = {
  fill: {},
  red_800: "bg-[#cblele] text-[#ffffff]",
  gray_600_01: "bg-[#757575] text-[#ffffff]",
  blue_600_3d: "bg-[#1488db3d]",
  blue_600: "bg-[#1488d8] text-[#ffffff]",
  gray_50_01: "bg-[#fafafa]",
} as const;

const sizes = {
  sm: "h-[44px] px-6 text-[20px]",
  md: "h-[48px] px-1",
  lg: "h-[50px] px-6 text-[20px]",
  xs: "h-[32px] px-2",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> & {
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  shape?: keyof typeof shapes;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  color?: keyof typeof variants; // Color should match the keys of the variants
};

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "gray_50_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
        shape && shapes[shape]
      } ${size && sizes[size]} ${
        variant && variants[variant] ? variants[variant] : ""
      } ${color && variants[color] ? variants[color] : ""}`}
      {...restProps}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export { Button };
