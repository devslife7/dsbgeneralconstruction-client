export default function Button({ className, children, ...props }: { className?: any; children: any }) {
  const customStyles = "py-2 px-5 bg-primary rounded-md text-white"
  return (
    <button {...props} className={`${customStyles} ${className}`}>
      {children}
    </button>
  )
}
