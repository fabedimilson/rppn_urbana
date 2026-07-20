import React, { useState } from 'react';
import { Calculator, Trees, Coins, Activity } from 'lucide-react';

export default function Simulator() {
  const [area, setArea] = useState(5); // em hectares
  const [conservacao, setConservacao] = useState(80); // porcentagem
  
  // Cálculos simplificados (demonstrativos)
  const areaConservada = (area * (conservacao / 100)).toFixed(1);
  const isencaoIptu = (areaConservada * 1500).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const psaPotencial = (areaConservada * 850).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const carbonoRetido = (areaConservada * 120).toFixed(0);

  return (
    <section id="simulador" className="section" style={{ backgroundColor: 'var(--color-gray-900)', position: 'relative', paddingTop: '80px', paddingBottom: '2rem' }}>
      
      {/* Elemento de background decorativo */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(110,231,165,0.1) 0%, rgba(0,0,0,0) 70%)', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="glass-panel simulator-layout" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.1fr', 
          gap: '1.5rem', 
          padding: '1.75rem 2rem', 
          background: 'rgba(19, 85, 46, 0.3)',
          border: '1px solid rgba(110, 231, 165, 0.25)'
        }}>
          
          {/* Controles do Simulador */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Calculator color="var(--color-forest-accent)" size={22} />
                <h3 style={{ fontSize: '1.3rem', margin: 0, color: 'var(--color-gold)' }}>Parâmetros da Propriedade</h3>
              </div>
              
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <label style={{ fontWeight: 600, fontSize: '0.95rem' }}>Área Total do Lote (Hectares)</label>
                  <span style={{ color: 'var(--color-forest-accent)', fontWeight: 700, fontSize: '0.95rem' }}>{area} ha</span>
                </div>
                <input 
                  type="range" 
                  className="range-slider"
                  min="1" 
                  max="50" 
                  step="0.5" 
                  value={area} 
                  onChange={(e) => setArea(e.target.value)} 
                  style={{ margin: '0.4rem 0' }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <label style={{ fontWeight: 600, fontSize: '0.95rem' }}>Qualidade de Conservação (%)</label>
                  <span style={{ color: 'var(--color-forest-accent)', fontWeight: 700, fontSize: '0.95rem' }}>{conservacao}%</span>
                </div>
                <input 
                  type="range" 
                  className="range-slider"
                  min="10" 
                  max="100" 
                  step="5" 
                  value={conservacao} 
                  onChange={(e) => setConservacao(e.target.value)} 
                  style={{ margin: '0.4rem 0' }}
                />
              </div>
            </div>

            <div style={{ padding: '0.85rem 1rem', background: 'rgba(0,0,0,0.35)', borderRadius: '10px', fontSize: '0.8rem', color: 'var(--color-gray-200)', textAlign: 'justify', lineHeight: '1.45', border: '1px solid rgba(255,255,255,0.05)' }}>
              * Os valores apresentados são simulações demonstrativas. Para a avaliação real da propriedade, será necessário um <strong>estudo técnico-científico</strong> completo. Este estudo visa incluir outras vantagens econômicas fundamentais além de IPTU e serviços ambientais, englobando também potencial para pesquisas aplicadas, ecoturismo, projetos de inovação, e acesso a fundos e incentivos adicionais.
            </div>
          </div>

          {/* Resultados */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
            
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Trees color="var(--color-forest-accent)" size={20} style={{ marginBottom: '0.4rem' }} />
              <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-200)', marginBottom: '0.2rem' }}>Área Efetiva (Conservada)</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-white)' }}>{areaConservada} ha</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Activity color="#60a5fa" size={20} style={{ marginBottom: '0.4rem' }} />
              <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-200)', marginBottom: '0.2rem' }}>Carbono Retido (Est)</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-white)' }}>{carbonoRetido} ton</div>
            </div>

            <div style={{ background: 'rgba(245,158,11,0.1)', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(245,158,11,0.3)', gridColumn: '1 / -1' }}>
              <Coins color="var(--color-gold)" size={20} style={{ marginBottom: '0.4rem' }} />
              <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-200)', marginBottom: '0.2rem' }}>Potencial Isenção IPTU Verde (Anual)</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-gold)' }}>{isencaoIptu}</div>
            </div>

            <div style={{ background: 'rgba(110,231,165,0.1)', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(110,231,165,0.3)', gridColumn: '1 / -1' }}>
              <Coins color="var(--color-forest-accent)" size={20} style={{ marginBottom: '0.4rem' }} />
              <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-200)', marginBottom: '0.2rem' }}>Pagamento por Serviços Ambientais - PSA (Anual)</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-forest-accent)' }}>{psaPotencial}</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
