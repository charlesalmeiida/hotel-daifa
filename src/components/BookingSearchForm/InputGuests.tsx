import { LabelForm } from "./LabelForm"

interface InputGuestsProps {
  handleChange: (e: { target: { name: string; value: string } }) => void
  placeholder: string
  title: string
  name: string
}

export function InputGuests({
  handleChange,
  name,
  placeholder,
  title,
}: InputGuestsProps) {
  return (
    <div className="flex flex-col mx-auto lg:mx-0 justify-center gap-10">
      <LabelForm icon="people" title={title} />
      <input
        min={0}
        onChange={handleChange}
        className="font-mono text-center lg:text-left max-w-28 text-base text-gray-800 bg-transparent"
        type="number"
        name={name}
        placeholder={placeholder}
        id={name}
      />
    </div>
  )
}
