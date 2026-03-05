import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full border-0 px-3 py-1 text-sm font-bold tracking-wide transition-all duration-200 focus:outline-none shadow-clayCard/50 hover:-translate-y-0.5",
    {
        variants: {
            variant: {
                default: "bg-clay-accent text-white font-heading",
                secondary: "bg-clay-accent-alt text-white font-heading",
                destructive: "bg-[#EF4444] text-white font-heading",
                outline: "bg-white/50 text-clay-foreground backdrop-blur-sm border border-clay-accent/10 font-heading",
                success: "bg-clay-success text-white font-heading",
                warning: "bg-clay-warning text-white font-heading",
                info: "bg-clay-info text-white font-heading",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
