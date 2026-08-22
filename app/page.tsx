'use client';

import { useEffect, useState } from 'react';

const focus = ['Embedded Systems', 'Firmware', 'Hardware', 'Linux', 'Systems Programming'];

const projects = [
  {
    id: '01', name: 'MicroPythonOS', status: 'Experimental avanzado', stack: 'ESP32-S3 · MicroPython · LVGL', label: 'Arquitectura distribuida', visual: 'micro', image: '/projects/micropythonos.png',
    intro: 'Una consola modular distribuida entre varios microcontroladores.',
    body: 'Una placa funciona como CPU principal y otra como PPU/southbridge para gráficos y periféricos. Las conecta un protocolo SPI propio con sincronización, longitud y checksum.',
    challenge: 'Coordinar máquinas de estados, buffers, límites de transferencia, PSRAM y portabilidad entre distintas placas.',
    built: 'Un sistema dividido entre una CPU principal y una segunda placa dedicada a gráficos, entrada y periféricos. El prototipo utiliza una pantalla ILI9488 de 480×320, touch XPT2046 y una interfaz construida con LVGL.',
    why: 'Quería explorar hasta dónde puede crecer un sistema formado por microcontroladores cuando la arquitectura, en lugar del hardware, se convierte en el centro del diseño.',
    hardware: ['ESP32-S3 N16R8', 'ESP32 WROOM', 'ILI9488', 'XPT2046', '8 MB PSRAM'], software: ['MicroPython', 'C/C++', 'LVGL', 'SPI', 'State machines'],
    learned: 'Diseñar el framing de un protocolo, recuperarse de paquetes incompletos y separar responsabilidades son tan importantes como conseguir que la primera demo funcione.',
  },
  {
    id: '02', name: 'MetaDeck', status: 'En desarrollo activo', stack: 'ESP32 · C/C++ · ESP-IDF', label: 'Firmware modular', visual: 'metadeck', image: '/projects/metadeck.png',
    intro: 'Un pequeño dispositivo que evolucionó hasta convertirse en una plataforma de aplicaciones embebidas.',
    body: 'Un core desacoplado gestiona eventos, navegación, rendering y comunicación; encima viven apps intercambiables para música, monitorización del PC y controles multimedia.',
    challenge: 'Diseñar una arquitectura extensible dentro de los límites de memoria, interfaz y procesamiento de un microcontrolador.',
    built: 'Un runtime embebido que desacopla LCD, encoder, botones y comunicación de las aplicaciones. Music Mixer, Hardware Monitor y los controles multimedia comparten navegación y rendering.',
    why: 'El primer prototipo solo controlaba música. Convertirlo en una plataforma permite añadir nuevas herramientas sin reescribir el firmware alrededor de una única función.',
    hardware: ['ESP32', 'LCD', 'Rotary encoder', 'Buttons'], software: ['C/C++', 'Arduino / ESP-IDF', 'Event loop', 'Serial protocol'],
    learned: 'Una interfaz pequeña obliga a definir muy bien el modelo de eventos, el foco y la propiedad de cada pantalla.',
  },
  {
    id: '03', name: 'Cyberdeck', status: 'En construcción', stack: 'Raspberry Pi · Linux · DC-DC', label: 'Hardware integrado', visual: 'cyberdeck', image: '/projects/cyberdeck.png',
    intro: 'Un ordenador portátil compacto para programar, experimentar y diagnosticar hardware.',
    body: 'Integra una Raspberry Pi, teclado, refrigeración y una cadena de alimentación diseñada alrededor de baterías de herramienta y conversión de 21 V a 5 V.',
    challenge: 'Equilibrar autonomía, entrega de potencia, temperatura y montaje físico en un sistema realmente transportable.',
    built: 'Una arquitectura física y eléctrica para reunir ordenador, pantalla, teclado, refrigeración y acceso a hardware en una carcasa portátil. La BOM documenta coste, estado y función de cada componente.',
    why: 'Buscaba una estación personal que pudiera viajar al banco de trabajo y servir tanto para programar como para interactuar con otros dispositivos.',
    hardware: ['Raspberry Pi', '21 V battery', 'Buck converter', 'Integrated keyboard'], software: ['Linux', 'Shell tools', 'Networking', 'BOM workflow'],
    learned: 'En un producto portátil la alimentación, la disipación y la distribución física deben diseñarse juntas desde el principio.',
  },
  {
    id: '04', name: 'Portable Wii', status: 'Proyecto hardware', stack: 'Nintendo Wii · Custom power · Soldering', label: 'Hardware hacking', visual: 'wii', image: '/projects/portable-wii.png',
    intro: 'Hardware real de Nintendo Wii transformado en una consola portátil.',
    body: 'Modificación de placa, alimentación personalizada, refrigeración y cableado de señales con componentes especializados como RVL-PMS-Lite y PMS-PD.',
    challenge: 'Diagnosticar fallos eléctricos y entender la distribución de voltajes, el consumo y las modificaciones críticas de la placa.',
    built: 'Un sistema portátil basado en una placa Wii real, con power management, cableado personalizado, modificación U10 y refrigeración específica para CPU y GPU.',
    why: 'Es un ejercicio completo de ingeniería inversa e integración: conservar la compatibilidad del hardware original mientras cambia por completo su formato físico.',
    hardware: ['Wii motherboard', 'RVL-PMS-Lite', 'PMS-PD', '22/33 AWG wiring'], software: ['RVLoader', 'Electrical diagnosis', 'Power budgeting', 'Thermal planning'],
    learned: 'Perder una placa y una PMS-Lite por problemas eléctricos convirtió la protección, la medición previa y la validación por etapas en requisitos del diseño.',
  },
  {
    id: '05', name: 'PMS2 Emulator', status: 'Prototipo de firmware', stack: 'RP2040 · C++ · Pico SDK · I²C', label: 'Reverse engineering', visual: 'pms', image: '/projects/pms2-emulator.png',
    intro: 'Un RP2040 que emula la interfaz de gestión de energía esperada por RVLoader.',
    body: 'El firmware reproduce comandos de una PMS2 y expone voltaje, carga, batería, temperatura y estado del cargador a través de I²C.',
    challenge: 'Reconstruir el comportamiento de un protocolo hardware existente y hacerlo fiable dentro de un proyecto C++ depurable.',
    built: 'Un proyecto estructurado con Pico SDK y CMake donde el RP2040 responde como dispositivo I²C y reproduce los registros que consulta el software de la Wii.',
    why: 'Emular la placa permite comprender el contrato real entre RVLoader y el sistema de alimentación, además de abrir la puerta a hardware propio.',
    hardware: ['RP2040 / Pico', 'I²C bus', 'Power sensors'], software: ['C++', 'Pico SDK', 'CMake', 'OpenOCD'],
    learned: 'La compatibilidad depende de replicar tiempos, estados y casos límite, no solo de devolver el valor correcto para cada comando.',
  },
  {
    id: '06', name: 'Linux on Tab S9 FE', status: 'Investigación', stack: 'ARM64 · Linux kernel · Device Tree', label: 'Platform bring-up', visual: 'linux', image: '/projects/linux-tab.png',
    intro: 'Investigar un port de Linux nativo para una tablet Samsung, más allá de ejecutar Linux dentro de Android.',
    body: 'El alcance recorre la cadena completa: kernel, device tree, boot, initramfs, root filesystem y bring-up progresivo de pantalla, touch, USB, red y energía.',
    challenge: 'Convertir el código disponible del kernel Android en una plataforma Linux utilizable pese a los drivers propietarios.',
    built: 'Un plan de bring-up basado en el kernel android_kernel_samsung_s5e8835, separando el arranque mínimo de la habilitación gradual de periféricos.',
    why: 'Una tablet moderna concentra muchos de los retos más interesantes de Linux sobre ARM: boot chain, device trees, firmware y controladores específicos.',
    hardware: ['Samsung S5E8835', 'ARM64 tablet', 'Touch display', 'USB / wireless'], software: ['Linux kernel', 'Device Tree', 'Initramfs', 'Root filesystem'],
    learned: 'Un port viable necesita hitos pequeños: consola temprana, almacenamiento, pantalla y entrada antes de abordar GPU, audio o power management.',
  },
];

