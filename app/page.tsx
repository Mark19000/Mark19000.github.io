const focus = [
  'Embedded Systems',
  'Firmware',
  'Hardware',
  'Linux',
  'Systems Programming',
];

const projects = [
  {
    id: '02',
    name: 'MetaDeck',
    status: 'En desarrollo activo',
    stack: 'ESP32 · C/C++ · ESP-IDF',
    label: 'Firmware modular',
    intro: 'Un pequeño dispositivo que evolucionó hasta convertirse en una plataforma de aplicaciones embebidas.',
    body: 'Un core desacoplado gestiona eventos, navegación, rendering y comunicación; encima viven apps intercambiables para música, monitorización del PC y controles multimedia.',
    challenge: 'Diseñar una arquitectura extensible dentro de los límites de memoria, interfaz y procesamiento de un microcontrolador.',
    tech: ['Event loop', 'UI embebida', 'Serial protocol', 'Encoder + LCD'],
    visual: 'metadeck',
  },
  {
    id: '03',
    name: 'Cyberdeck',
    status: 'En construcción',
    stack: 'Raspberry Pi · Linux · DC-DC',
    label: 'Hardware integrado',
    intro: 'Un ordenador portátil compacto para programar, experimentar y diagnosticar hardware.',
    body: 'Integra una Raspberry Pi, teclado, refrigeración y una cadena de alimentación diseñada alrededor de baterías de herramienta y conversión de 21 V a 5 V.',
    challenge: 'Equilibrar autonomía, entrega de potencia, temperatura y montaje físico en un sistema realmente transportable.',
    tech: ['Power design', 'BOM', 'Linux', 'Diseño mecánico'],
    visual: 'cyberdeck',
  },
  {
    id: '04',
    name: 'Portable Wii',
    status: 'Proyecto hardware',
    stack: 'Nintendo Wii · Custom power · Soldering',
    label: 'Hardware hacking',
    intro: 'Hardware real de Nintendo Wii transformado en una consola portátil.',
    body: 'Modificación de placa, alimentación personalizada, refrigeración y cableado de señales con componentes especializados como RVL-PMS-Lite y PMS-PD.',
    challenge: 'Diagnosticar fallos eléctricos y entender la distribución de voltajes, el consumo y las modificaciones críticas de la placa.',
    tech: ['Power management', 'U10 mod', 'Thermals', 'Board modding'],
    visual: 'wii',
  },
  {
    id: '05',
    name: 'PMS2 Emulator',
    status: 'Prototipo de firmware',
    stack: 'RP2040 · C++ · Pico SDK · I²C',
    label: 'Reverse engineering',
    intro: 'Un RP2040 que emula la interfaz de gestión de energía esperada por RVLoader.',
    body: 'El firmware reproduce comandos de una PMS2 y expone voltaje, carga, batería, temperatura y estado del cargador a través de I²C.',
    challenge: 'Reconstruir el comportamiento de un protocolo hardware existente y hacerlo fiable dentro de un proyecto C++ depurable.',
    tech: ['I²C slave', 'CMake', 'OpenOCD', 'Protocol analysis'],
    visual: 'pms',
  },
  {
    id: '06',
    name: 'Linux on Tab S9 FE',
    status: 'Investigación',
    stack: 'ARM64 · Linux kernel · Device Tree',
    label: 'Platform bring-up',
    intro: 'Investigar un port de Linux nativo para una tablet Samsung, más allá de ejecutar Linux dentro de Android.',
    body: 'El alcance recorre la cadena completa: kernel, device tree, boot, initramfs, root filesystem y bring-up progresivo de pantalla, touch, USB, red y energía.',
    challenge: 'Convertir el código disponible del kernel Android en una plataforma Linux utilizable pese a los drivers propietarios.',
    tech: ['Kernel build', 'Boot chain', 'Drivers', 'ARM64'],
    visual: 'linux',
  },
];

const experiments = [
  ['Galileo Edge Computer', 'Embedded Linux · MQTT · MCU nodes'],
  ['Embedded Debugging Tool', 'UART · SPI · I²C · GPIO'],
  ['Grafos y algoritmos', 'C++ · BFS · MST · Floyd'],
  ['Simulador de memoria', 'C · Linux · Docker'],
  ['Concurrencia y scheduling', 'pthreads · fork · Round Robin'],
  ['Datos geográficos', 'Python · Excel · Nominatim'],
  ['Electrónica digital', 'VHDL · Quartus · RTL'],
  ['Portales 2D', 'Godot · GDScript · Transformaciones'],
];

