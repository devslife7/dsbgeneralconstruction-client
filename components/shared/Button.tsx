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
  const defaultStyle =
    "inline-flex items-center rounded-md font-medium px-4 py-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border border-transparent"

  interface VariantType {
    primary: string
    secondary: string
    danger: string
    cancel: string
  }
  const variantStyle: VariantType = {
    primary: "bg-primary text-white hover:bg-primary-600 focus-visible:ring-red-500",
    secondary: "bg-blue-100 text-blue-700 hover:bg-blue-200 focus-visible:ring-blue-500",
    danger: "bg-red-100 text-red-600 hover:bg-red-200 focus-visible:ring-red-500",
    cancel: "bg-gray-100 text-gray-700 hover:bg-gray-200 focus-visible:ring-gray-500",
  }

  return (
    <button
      {...props}
      className={classNames(className, defaultStyle, variantStyle[variant as keyof VariantType])}
    >
      {startIcon ? <div className="mr-2">{startIcon}</div> : null}
      {children}
      {endIcon ? <div className="ml-2">{endIcon}</div> : null}
    </button>
  )
}
