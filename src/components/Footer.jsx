import { Link } from 'react-router-dom';
import { EMAIL, PHONE_DISPLAY, CV_PATH } from '../data/portfolioData';

export default function Footer({ goTo }) {
  return (
    <footer style={{ background: '#f5f5f7', borderTop: '1px solid #e0e0e0', padding: '64px 22px 120px' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 32 }}>
        <div>
          <h3 style={headingStyle}>Navigation</h3>
          {[
            ['Expérience', 'experience'],
            ['Projets', 'projets'],
            ['Compétences', 'competences'],
            ['Contact', 'contact'],
          ].map(([label, id]) => (
            <p key={id} style={{ margin: 0, fontSize: 15, lineHeight: 2.1 }}>
              <button onClick={() => goTo(id)} style={linkBtnStyle}>{label}</button>
            </p>
          ))}
        </div>
        <div>
          <h3 style={headingStyle}>Contact</h3>
          <p style={textLineStyle}><a href={`mailto:${EMAIL}`} style={{ color: '#333333' }}>{EMAIL}</a></p>
          <p style={textLineStyle}>{PHONE_DISPLAY}</p>
          <p style={textLineStyle}>Toulouse, France</p>
        </div>
        <div>
          <h3 style={headingStyle}>Documents</h3>
          <p style={textLineStyle}><a href={CV_PATH} download>CV (PDF)</a></p>
          <p style={textLineStyle}><Link to="/legal">Mentions légales</Link></p>
        </div>
      </div>
      <div style={{ maxWidth: 980, margin: '40px auto 0', paddingTop: 16, borderTop: '1px solid #e0e0e0', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <p style={fineprintStyle}>Tsiky Andrianarisata · Toulouse, France · Permis B</p>
        <p style={fineprintStyle}>Mis à jour le 17 juillet 2026</p>
      </div>
    </footer>
  );
}

const headingStyle = { margin: '0 0 8px', fontSize: 14, fontWeight: 600, letterSpacing: '-0.224px', color: '#1d1d1f' };
const linkBtnStyle = { background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit', fontSize: 15, color: '#333333' };
const textLineStyle = { margin: 0, fontSize: 15, lineHeight: 2.1, color: '#333333' };
const fineprintStyle = { margin: 0, fontSize: 12, lineHeight: 1.3, letterSpacing: '-0.12px', color: '#7a7a7a' };
