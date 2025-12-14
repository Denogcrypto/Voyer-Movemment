<<<<<<< HEAD
# Voyer - MVP para Hackathon Movemment

Plataforma descentralizada donde usuarios pueden comprar contenido exclusivo de creadores mediante el protocolo x402 en la blockchain Movemment (L1 con Move).

## Descripcion del Proyecto

Voyer es una plataforma que conecta creadores de contenido con usuarios a traves de una interfaz intuitiva que combina:
- Chat con agente IA para descubrir contenido
- Panel de creador para subir contenido
- Pagos descentralizados via x402
- Estetica lo-fi minimalista

## Estado del MVP

Este MVP se enfoca en la interfaz visual completa. Las siguientes funcionalidades son **SOLO VISUALES**:

- Boton "Connect Wallet" (presente pero no funcional)
- Chat de usuario (skeleton visual, no envia mensajes)
- Formulario de creador (no sube archivos realmente)
- No hay integracion con blockchain
- No hay backend

**Lo que SI funciona:**
- Navegacion entre paginas (/, /voyer, /spied-on)
- Layouts completos y responsivos
- Estetica lo-fi consistente

## Stack Tecnico

- React 18.2
- Vite 5.0
- React Router 6.20
- Tailwind CSS 3.4
- Paleta de colores lo-fi personalizada

## Instalacion y Ejecucion

### Prerrequisitos
- Node.js 16+ instalado
- npm o yarn

### Pasos

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar servidor de desarrollo:
```bash
npm run dev
```

3. Abrir en el navegador:
```
http://localhost:5173
```

4. Para construir para produccion:
```bash
npm run build
```

5. Para previsualizar el build de produccion:
```bash
npm run preview
```

## Estructura del Proyecto

```
Voyer/
├── docs/                          # Documentacion .txt (sin markdown)
│   ├── 01_concepto_general.txt
│   ├── 02_arquitectura_tecnica.txt
│   ├── 03_flujo_usuario.txt
│   ├── 04_flujo_creador.txt
│   ├── 05_integracion_x402.txt
│   └── 06_roadmap_futuro.txt
├── src/
│   ├── components/
│   │   ├── common/               # Button, Card, Header
│   │   ├── user/                 # ChatInterface, MessageBubble, ChatInput
│   │   └── creator/              # UploadForm, TagInput
│   ├── pages/
│   │   ├── Home.jsx              # Pagina principal
│   │   ├── VoyerPage.jsx         # Chat de usuario
│   │   └── SpiedOnPage.jsx       # Panel de creador
│   ├── styles/
│   │   └── theme.js              # Paleta lo-fi
│   ├── App.jsx                   # React Router config
│   └── index.css                 # Estilos globales Tailwind
├── package.json
├── tailwind.config.js            # Config Tailwind con paleta lo-fi
└── vite.config.js
```

## Paleta de Colores - Modern Dark Theme

El proyecto utiliza una estética moderna en modo oscuro, implementada principalmente con clases de utilidad de Tailwind CSS.

### Fondos (Backgrounds)
- **Main Background**: Slate 900 (`#0f172a`)
- **Card/Glass Effect**: White/5% (`rgba(255, 255, 255, 0.05)`) con Backdrop Blur

### Gradientes y Acentos Principales
- **Primary Brand**: Indigo 500 (`#6366f1`)
- **Secondary Brand**: Cyan 400 (`#22d3ee`)
- **Creator Brand**: Pink 500 (`#ec4899`) to Purple 400 (`#c084fc`)

### Textos
- **Headings**: White (`#ffffff`) con efectos `bg-clip-text`
- **Body**: Slate 400 (`#94a3b8`)
- **Muted**: Slate 500 (`#64748b`)

## Navegacion

### Pagina Home (/)
- Logo "Voyer" centrado
- Boton "Voyer" -> redirige a /voyer
- Boton "Spied On" -> redirige a /spied-on
- Boton "Connect Wallet" (no funcional)

### Pagina Voyer (/voyer)
- Chat con agente (visual)
- Mensajes de ejemplo pre-cargados
- Input de chat (no funcional)

### Pagina Spied On (/spied-on)
- Formulario de publicacion (visual)
- Campos: nombre, tags, upload
- Boton publicar (no funcional)

## Proximos Pasos (Post-MVP)

1. Integracion de wallet Movemment
2. Desarrollo de smart contracts en Move
3. Implementacion de agente IA funcional
4. Sistema de upload real de contenido
5. Integracion con protocolo x402 para pagos

Ver `docs/06_roadmap_futuro.txt` para el roadmap completo.

## Documentacion

Toda la documentacion del proyecto se encuentra en la carpeta `docs/` en formato .txt:

- **01_concepto_general.txt**: Vision y objetivos del proyecto
- **02_arquitectura_tecnica.txt**: Stack tecnologico y arquitectura
- **03_flujo_usuario.txt**: Experiencia del usuario consumidor
- **04_flujo_creador.txt**: Experiencia del creador de contenido
- **05_integracion_x402.txt**: Detalles del protocolo de pagos
- **06_roadmap_futuro.txt**: Fases de desarrollo post-hackathon

## Licencia

MIT License - Ver archivo LICENSE para mas detalles

## Hackathon

Proyecto desarrollado para el hackathon de Movemment, una blockchain Layer 1 que utiliza el lenguaje Move para smart contracts.
=======
# Voyer-Movemment
Projecto Blockchain Layer 1 que utiliza el lenguaje Move para smart contracts
>>>>>>> d83e12e4b6fe137a23035ffee4d2be859ffc12ff
