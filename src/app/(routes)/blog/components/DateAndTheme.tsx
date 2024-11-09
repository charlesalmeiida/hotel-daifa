interface DateAndThemeProps {
  date: string
  theme: string
}

export function DateAndTheme({ date, theme }: DateAndThemeProps) {
  return (
    <div className="font-mono text-gray-800 mt-6 opacity-80 text-base flex items-center gap-4">
      <span>{date}</span>
      <div className="w-[5px] h-[5px] bg-gray-500 rounded-full"></div>
      <span>{theme}</span>
    </div>
  )
}
