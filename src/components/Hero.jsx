import React from 'react';
import { ArrowRight, Leaf, Shield, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '60px', /* Reduced padding */
      paddingBottom: '80px'
    }}>
      {/* Background Video Layer with overflow hidden to clip the scaled video */}
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
            transform: 'scale(1.15)'
          }}
        >
          <source src="/Crie_um_video_a_partir_dessa_i.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay for Readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(7, 42, 21, 0.95) 0%, rgba(7, 42, 21, 0.7) 50%, rgba(7, 42, 21, 0.3) 100%)'
        }} />
      </div>

      <div className="container animate-fade-in" style={{ width: '100%', zIndex: 1 }}>
        <div style={{ maxWidth: '800px', paddingRight: '1rem' }}>
          <div className="hero-tag" style={{ 
            display: 'inline-block',
            padding: '0.4rem 1rem', 
            background: 'rgba(110, 231, 165, 0.1)',
            border: '1px solid rgba(110, 231, 165, 0.3)',
            borderRadius: '9999px',
            color: 'var(--color-forest-accent)',
            fontWeight: 600,
            marginBottom: '0.75rem',
            fontSize: '0.85rem',
            lineHeight: '1.4'
          }}>
            🌱 Portal Demonstrativo Exclusivo • Edital de Clima e Economia do iCS
          </div>
          
          <h1 style={{ marginBottom: '0.75rem', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
            Dashboard e <span className="text-gradient">Simulador Econômico</span> para RPPNs Urbanas
          </h1>
          
          <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem', maxWidth: '600px', color: 'var(--color-gray-100)' }}>
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

          <div className="hero-features" style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
                <Shield color="var(--color-forest-accent)" size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Incentivo Fiscal</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-gray-200)' }}>IPTU Verde & PSA</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
                <Heart color="var(--color-forest-accent)" size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Vida Melhor</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-gray-200)' }}>Resiliência Climática</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Logo relative to the Hero Section */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '10px 15px',
        borderRadius: '8px',
        border: '1px solid rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        zIndex: 10
      }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: 'var(--color-forest-main)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800, marginBottom: '2px' }}>Submetido por:</span>
          <img src="/cmc-horiz-cor.png" alt="Logo IFAM" style={{ height: '24px', objectFit: 'contain' }} />
        </div>
      </div>
    </section>
  );
}
