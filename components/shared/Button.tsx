import classNames from "classnames"

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
    primary: "px-4 py-2 bg-red-400 text-white hover:brightness-95 font-medium",
    secondary:
      "border border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
    danger:
      "border border-transparent bg-red-100 px-4 py-2 font-medium text-red-600 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",
    cancel:
      "border border-transparent bg-gray-100 text-gray-700 px-4 py-2 font-medium hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",
  }

  const defaultStyle = "inline-flex items-center rounded-md transition-all"

  return (
    <button
      {...props}
      // className={baseStyle + " " + buttonVariantStyles[variant as keyof ButtonType] + className}
      className={classNames(className, defaultStyle, buttonVariantStyles[variant as keyof ButtonType])}
    >
      {startIcon ? <div className="mr-2">{startIcon}</div> : null}
      {children}
      {endIcon ? <div className="ml-2">{endIcon}</div> : null}
    </button>
  )
}
