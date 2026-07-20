import React from 'react';
import { Network, FileCode, Users } from 'lucide-react';

export default function TechTransfer() {
  return (
    <section id="prefeituras" className="section" style={{ backgroundColor: 'var(--color-forest-main)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--color-white)' }}>Transferência de Tecnologia (IFAM)</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.8)' }}>
            O IFAM garante a transferência irrestrita do código-fonte e da metodologia para prefeituras que desejam replicar este modelo de governança climática.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          
          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
            <FileCode color="var(--color-forest-accent)" size={48} style={{ margin: '0 auto 1.5rem auto' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Open Source para Governos</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
              Código do Dashboard e Simulador disponível para adaptação em outras cidades da Amazônia Legal.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
            <Network color="var(--color-gold)" size={48} style={{ margin: '0 auto 1.5rem auto' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Escalabilidade</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
              Arquitetura em nuvem pronta para ser implementada, reduzindo drasticamente os custos de TI para outros municípios.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
            <Users color="#60a5fa" size={48} style={{ margin: '0 auto 1.5rem auto' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Capacitação Técnica</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
              A equipe do IFAM oferece suporte na calibragem dos algoritmos tributários para a realidade da sua prefeitura.
            </p>
          </div>

        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button className="btn btn-outline" style={{ borderColor: 'var(--color-white)', color: 'var(--color-white)' }}>
            Prefeituras: Agende uma Demonstração
          </button>
        </div>
      </div>
    </section>
  );
}
