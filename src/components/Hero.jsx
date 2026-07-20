import React from 'react';
import { ArrowRight, Shield, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '90px',
      paddingBottom: '70px',
      overflow: 'hidden'
    }}>
      {/* Background Video Layer */}
      <div style={{ position: 'absolute', inset: 0, zIndex: -2, overflow: 'hidden' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'bottom right'
          }}
        >
          <source src="/Crie_um_video_a_partir_dessa_i.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay for Readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(7, 42, 21, 0.95) 0%, rgba(7, 42, 21, 0.8) 50%, rgba(7, 42, 21, 0.4) 100%)'
        }} />
      </div>

      <div className="container animate-fade-in" style={{ width: '100%', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3rem',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Column: Text & CTA */}
          <div>
            <div className="hero-tag" style={{ 
              display: 'inline-block',
              padding: '0.4rem 1rem', 
              background: 'rgba(110, 231, 165, 0.1)',
              border: '1px solid rgba(110, 231, 165, 0.3)',
              borderRadius: '9999px',
              color: 'var(--color-forest-accent)',
              fontWeight: 600,
              marginBottom: '1.25rem',
              fontSize: '0.85rem',
              lineHeight: '1.4'
            }}>
              🌱 Portal Demonstrativo Exclusivo • Edital de Clima e Economia do iCS
            </div>
            
            <h1 style={{ marginBottom: '1.25rem', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: '1.15' }}>
              Dashboard e <span className="text-gradient">Simulador Econômico</span> para RPPNs Urbanas
            </h1>
            
            <p style={{ fontSize: '1.15rem', marginBottom: '2rem', color: 'var(--color-gray-100)', lineHeight: '1.6' }}>
              Transformando finanças públicas e incentivos fiscais em melhoria climática. Uma nova economia para uma vida melhor e mais verde nas cidades.
            </p>
            
            <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => document.getElementById('simulador').scrollIntoView({ behavior: 'smooth'})}>
                Acessar Simulador <ArrowRight size={20} />
              </button>
              <button className="btn btn-outline" onClick={() => document.getElementById('cartilha').scrollIntoView({ behavior: 'smooth'})}>
                Conhecer a Cartilha
              </button>
            </div>
          </div>

          {/* Right Column: Stacked Features Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '380px' }}>
            <div className="glass-card" style={{ 
              padding: '1.5rem', 
              background: 'rgba(255, 255, 255, 0.07)', 
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(110, 231, 165, 0.25)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
            }}>
              <div style={{ padding: '0.85rem', background: 'rgba(110, 231, 165, 0.15)', borderRadius: '12px', border: '1px solid rgba(110, 231, 165, 0.3)' }}>
                <Shield color="var(--color-forest-accent)" size={28} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.15rem', color: '#ffffff' }}>Incentivo Fiscal</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-gray-200)', marginTop: '0.2rem' }}>IPTU Verde & PSA</div>
              </div>
            </div>

            <div className="glass-card" style={{ 
              padding: '1.5rem', 
              background: 'rgba(255, 255, 255, 0.07)', 
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(110, 231, 165, 0.25)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
            }}>
              <div style={{ padding: '0.85rem', background: 'rgba(110, 231, 165, 0.15)', borderRadius: '12px', border: '1px solid rgba(110, 231, 165, 0.3)' }}>
                <Heart color="var(--color-forest-accent)" size={28} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.15rem', color: '#ffffff' }}>Vida Melhor</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-gray-200)', marginTop: '0.2rem' }}>Resiliência Climática</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Logo - Cover the Gemini watermark (raised higher up to bottom: 55px) */}
      <div style={{
        position: 'absolute',
        bottom: '55px',
        right: '25px',
        background: '#ffffff',
        padding: '12px 22px',
        borderRadius: '10px',
        border: '1px solid rgba(0,0,0,0.15)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
        zIndex: 10,
        minWidth: '220px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: 'var(--color-forest-main)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800, marginBottom: '4px' }}>Submetido por:</span>
          <img src="/cmc-horiz-cor.png" alt="Logo IFAM" style={{ height: '32px', objectFit: 'contain' }} />
        </div>
      </div>
    </section>
  );
}
