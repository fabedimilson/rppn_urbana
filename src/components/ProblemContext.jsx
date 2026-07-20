import React from 'react';
import { AlertTriangle, Map, Droplets } from 'lucide-react';

export default function ProblemContext() {
  return (
    <section id="contexto" className="section" style={{ backgroundColor: 'var(--color-forest-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="text-gradient">O Problema e o Contexto</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Manaus enfrenta desafios climáticos e urbanos sem precedentes. A conservação de áreas verdes privadas é essencial, mas esbarra em barreiras econômicas.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ 
              width: '50px', height: '50px', borderRadius: '50%', 
              background: 'rgba(245, 158, 11, 0.2)', display: 'flex', 
              alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' 
            }}>
              <AlertTriangle color="var(--color-gold)" size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem' }}>Ilhas de Calor Urbanas</h3>
            <p style={{ fontSize: '0.95rem' }}>
              A conversão do solo promovida pelo mercado imobiliário gera sobrecargas crônicas no sistema de macro-drenagem e aumenta drasticamente as temperaturas na cidade.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ 
              width: '50px', height: '50px', borderRadius: '50%', 
              background: 'rgba(110, 231, 165, 0.2)', display: 'flex', 
              alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' 
            }}>
              <Map color="var(--color-forest-accent)" size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem' }}>Assimetria de Informações</h3>
            <p style={{ fontSize: '0.95rem' }}>
              Apesar da existência de leis como o IPTU Verde, a falta de ferramentas que quantifiquem financeiramente o benefício da preservação impede a adesão dos proprietários.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ 
              width: '50px', height: '50px', borderRadius: '50%', 
              background: 'rgba(147, 197, 253, 0.2)', display: 'flex', 
              alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' 
            }}>
              <Droplets color="#93c5fd" size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem' }}>Desvalorização dos Serviços Ambientais</h3>
            <p style={{ fontSize: '0.95rem' }}>
              Uma área com nascente e biodiversidade recebe o mesmo incentivo que um lote degradado. É preciso precificar a heterogeneidade ecológica.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
