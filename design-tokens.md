# Design tokens — San Bartolomé de Pinares

Extraídos de Figma: [san-bartolo](https://www.figma.com/design/oFJPlzxOu28Muw49NtvugL/san-bartolo)  
Nodo de componentes: [`07. Componentes` (78:1159)](https://www.figma.com/design/oFJPlzxOu28Muw49NtvugL/san-bartolo?node-id=78-1159)

Implementación en código:

- CSS: [`src/styles/tokens.css`](src/styles/tokens.css)
- TypeScript: [`src/styles/tokens.ts`](src/styles/tokens.ts)
- Tailwind v4 (`@theme`): [`src/app/globals.css`](src/app/globals.css)

---

## Colores

### Neutral

| Token Figma | Valor | CSS / Tailwind |
|-------------|-------|----------------|
| Neutral/100 | `#ffffff` | `--neutral-100` / `neutral-100` |
| Neutral/150 | `#f7fafb` | `--neutral-150` / `neutral-150` |
| Neutral/200 | `#d4e4ea` | `--neutral-200` / `neutral-200` |
| Neutral/400 | `#9baab0` | `--neutral-400` / `neutral-400` |
| Neutral/500 | `#1d292e` | `--neutral-500` / `neutral-500` |
| Neutral/600 | `#000305` | `--neutral-600` / `neutral-600` |

### Primary / Secondary / Accent

| Token Figma | Valor | Uso |
|-------------|-------|-----|
| Primary/100 | `#124455` | Azul oscuro |
| Primary/300 | `#9acce0` | = Background/Blue |
| Secondary/100 | `#77975a` | Verde oscuro |
| Secondary/300 | `#afd091` | = Background/Green |
| Secondary/400 | `#cceeae` | Hover botón |
| Accent/100 | `#c37259` | Coral texto / acento |
| Accent/300 | `#ffab8f` | = Background/Coral · **hover de links** |

### Text, Link & Background

| Token Figma | Valor |
|-------------|-------|
| Text/title | `#1d292e` |
| Text/paragraph | `#000305` |
| Link default / selected | `#000305` (`--link-default` / `--link-selected`) |
| Link hover | `#ffab8f` (`--link-hover` = Accent/300) |
| Background/White | `#ffffff` |
| Background/Blue | `#9acce0` |
| Background/Green | `#afd091` |
| Background/Coral | `#ffab8f` |
| Background/Grey-light | `#f7fafb` |
| Background/Grey | `#d4e4ea` |

---

## Tipografía

### Familias

| Token Figma | Familia | Rol |
|-------------|---------|-----|
| Font-family/Montserrat | Montserrat | Títulos, nav, links, botones |
| Font-family/Lora | Lora | Párrafos, subtítulos |
| Font-family/Bad Script | Bad Script | Textos acento |
| *(hardcoded en logo)* | DM Serif Display | Marca / logo |

### Escalas

| Tipo | Tokens |
|------|--------|
| Size | 14, 16, 18, 20, **22**, 24, **26**, **30**, 32 |
| Weight | 400, 700 |
| Line-height | 24, 26, 32 |
| Letter-spacing | 0, 2, 4 |

### Responsive (móvil → desktop)

| Uso | Móvil | Desktop | CSS |
|-----|-------|---------|-----|
| Title h1 | 24 | 32 | `--title-h1-size-mobile` / `-desktop` |
| Title h2 | 20 | 24 | `--title-h2-size-mobile` / `-desktop` |
| Accent Text | 22 | 24 | `--accent-text-size-mobile` / `-desktop` |
| Logo nav | 20 | 24 | `--logo-nav-size-mobile` / `-desktop` |
| Logo footer | 26 | 30 | `--logo-footer-size-mobile` / `-desktop` |

### Text styles (composiciones semánticas)

| Estilo Figma | Familia | Size | Weight | LH | Tracking | Extra | Color |
|--------------|---------|------|--------|----|----------|-------|-------|
| Link | Montserrat | 14 | 400 | 24 | 2 | uppercase | Neutral/600 |
| Link Selected | Montserrat | 14 | 700 | 24 | 2 | uppercase | Neutral/600 |
| Link hover | Montserrat | 14 | 700 | 24 | 2 | uppercase | **Accent/300** |
| Title h1 | Montserrat | 32 | 400 | 32 | 4 | uppercase | Text/title |
| Title h2 | Montserrat | 24 | 400 | 32 | 4 | uppercase | Text/title |
| Title h3 | Montserrat | 16 | 400 | 24 | 4 | uppercase | Text/title |
| ImagenWithTitle-Title | Montserrat | 18 | 400 | 32 | 4 | uppercase | — |
| ImagenWithTitle-Paragrap | Lora | **14** | 400 | 24 | 0 | — | — |
| Subtitle | Lora | 16 | 400 | 26 | 0 | — | — |
| Paragraph | Lora | 16 | 400 | 24 | 0 | — | — |
| Texto boton | Montserrat | 18 | 400 | 24 | 0 | uppercase | — |
| Accent Text | Bad Script | 24 | 400 | 32 | 0 | — | Accent/100 |

---

## Espaciado

| Tipo | Valores (px) |
|------|----------------|
| Gap | 2, 4, 8, 12, 16, 20, 24, 32, 40, 60 |
| Padding | 4, 12, 16, 20, 24, 36, 40, 120, **150** |
| Margin | **16**, 40, 60, 80 |

### Section spacing

Padding vertical semántico de secciones — Figma `Section-spacing/{size}/{side}`.  
Valores **responsive** (móvil → desktop desde `sm` / 640px), equivalentes a modos Dimensions.

| Token Figma | Móvil | Desktop | CSS / Tailwind |
|-------------|-------|---------|----------------|
| Section-spacing/l/top | 24px | 40px | `--section-spacing-l-top` / `pt-section-l-top` |
| Section-spacing/l/bottom | 24px | 40px | `--section-spacing-l-bottom` / `pb-section-l-bottom` |
| Section-spacing/xl/top | 40px | 80px | `--section-spacing-xl-top` / `pt-section-xl-top` |
| Section-spacing/xl/bottom | 40px | 80px | `--section-spacing-xl-bottom` / `pb-section-xl-bottom` |

Atajos simétricos: `py-section-l`, `py-section-xl`.

| Otro | Móvil | Desktop | Uso |
|------|-------|---------|-----|
| Padding/150 | 80px | 150px | `FirstSection` (`py-150`) |

---

## Radios

| Token Figma | Valor |
|-------------|-------|
| Radii/xs | 4px |
| Radii/s | 8px |
| Radii/m | 16px |

---

## Uso rápido en Tailwind

```tsx
<div className="bg-background-blue text-text-title rounded-s p-40 gap-32">
  <h2 className="font-montserrat text-[length:var(--size-24)] tracking-[var(--letter-spacing-4)] uppercase">
    Título
  </h2>
  <p className="font-lora text-[length:var(--size-16)] leading-[var(--line-height-26)]">
    Párrafo
  </p>
  <a className="hover:text-link-hover">Link</a>
</div>
```
