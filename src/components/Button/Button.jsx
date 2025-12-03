const changeVariant = (variant) => {
  switch (variant) {
    case "primary":
      return `
        relative overflow-hidden shadow-md bg-linear-to-r from-blue-500 via-sky-500 to-cyan-600 text-white
        before:absolute hover:transition-all hover:shadow-[0_0_20px_rgba(255,_255,_255,_0.2)] before:inset-0 before:bg-gradient-to-r before:from-[#0ab9d1]/40 via-[#0ab9d1]/60 before:to-[#0ab9d1]
        before:-translate-y-full before:transition-transform before:duration-300
        hover:before:-translate-y-0 before:rounded-full
      `;
    case "secondary":
      return `relative overflow-hidden bg-#fff]
        before:absolute hover:transition-all hover:shadow-[0_0_20px_rgba(255,_255,_255,_0.4)] before:inset-0 before:bg-gradient-to-t before:from-[#fff]/80 before:to-[#fff]
        before:-translate-y-full before:transition-transform before:duration-300
        hover:before:-translate-y-0 before:rounded-full hover:text-black border-[1px] border-white`;
    default:
      return "";
  }
};

function Button({ children, variant = "primary", ...props }) {
  const variantClasses = changeVariant(variant);
  const baseClasses =
    "p-4 transition-colors  rounded-full cursor-pointer font-semibold font-montserrat focus:outline-none group";

  const combinedClasses = `${baseClasses} ${variantClasses}`;

  return (
    <button className={combinedClasses} {...props}>
      {/* Garante que o texto fique acima do pseudo-elemento */}
      <span className="relative items-center z-20 flex flex-row gap-2">
        {children}
      </span>
    </button>
  );
}

export default Button;
