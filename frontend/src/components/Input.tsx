import React from "react";

const shapes = {
  round: "rounded",
} as const;

const variants = {
  fill: {},
  white_A700: "bg-[#ffffff]",
  gray_50_ed: "bg-[#fafafaed]",
} as const;

const sizes = {
  sm: "h-[46px] px-3",
  xs: "h-[36px] px-3 text-[17px]",
} as const;

type InputProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "prefix" | "size"
> &
  Partial<{
    shape?: keyof typeof shapes;
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
    label?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    color?: keyof typeof variants;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "sm",
      color = "white_A700",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text border border-solid ${
          shape && shapes[shape]
        } ${variant && variants[variant] ? variants[variant] : ""} ${
          color && variants[color] ? variants[color] : ""
        }`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...restProps}
        />
        {!!suffix && suffix}
      </label>
    );
  }
);

export { Input };
