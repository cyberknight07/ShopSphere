import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

const defaultSize = 24;

export const CartIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    <path
      d="M7 4h-2l-1 2v2h2l3.6 7.59-1.35 2.44A2 2 0 0010 21h10v-2H10l1.1-2h6.45a2 2 0 001.79-1.11L22 9H6"
      fill="currentColor"
    />
  </svg>
);

export const PlusIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    <path
      d="M12 5v14M5 12h14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MinusIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    <path
      d="M5 12h14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LoginIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    <path
      d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zM12 14c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"
      fill="currentColor"
    />
  </svg>
);

export const SearchIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    <path
      d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 1016 15.5l.27.28v.79L20 21.5 21.5 20l-6-6zM10 15a5 5 0 110-10 5 5 0 010 10z"
      fill="currentColor"
    />
  </svg>
);

export const ArrowRightIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    <path d="M10 17l5-5-5-5v10z" fill="currentColor" />
  </svg>
);

export const ArrowLeftIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    <path
      d="M15 6l-6 6 6 6"
      fill="currectColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BusinessIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    <path
      d="M4 22h16V2H8v6H4v14zm4-2H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6v-2h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z"
      fill="currentColor"
    />
  </svg>
);

export const HeartIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
      2 6 4 4 6.5 4c1.74 0 3.41 1.01 4.22 2.44
      C11.09 5.01 12.76 4 14.5 4
      17 4 19 6 19 8.5
      c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="currentColor"
    />
  </svg>
);

export const StarFilledIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    <path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      fill="currentColor"
    />
  </svg>
);
