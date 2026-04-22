## Level 06 — Combining Layout Rules

### Objective

Use width, margin, `inline-block` (or floats) to compose a simple 2-column layout while reasoning about the box model.

### Benefits

- Practice real-world layout decisions and spacing trade-offs.

### Complete these tasks

- Create two columns that sit side by side on desktop widths.
- Use `box-sizing` or adjusted widths so padding and borders don't break the layout.

### Hints

- `box-sizing: border-box` makes width include padding and border.
- Keep combined widths + margins ≤ 100% to avoid wrapping.

### More information

- Consider small gutters using margins or gap patterns.

### Usage tips

- Test with different viewport widths to ensure stability.

### Example

Use `.col { box-sizing: border-box; width: 48%; margin: 1%; }`.
