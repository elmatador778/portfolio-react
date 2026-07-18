import { formationCards, formationImages } from '../../data/portfolioData';

export default function FormationSection() {
  return (
    <section style={{ background: '#f5f5f7', padding: '96px 22px', textAlign: 'center' }}>
      <p style={{ margin: '0 0 10px', fontSize: 14, fontWeight: 600, letterSpacing: '-0.224px', color: '#7a7a7a', textTransform: 'uppercase' }}>Formation</p>
      <h2 style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: '#1d1d1f' }}>
        CESI École d'ingénieurs, Toulouse.
      </h2>
      <p style={{ margin: '14px auto 0', maxWidth: 640, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 24, fontWeight: 300, lineHeight: 1.5, color: '#1d1d1f' }}>
        Cycle préparatoire intégré, 2ᵉ année, spécialité Systèmes Électriques et Électroniques Embarqués (SEEE). Cycle ingénieur par alternance dès septembre 2026.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, maxWidth: 980, margin: '48px auto 0', textAlign: 'left' }}>
        {formationCards.map((c) => (
          <div key={c.titre} style={{ background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: 18, padding: 24 }}>
            <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px', color: '#1d1d1f' }}>{c.titre}</h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.43, letterSpacing: '-0.224px', color: '#333333' }}>{c.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24, maxWidth: 980, margin: '32px auto 0' }}>
        {formationImages.map((im) => (
          <figure key={im.src} style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ width: '100%', aspectRatio: '4/3' }}>
              <img src={im.src} alt={im.cap} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 18, display: 'block' }} />
            </div>
            <figcaption style={{ fontSize: 12, letterSpacing: '-0.12px', color: '#7a7a7a', textAlign: 'center' }}>{im.cap}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
