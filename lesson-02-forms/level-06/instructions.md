## Level 06 — Radios & Checkboxes

## Objective

Implement single-choice radio groups and multi-choice checkboxes with accessible labeling and proper grouping.

## Benefits (Interaction & Accessibility)

- Radios and checkboxes are native controls that provide standard keyboard behavior and clear semantics for assistive tech.
- Sharing a `name` across radio inputs creates a logical single-choice group.

## Complete these tasks

- Add a radio group with two or more radio inputs sharing the same `name` attribute and ensure each has an associated label.
- Add at least one checkbox for multi-selection and provide a label.

## Hints

- Use `fieldset` + `legend` when the radio group represents a single question or related set.

## Tag & attribute reference (what to add and why)

- `<input type="radio" name="plan" id="plan-basic" value="basic">` with `<label for="plan-basic">Basic</label>`: Purpose: single-choice options within a named group.
- `<input type="checkbox" id="opt1" name="opt1" value="...">` with `<label for="opt1">Option 1</label>`: Purpose: multiple independent selections.
- `fieldset` / `legend`: Purpose: groups related radios or checkboxes and provides context.

## Usage tips

- Ensure `name` is identical for radios in the same group; ids must be unique for label associations.
- For accessibility, wrap groups in `fieldset` and include a descriptive `legend`.

## Example

```html
<form>
  <fieldset>
    <legend>Choose a plan</legend>
    <input type="radio" name="plan" value="basic" />
    <label>Basic</label>

    <input type="radio" name="plan" value="pro" />
    <label>Pro</label>
  </fieldset>

  <label>
    <input type="checkbox" name="subscribe" /> Subscribe to newsletter
  </label>

  <button type="submit">Submit</button>
</form>
```
