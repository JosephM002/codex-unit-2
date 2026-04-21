## Level 10 — Debugging & Fixing Common Mistakes

## Objective

Find and fix common form mistakes such as missing labels, duplicate ids, incorrect input types, and missing submit controls.

## Benefits (Reliability & Accessibility)

- Fixing these issues improves accessibility and reduces bugs that affect form behavior and validation.

## Complete these tasks

- Inspect the form for missing `label`/`id` pairs and add labels where needed.
- Remove duplicate ids so each `id` is unique in the document.
- Verify input types are appropriate for the data expected and ensure a submit control exists.

## Hints

- Use the browser inspector to search for duplicate ids or elements missing labels.

## Tag & attribute reference (what to check and why)

- `id` uniqueness: Purpose: `id` must be unique for label associations and JS selectors.
- `for` + `id` label pairs: Purpose: ensures explicit label association.
- Input `type`: Purpose: ensure the type matches expected content (email, tel, number, etc.).

## Usage tips

- Test keyboard-only navigation and screen-reader announcements to catch accessibility regressions.

## Example

```html
<form>
	<label for="email">Email</label>
	<input id="email" name="email" type="email">

	<button type="submit">Send</button>
</form>
```
