export default function Button({ className, children, ...props }: { className?: any; children: any }) {
  const customStyles =
    "py-2 px-5 bg-primary rounded-md text-white transition-all border-[3px] border-solid border-transparent hover:border-solid hover:bg-transparent hover:border-[3px] hover:border-primary"

  return (
    <button {...props} className={`${customStyles} ${className}`}>
      {children}
    </button>
  )
}
