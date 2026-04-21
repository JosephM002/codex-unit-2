## Level 03 — Message Field & Submit

## Objective

Add a multi-line message field to the form so users can submit longer text, and ensure a submit control is present.

## Benefits (Usability & Accessibility)

- A `<textarea>` lets users provide longer feedback or messages compared with a single-line input.
- Proper labeling and sizing improves readability and interaction for keyboard and screen-reader users.

## Complete these tasks

- Add a `<textarea>` for message input and ensure it has a `name` attribute (e.g., `name="message"`).
- Ensure a submit control (`<button type="submit">`) is present and reachable by keyboard.
- Optionally set `rows` and `cols` or use CSS to make the textarea an appropriate size.

## Hints

- Textareas do not use a `value` attribute; place example text in `placeholder` if helpful.
- Use `aria-label` only when a visible label is not provided; prefer visible `<label>` elements.

## Tag & attribute reference (what to add and why)

- `<textarea name="message" rows="4" placeholder="Write your message here"></textarea>`: Purpose: multi-line text input for longer user responses.
- `name`: Purpose: `name` is used in form data.
- `<button type="submit">Send</button>`: Purpose: submits the form; ensure it is focusable and keyboard-operable.

## Usage tips

- Provide an explicit `<label>` for the textarea for screen-reader compatibility.
- Use `rows` to provide a reasonable default height, and style with CSS for responsive layouts.

## Example

```html
<form>
  <label>Message</label>
  <textarea name="message" rows="5" placeholder="Enter your message"></textarea>
  <button type="submit">Send</button>
</form>
```
