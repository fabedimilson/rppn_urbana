import React from 'react';
import { FileText, Download } from 'lucide-react';

export default function PolicyPaper() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-forest-dark)', padding: '4rem 0' }}>
      <div className="container">
        <div className="glass-panel policy-paper-layout" style={{ 
          padding: '3rem', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
          background: 'linear-gradient(135deg, rgba(110,231,165,0.1) 0%, rgba(19,85,46,0.4) 100%)',
          border: '1px solid rgba(110,231,165,0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flex: 1, minWidth: '300px' }}>
            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '16px' }}>
              <FileText color="var(--color-white)" size={48} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--color-white)' }}>
                Policy Paper: Finanças Públicas e Adaptação Climática
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                Documento estratégico focado no aprimoramento regulatório para modernização das leis municipais do IPTU Verde e PSA Urbano em Manaus.
              </p>
            </div>
          </div>
          
          <div>
            <button className="btn btn-outline" style={{ borderColor: 'var(--color-forest-accent)', color: 'var(--color-forest-accent)' }} disabled>
              <Download size={20} /> Em Breve (Fase 3)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
