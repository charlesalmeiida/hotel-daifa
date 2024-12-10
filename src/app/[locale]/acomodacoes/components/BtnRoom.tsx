interface BtnRoomProps {
  children: React.ReactNode
  isActive?: boolean
  handleClick?: () => void
}

export function BtnRoom({
  children,
  isActive = false,
  handleClick,
}: BtnRoomProps) {
  return (
    <button
      onClick={handleClick}
      className={`font-sans text-lg ${
        isActive ? "font-semibold" : "font-normal"
      } italic text-gray-900`}
    >
      {children}
    </button>
  )
}
