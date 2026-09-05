import { projetsData, projFilters, pedaleGallery, robotGallery } from '../../data/portfolioData';

export default function ProjectsSection({ filtre, setFiltre }) {
  const projets = filtre === 'Tous' ? projetsData : projetsData.filter((p) => p.cat === filtre);

  return (
    <section id="projets" style={{ background: '#ffffff', padding: '96px 22px', textAlign: 'center' }}>
      <h2 style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: '#1d1d1f' }}>
        Projets techniques.
      </h2>
      <p style={{ margin: '14px 0 0', fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 28, fontWeight: 400, lineHeight: 1.14, letterSpacing: '0.196px', color: '#1d1d1f' }}>
        Conçus, câblés, programmés.
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
        {projFilters.map((label) => (
          <button key={label} onClick={() => setFiltre(label)} style={label === filtre ? filterActiveStyle : filterInactiveStyle}>
            {label}
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, maxWidth: 980, margin: '40px auto 0', textAlign: 'left' }}>
        {projets.map((p) => (
          <div key={p.titre} style={{ background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: 18, padding: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 8, overflow: 'hidden' }}>
            <div style={{ width: '100%', aspectRatio: '16/10', margin: '0 0 8px' }}>
              <img src={p.imgSrc} alt={p.titre} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <span style={{ padding: '0 24px', fontSize: 12, fontWeight: 600, letterSpacing: '-0.12px', color: '#0066cc', textTransform: 'uppercase' }}>{p.tag}</span>
            <h3 style={{ margin: 0, padding: '0 24px', fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px', color: '#1d1d1f' }}>{p.titre}</h3>
            <p style={{ margin: 0, padding: '0 24px', fontSize: 14, lineHeight: 1.43, letterSpacing: '-0.224px', color: '#333333' }}>{p.desc}</p>
            {p.imgCredit && (
              <p style={{ margin: 0, padding: '0 24px', fontSize: 11, color: '#a0a0a0' }}>
                <a href={p.imgCreditHref} target="_blank" rel="noopener noreferrer" style={{ color: '#a0a0a0' }}>{p.imgCredit}</a>
              </p>
            )}
          </div>
        ))}
      </div>

      <h3 style={{ margin: '72px 0 0', fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 28, fontWeight: 600, lineHeight: 1.14, color: '#1d1d1f' }}>
        Pédale Overdrive-Distorsion : de la simulation au prototype.
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 24, maxWidth: 980, margin: '32px auto 0' }}>
        {pedaleGallery.map((im) => (
          <figure key={im.src} style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: 12, border: '1px solid #e0e0e0', overflow: 'hidden' }}>
              <img src={im.src} alt={im.cap} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
            </div>
            <figcaption style={{ fontSize: 12, letterSpacing: '-0.12px', color: '#7a7a7a', textAlign: 'center' }}>{im.cap}</figcaption>
          </figure>
        ))}
      </div>

      <h3 style={{ margin: '72px 0 0', fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 28, fontWeight: 600, lineHeight: 1.14, color: '#1d1d1f' }}>
        Robot autonome : des composants au roulage.
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 24, maxWidth: 980, margin: '32px auto 0' }}>
        {robotGallery.map((im) => (
          <figure key={im.src} style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: 12, border: '1px solid #e0e0e0', overflow: 'hidden' }}>
              <img src={im.src} alt={im.cap} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <figcaption style={{ fontSize: 12, letterSpacing: '-0.12px', color: '#7a7a7a', textAlign: 'center' }}>
              {im.cap} · <a href={im.creditHref} target="_blank" rel="noopener noreferrer" style={{ color: '#7a7a7a' }}>{im.credit}</a>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

const filterBase = { fontFamily: 'inherit', fontSize: 14, letterSpacing: '-0.224px', padding: '10px 18px', borderRadius: 9999, cursor: 'pointer', background: '#ffffff', color: '#1d1d1f' };
const filterActiveStyle = { ...filterBase, border: '2px solid #0071e3', fontWeight: 600 };
const filterInactiveStyle = { ...filterBase, border: '1px solid #e0e0e0', fontWeight: 400 };
