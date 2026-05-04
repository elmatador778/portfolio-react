import { useLang } from '../context/LanguageContext';

function MicrochipIcon() {
  return (
    <svg className="illus-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="18" width="28" height="28" rx="3" stroke="currentColor" strokeWidth="2.5"/>
      <rect x="24" y="24" width="16" height="16" rx="1.5" fill="currentColor" opacity="0.15"/>
      <line x1="10" y1="24" x2="18" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="10" y1="30" x2="18" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="10" y1="36" x2="18" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="46" y1="24" x2="54" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="46" y1="30" x2="54" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="46" y1="36" x2="54" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="24" y1="10" x2="24" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="32" y1="10" x2="32" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="40" y1="10" x2="40" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="24" y1="46" x2="24" y2="54" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="32" y1="46" x2="32" y2="54" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="40" y1="46" x2="40" y2="54" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function CircuitWaveIcon() {
  return (
    <svg className="illus-icon illus-wide" viewBox="0 0 120 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="0,32 15,32 22,16 30,48 38,24 46,40 54,32 70,32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="70" y1="32" x2="84" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <rect x="84" y="24" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
      <line x1="100" y1="32" x2="120" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

function PCBTraceIcon() {
  return (
    <svg className="illus-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="32" r="5" stroke="currentColor" strokeWidth="2"/>
      <circle cx="52" cy="32" r="5" stroke="currentColor" strokeWidth="2"/>
      <circle cx="32" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
      <circle cx="32" cy="52" r="5" stroke="currentColor" strokeWidth="2"/>
      <line x1="17" y1="32" x2="27" y2="32" stroke="currentColor" strokeWidth="2"/>
      <line x1="37" y1="32" x2="47" y2="32" stroke="currentColor" strokeWidth="2"/>
      <line x1="32" y1="17" x2="32" y2="27" stroke="currentColor" strokeWidth="2"/>
      <line x1="32" y1="37" x2="32" y2="47" stroke="currentColor" strokeWidth="2"/>
      <rect x="27" y="27" width="10" height="10" rx="2" fill="currentColor" opacity="0.2"/>
    </svg>
  );
}

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="hero">
      <div className="hero-illustrations" aria-hidden="true">
        <MicrochipIcon />
        <CircuitWaveIcon />
        <PCBTraceIcon />
      </div>
      <div className="terminal-window">
        <div className="terminal-bar">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="terminal-body">
          <p className="line"><span className="prompt">$</span> <span className="cmd">whoami</span></p>
          <p className="line output name-line">Tsiky Andrianarisata</p>

          <p className="line"><span className="prompt">$</span> <span className="cmd">cat role.txt</span></p>
          <p className="line output hw-orange">
            {t('Embedded Systems Engineer · CESI Toulouse', 'Ingénieur Systèmes Embarqués · CESI Toulouse')}
          </p>

          <p className="line"><span className="prompt">$</span> <span className="cmd">cat status.txt</span></p>
          <p className="line output accent-green">
            {t('🟢 Looking for an apprenticeship (alternance)', "🟢 En recherche d'alternance")}
          </p>

          <p className="line"><span className="prompt">$</span> <span className="cmd">cat firmware.txt</span></p>
          <p className="line output">C · C++ · Python · Arduino · STM32 · FreeRTOS</p>

          <p className="line"><span className="prompt">$</span> <span className="cmd">cat protocols.txt</span></p>
          <p className="line output">I²C · SPI · UART · CAN · PWM · ADC/DAC</p>

          <p className="line"><span className="prompt">$</span> <span className="cmd">cat tools.txt</span></p>
          <p className="line output">LTSpice · Fusion 360 · Kicad · GDB · Git · Linux</p>

          <p className="line"><span className="prompt">$</span> <span className="cmd blink">_</span></p>
        </div>
      </div>
    </section>
  );
}
