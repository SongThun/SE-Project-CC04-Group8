import React from "react";

const sizes = {
  textxs: "text-[4px] font-normal",
  texts: "text-[12px] font-normal",
  textxl: "text-[24px] font-normal 1g:text-[20px] md:text-[22px]",
  text2xl:
    "text-[32px] font-normal 1g:text-[27px] md:text-[30px] sm:text-[28px]",
};

export type TextProps = Partial<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
> & {
  className: string;
  size?: keyof typeof sizes;
  as?: any;
};

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size = "textxl",
  as,
  ...restProps
}) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-{#000000} font-['Lato'] ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
