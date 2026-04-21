## Level 09 — Basic Validation

## Objective

Add basic client-side validation attributes to controls so the browser can provide immediate feedback.

## Benefits (User Feedback & Data Quality)

- Attributes like `required`, `minlength`, and `maxlength` reduce invalid submissions and improve UX by showing inline validation messages.
- Validation attributes are a first defense; server-side validation remains essential.

## Complete these tasks

- Mark at least one key field with `required`.
- Add `minlength` and/or `maxlength` to text inputs where appropriate.
- For numeric or range inputs, include `min` and `max` values.

## Hints

- Browser validation messages vary by browser and locale; do not rely on them for security.

## Tag & attribute reference (what to add and why)

- `required`: Purpose: prevents form submission when the field is empty.
- `minlength` / `maxlength`: Purpose: constrain text length for meaningful input.
- `min` / `max`: Purpose: constrain numeric or range inputs to valid ranges.

## Usage tips

- Use `pattern` with a regular expression for more specific format checks when needed.
- Provide helpful `title` attributes or inline messages if browser validation messages are not sufficient.

## Example

```html
<form>
	<label for="username">Username</label>
	<input id="username" name="username" type="text" required minlength="3" maxlength="20">

	<label for="rating">Rating</label>
	<input id="rating" name="rating" type="range" min="1" max="5">

	<button type="submit">Submit</button>
</form>
```