const experiments = [
  ['Galileo Edge Computer', 'Embedded Linux · MQTT · MCU nodes'], ['Embedded Debugging Tool', 'UART · SPI · I²C · GPIO'],
  ['Grafos y algoritmos', 'C++ · BFS · MST · Floyd'], ['Simulador de memoria', 'C · Linux · Docker'],
  ['Concurrencia y scheduling', 'pthreads · fork · Round Robin'], ['Datos geográficos', 'Python · Excel · Nominatim'],
  ['Electrónica digital', 'VHDL · Quartus · RTL'], ['Portales 2D', 'Godot · GDScript · Transformaciones'],
];

type Project = (typeof projects)[number];

function ProjectVisual({ type }: { type: string }) {
  if (type === 'micro') return <div className="architecture compact"><div className="chip"><small>MAIN</small><b>CPU</b><span>ESP32-S3</span></div><div className="bus"><span>SPI</span></div><div className="chip accent"><small>I/O</small><b>PPU</b><span>ESP32</span></div></div>;
  if (type === 'metadeck') return <div className="app-grid"><span>MUSIC</span><span>STATS</span><span>MEDIA</span><span>+</span></div>;
  if (type === 'cyberdeck') return <div className="power-flow"><b>21V</b><i /><strong>BUCK</strong><i /><b>5V</b><small>POWER RAIL / STABLE</small></div>;
  if (type === 'wii') return <div className="board"><span>CPU</span><span>GPU</span><span>PMS</span><i /><i /><i /><i /></div>;
  if (type === 'pms') return <div className="packet"><small>I²C PACKET</small><span>ADDR</span><span>CMD</span><span>DATA</span><span>ACK</span><b>0x52</b></div>;
  return <div className="boot-log"><span>&gt; boot arm64 kernel</span><span>&gt; load device tree</span><span>&gt; mount rootfs</span><span className="ok">[ OK ] init hardware</span><i /></div>;
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', closeOnEscape);
    document.body.classList.add('modal-open');
    return () => { document.removeEventListener('keydown', closeOnEscape); document.body.classList.remove('modal-open'); };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Cerrar ficha" autoFocus>ESC <b>×</b></button>
        <div className="modal-head">
          <div><p className="eyebrow">Case study / {project.id}</p><h2 id="project-modal-title">{project.name}</h2><p>{project.intro}</p></div>
          <div className="modal-status"><span>{project.status}</span><span>{project.stack}</span></div>
        </div>
        <div className="project-gallery">
          <figure className="gallery-main"><img src={project.image} alt={`Render conceptual de ${project.name}`} /><figcaption>Render conceptual · sustituible por foto real</figcaption></figure>
          <figure className="gallery-crop crop-a"><img src={project.image} alt="Detalle conceptual del proyecto" /><figcaption>Detalle / 01</figcaption></figure>
          <figure className="gallery-crop crop-b"><img src={project.image} alt="Segundo detalle conceptual del proyecto" /><figcaption>Detalle / 02</figcaption></figure>
        </div>
        <div className="modal-content">
          <div><span>01 / Qué construí</span><p>{project.built}</p></div><div><span>02 / Por qué</span><p>{project.why}</p></div>
          <div><span>03 / Reto principal</span><p>{project.challenge}</p></div><div><span>04 / Qué aprendí</span><p>{project.learned}</p></div>
        </div>
        <div className="modal-stack"><div><span>Hardware</span>{project.hardware.map(item => <b key={item}>{item}</b>)}</div><div><span>Software / stack</span>{project.software.map(item => <b key={item}>{item}</b>)}</div></div>
      </section>
    </div>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const openWithKeyboard = (event: React.KeyboardEvent, project: Project) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setActiveProject(project); }
  };
  const lead = projects[0];

  return (
    <main>
      <nav className="nav shell" aria-label="Navegación principal"><a className="brand" href="#top" aria-label="Inicio"><span className="brand-mark">MP</span><span>Mark Piazuelo</span></a><div className="nav-links"><a href="#work">Proyectos</a><a href="#about">Perfil</a><a href="#experiments">Experimentos</a></div><span className="status"><i /> Abierto a oportunidades</span></nav>

      <section className="hero shell" id="top"><div className="hero-copy"><p className="eyebrow">Embedded systems · Hardware hacking</p><h1>Construyo sistemas<br />desde <em>abajo.</em></h1><p className="lede">Diseño hardware, firmware y arquitecturas que conectan dispositivos reales con el software que los hace útiles.</p><div className="hero-actions"><a className="button primary" href="#work">Explorar proyectos <span>↓</span></a><a className="button secondary" href="#about">Sobre mí</a></div></div><div className="system-map" aria-label="Diagrama del enfoque de trabajo"><div className="map-head"><span>system_map.log</span><span>ACTIVE</span></div><div className="map-body"><div className="node hot"><small>01</small><strong>HARDWARE</strong><span>ESP32 · RP2040 · ARM</span></div><div className="connector"><span>SPI</span></div><div className="node"><small>02</small><strong>FIRMWARE</strong><span>C/C++ · Drivers · RTOS</span></div><div className="connector"><span>API</span></div><div className="node"><small>03</small><strong>SYSTEM</strong><span>Linux · Protocols · UI</span></div></div><div className="map-foot"><span>latency: low</span><span>layers: 03</span><span>status: building</span></div></div></section>

      <section className="focus-strip" aria-label="Áreas de especialización"><div className="shell focus-list">{focus.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div></section>

      <section className="work shell" id="work">
        <div className="section-heading"><div><p className="eyebrow">Selected engineering</p><h2>Proyectos destacados</h2></div><p>Pulsa cualquier proyecto para abrir su arquitectura, retos, aprendizajes e imágenes.</p></div>
        <article className="project-card project-lead is-clickable" role="button" tabIndex={0} aria-haspopup="dialog" aria-label={`Abrir ficha de ${lead.name}`} onClick={() => setActiveProject(lead)} onKeyDown={(event) => openWithKeyboard(event, lead)}>
          <div className="project-number">{lead.id} / 06</div><div className="project-copy"><div className="project-meta"><span>{lead.status}</span><span>{lead.stack}</span></div><p className="project-label">{lead.label}</p><h3>{lead.name}</h3><p className="project-tagline">{lead.intro}</p><p>{lead.body}</p><span className="project-link">Ver case study <b>↗</b></span></div><div className="project-visual lead-visual"><img src={lead.image} alt="Vista conceptual de MicroPythonOS" /><span className="concept-badge">Concept render</span></div>
        </article>
        <div className="project-stack">{projects.slice(1).map(project => <article className="project-row is-clickable" role="button" tabIndex={0} aria-haspopup="dialog" aria-label={`Abrir ficha de ${project.name}`} onClick={() => setActiveProject(project)} onKeyDown={(event) => openWithKeyboard(event, project)} key={project.name}><div className="project-number">{project.id} / 06</div><div className="project-copy"><div className="project-meta"><span>{project.status}</span><span>{project.stack}</span></div><p className="project-label">{project.label}</p><h3>{project.name}</h3><p className="project-tagline">{project.intro}</p><p>{project.body}</p><span className="project-link">Ver case study <b>↗</b></span></div><div className={`project-visual ${project.visual}`}><ProjectVisual type={project.visual} /><span className="visual-hover"><img src={project.image} alt={`Vista conceptual de ${project.name}`} /></span></div></article>)}</div>
      </section>

      <section className="about" id="about"><div className="shell about-grid"><div><p className="eyebrow">Perfil / 2026</p><h2>Entre la placa<br />y el sistema.</h2></div><div className="about-copy"><p className="about-lede">Soy Mark, estudiante y desarrollador centrado en sistemas embebidos, electrónica y programación de bajo nivel.</p><p>Me interesa entender el sistema completo: qué ocurre en los pines, cómo viajan los datos, quién gobierna el hardware y qué arquitectura permite convertir todo eso en una herramienta útil.</p><p>Mis proyectos nacen de preguntas prácticas y suelen acabar cruzando varias disciplinas: diseño de protocolos, firmware, Linux, electrónica de potencia, debugging y experiencia de usuario.</p></div><div className="principles"><div><span>01</span><b>Construir para entender</b><p>Los sistemas complejos dejan de ser cajas negras cuando los llevas al banco de trabajo.</p></div><div><span>02</span><b>Diseñar por capas</b><p>Hardware, protocolo y aplicación evolucionan mejor cuando sus límites son explícitos.</p></div><div><span>03</span><b>Medir, fallar, iterar</b><p>Cada fallo eléctrico o bug de sincronización se convierte en conocimiento reutilizable.</p></div></div></div></section>

      <section className="toolbox shell"><div className="section-heading"><div><p className="eyebrow">Toolbox</p><h2>Capas con las que trabajo</h2></div></div><div className="tool-grid"><div><span>01</span><h3>Hardware</h3><p>ESP32 / ESP32-S3<br />RP2040 / Raspberry Pi<br />Arduino · ARM64</p></div><div><span>02</span><h3>Interfaces</h3><p>SPI · I²C · UART<br />PWM · ADC · GPIO<br />Custom protocols</p></div><div><span>03</span><h3>Software</h3><p>C · C++ · Python<br />ESP-IDF · Pico SDK<br />MicroPython · LVGL</p></div><div><span>04</span><h3>Systems</h3><p>Linux · CMake · Git<br />OpenOCD · Docker<br />VHDL · Quartus</p></div></div></section>

      <section className="experiments shell" id="experiments"><div className="section-heading"><div><p className="eyebrow">Lab notes</p><h2>Experimentos y proyectos pequeños</h2></div><p>Trabajo académico, prototipos y conceptos que complementan los casos principales.</p></div><div className="experiment-list">{experiments.map(([name, stack], index) => <div key={name}><span>{String(index + 1).padStart(2, '0')}</span><h3>{name}</h3><p>{stack}</p><i>↗</i></div>)}</div></section>

      <section className="closing shell"><p className="eyebrow">Next system</p><h2>Del primer bit<br />al producto final.</h2><p>Interesado en firmware, embedded Linux, arquitectura de sistemas y retos de hardware que exijan mirar debajo de la abstracción.</p><a className="button primary" href="#top">Volver arriba <span>↑</span></a></section><footer className="footer shell"><span>© 2026 Mark Piazuelo</span><span>Embedded systems · Barcelona, ES</span><span>Built close to the metal</span></footer>
      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </main>
  );
}
