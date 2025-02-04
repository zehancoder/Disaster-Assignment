import { cn } from "../../setTwMarge/script";

export const Container = ({ children, className }) => {
  return (
    <div className={cn("mx-auto max-w-[815px]", className)}>{children}</div>
  );
};
export const BigContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "mx-auto w-full px-3 md:px-10 lg:px-14 xl:px-16",
        className
      )}
    >
      {children}
    </div>
  );
};
