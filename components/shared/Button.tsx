type Props = {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  variant?: "primary" | "secondary" | "danger" | "cancel"
  onClick?: () => void
  className?: string
  children: React.ReactNode
}

export default function Button({
  startIcon,
  endIcon,
  variant = "primary",
  onClick,
  className,
  children,
  ...props
}: Props) {
  interface ButtonType {
    primary: string
    secondary: string
    danger: string
    cancel: string
  }
  const buttonVariantStyles: ButtonType = {
    primary:
      "py-2 px-5 inline-flex justify-center bg-primary rounded-md text-white transition-all hover:brightness-90",
    secondary:
      "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
    danger:
      "inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 font-medium text-red-600 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",
    cancel:
      "inline-flex justify-center rounded-md border border-transparent bg-gray-100 text-gray-700 px-4 py-2 font-medium hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",
  }

  return (
    <button
      {...props}
      onClick={onClick}
      className={`${buttonVariantStyles[variant as keyof ButtonType]} ${className} flex items-center`}
    >
      {startIcon && <div className="mr-2 text-inherit">{startIcon}</div>}
      {children}
      {endIcon && <div className="ml-2 text-inherit">{endIcon}</div>}
    </button>
  )
}
