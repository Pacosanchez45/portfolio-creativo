type ArrowRightProps = {
  className?: string;
};

export function ArrowRight({ className }: ArrowRightProps) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 20 12"
      width="1em"
      height="1em"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 6h17M13 1l5 5-5 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}
