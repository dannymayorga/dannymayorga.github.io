import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import AIWork from './sections/AIWork'
import DesignLegacy from './sections/DesignLegacy'

export default function App() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <Hero />
      <About />
      <AIWork />
      <DesignLegacy />
    </main>
  )
}
