# ODT Demo App (Branch: `theme`)

Reference implementation showcasing **Dark Mode & Theme Switching** in [`odt-lightweight-ui`](https://www.npmjs.com/package/odt-lightweight-ui).

[Storybook](https://odt-lightweight.piaxel.com/storybook/) · [React Guide](https://odt-lightweight.piaxel.com/storybook/index.html?path=/story/overview-react-npm-package--documentation) · [Dark Mode Guide](https://odt-lightweight.piaxel.com/storybook/index.html?path=/story/overview-dark-mode-guide--documentation)

---

## About This Branch

This branch demonstrates how to configure and toggle **Dark Mode** seamlessly across the entire application:

- **Theme Toggle Button:** Integrated in `src/App.tsx` to toggle the `.dark` class on `document.documentElement`.
- **Single Token Definition:** Defined under `.dark, [data-theme="dark"]` in `src/index.css`.
- **Automatic Component Adaptation:** All UI primitives (`Card`, `Input`, `Button`, `Badge`, `DropdownMenu`, `StatCard`) adapt surfaces, borders, and text contrast without custom component logic.

### How Dark Mode Tokens Are Configured

In `src/index.css`:

```css
@import "tailwindcss";
@import "odt-lightweight-ui/tailwind.css";

.dark,
[data-theme="dark"] {
  /* Surfaces & Elevation */
  --color-surface: hsl(224 25% 6%);
  --color-surface-elevated: hsl(224 20% 10%);
  --color-surface-muted: hsl(224 16% 15%);

  /* Foregrounds & Typography */
  --color-fg-strong: hsl(210 40% 98%);
  --color-fg: hsl(215 20% 88%);
  --color-fg-muted: hsl(215 16% 65%);

  /* Borders & Shadows */
  --color-line: hsl(224 14% 18%);
  --color-line-muted: hsl(224 14% 14%);
  --shadow-card: 0 8px 26px hsl(0 0% 0% / 0.5);
}
```

### Theme Toggle Implementation

In `src/App.tsx`:

```tsx
const [isDark, setIsDark] = useState(() =>
  document.documentElement.classList.contains("dark"),
);

const toggleTheme = () => {
  const next = !isDark;
  setIsDark(next);
  document.documentElement.classList.toggle("dark", next);
};
```

---

## Showcase Branches

| Branch                  | Description                                                                            | Switch Command                |
| :---------------------- | :------------------------------------------------------------------------------------- | :---------------------------- |
| **`main`**              | Baseline implementation using standard ODT design tokens.                              | `git checkout main`           |
| **`override-token`**    | Demonstrates custom design token overrides (brand colors, radius scale, and surfaces). | `git checkout override-token` |
| **`theme`** _(current)_ | Demonstrates theme switching and dark mode token configuration.                        | `git checkout theme`          |

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
│   ├── App.tsx                     # Main layout & dark mode toggle
│   ├── index.css                   # Dark mode CSS tokens & Tailwind imports
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
