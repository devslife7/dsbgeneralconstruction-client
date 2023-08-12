export default function Button({
  onClick,
  className,
  children,
  ...props
}: {
  onClick?: () => void
  className?: any
  children: any
}) {
  const customStyles =
    "py-2 px-5 bg-primary rounded-md text-white transition-all border-[3px] border-solid border-transparent hover:border-solid hover:bg-transparent hover:border-[3px] hover:border-primary hover:text-primary"

  return (
    <button {...props} onClick={onClick} className={`${customStyles} ${className}`}>
      {children}
    </button>
  )
}
