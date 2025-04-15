import Hero from './sections/Hero';
import About from './sections/About';
import AIWork from './sections/AIWork';
import DesignLegacy from './sections/DesignLegacy';

function App() {
  return (
    <div className="bg-neutral-950 text-white font-sans">
      <Hero />
      <main className="space-y-32">
        <About />
        <AIWork />
        <DesignLegacy />
      </main>
    </div>
  );
}

export default App;