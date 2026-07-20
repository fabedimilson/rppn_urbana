import React from 'react';
import { BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

export default function Guide() {
  const steps = [
    { title: "Manifestação de Interesse", desc: "Proprietário aciona a SEMMAS declarando interesse na criação da RPPN." },
    { title: "Simulação e Vistoria", desc: "Análise técnica in loco para valoração dos serviços ecossistêmicos." },
    { title: "Plano de Manejo", desc: "Desenvolvimento do plano de conservação e uso sustentável (ex: Ecoturismo)." },
    { title: "Decreto Municipal", desc: "Aprovação legal e oficialização da RPPN." },
    { title: "Acesso a Benefícios", desc: "Liberação de isenção de IPTU Verde e acesso ao PSA." },
  ];

  return (
    <section id="cartilha" className="section" style={{ backgroundColor: 'var(--color-forest-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <BookOpen color="var(--color-forest-accent)" size={40} style={{ margin: '0 auto 1rem auto' }} />
          <h2 className="text-gradient">Cartilha RPPN: O Caminho das Pedras</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-gray-200)' }}>
            Um guia prático e simplificado para transformar sua área verde em um ativo financeiro de impacto climático.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
          {steps.map((step, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', alignItems: 'center', padding: '1.5rem', gap: '1.5rem' }}>
              <div style={{ 
                width: '40px', height: '40px', borderRadius: '50%', 
                background: 'var(--color-forest-accent)', color: 'var(--color-forest-dark)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem'
              }}>
                {idx + 1}
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{step.title}</h4>
                <p style={{ color: 'var(--color-gray-200)', margin: 0, fontSize: '0.9rem' }}>{step.desc}</p>
              </div>
              <CheckCircle color="rgba(255,255,255,0.2)" size={24} />
            </div>
          ))}
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button className="btn btn-primary">
              Baixar Cartilha Completa (PDF) <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
