import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemContext from './components/ProblemContext';
import Solution from './components/Solution';
import Simulator from './components/Simulator';
import Guide from './components/Guide';
import TechTransfer from './components/TechTransfer';
import Sponsors from './components/Sponsors';
import PolicyPaper from './components/PolicyPaper';
import Timeline from './components/Timeline';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProblemContext />
      <Solution />
      <Simulator />
      <Guide />
      <TechTransfer />
      <Sponsors />
      <PolicyPaper />
      <Timeline />
      
      <footer style={{ background: 'var(--color-forest-dark)', padding: '2rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-gray-200)' }}>
          © 2026 IFAM - Instituto Federal do Amazonas | Protótipo Demonstrativo para o Edital iCS
        </p>
      </footer>
    </>
  );
}

export default App;
