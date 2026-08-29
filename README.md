# ODT Lightweight UI - Reference Application

An enterprise reference implementation and component showcase for `odt-lightweight-ui`, built with React 19, Vite, TypeScript, and Tailwind CSS v4.

---

## Overview

This repository demonstrates the integration patterns, design token workflows, and component composition paradigms of the `odt-lightweight-ui` library in modern React applications.

Key characteristics:
- **Zero CSS-in-JS Runtime**: Built-in CSS Module scoping with build-time stylesheet generation.
- **Tailwind CSS v4 Integration**: Single-line `@import "odt-lightweight-ui/tailwind.css"` mapping all brand, surface, and semantic design tokens into native Tailwind utilities.
- **Strict TypeScript Compliance**: Full type safety with zero `any` types, exact prop contracts, and ref forwarding.
- **Accessible & Composable**: Radix Slot-driven polymorphism (`asChild`), keyboard accessibility, and ARIA conformance.

---

## Technology Stack

| Technology | Version | Description |
| :--- | :--- | :--- |
| **React** | 19.2.x | Core UI library with modern Concurrent Mode and Actions support |
| **Vite** | 8.2.x | Next-generation frontend build tooling and development server |
| **TypeScript** | 6.0.x | Strict type system with full project reference configuration |
| **Tailwind CSS** | 4.3.x | Utility-first CSS framework with native `@theme` integration |
| **ODT Lightweight UI** | 1.1.x | Token-driven, high-performance enterprise UI component package |

---

## Project Structure

```
odt-demo-app/
├── public/
│   ├── favicon.svg             # Application brand icon
│   └── icons.svg               # SVG icon definitions
├── src/
│   ├── assets/                 # Static graphical assets
│   ├── sections/
│   │   ├── OverviewSection.tsx     # Metrics, microservices health, and quotas
│   │   ├── FormsSection.tsx        # Identity credentials, 2FA, and automations
│   │   └── ComponentsSection.tsx   # Subscription cards, events, and primitives
│   ├── App.tsx                 # Main application layout and tab router
│   ├── index.css               # Global stylesheet with Tailwind & ODT imports
│   └── main.tsx                # React root application entrypoint
├── index.html                  # HTML document template and metadata
├── package.json                # Project dependencies and script declarations
├── tsconfig.app.json           # TypeScript application configuration
├── tsconfig.json               # Root TypeScript project reference configuration
├── tsconfig.node.json          # Node and tooling TypeScript configuration
└── vite.config.ts              # Vite configuration with React & Tailwind plugins
```

---

## Getting Started

### Prerequisites

- Node.js `18.0.0` or higher
- npm `9.0.0` or higher (or pnpm / yarn)

### Installation

Clone the repository and install project dependencies:

```bash
git clone https://github.com/your-org/odt-demo-app.git
cd odt-demo-app
npm install
```

### Development Server

Start the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173`.

### Production Build

Type-check and compile the production-ready static assets:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Code Quality & Linting

Run ESLint across all TypeScript source files:

```bash
npm run lint
```

---

## Tailwind CSS v4 & Token Architecture

The application consumes ODT Design Tokens directly through Tailwind CSS v4.

### Global Stylesheet Setup

In `src/index.css`:

```css
@import "tailwindcss";
@import "odt-lightweight-ui/tailwind.css";
```

### Available Token Mappings

The single-line import exposes tokenized utility classes across the application:

- **Colors**: `bg-primary-500`, `text-primary-900`, `bg-secondary-100`, `text-fg`, `text-fg-muted`
- **Surfaces**: `bg-surface`, `bg-surface-muted`, `bg-surface-elevated`
- **Borders & Lines**: `border-line`, `border-line-muted`, `border-primary`
- **Radii**: `rounded-xl`, `rounded-2xl`, `rounded-full`
- **Elevations**: `shadow-card`, `shadow-modal`, `shadow-dropdown`

---

## Component Showcase Highlights

### 1. Overview Section (`src/sections/OverviewSection.tsx`)
- **`StatCard`**: Real-time telemetry indicators with trend direction, progress tracks, and color variants.
- **`Card` with `CardHeader action={...}`**: Clean header actions hosting status `Badge` and action buttons.
- **`ProgressBar`**: Utilization meters for storage volumes and network bandwidth.
- **`Avatar`**: User profile representations supporting custom initials and color variants.

### 2. Forms Section (`src/sections/FormsSection.tsx`)
- **`Input` & `PasswordInput`**: Standard and masked input fields with helper text.
- **`TextArea`**: Multi-line configuration notes.
- **`PinInput`**: Six-digit one-time password (OTP) / 2FA hardware key confirmation.
- **`DropdownMenu`**: Region selector with grouped labels, separators, and active item indicators.
- **`Switch` & `Checkbox`**: Deployment policies and notification webhook triggers.
- **`RadioGroup` & `Radio`**: Interactive plan selection cards.

### 3. Components Section (`src/sections/ComponentsSection.tsx`)
- **`SubscriptionPlanCard`**: Pro tier card featuring subtle gradient background and feature checklists.
- **`EventBookingCard`**: Meeting preview with capsule buttons.
- **`Button` Primitives**: Filled, frosted glass, capsule, ghost, and loading states.
- **`Badge` Primitives**: Subtle, filled, dot indicator, and semantic status variants.

---

## Engineering Standards

- **Strict Typing**: All components, callbacks, and handlers have explicit TypeScript interfaces.
- **No Inline Styles for Layout**: Spacing, flexbox, and grid alignments utilize Tailwind CSS utilities.
- **Safe Rendering**: All components use `safeRender` utilities from `odt-lightweight-ui` to handle mixed React nodes safely.
- **Clean Separation of Concerns**: Modular sections isolate view logic, form states, and interactive dialogues.

---

## License

This project is licensed under the MIT License.
