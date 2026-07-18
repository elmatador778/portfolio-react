import ChromaticFluid from '../ChromaticFluid';
import { CV_PATH } from '../../data/portfolioData';

export default function HeroSection({ goTo }) {
  return (
    <section id="top" style={{ background: '#000000' }}>
      <ChromaticFluid height="auto">
        <div style={{ padding: '120px 22px 110px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 12px', fontSize: 21, fontWeight: 600, letterSpacing: '0.231px', color: '#2997ff' }}>
            Ingénieur systèmes embarqués, CESI Toulouse
          </p>
          <h1 style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 56, fontWeight: 600, lineHeight: 1.07, letterSpacing: '-0.28px', color: '#ffffff' }}>
            Tsiky Andrianarisata.
          </h1>
          <p style={{ maxWidth: 660, margin: '24px auto 0', fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 28, fontWeight: 400, lineHeight: 1.14, letterSpacing: '0.196px', color: '#cccccc' }}>
            Double compétence hardware et software. Électronique, microcontrôleurs, Python et C++.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32 }}>
            <a href={CV_PATH} download style={primaryPillStyle}>Télécharger le CV</a>
            <button onClick={() => goTo('contact')} style={outlinePillStyle}>Me contacter</button>
          </div>
          <p style={{ margin: '40px 0 0', fontSize: 14, letterSpacing: '-0.224px', color: '#cccccc' }}>
            Recherche alternance · disponible septembre 2026 · aéronautique, spatial, défense
          </p>
        </div>
      </ChromaticFluid>
    </section>
  );
}

const primaryPillStyle = { background: '#0066cc', color: '#ffffff', fontSize: 17, letterSpacing: '-0.374px', padding: '11px 22px', borderRadius: 9999, textDecoration: 'none' };
const outlinePillStyle = { fontFamily: 'inherit', cursor: 'pointer', background: 'transparent', color: '#2997ff', border: '1px solid #2997ff', fontSize: 17, letterSpacing: '-0.374px', padding: '11px 22px', borderRadius: 9999 };
