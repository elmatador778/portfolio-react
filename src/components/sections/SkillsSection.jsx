import { skills } from '../../data/portfolioData';

export default function SkillsSection() {
  return (
    <section id="competences" style={{ background: '#f5f5f7', padding: '96px 22px' }}>
      <h2 style={{ margin: 0, textAlign: 'center', fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif", fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: '#1d1d1f' }}>
        Compétences.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 32, maxWidth: 980, margin: '56px auto 0' }}>
        {skills.map((s) => (
          <div key={s.titre}>
            <h3 style={{ margin: '0 0 8px', fontSize: 14, fontWeight: 600, letterSpacing: '-0.224px', color: '#1d1d1f' }}>{s.titre}</h3>
            {s.items.map((it) => (
              <p key={it} style={{ margin: 0, fontSize: 15, lineHeight: 2.1, letterSpacing: 0, color: '#333333' }}>{it}</p>
            ))}
          </div>
        ))}
      </div>
      <p style={{ maxWidth: 980, margin: '48px auto 0', textAlign: 'center', fontSize: 14, letterSpacing: '-0.224px', color: '#7a7a7a' }}>
        Français : langue maternelle · Anglais : B2 · Espagnol : B2 · Allemand : A2
      </p>
    </section>
  );
}
