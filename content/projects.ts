/**
 * PROJECTS — ÚNICO ARCHIVO QUE NECESITAS EDITAR
 *
 * Para añadir un proyecto:
 * 1. Copia uno de los bloques dentro de `projectContent`.
 * 2. Cambia `slug`, `image`, `hardware`, `software`, `es` y `en`.
 * 3. Guarda su imagen en `/public/projects/` y escribe aquí la ruta `/projects/nombre.png`.
 *
 * El orden de los bloques es el orden de la web. Los números y la navegación
 * se calculan automáticamente. El primer proyecto se muestra como destacado.
 */

export type Locale = 'es' | 'en';

type Translation = {
  name: string;
  status: string;
  label: string;
  intro: string;
  body: string;
  challenge: string;
  built: string;
  why: string;
  learned: string;
};

type ProjectContent = {
  slug: string;
  stack: string;
  visual?: string;
  image: string;
  hardware: string[];
  software: string[];
  es: Translation;
  en: Translation;
};

export type Project = Omit<ProjectContent, 'es' | 'en'> & Translation & { id: string };

export const projectContent: ProjectContent[] = [
  {
    slug: 'micropython-os',
    stack: 'ESP32-S3 · MicroPython · LVGL',
    visual: 'micro',
    image: '/projects/micropythonos.png',
    hardware: ['ESP32-S3 N16R8', 'ESP32 WROOM', 'ILI9488', 'XPT2046', '8 MB PSRAM'],
    software: ['MicroPython', 'C/C++', 'LVGL', 'SPI', 'State machines'],
    es: {
      name: 'MicroPythonOS',
      status: 'Experimental avanzado',
      label: 'Arquitectura distribuida',
      intro: 'Una consola modular distribuida entre varios microcontroladores.',
      body: 'Una placa funciona como CPU principal y otra como PPU/southbridge para gráficos y periféricos. Las conecta un protocolo SPI propio con sincronización, longitud y checksum.',
      challenge: 'Coordinar máquinas de estados, buffers, límites de transferencia, PSRAM y portabilidad entre distintas placas.',
      built: 'Un sistema dividido entre una CPU principal y una segunda placa dedicada a gráficos, entrada y periféricos. El prototipo utiliza una pantalla ILI9488 de 480×320, touch XPT2046 y una interfaz construida con LVGL.',
      why: 'Quería explorar hasta dónde puede crecer un sistema formado por microcontroladores cuando la arquitectura, en lugar del hardware, se convierte en el centro del diseño.',
      learned: 'Diseñar el framing de un protocolo, recuperarse de paquetes incompletos y separar responsabilidades son tan importantes como conseguir que la primera demo funcione.',
    },
    en: {
      name: 'MicroPythonOS',
      status: 'Advanced experiment',
      label: 'Distributed architecture',
      intro: 'A modular console distributed across multiple microcontrollers.',
      body: 'One board acts as the main CPU while another works as a PPU/southbridge for graphics and peripherals. A custom SPI protocol connects them with synchronization, length and checksum fields.',
      challenge: 'Coordinating state machines, buffers, transfer limits, PSRAM and portability across different boards.',
      built: 'A system split between a main CPU and a second board dedicated to graphics, input and peripherals. The prototype uses a 480×320 ILI9488 display, XPT2046 touch and an LVGL interface.',
      why: 'I wanted to explore how far a microcontroller-based system can grow when architecture, rather than a single hardware feature, becomes the center of the design.',
      learned: 'Protocol framing, recovery from incomplete packets and clear responsibility boundaries matter as much as getting the first demo to run.',
    },
  },
  {
    slug: 'metadeck',
    stack: 'ESP32 · C/C++ · ESP-IDF',
    visual: 'metadeck',
    image: '/projects/metadeck.png',
    hardware: ['ESP32', 'LCD', 'Rotary encoder', 'Buttons'],
    software: ['C/C++', 'Arduino / ESP-IDF', 'Event loop', 'Serial protocol'],
    es: {
      name: 'MetaDeck', status: 'En desarrollo activo', label: 'Firmware modular',
      intro: 'Un pequeño dispositivo que evolucionó hasta convertirse en una plataforma de aplicaciones embebidas.',
      body: 'Un core desacoplado gestiona eventos, navegación, rendering y comunicación; encima viven apps intercambiables para música, monitorización del PC y controles multimedia.',
      challenge: 'Diseñar una arquitectura extensible dentro de los límites de memoria, interfaz y procesamiento de un microcontrolador.',
      built: 'Un runtime embebido que desacopla LCD, encoder, botones y comunicación de las aplicaciones. Music Mixer, Hardware Monitor y los controles multimedia comparten navegación y rendering.',
      why: 'El primer prototipo solo controlaba música. Convertirlo en una plataforma permite añadir nuevas herramientas sin reescribir el firmware alrededor de una única función.',
      learned: 'Una interfaz pequeña obliga a definir muy bien el modelo de eventos, el foco y la propiedad de cada pantalla.',
    },
    en: {
      name: 'MetaDeck', status: 'Active development', label: 'Modular firmware',
      intro: 'A small device that evolved into an embedded application platform.',
      body: 'A decoupled core handles events, navigation, rendering and communication; interchangeable apps sit on top for music, PC monitoring and media controls.',
      challenge: 'Designing an extensible architecture within a microcontroller’s memory, interface and processing constraints.',
      built: 'An embedded runtime that separates the LCD, encoder, buttons and communications from individual applications. Music Mixer, Hardware Monitor and media controls share navigation and rendering.',
      why: 'The first prototype only controlled music. Turning it into a platform makes it possible to add tools without rewriting the firmware around a single purpose.',
      learned: 'A small interface forces precise decisions about the event model, focus and ownership of every screen.',
    },
  },
  {
    slug: 'cyberdeck',
    stack: 'Raspberry Pi · Linux · DC-DC',
    visual: 'cyberdeck',
    image: '/projects/cyberdeck.png',
    hardware: ['Raspberry Pi', '21 V battery', 'Buck converter', 'Integrated keyboard'],
    software: ['Linux', 'Shell tools', 'Networking', 'BOM workflow'],
    es: {
      name: 'Cyberdeck', status: 'En construcción', label: 'Hardware integrado',
      intro: 'Un ordenador portátil compacto para programar, experimentar y diagnosticar hardware.',
      body: 'Integra una Raspberry Pi, teclado, refrigeración y una cadena de alimentación diseñada alrededor de baterías de herramienta y conversión de 21 V a 5 V.',
      challenge: 'Equilibrar autonomía, entrega de potencia, temperatura y montaje físico en un sistema realmente transportable.',
      built: 'Una arquitectura física y eléctrica para reunir ordenador, pantalla, teclado, refrigeración y acceso a hardware en una carcasa portátil. La BOM documenta coste, estado y función de cada componente.',
      why: 'Buscaba una estación personal que pudiera viajar al banco de trabajo y servir tanto para programar como para interactuar con otros dispositivos.',
      learned: 'En un producto portátil la alimentación, la disipación y la distribución física deben diseñarse juntas desde el principio.',
    },
    en: {
      name: 'Cyberdeck', status: 'Under construction', label: 'Integrated hardware',
      intro: 'A compact portable computer for programming, experimenting and diagnosing hardware.',
      body: 'It integrates a Raspberry Pi, keyboard, cooling and a power chain built around tool batteries and 21 V to 5 V conversion.',
      challenge: 'Balancing runtime, power delivery, temperature and physical assembly in a genuinely portable system.',
      built: 'A physical and electrical architecture that combines a computer, display, keyboard, cooling and hardware access in a portable enclosure. A full BOM tracks the cost, state and purpose of each component.',
      why: 'I wanted a personal workstation that could travel to the workbench and work equally well for programming and interacting with other devices.',
      learned: 'In a portable product, power, thermal management and physical distribution have to be designed together from the start.',
    },
  },
  {
    slug: 'portable-wii',
    stack: 'Nintendo Wii · Custom power · Soldering',
    visual: 'wii',
    image: '/projects/portable-wii.png',
    hardware: ['Wii motherboard', 'RVL-PMS-Lite', 'PMS-PD', '22/33 AWG wiring'],
    software: ['RVLoader', 'Electrical diagnosis', 'Power budgeting', 'Thermal planning'],
    es: {
      name: 'Portable Wii', status: 'Proyecto hardware', label: 'Hardware hacking',
      intro: 'Hardware real de Nintendo Wii transformado en una consola portátil.',
      body: 'Modificación de placa, alimentación personalizada, refrigeración y cableado de señales con componentes especializados como RVL-PMS-Lite y PMS-PD.',
      challenge: 'Diagnosticar fallos eléctricos y entender la distribución de voltajes, el consumo y las modificaciones críticas de la placa.',
      built: 'Un sistema portátil basado en una placa Wii real, con power management, cableado personalizado, modificación U10 y refrigeración específica para CPU y GPU.',
      why: 'Es un ejercicio completo de ingeniería inversa e integración: conservar la compatibilidad del hardware original mientras cambia por completo su formato físico.',
      learned: 'Perder una placa y una PMS-Lite por problemas eléctricos convirtió la protección, la medición previa y la validación por etapas en requisitos del diseño.',
    },
    en: {
      name: 'Portable Wii', status: 'Hardware project', label: 'Hardware hacking',
      intro: 'Real Nintendo Wii hardware transformed into a portable console.',
      body: 'Board modification, custom power, cooling and signal wiring using specialized components such as RVL-PMS-Lite and PMS-PD.',
      challenge: 'Diagnosing electrical failures and understanding voltage distribution, consumption and critical board modifications.',
      built: 'A portable system based on a real Wii motherboard, with power management, custom wiring, a U10 modification and dedicated CPU/GPU cooling.',
      why: 'It is a complete reverse-engineering and integration exercise: preserving compatibility with the original hardware while radically changing its physical form.',
      learned: 'Losing a motherboard and a PMS-Lite to electrical problems turned protection, pre-measurement and staged validation into core design requirements.',
    },
  },
  {
    slug: 'pms2-emulator',
    stack: 'RP2040 · C++ · Pico SDK · I²C',
    visual: 'pms',
    image: '/projects/pms2-emulator.png',
    hardware: ['RP2040 / Pico', 'I²C bus', 'Power sensors'],
    software: ['C++', 'Pico SDK', 'CMake', 'OpenOCD'],
    es: {
      name: 'PMS2 Emulator', status: 'Prototipo de firmware', label: 'Ingeniería inversa',
      intro: 'Un RP2040 que emula la interfaz de gestión de energía esperada por RVLoader.',
      body: 'El firmware reproduce comandos de una PMS2 y expone voltaje, carga, batería, temperatura y estado del cargador a través de I²C.',
      challenge: 'Reconstruir el comportamiento de un protocolo hardware existente y hacerlo fiable dentro de un proyecto C++ depurable.',
      built: 'Un proyecto estructurado con Pico SDK y CMake donde el RP2040 responde como dispositivo I²C y reproduce los registros que consulta el software de la Wii.',
      why: 'Emular la placa permite comprender el contrato real entre RVLoader y el sistema de alimentación, además de abrir la puerta a hardware propio.',
      learned: 'La compatibilidad depende de replicar tiempos, estados y casos límite, no solo de devolver el valor correcto para cada comando.',
    },
    en: {
      name: 'PMS2 Emulator', status: 'Firmware prototype', label: 'Reverse engineering',
      intro: 'An RP2040 that emulates the power-management interface expected by RVLoader.',
      body: 'The firmware reproduces PMS2 commands and exposes battery voltage, charge, percentage, temperature and charger status over I²C.',
      challenge: 'Reconstructing the behavior of an existing hardware protocol and making it reliable inside a debuggable C++ project.',
      built: 'A structured Pico SDK and CMake project where the RP2040 responds as an I²C device and reproduces the registers queried by the Wii software.',
      why: 'Emulating the board reveals the real contract between RVLoader and the power system while opening a path toward custom hardware.',
      learned: 'Compatibility depends on reproducing timing, states and edge cases—not merely returning the right value for each command.',
    },
  },
  {
    slug: 'linux-tab-s9-fe',
    stack: 'ARM64 · Linux kernel · Device Tree',
    visual: 'linux',
    image: '/projects/linux-tab.png',
    hardware: ['Samsung S5E8835', 'ARM64 tablet', 'Touch display', 'USB / wireless'],
    software: ['Linux kernel', 'Device Tree', 'Initramfs', 'Root filesystem'],
    es: {
      name: 'Linux on Tab S9 FE', status: 'Investigación', label: 'Platform bring-up',
      intro: 'Investigar un port de Linux nativo para una tablet Samsung, más allá de ejecutar Linux dentro de Android.',
      body: 'El alcance recorre la cadena completa: kernel, device tree, boot, initramfs, root filesystem y bring-up progresivo de pantalla, touch, USB, red y energía.',
      challenge: 'Convertir el código disponible del kernel Android en una plataforma Linux utilizable pese a los drivers propietarios.',
      built: 'Un plan de bring-up basado en el kernel android_kernel_samsung_s5e8835, separando el arranque mínimo de la habilitación gradual de periféricos.',
      why: 'Una tablet moderna concentra muchos de los retos más interesantes de Linux sobre ARM: boot chain, device trees, firmware y controladores específicos.',
      learned: 'Un port viable necesita hitos pequeños: consola temprana, almacenamiento, pantalla y entrada antes de abordar GPU, audio o power management.',
    },
    en: {
      name: 'Linux on Tab S9 FE', status: 'Research', label: 'Platform bring-up',
      intro: 'Researching a native Linux port for a Samsung tablet, beyond running Linux inside Android.',
      body: 'The scope covers the full chain: kernel, device tree, boot, initramfs, root filesystem and progressive bring-up of display, touch, USB, networking and power.',
      challenge: 'Turning the available Android kernel sources into a usable Linux platform despite proprietary drivers.',
      built: 'A bring-up plan based on android_kernel_samsung_s5e8835, separating minimum boot from the gradual enablement of each peripheral.',
      why: 'A modern tablet concentrates many of the most interesting ARM Linux challenges: boot chain, device trees, firmware and device-specific drivers.',
      learned: 'A viable port needs small milestones: early console, storage, display and input before approaching GPU, audio or power management.',
    },
  },
];

export function getProjects(locale: Locale): Project[] {
  return projectContent.map((project, index) => ({
    slug: project.slug,
    stack: project.stack,
    visual: project.visual,
    image: project.image,
    hardware: project.hardware,
    software: project.software,
    ...project[locale],
    id: String(index + 1).padStart(2, '0'),
  }));
}
