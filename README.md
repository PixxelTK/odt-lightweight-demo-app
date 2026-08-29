# ODT Demo App (Branch: `override-token`)

Reference implementation showcasing **Design Token Overrides** in [`odt-lightweight-ui`](https://www.npmjs.com/package/odt-lightweight-ui).

[Storybook](https://odt-lightweight.piaxel.com/storybook/) · [React Guide](https://odt-lightweight.piaxel.com/storybook/index.html?path=/story/overview-react-npm-package--documentation) · [Dark Mode Guide](https://odt-lightweight.piaxel.com/storybook/index.html?path=/story/overview-dark-mode-guide--documentation)

---

## About This Branch

This branch demonstrates how to re-theme an entire application by overriding CSS custom properties in `src/index.css` without modifying any component JSX or props:

- **Primary Brand Theme:** Overridden from default Indigo to **Vibrant Orange** (`hsl(25 95% 50%)`).
- **Secondary Brand Theme:** Overridden from default Amber to **Emerald / Jade** (`hsl(160 70% 44%)`).
- **Neutral Palette:** Overridden with a cool **Slate** scale.
- **Component Adoption:** All UI primitives (`Button`, `Badge`, `Card`, `Input`, `Switch`, `DropdownMenu`) instantly adapt their active, hover, surface, and border states.

### How Tokens Are Overridden

In `src/index.css`, custom token definitions are placed directly under `:root` after the stylesheet import:

```css
@import "tailwindcss";
@import "odt-lightweight-ui/tailwind.css";

:root {
  /* Primary Palette (Vibrant Orange) */
  --color-primary-500: hsl(25 95% 50%);
  --color-primary-600: hsl(25 95% 44%);

  /* Secondary Palette (Emerald / Jade) */
  --color-secondary-500: hsl(160 70% 44%);
  --color-secondary-600: hsl(160 72% 38%);

  /* Surfaces & Lines */
  --color-surface-primary: hsl(25 95% 50%);
  --color-surface-secondary: hsl(160 70% 44%);
  --color-line-primary: hsl(25 95% 50%);
  --color-ring: hsl(25 95% 50%);
}
```

---

## Showcase Branches

| Branch                           | Description                                                                            | Switch Command                |
| :------------------------------- | :------------------------------------------------------------------------------------- | :---------------------------- |
| **`main`**                       | Baseline implementation using standard ODT design tokens.                              | `git checkout main`           |
| **`override-token`** _(current)_ | Demonstrates custom design token overrides (brand colors, radius scale, and surfaces). | `git checkout override-token` |
| **`theme`**                      | Demonstrates theme switching and dark mode token configuration.                        | `git checkout theme`          |

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

## Project Structure

```
odt-demo-app/
├── src/
│   ├── sections/
│   │   ├── OverviewSection.tsx     # Metrics, telemetry cards, progress bars
│   │   ├── FormsSection.tsx        # Inputs, dropdowns, switches, radio groups
│   │   └── ComponentsSection.tsx   # Buttons, badges, cards, modals, toasts
│   ├── App.tsx                     # Main layout & tab navigation
│   ├── index.css                   # Custom token overrides & Tailwind imports
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
