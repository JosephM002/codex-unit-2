## Level 02 — Name & Email Inputs

## Objective

Add basic name and email fields to the form so the page can collect simple user contact information.

## Benefits (Accessibility & Data Quality)

- `type="email"` provides built-in browser validation for common email formats, reducing invalid submissions.
- Collecting a name helps personalize responses and improves UX for follow-up interactions.
- Using correct input types and attributes improves keyboard and mobile input experiences.

## Complete these tasks

- Add a name input (`<input type="text">`) and an email input (`<input type="email">`) inside the existing form.
- Give each input a unique `id` and a `name` attribute (for example, `name="name"` and `name="email"`).
- Add a minimal accessible name for each field. If full labeling is deferred for this exercise, use `aria-label` or a visible short label; full labeling patterns are covered later in Level 7.
- Mark fields `required` if they should be mandatory for this level.

## Hints

- The browser performs simple format checks for `type="email"`, but server-side validation is still recommended in real projects.
- Use `autocomplete="name"` and `autocomplete="email"` to improve autofill on supported devices.
- Use `placeholder` for example text but do not rely on it as the only accessible label.

## Tag & attribute reference (what to add and why)

- `<input type="text" id="name" name="name" autocomplete="name">`: Purpose: single-line text for a person's name. `autocomplete` helps browsers suggest filled values.
- `<input type="email" id="email" name="email" autocomplete="email">`: Purpose: email-specific input with basic format validation and mobile-friendly keyboard.
- `id` + `name`: Purpose: `id` enables label association; `name` is used in form submission payloads.
- `required`: Purpose: enforces client-side completion before submission.
- `aria-label` (temporary): Purpose: provides an accessible name if a full visible `<label>` is intentionally deferred for this level.

## Usage tips

- Prefer real `<label>` elements when possible; if labels are deferred, provide `aria-label` or visually-hidden labels so assistive tech can announce the field purpose.
- Set `autocomplete` to common tokens (`name`, `email`) to improve form completion on mobile and desktop browsers.
- Keep placeholders short and use them for examples, not as replacements for labels.

## Example

```html
<form>
  <label>Name</label>
  <input name="name" type="text" />

  <label>Email</label>
  <input type="email" />

  <button type="submit">Submit</button>
</form>
```
