import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-16 w-full rounded-2xl border-0 bg-[#EFEBF5] px-6 py-4 text-lg font-medium text-clay-foreground shadow-clayPressed ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-clay-muted focus-visible:outline-none focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-clay-accent/20 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }
