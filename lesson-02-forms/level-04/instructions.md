## Level 04 — Input Types

## Objective

Practice using appropriate input `type` attributes so each control is optimized for its expected data and device input method.

## Benefits (Data Quality & UX)

- Choosing correct `type` values provides built-in browser behaviors (validation, mobile keyboards) and improves data quality.
- Users on mobile devices get better keyboard layouts for email, telephone, and numeric input.

## Complete these tasks

- Add inputs using `type` attributes such as `email`, `tel`, `password`, `number`, `range`, and `file` where appropriate.
- For `range` inputs, include `min` and `max` attributes and provide a visible label.

## Hints

- Use `input[type="file"]` for file selection; note that server handling is out of scope for this exercise.
- `type="tel"` does not validate content but provides a phone-style keyboard on many devices.

## Tag & attribute reference (what to add and why)

- `<input type="email">`: basic browser format checks and email keyboard on mobile.
- `<input type="tel">`: phone-optimized keyboard; pair with pattern or server validation if needed.
- `<input type="password">`: obscures input for sensitive fields.
- `<input type="number" min="0" max="10">`: numeric input with optional spinner controls.
- `<input type="range" min="0" max="100">`: slider UI for numeric ranges.
- `<input type="file">`: opens file chooser; include an associated label.

## Usage tips

- Use `placeholder` for example content, but include a label for accessibility.
- For `number` and `range`, set sensible `min`, `max`, and `step` values to guide input.

## Example

```html
<form>
  <label>Email</label>
  <input name="email" type="email" autocomplete="email" />

  <label>Phone</label>
  <input name="phone" type="tel" autocomplete="tel" />

  <label>Volume</label>
  <input name="volume" type="range" min="0" max="100" />

  <button type="submit">Submit</button>
</form>
```
