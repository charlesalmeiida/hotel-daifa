interface InputProps {
  placeholder: string
  id: string
  type: "text" | "email" | "textarea" | "tel"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange: (e: { target: { id: any; value: any } }) => void
}

export function Input({ id, placeholder, type, handleChange }: InputProps) {
  return (
    <>
      {type === "textarea" ? (
        <textarea
          onChange={handleChange}
          rows={5}
          placeholder={placeholder}
          className="w-full lg:w-[438px]focus:outline-none focus:border-blue invalid:border-red invalid:text-red font-mono text-gray-500 py-[14px] px-4 border border-gray-300 invalid:outline-none bg-gray-50 rounded-[4px]"
          id={id}
        ></textarea>
      ) : (
        <input
          className="w-full lg:w-[438px] font-mono focus:outline-none focus:border-blue invalid:border-red invalid:text-red text-gray-500 py-[14px] invalid:outline-none px-4 border border-gray-300 bg-gray-50 rounded-[4px]"
          onChange={handleChange}
          type={type}
          placeholder={placeholder}
          id={id}
        />
      )}
    </>
  )
}
