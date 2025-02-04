import { cn } from "../../setTwMarge/script";

export const MyButton = ({ children, className }) => {
  return (
    <button
      className={cn(
        "bg-myYollow font-onset rounded-[6px] cursor-pointer leading-[8px] transition-all duration-200 hover:opacity-95 md:leading-[10px] lg:leading-[15.3px] text-white font-[700] tracking-wide text-xs md:text-[14px] h-[42px] hover:scale-105 py-1.5 md:py-2 px-5 md:px-[25px]",
        className
      )}
    >
      {children}
    </button>
  );
};
