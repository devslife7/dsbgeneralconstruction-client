export default function Button({
  leftIcon,
  rightIcon,
  variant = "primary",
  onClick,
  className,
  children,
  ...props
}: {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  variant?: string
  onClick?: () => void
  className?: any
  children: any
}) {
  interface ButtonType {
    primary: string
    secondary: string
    danger: string
  }
  const buttonVariantStyles: ButtonType = {
    primary: "py-2 px-5 bg-primary rounded-md text-white transition-all hover:brightness-90",
    // "py-2 px-5 bg-primary rounded-md text-white transition-all border-[3px] border-solid border-transparent hover:border-solid hover:bg-transparent hover:border-[3px] hover:border-primary hover:text-primary",

    secondary:
      "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
    danger:
      "inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 font-medium text-red-600 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",
  }

  return (
    <button
      {...props}
      onClick={onClick}
      className={`${buttonVariantStyles[variant as keyof ButtonType]} ${className} flex items-center`}
    >
      {leftIcon && <div className="mr-2 text-inherit">{leftIcon}</div>}
      {children}
      {rightIcon && <div className="ml-2 text-inherit">{rightIcon}</div>}
    </button>
  )
}
