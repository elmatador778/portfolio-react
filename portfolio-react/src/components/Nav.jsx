import { pages, CV_PATH } from '../data/portfolioData';

export default function Nav({ page, goTo }) {
  return (
    <>
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: '#000000', height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: 980, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 22px', boxSizing: 'border-box' }}>
          <button onClick={() => goTo('accueil')} style={navBtnStyle}>Tsiky A.</button>
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            <button onClick={() => goTo('experience')} style={navLinkStyle}>Expérience</button>
            <button onClick={() => goTo('projets')} style={navLinkStyle}>Projets</button>
            <button onClick={() => goTo('competences')} style={navLinkStyle}>Compétences</button>
            <button onClick={() => goTo('contact')} style={navLinkStyle}>Contact</button>
          </div>
        </div>
      </nav>
      <div style={{ position: 'sticky', top: 44, zIndex: 49, background: 'rgba(245,245,247,0.8)', backdropFilter: 'saturate(180%) blur(20px)', WebkitBackdropFilter: 'saturate(180%) blur(20px)', height: 52, display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ width: '100%', maxWidth: 980, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 22px', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: 21, fontWeight: 600, letterSpacing: '0.231px', color: '#1d1d1f' }}>Portfolio</span>
            {pages.map((pg) => (
              <button
                key={pg.id}
                onClick={() => goTo(pg.id)}
                style={pg.id === page ? pageTabActiveStyle : pageTabInactiveStyle}
              >
                {pg.label}
              </button>
            ))}
          </div>
          <a href={CV_PATH} download style={cvBtnStyle}>Télécharger le CV</a>
        </div>
      </div>
    </>
  );
}

const navBtnStyle = { background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit', color: '#ffffff', fontSize: 14, fontWeight: 600, letterSpacing: '-0.12px' };
const navLinkStyle = { background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit', color: '#ffffff', fontSize: 12, letterSpacing: '-0.12px' };
const pageTabBase = { background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit', fontSize: 14, letterSpacing: '-0.224px' };
const pageTabActiveStyle = { ...pageTabBase, color: '#0066cc', fontWeight: 600 };
const pageTabInactiveStyle = { ...pageTabBase, color: '#1d1d1f', fontWeight: 400 };
const cvBtnStyle = { background: '#0066cc', color: '#ffffff', fontSize: 14, letterSpacing: '-0.224px', padding: '8px 18px', borderRadius: 9999, textDecoration: 'none' };
