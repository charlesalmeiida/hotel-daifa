"use client"

import { useState } from "react"
import { Input } from "./Input"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Email enviado com sucesso!")
      } else {
        alert("Erro ao enviar o email.")
      }
    } catch (error) {
      console.error(error)
      alert("Erro ao enviar o email.")
    }
  }

  return (
    <form className="space-y-4">
      <Input
        handleChange={handleChange}
        id="name"
        placeholder="Digite seu nome"
        type="text"
      />
      <Input
        handleChange={handleChange}
        id="email"
        placeholder="Digite seu e-mail"
        type="email"
      />
      <Input
        handleChange={handleChange}
        id="number"
        placeholder="Celular"
        type="number"
      />
      <Input
        handleChange={handleChange}
        id="message"
        placeholder="Mensagem"
        type="textarea"
      />
      <button
        onClick={handleSubmit}
        className="font-mono text-base bg-blue text-gray-100 hover:bg-orange rounded-[4px] leading-5 flex justify-center gap-3 h-fit transition-all py-4 w-full"
      >
        ENVIAR
      </button>
    </form>
  )
}
