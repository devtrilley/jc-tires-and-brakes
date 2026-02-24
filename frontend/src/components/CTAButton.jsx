function CTAButton({
  onClick,
  children,
  className = "",
  variant = "primary",
  type = "button",
  disabled = false,
}) {
  const base = `
    relative overflow-hidden group
    font-bold rounded-xl
    transition-all duration-200
    active:scale-[0.97]
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    // Main red CTA — use this everywhere
    primary: `
      px-8 py-4 text-white
      bg-[var(--jc-red-600)]
      shadow-[0_4px_14px_rgba(192,3,2,0.5)]
      hover:bg-[var(--jc-red-500)]
      hover:shadow-[0_6px_22px_rgba(192,3,2,0.65)]
      hover:-translate-y-0.5
    `,
    white: `
      px-8 py-4 text-[var(--jc-red-600)]
      bg-white
      shadow-[0_4px_20px_rgba(0,0,0,0.5),0_0_30px_rgba(0,0,0,0.3)]
      hover:bg-gray-100
      hover:shadow-[0_8px_32px_rgba(0,0,0,0.65),0_0_50px_rgba(0,0,0,0.4)]
      hover:-translate-y-0.5
    `,
    // Dark pill — for use on light backgrounds where you want contrast
    dark: `
      px-8 py-4 text-white
      bg-[var(--jc-black)]
      border border-white/10
      shadow-[0_4px_14px_rgba(0,0,0,0.4)]
      hover:bg-[#222]
      hover:shadow-[0_6px_22px_rgba(0,0,0,0.55)]
      hover:-translate-y-0.5
    `,
    // Outline — secondary actions on dark backgrounds
    outline: `
      px-8 py-4 text-white
      bg-transparent
      border-2 border-white/70
      hover:bg-white/10
      hover:border-white
      hover:-translate-y-0.5
    `,
    // Footer/form use
    submit: `
      w-full px-8 py-5 text-lg text-white
      bg-[var(--jc-red-600)]
      shadow-[0_4px_14px_rgba(192,3,2,0.4)]
      hover:bg-[var(--jc-red-500)]
      hover:shadow-[0_6px_22px_rgba(192,3,2,0.55)]
      hover:-translate-y-0.5
    `,
  };

  const chosen = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${chosen} ${className}`}
    >
      {/* Shimmer sweep on hover */}
      <span
        className="
          absolute inset-0
          bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.18),transparent_70%)]
          -translate-x-full group-hover:translate-x-full
          transition-transform duration-700 ease-out
          pointer-events-none
        "
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
}

export default CTAButton;
