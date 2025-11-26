const CustomShapeDivider = () => {
  return (
    <div className="absolute scale-x-[-1] top-0 left-0 w-full overflow-hidden leading-0">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-[calc(100%+1.3px)] h-20 md:h-[121px]"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="fill-black"
        />
      </svg>
    </div>
  );
};

export default CustomShapeDivider;
