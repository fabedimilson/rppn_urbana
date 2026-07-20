import React from 'react';
import { Lightbulb, Layers, TrendingUp } from 'lucide-react';

export default function Solution() {
  return (
    <section id="solucao" className="section" style={{ backgroundColor: 'var(--color-forest-main)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--color-white)' }}>Nossa Solução & Proposta</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)' }}>
            Uma plataforma sinérgica que articula SEMMAS, proprietários privados e o IFAM, mitigando incertezas e valorizando a conservação perpétua.
          </p>
        </div>

        <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1rem', background: 'var(--color-forest-dark)', borderRadius: '12px', height: 'fit-content' }}>
                <Lightbulb color="var(--color-gold)" size={28} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Valoração Microeconômica</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                  Um algoritmo robusto que converte parâmetros tributários locais e indicadores ecológicos em métricas custo-efetivas de fácil uso, atenuando o risco econômico percebido pelo mercado imobiliário.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1rem', background: 'var(--color-forest-dark)', borderRadius: '12px', height: 'fit-content' }}>
                <Layers color="var(--color-forest-accent)" size={28} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Dashboard de Governança</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                  Apoio à decisão para o município através da espacialização do retorno ecológico por real renunciado. Justiça fiscal com base em dados de alta resolução.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ padding: '1rem', background: 'var(--color-forest-dark)', borderRadius: '12px', height: 'fit-content' }}>
                <TrendingUp color="#60a5fa" size={28} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Simulador Econômico</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                  Uma ferramenta autônoma onde o cidadão insere os dados do seu lote e visualiza imediatamente a atratividade financeira incremental de criar uma RPPN.
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-forest-accent)' }}>
              Inovação em Finanças Públicas
            </h3>
            <p style={{ marginBottom: '2rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)' }}>
              Traduzimos leis passivas em ferramentas digitais utilizáveis. Conciliamos desenvolvimento urbano, resiliência hídrica e governança climática.
            </p>
            <div style={{ display: 'inline-block', padding: '1rem 2rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', background: 'rgba(7, 42, 21, 0.4)' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-gold)' }}>IFAM + SEMMAS</div>
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Parceria Estratégica</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
