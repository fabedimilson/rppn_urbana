import React from 'react';
import { Briefcase, Microscope, Target } from 'lucide-react';

export default function Sponsors() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-gray-900)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="text-gradient">Seja um Patrocinador & Invista em P&D</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-gray-200)' }}>
            Uma oportunidade única para empresas de tecnologia investirem recursos da Lei da Informática (e outros mecanismos) em inovação ambiental e PD&I.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Briefcase color="var(--color-gold)" size={32} style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Recursos da Lei da Informática</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-200)' }}>
              Empresas do Polo Industrial de Manaus podem direcionar obrigações de P&D para o desenvolvimento e aprimoramento deste simulador e tecnologias associadas.
            </p>
          </div>

          <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Microscope color="var(--color-forest-accent)" size={32} style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Pesquisa Aplicada (IFAM)</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-200)' }}>
              Financie o avanço metodológico para valoração de serviços ecossistêmicos urbanos, criando métricas validadas cientificamente.
            </p>
          </div>

          <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Target color="#60a5fa" size={32} style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Fomento Direto a Novas RPPNs</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-200)' }}>
              Invista diretamente em um fundo que viabiliza o Plano de Manejo para proprietários que desejam criar novas reservas urbanas.
            </p>
          </div>

        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button className="btn btn-primary">Quero Ser Patrocinador</button>
        </div>
      </div>
    </section>
  );
}
