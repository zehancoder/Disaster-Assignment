import { cn } from "../../setTwMarge/script"

export const TitleFunc = ({children, className}) => {
    return <h1 className={cn("text-lg sm:text-xl font-onset lg:text-2xl font-bold leading-[30.6px] text-black", className)}>{children}</h1>
}
export const TitleTwo = ({children, className}) => {
    return <h1 className={cn("text-xl sm:text-[22px] text-[#09090B] leading-[33.15px] lg:text-[26px] font-bold", className)}>{children}</h1>
}