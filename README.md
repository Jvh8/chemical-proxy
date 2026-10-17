# Chemical Proxy

A simple self-hosted web proxy built with **[ChemicalJS](https://github.com/chemicaljs/chemical)** (v3) + Scramjet.

Inspired by / based on the tech behind [InvisiProxy](https://invisiproxy.com) and the ChemicalJS framework.

## Features

- Scramjet-based proxying (modern, good site support)
- Epoxy or Libcurl transports
- Built-in adblocking (optional)
- Clean Svelte 5 UI with navigation controls
- Vite plugin for easy development
- Production server ready

## Quick Start

### Requirements
- Node.js 20+
- pnpm (recommended) or npm

### Install

```bash
pnpm install
# or
npm install
```

### Development

```bash
pnpm dev
```

Opens at `http://localhost:5173`. The Chemical Vite plugin handles the proxy routes and service worker during development.

### Production

```bash
pnpm build
pnpm start
```

Server runs on `http://localhost:8000` (or `$PORT`).

## How it works

- `Chemical` component initializes Scramjet + transport + service worker
- `Frame` component creates a proxied iframe
- Server (or Vite plugin) serves the Scramjet assets and handles WebSocket upgrades for Wisp

## License

This project uses ChemicalJS which is licensed under **AGPL-3.0**.  
Your modifications and the combined work must also comply with AGPL-3.0 if you distribute it.

## Credits

- [ChemicalJS](https://github.com/chemicaljs/chemical) by Nebelung / Titanium Network related projects
- Scramjet, Epoxy, Libcurl by Mercury Workshop
- Inspired by InvisiProxy LTS
