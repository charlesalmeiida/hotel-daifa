interface InputProps {
  placeholder: string
  id: string
  type: "text" | "email" | "textarea" | "number"
}

export function Input({ id, placeholder, type }: InputProps) {
  return (
    <>
      {type === "textarea" ? (
        <textarea
          rows={5}
          placeholder={placeholder}
          className="w-full lg:w-[438px] font-mono text-gray-500 py-[14px] px-4 border border-gray-300 bg-gray-50 rounded-[4px]"
          id={id}
        ></textarea>
      ) : (
        <input
          className="w-full lg:w-[438px] font-mono text-gray-500 py-[14px] px-4 border border-gray-300 bg-gray-50 rounded-[4px]"
          type={type}
          placeholder={placeholder}
          id={id}
        />
      )}
    </>
  )
}
