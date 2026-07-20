import React from 'react';
import { Leaf } from 'lucide-react';

export default function Header() {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      padding: '1rem 0',
      background: 'rgba(7, 42, 21, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(110, 231, 165, 0.1)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Leaf color="var(--color-forest-accent)" size={32} />
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-white)' }}>
            RPPNs Urbanas
          </span>
        </div>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="#solucao" style={{ color: 'var(--color-gray-200)', textDecoration: 'none', fontWeight: 600 }}>Solução</a>
          <a href="#simulador" style={{ color: 'var(--color-gray-200)', textDecoration: 'none', fontWeight: 600 }}>Simulador</a>
          <a href="#cartilha" style={{ color: 'var(--color-gray-200)', textDecoration: 'none', fontWeight: 600 }}>Cartilha</a>
          <a href="#prefeituras" style={{ color: 'var(--color-gray-200)', textDecoration: 'none', fontWeight: 600 }}>Prefeituras</a>
        </nav>
        <div>
          <span style={{ 
            fontSize: '0.8rem', 
            background: 'var(--color-gold)', 
            color: 'var(--color-gray-900)', 
            padding: '0.2rem 0.8rem', 
            borderRadius: '9999px',
            fontWeight: 800,
            textTransform: 'uppercase'
          }}>
            Edital iCS 2026
          </span>
        </div>
      </div>
    </header>
  );
}
