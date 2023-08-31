import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import { forwardRef } from "react"

const buttonStyles = cva(
    "inline-flex cursor-pointer items-center justify-center gap-2 w-full lg:w-auto px-auto rounded-md transition-all font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border border-transparent disabled:cursor-not-allowed disabled:opacity-60",
    {
        variants: {
            variant: {
                primary:
                    "bg-primary text-white hover:bg-primary-600 focus-visible:ring-red-500 hover:bg-primary-600",
                secondary: "bg-blue-100 text-blue-700 hover:bg-blue-200 focus-visible:ring-blue-500",
                danger: "bg-red-100 text-red-600 hover:bg-red-200 focus-visible:ring-red-500",
                cancel: "bg-gray-100 text-gray-700 hover:bg-gray-200 focus-visible:ring-gray-500",
            },
            size: {
                sm: "px-4 py-1 text-base",
                md: "px-4 py-2",
                lg: "px-6 py-2",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
)

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonStyles> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
    return <button ref={ref} className={cn(buttonStyles({ variant, size, className }))} {...props} />
})
Button.displayName = "Button"

export { Button, buttonStyles }
