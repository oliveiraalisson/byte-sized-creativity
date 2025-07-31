import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-mono",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-none shadow-retro hover:shadow-neon",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-none shadow-retro",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground rounded-none shadow-retro hover:shadow-neon",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-none shadow-retro hover:shadow-neon",
        accent:
          "bg-accent text-accent-foreground hover:bg-accent/80 rounded-none shadow-retro hover:shadow-neon",
        synthpink:
          "bg-synthpink text-synthpink-foreground hover:bg-synthpink/80 rounded-none shadow-retro hover:shadow-neon",
        cyber: "bg-gradient-cyber text-primary-foreground hover:opacity-90 rounded-none shadow-neon animate-pixel-pulse",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-none",
        link: "text-primary underline-offset-4 hover:underline rounded-none",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
