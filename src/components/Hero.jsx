import React from 'react';
import { ArrowRight, Leaf, Shield, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      paddingBottom: '40px'
    }}>
      {/* Background Video Layer */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: -2 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'bottom right' /* Anchors the video so the watermark is ALWAYS in the bottom right corner */
          }}
        >
          <source src="/Crie_um_video_a_partir_dessa_i.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay for Readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(7, 42, 21, 0.95) 0%, rgba(7, 42, 21, 0.7) 40%, rgba(7, 42, 21, 0.3) 100%)'
        }} />
      </div>

      <div className="container animate-fade-in" style={{ width: '100%', zIndex: 1 }}>
        <div style={{ maxWidth: '800px', marginLeft: '5%', paddingRight: '1rem' }}>
          <div className="hero-tag" style={{ 
            display: 'inline-block',
            padding: '0.5rem 1rem', 
            background: 'rgba(110, 231, 165, 0.1)',
            border: '1px solid rgba(110, 231, 165, 0.3)',
            borderRadius: '9999px',
            color: 'var(--color-forest-accent)',
            fontWeight: 600,
            marginBottom: '1.5rem',
            fontSize: '0.9rem',
            lineHeight: '1.4'
          }}>
            🌱 Portal Demonstrativo Exclusivo • Edital de Clima e Economia do iCS
          </div>
          
          <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Dashboard e <span className="text-gradient">Simulador Econômico</span> para RPPNs Urbanas
          </h1>
          
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '600px', color: 'var(--color-gray-100)' }}>
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

          <div className="hero-features" style={{ display: 'flex', gap: '2rem', marginTop: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <Shield color="var(--color-forest-accent)" size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Incentivo Fiscal</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-gray-200)' }}>IPTU Verde & PSA</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <Heart color="var(--color-forest-accent)" size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Vida Melhor</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-gray-200)' }}>Resiliência Climática</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Logo - Cover the watermark precisely */}
      <div style={{
        position: 'absolute',
        bottom: '15px',
        right: '15px',
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '12px 20px',
        borderRadius: '8px',
        border: '1px solid rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
        zIndex: 10,
        minWidth: '220px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: 'var(--color-forest-main)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800, marginBottom: '4px' }}>Submetido por:</span>
          <img src="/cmc-horiz-cor.png" alt="Logo IFAM" style={{ height: '30px', objectFit: 'contain' }} />
        </div>
      </div>
    </section>
  );
}
