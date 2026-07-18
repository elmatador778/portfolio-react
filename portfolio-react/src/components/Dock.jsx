import { useEffect, useRef } from 'react';
import { CV_PATH } from '../data/portfolioData';

const icons = {
  accueil: <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />,
  experience: (
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </>
  ),
  formation: (
    <>
      <path d="M22 10 12 5 2 10l10 5 10-5z" />
      <path d="M6 12.5V17c0 1.2 2.7 3 6 3s6-1.8 6-3v-4.5" />
    </>
  ),
  projets: (
    <>
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M9 2v3" />
      <path d="M15 2v3" />
      <path d="M9 19v3" />
      <path d="M15 19v3" />
      <path d="M2 9h3" />
      <path d="M2 15h3" />
      <path d="M19 9h3" />
      <path d="M19 15h3" />
    </>
  ),
  competences: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
  contact: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
  cv: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
      <path d="M12 15V3" />
    </>
  ),
};

const navItems = [
  { id: 'accueil', label: 'Accueil', icon: icons.accueil },
  { id: 'experience', label: 'Expérience', icon: icons.experience },
  { id: 'formation', label: 'Formation', icon: icons.formation },
  { id: 'projets', label: 'Projets', icon: icons.projets },
  { id: 'competences', label: 'Compétences', icon: icons.competences },
  { id: 'contact', label: 'Contact', icon: icons.contact },
];

const DOCK_MAGNIFICATION = 68;

export default function Dock({ page, goTo }) {
  const dockRefs = useRef([]);
  const tipRefs = useRef([]);
  const mouseX = useRef(Infinity);
  const cur = useRef([]);
  const vel = useRef([]);

  useEffect(() => {
    let rafId;
    const tick = () => {
      const dist = 140;
      const base = window.innerWidth < 480 ? 36 : 44;
      const mag = DOCK_MAGNIFICATION;
      dockRefs.current.forEach((el, i) => {
        if (!el) return;
        let target = base;
        let over = false;
        if (mouseX.current !== Infinity) {
          const r = el.getBoundingClientRect();
          const d = mouseX.current - (r.x + r.width / 2);
          over = Math.abs(d) <= r.width / 2;
          target = base + (mag - base) * Math.max(0, 1 - Math.abs(d) / dist);
        }
        const tip = tipRefs.current[i];
        if (tip) {
          tip.style.opacity = over ? '1' : '0';
          tip.style.transform = `translateX(-50%) translateY(${over ? '0px' : '4px'})`;
        }
        let c = cur.current[i] ?? base;
        let v = vel.current[i] ?? 0;
        v = (v + (target - c) * 0.25) * 0.65;
        c += v;
        if (Math.abs(c - target) < 0.1 && Math.abs(v) < 0.1) {
          c = target;
          v = 0;
        }
        cur.current[i] = c;
        vel.current[i] = v;
        el.style.width = c + 'px';
        el.style.height = c + 'px';
      });
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: 14, left: 0, right: 0, zIndex: 50, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
      <div
        onMouseMove={(e) => { mouseX.current = e.clientX; }}
        onMouseLeave={() => { mouseX.current = Infinity; }}
        role="toolbar"
        aria-label="Navigation"
        style={{ pointerEvents: 'auto', display: 'flex', alignItems: 'flex-end', gap: 8, height: 64, padding: '0 10px', borderRadius: 24, background: 'rgba(250,250,252,0.6)', backdropFilter: 'saturate(180%) blur(20px)', WebkitBackdropFilter: 'saturate(180%) blur(20px)', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 12px 32px rgba(0,0,0,0.14)' }}
      >
        {navItems.map((item, i) => (
          <DockItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            active={page === item.id}
            onClick={() => goTo(item.id)}
            dockRef={(el) => { dockRefs.current[i] = el; }}
            tipRef={(el) => { tipRefs.current[i] = el; }}
          />
        ))}
        <div style={{ width: 1, height: 36, background: 'rgba(0,0,0,0.12)', alignSelf: 'center', margin: '0 2px', flex: 'none' }} />
        <DockItem
          label="Télécharger le CV"
          icon={icons.cv}
          isCv
          dockRef={(el) => { dockRefs.current[navItems.length] = el; }}
          tipRef={(el) => { tipRefs.current[navItems.length] = el; }}
        />
      </div>
    </div>
  );
}

function DockItem({ label, icon, active, onClick, isCv, dockRef, tipRef }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, paddingBottom: 5, position: 'relative' }}>
      <span
        ref={tipRef}
        style={{ position: 'absolute', bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%) translateY(4px)', opacity: 0, transition: 'opacity 0.15s ease, transform 0.15s ease', background: 'rgba(250,250,252,0.95)', border: '1px solid rgba(0,0,0,0.08)', color: '#1d1d1f', fontSize: 12, letterSpacing: '-0.12px', padding: '4px 10px', borderRadius: 8, whiteSpace: 'nowrap', pointerEvents: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
      >
        {label}
      </span>
      {isCv ? (
        <a
          ref={dockRef}
          href={CV_PATH}
          download
          aria-label={label}
          style={{ width: 44, height: 44, borderRadius: 9999, border: '1px solid rgba(0,0,0,0.06)', background: '#0066cc', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', flex: 'none', boxSizing: 'border-box' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '46%', height: '46%' }}>{icon}</svg>
        </a>
      ) : (
        <button
          ref={dockRef}
          onClick={onClick}
          aria-label={label}
          style={{ fontFamily: 'inherit', cursor: 'pointer', width: 44, height: 44, borderRadius: 9999, border: '1px solid rgba(0,0,0,0.06)', background: 'rgba(255,255,255,0.85)', color: '#1d1d1f', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, flex: 'none' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '46%', height: '46%' }}>{icon}</svg>
        </button>
      )}
      <span style={{ width: 4, height: 4, borderRadius: 9999, background: '#1d1d1f', opacity: active ? 1 : 0, flex: 'none' }} />
    </div>
  );
}