function ProjectVisual({ type }: { type: string }) {
  if (type === 'metadeck') return <div className="app-grid"><span>MUSIC</span><span>STATS</span><span>MEDIA</span><span>+</span></div>;
  if (type === 'cyberdeck') return <div className="power-flow"><b>21V</b><i /><strong>BUCK</strong><i /><b>5V</b><small>POWER RAIL / STABLE</small></div>;
  if (type === 'wii') return <div className="board"><span>CPU</span><span>GPU</span><span>PMS</span><i /><i /><i /><i /></div>;
  if (type === 'pms') return <div className="packet"><small>I²C PACKET</small><span>ADDR</span><span>CMD</span><span>DATA</span><span>ACK</span><b>0x52</b></div>;
  return <div className="boot-log"><span>&gt; boot arm64 kernel</span><span>&gt; load device tree</span><span>&gt; mount rootfs</span><span className="ok">[ OK ] init hardware</span><i /></div>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Navegación principal">
        <a className="brand" href="#top" aria-label="Inicio"><span className="brand-mark">MP</span><span>Mark Piazuelo</span></a>
        <div className="nav-links"><a href="#work">Proyectos</a><a href="#about">Perfil</a><a href="#experiments">Experimentos</a></div>
        <span className="status"><i /> Abierto a oportunidades</span>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Embedded systems · Hardware hacking</p>
          <h1>Construyo sistemas<br />desde <em>abajo.</em></h1>
          <p className="lede">Diseño hardware, firmware y arquitecturas que conectan dispositivos reales con el software que los hace útiles.</p>
          <div className="hero-actions"><a className="button primary" href="#work">Explorar proyectos <span>↓</span></a><a className="button secondary" href="#about">Sobre mí</a></div>
        </div>

        <div className="system-map" aria-label="Diagrama del enfoque de trabajo">
          <div className="map-head"><span>system_map.log</span><span>ACTIVE</span></div>
          <div className="map-body">
            <div className="node hot"><small>01</small><strong>HARDWARE</strong><span>ESP32 · RP2040 · ARM</span></div>
            <div className="connector"><span>SPI</span></div>
            <div className="node"><small>02</small><strong>FIRMWARE</strong><span>C/C++ · Drivers · RTOS</span></div>
            <div className="connector"><span>API</span></div>
            <div className="node"><small>03</small><strong>SYSTEM</strong><span>Linux · Protocols · UI</span></div>
          </div>
          <div className="map-foot"><span>latency: low</span><span>layers: 03</span><span>status: building</span></div>
        </div>
      </section>

      <section className="focus-strip" aria-label="Áreas de especialización"><div className="shell focus-list">{focus.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div></section>

      <section className="work shell" id="work">
        <div className="section-heading"><div><p className="eyebrow">Selected engineering</p><h2>Proyectos destacados</h2></div><p>Sistemas completos: de la señal eléctrica y el protocolo al producto que ve el usuario.</p></div>

        <article className="project-card project-lead">
          <div className="project-number">01 / 06</div>
          <div className="project-copy">
            <div className="project-meta"><span>Experimental avanzado</span><span>ESP32-S3 · MicroPython · LVGL</span></div>
            <p className="project-label">Arquitectura distribuida</p>
            <h3>MicroPythonOS</h3>
            <p className="project-tagline">Una consola modular distribuida entre varios microcontroladores.</p>
            <p>Una placa funciona como CPU principal y otra como PPU/southbridge para gráficos y periféricos. Las conecta un protocolo SPI propio con sincronización, longitud y checksum.</p>
            <details><summary>Notas de ingeniería <span>+</span></summary><div className="details-body"><p><b>Reto principal</b> Coordinar máquinas de estados, buffers, límites de transferencia, PSRAM y portabilidad entre distintas placas.</p><div className="tags"><span>SPI master/slave</span><span>LVGL</span><span>Drivers</span><span>Protocol design</span></div></div></details>
          </div>
          <div className="architecture" aria-label="CPU conectada por SPI a una PPU y periféricos">
            <div className="chip"><small>MAIN</small><b>CPU</b><span>ESP32-S3</span></div><div className="bus"><span>SPI BUS</span></div><div className="chip accent"><small>I/O</small><b>PPU</b><span>ESP32</span></div><div className="ports"><span>DISPLAY</span><span>TOUCH</span><span>INPUT</span></div>
          </div>
        </article>

        <div className="project-stack">
          {projects.map((project) => (
            <article className="project-row" key={project.name}>
              <div className="project-number">{project.id} / 06</div>
              <div className="project-copy">
                <div className="project-meta"><span>{project.status}</span><span>{project.stack}</span></div>
                <p className="project-label">{project.label}</p><h3>{project.name}</h3><p className="project-tagline">{project.intro}</p><p>{project.body}</p>
                <details><summary>Notas de ingeniería <span>+</span></summary><div className="details-body"><p><b>Reto principal</b> {project.challenge}</p><div className="tags">{project.tech.map(tag => <span key={tag}>{tag}</span>)}</div></div></details>
              </div>
              <div className={`project-visual ${project.visual}`}><ProjectVisual type={project.visual} /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="shell about-grid">
          <div><p className="eyebrow">Perfil / 2026</p><h2>Entre la placa<br />y el sistema.</h2></div>
          <div className="about-copy"><p className="about-lede">Soy Mark, estudiante y desarrollador centrado en sistemas embebidos, electrónica y programación de bajo nivel.</p><p>Me interesa entender el sistema completo: qué ocurre en los pines, cómo viajan los datos, quién gobierna el hardware y qué arquitectura permite convertir todo eso en una herramienta útil.</p><p>Mis proyectos nacen de preguntas prácticas y suelen acabar cruzando varias disciplinas: diseño de protocolos, firmware, Linux, electrónica de potencia, debugging y experiencia de usuario.</p></div>
          <div className="principles">
            <div><span>01</span><b>Construir para entender</b><p>Los sistemas complejos dejan de ser cajas negras cuando los llevas al banco de trabajo.</p></div>
            <div><span>02</span><b>Diseñar por capas</b><p>Hardware, protocolo y aplicación evolucionan mejor cuando sus límites son explícitos.</p></div>
            <div><span>03</span><b>Medir, fallar, iterar</b><p>Cada fallo eléctrico o bug de sincronización se convierte en conocimiento reutilizable.</p></div>
          </div>
        </div>
      </section>

      <section className="toolbox shell">
        <div className="section-heading"><div><p className="eyebrow">Toolbox</p><h2>Capas con las que trabajo</h2></div></div>
        <div className="tool-grid">
          <div><span>01</span><h3>Hardware</h3><p>ESP32 / ESP32-S3<br />RP2040 / Raspberry Pi<br />Arduino · ARM64</p></div>
          <div><span>02</span><h3>Interfaces</h3><p>SPI · I²C · UART<br />PWM · ADC · GPIO<br />Custom protocols</p></div>
          <div><span>03</span><h3>Software</h3><p>C · C++ · Python<br />ESP-IDF · Pico SDK<br />MicroPython · LVGL</p></div>
          <div><span>04</span><h3>Systems</h3><p>Linux · CMake · Git<br />OpenOCD · Docker<br />VHDL · Quartus</p></div>
        </div>
      </section>

      <section className="experiments shell" id="experiments">
        <div className="section-heading"><div><p className="eyebrow">Lab notes</p><h2>Experimentos y proyectos pequeños</h2></div><p>Trabajo académico, prototipos y conceptos que complementan los casos principales.</p></div>
        <div className="experiment-list">{experiments.map(([name, stack], index) => <div key={name}><span>{String(index + 1).padStart(2, '0')}</span><h3>{name}</h3><p>{stack}</p><i>↗</i></div>)}</div>
      </section>

      <section className="closing shell"><p className="eyebrow">Next system</p><h2>Del primer bit<br />al producto final.</h2><p>Interesado en firmware, embedded Linux, arquitectura de sistemas y retos de hardware que exijan mirar debajo de la abstracción.</p><a className="button primary" href="#top">Volver arriba <span>↑</span></a></section>

      <footer className="footer shell"><span>© 2026 Mark Piazuelo</span><span>Embedded systems · Barcelona, ES</span><span>Built close to the metal</span></footer>
    </main>
  );
}
