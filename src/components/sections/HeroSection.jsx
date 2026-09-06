import { CV_PATH } from '../../data/portfolioData';

export default function HeroSection({ goTo }) {
  return (
    <section id="top" style={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'linear-gradient(135deg, #06101f 0%, #0a1d38 52%, #07101d 100%)' }}>
      <div aria-hidden="true" style={{ position: 'absolute', width: 560, height: 560, top: '-22%', left: '-8%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,113,227,0.34), rgba(0,113,227,0) 68%)', filter: 'blur(4px)' }} />
      <div aria-hidden="true" style={{ position: 'absolute', width: 520, height: 520, right: '-10%', bottom: '-28%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(41,151,255,0.26), rgba(41,151,255,0) 68%)', filter: 'blur(8px)' }} />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, opacity: 0.26, backgroundImage: 'linear-gradient(rgba(136,189,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(136,189,255,0.12) 1px, transparent 1px)', backgroundSize: '52px 52px', maskImage: 'linear-gradient(to bottom, transparent, black 24%, black 76%, transparent)' }} />

      <div className="hero-content" style={{ position: 'relative', zIndex: 1, width: 'min(940px, 100%)', margin: '0 auto', padding: '128px 22px 72px', textAlign: 'center' }}>
        <p style={{ margin: '0 0 16px', fontSize: 'clamp(15px, 1.5vw, 20px)', fontWeight: 600, letterSpacing: '0.1px', color: '#70b7ff' }}>
          Étudiant en Licence L2 EEA (CUPGE), Université Paul Sabatier
        </p>
        <h1 style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 'clamp(42px, 6vw, 72px)', fontWeight: 650, lineHeight: 1.02, letterSpacing: '-0.055em', color: '#ffffff', textShadow: '0 3px 24px rgba(0,0,0,0.32)' }}>
          Tsiky Andrianarisata.
        </h1>
        <p style={{ maxWidth: 700, margin: '26px auto 0', fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 'clamp(22px, 2.7vw, 32px)', fontWeight: 400, lineHeight: 1.18, letterSpacing: '-0.025em', color: '#d9e7f8' }}>
          Double compétence hardware et software. Électronique, microcontrôleurs, Python et C++.
        </p>
        <div className="hero-actions" style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 36 }}>
          <a href={CV_PATH} download style={primaryPillStyle}>Télécharger le CV <span aria-hidden="true">↓</span></a>
          <button onClick={() => goTo('contact')} style={outlinePillStyle}>Me contacter <span aria-hidden="true">→</span></button>
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, maxWidth: '100%', marginTop: 44, padding: '9px 13px', border: '1px solid rgba(181,218,255,0.2)', borderRadius: 999, background: 'rgba(8,24,46,0.46)', color: '#b7cce2', fontSize: 13, letterSpacing: '-0.12px' }}>
          <span aria-hidden="true" style={{ width: 7, height: 7, flex: 'none', borderRadius: '50%', background: '#43d69e', boxShadow: '0 0 12px #43d69e' }} />
          Licence L2 EEA · CUPGE · Toulouse · dès septembre 2026
        </div>
      </div>

      <style>{`
        @media (max-width: 520px) {
          .hero-content { padding-top: 112px !important; padding-bottom: 54px !important; }
          .hero-actions { flex-direction: column; align-items: center; }
          .hero-actions a, .hero-actions button { width: min(280px, 100%); justify-content: center; }
        }
      `}</style>
    </section>
  );
}

const primaryPillStyle = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#0071e3', color: '#ffffff', border: '1px solid #2997ff', boxShadow: '0 8px 20px rgba(0,113,227,0.25)', fontSize: 16, fontWeight: 600, letterSpacing: '-0.224px', padding: '12px 20px', borderRadius: 9999, textDecoration: 'none' };
const outlinePillStyle = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: 'inherit', cursor: 'pointer', background: 'rgba(8,24,46,0.5)', color: '#eef6ff', border: '1px solid rgba(181,218,255,0.45)', fontSize: 16, fontWeight: 500, letterSpacing: '-0.224px', padding: '12px 20px', borderRadius: 9999 };
