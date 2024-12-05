import React from "react";

const shapes = {
  round: "rounded",
} as const;

const variants = {
  tarOutlineBlack9007f: "!border-[#0000007f] border border-solid bg-[#ffffff]",
} as const;

const sizes = {
  xs: "h-[156px] p-2.5 text-[16px]",
} as const;

type TextAreaProps = Omit<
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    placeholder: string;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
  }>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      shape,
      size = "xs",
      variant = "tarOutlineBlack9007f",
      onChange,
      ...restProps
    },
    ref
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <textarea
        ref={ref}
        className={`${className} ${shape && shapes[shape]} ${
          size && sizes[size]
        } ${variant && variants[variant]}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  }
);

export { TextArea };
