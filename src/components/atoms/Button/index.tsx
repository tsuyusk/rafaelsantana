import React, { ButtonHTMLAttributes } from 'react'
import { tv } from 'tailwind-variants';

const buttonStyles = tv({
  base: "font-bold bg-slate-50 text-black transition-all duration-250 hover:bg-slate-300",
  variants: {
    size: {
      lg: 'min-h-20 px-8 md:px-20 py-6 rounded-[16px] text-2xl',
      md: '',
    }
  }
});

const iconStyles = tv({
  variants: {
    size: {
      lg: 'md:mr-8',
      md: 'md:mr-4',
    }
  }
});


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconRight: React.ReactElement
  size?: "lg" | "md"
}

export const Button: React.FC<ButtonProps> = ({ children, size = 'md', iconRight, ...props }) => {
  return (
    <button className={buttonStyles({ size })} type="button" {...props}>
      <div className="flex flex-col flex-wrap items-center md:flex-row">
        <div className={iconStyles({ size })}>
          {iconRight}
        </div>

        {children}
      </div>
    </button>
  )
}
