# ODT Demo App

Reference implementation showcasing components and design tokens from [`odt-lightweight-ui`](https://www.npmjs.com/package/odt-lightweight-ui).

[Storybook](https://odt-lightweight.piaxel.com/storybook/) · [React Guide](https://odt-lightweight.piaxel.com/storybook/index.html?path=/story/overview-react-npm-package--documentation) · [Dark Mode Guide](https://odt-lightweight.piaxel.com/storybook/index.html?path=/story/overview-dark-mode-guide--documentation)

---

## Showcase Branches

This repository includes dedicated branches demonstrating different styling and token workflows:

| Branch | Description | Switch Command |
| :--- | :--- | :--- |
| **`main`** | Baseline implementation using standard ODT design tokens. | `git checkout main` |
| **`override-token`** | Demonstrates custom design token overrides (brand colors, radius scale, and surfaces). | `git checkout override-token` |
| **`theme`** | Demonstrates theme switching and dark mode token configuration. | `git checkout theme` |

---

## Tech Stack

- React 19
- Vite 6
- TypeScript 5
- Tailwind CSS v4
- ODT Lightweight UI (`odt-lightweight-ui`)

---

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

---

## Styling & Tokens

Tailwind CSS v4 integration via `src/index.css`:

```css
@import "tailwindcss";
@import "odt-lightweight-ui/tailwind.css";
```

This maps all ODT tokens to Tailwind utility classes:

- **Colors:** `bg-primary-500`, `text-primary-900`, `bg-secondary-100`, `text-fg`, `text-fg-muted`
- **Surfaces:** `bg-surface`, `bg-surface-muted`, `bg-surface-elevated`
- **Borders:** `border-line`, `border-line-muted`, `border-primary`
- **Radius:** `rounded-xl`, `rounded-2xl`, `rounded-full`
- **Shadows:** `shadow-card`, `shadow-modal`, `shadow-dropdown`

---

## Project Structure

```
odt-demo-app/
├── src/
│   ├── sections/
│   │   ├── OverviewSection.tsx     # Metrics, telemetry cards, progress bars
│   │   ├── FormsSection.tsx        # Inputs, dropdowns, switches, radio groups
│   │   └── ComponentsSection.tsx   # Buttons, badges, cards, modals, toasts
│   ├── App.tsx                     # Main layout & tab navigation
│   ├── index.css                   # Global styles & Tailwind import
│   └── main.tsx                    # React entrypoint
├── package.json
└── vite.config.ts
```

---

## Documentation

- [Storybook Overview](https://odt-lightweight.piaxel.com/storybook/)
- [React Package Setup & Token Reference](https://odt-lightweight.piaxel.com/storybook/index.html?path=/story/overview-react-npm-package--documentation)
- [Dark Mode Architecture & Token Setup](https://odt-lightweight.piaxel.com/storybook/index.html?path=/story/overview-dark-mode-guide--documentation)

---

## License

[MIT](LICENSE)
