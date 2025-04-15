import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans px-6 md:px-12 py-12">
      <header className="mb-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Danny Mayorga</h1>
        <p className="mt-4 text-lg max-w-2xl text-neutral-300">
          Engineering leadership at the intersection of AI, automation, and digital design. Exploring new possibilities across SDLC, system intelligence, and thoughtful user experiences.
        </p>
      </header>

      <main className="space-y-32">
        <section id="about" className="max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4 text-neutral-200">About</h2>
          <p className="text-neutral-400">
            With a foundation in quality engineering and a decade of leadership across agile environments, I help organizations scale development and embrace AI in practical, measurable ways.
          </p>
        </section>

        <section id="ai-work" className="max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4 text-neutral-200">AI Work</h2>
          <p className="text-neutral-400">
            From prompt engineering to automation pipelines, I experiment with how AI can reduce manual overhead and enhance the SDLC. Tools I’ve explored include ChatGPT, GitHub Copilot, and internal GPT agents.
          </p>
        </section>

        <section id="design-legacy" className="max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4 text-neutral-200">Design Legacy</h2>
          <p className="text-neutral-400">
            My early work focused on UX, interaction, and visual design. This site honors that past by showcasing some of the thinking and process behind those projects — even if they’re archived or retired.
          </p>
        </section>
      </main>

      <footer className="mt-32 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Danny Mayorga. Built with React, Vite, and TailwindCSS.</p>
      </footer>
    </div>
  )
}

export default App
