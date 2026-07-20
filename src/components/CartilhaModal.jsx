import React from 'react';
import { BookOpen, Calendar, X, Sparkles, FileCheck } from 'lucide-react';

export default function CartilhaModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      background: 'rgba(7, 42, 21, 0.85)',
      backdropFilter: 'blur(10px)',
      animation: 'fadeIn 0.3s ease'
    }} onClick={onClose}>
      <div style={{
        position: 'relative',
        maxWidth: '520px',
        width: '100%',
        background: 'linear-gradient(135deg, rgba(19, 85, 46, 0.95) 0%, rgba(7, 42, 21, 0.98) 100%)',
        border: '1px solid rgba(110, 231, 165, 0.4)',
        borderRadius: '24px',
        padding: '2.5rem 2rem',
        boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(110, 231, 165, 0.2)',
        color: '#ffffff',
        textAlign: 'center'
      }} onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '1.25rem',
          right: '1.25rem',
          background: 'rgba(255,255,255,0.1)',
          border: 'none',
          color: 'var(--color-gray-200)',
          borderRadius: '50%',
          width: '36px',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}>
          <X size={20} />
        </button>

        {/* Header Icon */}
        <div style={{
          width: '70px',
          height: '70px',
          borderRadius: '20px',
          background: 'rgba(110, 231, 165, 0.15)',
          border: '1px solid rgba(110, 231, 165, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem auto'
        }}>
          <BookOpen color="var(--color-forest-accent)" size={36} />
        </div>

        {/* Tag / Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.4rem 1rem',
          background: 'rgba(245, 158, 11, 0.15)',
          border: '1px solid rgba(245, 158, 11, 0.4)',
          borderRadius: '9999px',
          color: 'var(--color-gold)',
          fontWeight: 700,
          fontSize: '0.85rem',
          marginBottom: '1.25rem'
        }}>
          <Calendar size={16} /> Previsão de Publicação: Agosto / 2028
        </div>

        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#ffffff' }}>
          Cartilha RPPNs Urbanas & Guia Técnico
        </h3>

        <p style={{ fontSize: '1rem', color: 'var(--color-gray-200)', lineHeight: '1.6', marginBottom: '1.75rem', textAlign: 'center' }}>
          A publicação oficial contendo a metodologia científico-técnica de valoração de ecossistemas, diretrizes de PSA e minuta do IPTU Verde está em fase final de elaboração e homologação para o <strong>Edital iCS 2026</strong>.
        </p>

        <div style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '16px',
          padding: '1rem',
          border: '1px solid rgba(255,255,255,0.1)',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          textAlign: 'left'
        }}>
          <FileCheck color="var(--color-forest-accent)" size={24} style={{ flexShrink: 0 }} />
          <span style={{ fontSize: '0.85rem', color: 'var(--color-gray-100)' }}>
            Estudo de caso e valoração para a cidade de Manaus e demais capitais amazônicas.
          </span>
        </div>

        <button className="btn btn-primary" onClick={onClose} style={{ width: '100%', padding: '0.85rem' }}>
          <Sparkles size={18} /> Acompanhar Atualizações
        </button>
      </div>
    </div>
  );
}
