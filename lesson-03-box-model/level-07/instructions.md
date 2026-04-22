## Level 07 — Box-Sizing & Responsive Considerations

### Objective

Compare `box-sizing: content-box` vs `box-sizing: border-box` and apply the proper model for responsive sizing.

### Benefits

- Prevents surprising size changes when adding padding/borders.

### Complete these tasks

- Toggle `box-sizing` on example elements and note width differences.
- Apply a global border-box rule and explain its benefits.

### Hints

- `content-box` calculates width from the content only.
- `border-box` includes padding and border inside the declared width.

### More information

- Many projects adopt `*, *::before, *::after { box-sizing: border-box }`.

### Usage tips

- Use `border-box` to make element sizing more predictable.

### Example

Try `.box { box-sizing: border-box }` on all elements.
