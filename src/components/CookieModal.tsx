"use client"

import { useState, useEffect } from "react"

export function CookieModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsOpen(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsOpen(false)
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed bottom-10 w-full md:w-fit md:left-10 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-[4px] shadow-shaddowShape max-w-lg text-center">
        <h2 className="text-lg font-semibold mb-4">Política de Cookies</h2>
        <p className="text-gray-700 mb-6">
          Usamos cookies para melhorar sua experiência. Ao continuar navegando,
          você concorda com nossa política de cookies.
        </p>
        <button
          onClick={handleAccept}
          className="bg-blue font-mono text-gray-50 px-4 py-2 rounded-[4px]"
        >
          Aceitar
        </button>
      </div>
    </div>
  )
}
