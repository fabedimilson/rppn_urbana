import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Timeline() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (idx) => {
    setExpanded(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const phases = [
    { 
      title: "Fase 1: Estruturação & Modelagem Paramétrica", 
      desc: "Modelagem paramétrica de atributos ecológicos vs tributários e inteligência econômica.", 
      time: "Meses 1 ao 6",
      subTasks: [
        "Revisão detalhada da bibliografia técnica e legislação ambiental municipal.",
        "Definição matemática dos indicadores de valoração ecológica e climática.",
        "Calibragem econômica dos parâmetros do IPTU Verde e PSA (Pagamento por Serviços Ambientais)."
      ]
    },
    { 
      title: "Fase 2: Desenvolvimento do Ecossistema Tecnológico", 
      desc: "Engenharia de interfaces digitais para governança climática e suporte à decisão.", 
      time: "Meses 7 ao 14",
      subTasks: [
        "Desenvolvimento do Dashboard Governamental para a SEMMAS (Back-end e Front-end).",
        "Construção do Simulador Econômico RPPN voltado aos proprietários privados.",
        "Integração de APIs com bases de dados espaciais (INPE, MapBiomas)."
      ]
    },
    { 
      title: "Fase 3: Validação Empírica (Pesquisa de Campo)", 
      desc: "Testes in loco, uso de tecnologias avançadas e certificação das métricas.", 
      time: "Meses 15 ao 20",
      subTasks: [
        "Levantamento aerofotogramétrico (operação de Drones) nas áreas piloto.",
        "Testes de usabilidade (UX/UI) do software com usuários-chave (gestores e donos de terras).",
        "Validação prática do modelo de cálculo utilizando a área piloto (ex: Iate Clube de Manaus)."
      ]
    },
    { 
      title: "Fase 4: Policy Paper & Transferência de Tecnologia", 
      desc: "Entrega do arcabouço normativo, lançamento e abertura do sistema para replicação.", 
      time: "Meses 21 ao 24",
      subTasks: [
        "Redação e consolidação técnica do Policy Paper: Finanças Públicas e Adaptação Climática.",
        "Workshop de lançamento oficial e apresentação aos stakeholders (Executivo, Legislativo, Sociedade).",
        "Liberação do Pacote Open Source de software para adesão de outras prefeituras da Amazônia."
      ]
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-forest-main)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--color-white)' }}>Linha do Tempo Estratégica (24 Meses)</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>Cronograma de execução das macro e micro atividades do projeto pelo IFAM.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          {/* Linha conectora */}
          <div style={{ position: 'absolute', left: '24px', top: 0, bottom: 0, width: '2px', background: 'rgba(255,255,255,0.2)' }} />

          {phases.map((phase, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '2rem', position: 'relative' }}>
              <div style={{ 
                width: '50px', height: '50px', borderRadius: '50%', 
                background: 'var(--color-forest-accent)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 'bold', color: 'var(--color-forest-dark)',
                zIndex: 1, flexShrink: 0
              }}>
                {idx + 1}
              </div>
              <div className="glass-card" style={{ padding: '1.5rem', flex: 1, transition: 'all 0.3s ease' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: 700, marginBottom: '0.5rem' }}>{phase.time}</div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-white)' }}>{phase.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, fontSize: '0.95rem' }}>{phase.desc}</p>
                  </div>
                  <button 
                    onClick={() => toggleExpand(idx)}
                    style={{ 
                      background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', 
                      borderRadius: '50%', width: '36px', height: '36px', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--color-white)', cursor: 'pointer', transition: 'all 0.2s'
                    }}
                  >
                    {expanded[idx] ? <Minus size={20} /> : <Plus size={20} />}
                  </button>
                </div>
                
                {/* Abas ramificadas / Subatividades */}
                {expanded[idx] && (
                  <div className="animate-fade-in" style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <h5 style={{ color: 'var(--color-forest-accent)', marginBottom: '1rem', fontSize: '1rem' }}>Macroatividades:</h5>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                      {phase.subTasks.map((task, tIdx) => (
                        <li key={tIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                          <div style={{ marginTop: '6px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-gold)', flexShrink: 0 }} />
                          <span style={{ color: 'var(--color-gray-100)', fontSize: '0.95rem', lineHeight: '1.5' }}>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
