import React, { useState } from 'react';
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
import CartilhaModal from './components/CartilhaModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCartilhaModal = () => setIsModalOpen(true);
  const closeCartilhaModal = () => setIsModalOpen(false);

  return (
    <>
      <Header />
      <Hero onOpenCartilha={openCartilhaModal} />
      <ProblemContext />
      <Solution />
      <Simulator />
      <Guide onOpenCartilha={openCartilhaModal} />
      <TechTransfer />
      <Sponsors />
      <PolicyPaper onOpenCartilha={openCartilhaModal} />
      <Timeline />
      
      <CartilhaModal isOpen={isModalOpen} onClose={closeCartilhaModal} />

      <footer style={{ background: 'var(--color-forest-dark)', padding: '2.5rem 0', textAlign: 'center', borderTop: '1px solid rgba(110, 231, 165, 0.2)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-white)' }}>
            Coordenador e Desenvolvedor: <span style={{ color: 'var(--color-forest-accent)' }}>Dr. Edimilson Cavalcante da Fonseca</span>
          </p>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-gray-200)' }}>
            E-mail: <a href="mailto:edimilson@ifam.edu.br" style={{ color: 'var(--color-forest-accent)', textDecoration: 'none', fontWeight: 600 }}>edimilson@ifam.edu.br</a>
          </p>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)' }}>
            © 2026 IFAM - Instituto Federal do Amazonas | Protótipo Demonstrativo Exclusivo para o Edital iCS
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
