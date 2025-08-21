
import React from 'react';
import { cx } from '../../utils';

type CTAProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  as?: 'button' | 'a';
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  ariaLabel: string;
};

export function CTA({ children, variant = "primary", as = "button", href, onClick, ariaLabel }: CTAProps) {
  const Tag = href ? "a" : as;
  const isPrimary = variant === "primary";
  
  return (
    <Tag
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cx(
        "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold tracking-wide focus:outline-none focus-visible:ring-2 transition-transform active:scale-[0.98]",
        isPrimary
          ? "bg-[#C9A15B] text-black hover:opacity-90 focus-visible:ring-[#C9A15B]"
          : "border border-neutral-700 text-white hover:border-neutral-500 focus-visible:ring-[#C9A15B]"
      )}
    >
      {children}
    </Tag>
  );
}
