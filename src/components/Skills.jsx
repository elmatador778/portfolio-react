import { useLang } from '../context/LanguageContext';

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills">
      <h2 className="section-title">
        <span className="prompt">#</span> {t('Technical Skills', 'Compétences Techniques')}
      </h2>
      <p className="section-sub">{t('Hardware · Firmware · Tools', 'Matériel · Firmware · Outils')}</p>

      <div className="skills-grid">

        <div className="skill-group">
          <div className="skill-group-title">
            <span className="skill-icon">⚙</span>
            <span>{t('Firmware & Languages', 'Firmware & Langages')}</span>
          </div>
          <div className="skill-bars">
            {[
              { name: 'C / C++', width: '80%' },
              { name: 'Python', width: '75%' },
              { name: 'Assembly (ARM)', width: '45%' },
              { name: 'Bash / Linux', width: '60%' },
            ].map(({ name, width }) => (
              <div className="skill-row" key={name}>
                <span className="skill-name">{name}</span>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <div className="skill-group-title">
            <span className="skill-icon">🔌</span>
            <span>{t('Protocols & Interfaces', 'Protocoles & Interfaces')}</span>
          </div>
          <div className="protocol-badges">
            {['I²C', 'SPI', 'UART', 'CAN bus', 'PWM', 'ADC/DAC', 'GPIO', 'DMA', 'RF / Radio', 'Ethernet'].map(p => (
              <span className="proto-badge" key={p}>{p}</span>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <div className="skill-group-title">
            <span className="skill-icon">💾</span>
            <span>{t('MCUs & Platforms', 'MCU & Plateformes')}</span>
          </div>
          <div className="protocol-badges">
            {['STM32', 'Arduino / AVR', 'ESP32', 'Raspberry Pi', 'ARM Cortex-M', 'FreeRTOS'].map(p => (
              <span className="proto-badge hw" key={p}>{p}</span>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <div className="skill-group-title">
            <span className="skill-icon">🛠</span>
            <span>{t('Tools & EDA', 'Outils & EDA')}</span>
          </div>
          <div className="protocol-badges">
            {['LTSpice', 'KiCad', 'Fusion 360', 'GDB / OpenOCD', 'Git', 'Oscilloscope', 'Logic Analyser', 'Multimeter'].map(p => (
              <span className="proto-badge tool" key={p}>{p}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
