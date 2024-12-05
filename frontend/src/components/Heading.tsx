import React from "react";

const sizes = {
  textmd: "text-[16px] font-medium 1g:text-[13px]",
  textlg: "text-[20px] font-medium 1g:text-[17px]",
  headingxs: "text-[16px] font-semibold lg:text-[13px]",
  headings: "text-[20px] font-semibold lg:text-[17px]",
  headingmd:
    "text-[28px] font-bold lg:text-[23px] md:text-[26px] sm:text-[24px]",
  headinglg:
    "text-[40px] font-bold lg:text-[34px] md:text-[38px] sm:text-[36px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "textmd",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-[#121212] font-['Inter] ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
