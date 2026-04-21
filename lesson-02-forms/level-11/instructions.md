## Level 11 — Integrate & Polish

## Objective

Combine earlier exercises to produce a polished, accessible, and validated contact form that follows best practices.

## Benefits (Full Form Readiness)

- Integrating all patterns (labels, groups, validation, accessible controls) results in a reliable and usable form.

## Complete these tasks

- Ensure every control has an associated label and unique `id` where used.
- Use `fieldset` and `legend` to group related fields when appropriate.
- Add validation attributes (`required`, `minlength`, etc.) and verify a submit control exists.

## Hints

- Run through the accessibility checklist (keyboard navigation, label associations, focus order) before finishing.

## Tag & attribute reference (what to add and why)

- `label` + `id`: Purpose: accessible names for controls.
- `fieldset` / `legend`: Purpose: group related controls semantically.
- Validation attributes: Purpose: provide client-side feedback for required fields and acceptable ranges.

## Usage tips

- Test the form with keyboard-only navigation and a screen reader if available.
- Verify autofill/autocomplete by using sensible `name` and `autocomplete` tokens.

## Example

```html
<form>
	<label for="name">Name</label>
	<input id="name" name="name" type="text" required>

	<label for="email">Email</label>
	<input id="email" name="email" type="email" required>

	<label for="message">Message</label>
	<textarea id="message" name="message" rows="4"></textarea>

	<button type="submit">Send message</button>
</form>
```
