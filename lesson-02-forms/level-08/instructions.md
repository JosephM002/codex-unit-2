## Level 08 — Grouping Controls

## Objective

Use `<fieldset>` and `<legend>` to group related controls and provide semantic context for assistive technologies.

## Benefits (Semantics & Accessibility)

- Grouping related controls clarifies structure for screen readers and provides an accessible grouping label with `legend`.
- Fieldsets improve keyboard navigation context for complex forms.

## Complete these tasks

- Wrap related inputs (for example, address or preferences) in a `<fieldset>` and provide a descriptive `<legend>`.
- Ensure controls inside the fieldset have associated labels.

## Hints

- Use `fieldset` for grouped radios or logically-related inputs.

## Tag & attribute reference (what to add and why)

- `<fieldset>`: Purpose: group related form controls.
- `<legend>`: Purpose: provides a caption for the grouped controls and is announced by screen readers.

## Usage tips

- Keep `legend` concise and descriptive. When grouping radios, put the question/context in the legend.

## Example

```html
<form>
	<fieldset>
		<legend>Contact preferences</legend>
		<label><input type="checkbox" name="email"> Email</label>
		<label><input type="checkbox" name="sms"> SMS</label>
	</fieldset>

	<button type="submit">Save</button>
</form>
```
