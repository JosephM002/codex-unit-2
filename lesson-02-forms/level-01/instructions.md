## Level 01 — Intro & Boilerplate

## Objective

Add a basic, accessible form element to the page that accepts user input and can be submitted.

## Benefits (Accessibility & UX)

- Forms provide a clear interaction model for users to enter data and perform actions.
- Proper labels and structure make form controls discoverable and operable by assistive technologies (screen readers, voice input).
- Using correct form semantics improves keyboard usability and reduces friction for people using assistive tech or alternative input methods.

## Complete these tasks

- Add a `<form>` element to the page.
- Inside the form, add one text input (for example, a name or search field) and at least one submit control.
- Add an associated `<label>` for the input so the field has an accessible name.
- Ensure the submit control is reachable and operable via keyboard (use `<button type="submit">` or `<input type="submit">`).

## Hints

- Avoid replacing form semantics with `div` or other non-interactive elements.

## Tag & attribute reference (what to add and why)

- `<form>`: Purpose: groups fields and defines submission behavior.
- `<label>`: Purpose: provides an accessible name for form controls.
- `<input type="text">`: Purpose: basic single-line text field.
- `<button type="submit">` or `<input type="submit">`: Purpose: triggers form submission. Prefer `<button>` for richer content and styling.

## Usage tips

- Place the `label` near its control visually.
- Keep the form simple for this level: one input + a submit control is sufficient.

## Example

```html
<form>
  <label>Your name</label>
  <input type="text" />
  <button type="submit">Send</button>
</form>
```
