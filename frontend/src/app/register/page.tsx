"use client"

import React, { useState } from "react"

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log(`Sending user data to backend: ${formData}`)
        // ToDo: Send request to backend endpoint
    }

    return (
        <main className="min-h-screen flex items-center justify-center">
            <form className="p-6 bg-white rounded shadow-md w-96" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold mb-4">¿No tienes cuenta? Regístrate, ¡es gratis!</h1>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Tu nombre" 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded mb-2" 
                    required 
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Tu email" 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded mb-2" 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Tu nueva contraseña" 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded mb-2" 
                    required 
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Registrarme
                </button>
            </form>
        </main>
    )
}