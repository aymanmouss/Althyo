'use client'

export default function NavToggle({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 "
    >
      <span
        className={`block h-0.5 w-6 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
      />
      <span
        className={`block h-0.5 w-6 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
      />
      <span
        className={`block h-0.5 w-6 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
      />
    </button>
  )
}
