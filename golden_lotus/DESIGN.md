# Design System Document: The Enlightened Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Modern Sanctuary"**

This design system transcends traditional religious or community layouts by adopting a "High-End Editorial" aesthetic. We are moving away from the cluttered, "boxed-in" feeling of legacy web design. Instead, we embrace **The Modern Sanctuary**: a digital space characterized by intentional asymmetry, vast breathing room (white space), and a sophisticated layering of gold and cerulean tones.

To break the "template" look, designers must favor **Organic Depth**. This means elements should never feel "pasted" onto a background. Through the use of overlapping typography, staggered image galleries, and subtle tonal shifts, we create an experience that feels curated, premium, and calm. The goal is to guide the user’s eye through a narrative journey rather than a grid-based information dump.

---

## 2. Colors: Tonal Depth & Soul
Our palette balances the warmth of enlightenment (`#F0D13C`) with the serenity of the sky (`#5D7DE9`). 

### The Palette Logic
*   **Primary (`#6e5e00` / `#f0d13c`):** Reserved for moments of high importance and spiritual warmth.
*   **Secondary (`#3456c1` / `#5D7DE9`):** Used for trust-building and calm interaction points.
*   **Surface Tiers:** Use `surface-container-low` (`#f6f3f2`) and `surface-container-highest` (`#e5e2e1`) to define content areas.

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** 
Structural boundaries must be defined solely through background color shifts. For example, a "Latest News" section in `surface-container-low` should sit directly against a `background` (`#fcf9f8`) section without a stroke line.

### The "Glass & Gradient" Rule
To inject visual "soul," avoid flat execution:
*   **Glassmorphism:** Use semi-transparent `surface` colors with a 12px-20px backdrop-blur for floating navigation bars or overlays.
*   **Signature Gradients:** For Hero backgrounds and CTAs, use a subtle linear gradient from `primary` (`#6e5e00`) to `primary_container` (`#f0d13c`) at a 135-degree angle. This adds a "shimmer" effect reminiscent of silk or gold leaf.

---

## 3. Typography: Editorial Authority
We use a high-contrast scale to create an editorial feel. The tension between the geometric `Be Vietnam Pro` (replacing Poppins) and the functional `Inter` (replacing Proxima Nova) creates a modern, authoritative voice.

*   **Display & Headline (Be Vietnam Pro):** These are your "Hero" elements. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for impactful quotes or main headings. Boldness here conveys strength and wisdom.
*   **Title & Body (Inter):** Designed for maximum readability. `body-lg` (1rem) should be used for long-form content with a generous line-height (1.6) to ensure the "Sanctuary" feel isn't lost in dense text.
*   **Label (Inter):** Used for metadata and small tags. Always use `label-md` in uppercase with +0.05em tracking to differentiate from body text.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows and borders are "visual noise." We achieve depth through the **Layering Principle**.

*   **Tonal Stacking:** Place a `surface-container-lowest` card on a `surface-container-low` section. The slight shift in hex value creates a "soft lift" that feels natural and premium.
*   **Ambient Shadows:** If an element must float (e.g., a primary CTA button), use a shadow with a 24px blur, 0% spread, and 6% opacity. The shadow color should be a tinted version of `on-surface` (`#1c1b1b`), never pure black.
*   **The Ghost Border Fallback:** For accessibility in forms, use the `outline-variant` (`#cfc6ae`) at **15% opacity**. It should be felt, not seen.
*   **Surface Nesting:** Deeply nested information should move "up" the tier (e.g., Background -> Container Low -> Container High) to visually signal importance and proximity to the user.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary_container` (`#f0d13c`) with `on_primary_container` text. 0.75rem (`md`) rounded corners. No border.
*   **Secondary:** Glassmorphic effect—semi-transparent `secondary_fixed` with a subtle backdrop blur.
*   **Tertiary:** Text-only with a 2px underline in `primary` that expands on hover.

### Cards & Lists
*   **The "No Divider" Mandate:** Forbid the use of horizontal rules (`<hr>`). Separate list items using 24px of vertical white space or a very subtle background shift on hover (`surface-container-high`).
*   **Imagery:** All card images should feature a `lg` (1rem) corner radius to maintain the "Soft Minimalism" feel.

### Input Fields
*   **Styling:** Use `surface-container-lowest` for the field background. Labels should be `label-md` in `on_surface_variant`.
*   **States:** On focus, transition the background to `white` and add a "Ghost Border" of `primary` at 20% opacity.

### Featured Quote (Bespoke Component)
*   A large-scale typographic component using `display-sm` in `secondary`. Place it asymmetrically on the page, overlapping a `surface-container-low` background block to break the grid.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Asymmetry:** Offset images from text blocks to create a dynamic, editorial flow.
*   **Prioritize White Space:** If a section feels "tight," double the padding. The "Sanctuary" needs room to breathe.
*   **Use Subtle Transitions:** All hover states should have a 300ms ease-in-out transition.

### Don’t:
*   **Don't use pure black text:** Always use `on_surface` (`#1c1b1b`) to keep the interface feeling soft.
*   **Don't use standard shadows:** Never use default "Drop Shadow" presets. Always manually calibrate for "Ambient" diffusion.
*   **Don't "Box" Content:** Avoid wrapping every section in a container with a border. Let the content's alignment and background shifts do the work.