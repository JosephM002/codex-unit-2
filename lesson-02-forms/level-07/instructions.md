## Level 07 — Labels & Accessibility

## Objective

Add and verify accessible labels for each form control. Practice both implicit (wrapping) and explicit (`for` + `id`) labeling methods.

## Benefits (Accessibility)

- Proper labels ensure screen readers announce the purpose of controls and help users who rely on assistive technologies.
- Labels improve click and focus behavior for controls, increasing usability for keyboard and pointer users.

## Complete these tasks

- Ensure every input, select, and textarea has an associated visible label using either `<label for="...">` or by wrapping the control.
- Where appropriate, demonstrate both implicit and explicit labeling in the form.

## Hints

- For explicit labels, the `for` attribute must exactly match the input `id`.
- Avoid using `placeholder` as a substitute for labels; placeholders are not a reliable accessibility mechanism.

## Tag & attribute reference (what to add and why)

- `<label for="email">Email</label>` + `<input id="email" name="email" type="email">`: Purpose: explicit association.
- `<label>Username <input name="username" type="text"></label>`: Purpose: implicit association by wrapping.
- `aria-label` or visually-hidden labels: Purpose: temporary accessible names when visual labels are not possible.

## Usage tips

- Prefer visible labels; use `aria-label` only when a visible label cannot be presented.
- Keep label text concise and descriptive (e.g., "Email address" rather than just "Email").

## Example

```html
<form>
	<label for="username">Username</label>
	<input id="username" name="username" type="text">

	<label>
		Password
		<input name="password" type="password">
	</label>

	<button type="submit">Sign in</button>
</form>
```
