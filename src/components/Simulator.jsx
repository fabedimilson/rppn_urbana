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
    <section id="simulador" className="section" style={{ backgroundColor: 'var(--color-gray-900)', position: 'relative' }}>
      
      {/* Elemento de background decorativo */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(110,231,165,0.1) 0%, rgba(0,0,0,0) 70%)', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', background: 'rgba(110,231,165,0.1)', borderRadius: '50%', marginBottom: '1rem' }}>
            <Calculator color="var(--color-forest-accent)" size={32} />
          </div>
          <h2 style={{ color: 'var(--color-white)' }}>Simulador Econômico RPPN</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-gray-200)' }}>
            Descubra o potencial financeiro e ambiental de transformar sua propriedade em uma Reserva Particular do Patrimônio Natural.
          </p>
        </div>

        <div className="glass-panel simulator-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '2rem', padding: '3rem', background: 'rgba(19, 85, 46, 0.3)' }}>
          
          {/* Controles do Simulador */}
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--color-gold)' }}>Parâmetros da Propriedade</h3>
            
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontWeight: 600 }}>Área Total do Lote (Hectares)</label>
                <span style={{ color: 'var(--color-forest-accent)', fontWeight: 700 }}>{area} ha</span>
              </div>
              <input 
                type="range" 
                className="range-slider"
                min="1" 
                max="50" 
                step="0.5" 
                value={area} 
                onChange={(e) => setArea(e.target.value)} 
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontWeight: 600 }}>Qualidade de Conservação (%)</label>
                <span style={{ color: 'var(--color-forest-accent)', fontWeight: 700 }}>{conservacao}%</span>
              </div>
              <input 
                type="range" 
                className="range-slider"
                min="10" 
                max="100" 
                step="5" 
                value={conservacao} 
                onChange={(e) => setConservacao(e.target.value)} 
              />
            </div>

            <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--color-gray-200)', textAlign: 'justify' }}>
              * Os valores apresentados são simulações demonstrativas. Para a avaliação real da propriedade, será necessário um <strong>estudo técnico-científico</strong> completo. Este estudo visa incluir outras vantagens econômicas fundamentais além de IPTU e serviços ambientais, englobando também potencial para pesquisas aplicadas, ecoturismo, projetos de inovação, e acesso a fundos e incentivos adicionais.
            </div>
          </div>

          {/* Resultados */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Trees color="var(--color-forest-accent)" size={24} style={{ marginBottom: '1rem' }} />
              <div style={{ fontSize: '0.9rem', color: 'var(--color-gray-200)', marginBottom: '0.5rem' }}>Área Efetiva (Conservada)</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-white)' }}>{areaConservada} ha</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Activity color="#60a5fa" size={24} style={{ marginBottom: '1rem' }} />
              <div style={{ fontSize: '0.9rem', color: 'var(--color-gray-200)', marginBottom: '0.5rem' }}>Carbono Retido (Est)</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-white)' }}>{carbonoRetido} ton</div>
            </div>

            <div style={{ background: 'rgba(245,158,11,0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(245,158,11,0.3)', gridColumn: '1 / -1' }}>
              <Coins color="var(--color-gold)" size={24} style={{ marginBottom: '1rem' }} />
              <div style={{ fontSize: '0.9rem', color: 'var(--color-gray-200)', marginBottom: '0.5rem' }}>Potencial Isenção IPTU Verde (Anual)</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-gold)' }}>{isencaoIptu}</div>
            </div>

            <div style={{ background: 'rgba(110,231,165,0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(110,231,165,0.3)', gridColumn: '1 / -1' }}>
              <Coins color="var(--color-forest-accent)" size={24} style={{ marginBottom: '1rem' }} />
              <div style={{ fontSize: '0.9rem', color: 'var(--color-gray-200)', marginBottom: '0.5rem' }}>Pagamento por Serviços Ambientais - PSA (Anual)</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-forest-accent)' }}>{psaPotencial}</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
