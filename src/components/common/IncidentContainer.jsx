import { cn } from "../../setTwMarge/script"

export const Container = ({children, className}) => {
    return <div className={cn("mx-auto max-w-[815px]", className)}>
        {children}
    </div>
}
export const BigContainer = ({children, className}) => {
    return <div className={cn("mx-auto max-w-[1300px]", className)}>
        {children}
    </div>
}
