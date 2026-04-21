## Level 05 — Select, Optgroup & Options

## Objective

Add a `<select>` control with options and at least one `<optgroup>` to demonstrate grouped choices.

## Benefits (Clarity & Accessibility)

- `<select>` elements present a compact list of choices and are keyboard- and screen-reader-friendly when labeled correctly.
- Grouping with `<optgroup>` improves discoverability for related choices.

## Complete these tasks

- Add a `<select>` with two or more `<option>` elements and include at least one `<optgroup>` to group related options.
- Ensure the `<select>` has an `id` and `name` attribute and an associated `<label>`.

## Hints

- Use meaningful `value` attributes for options, and keep visible option text concise.

## Tag & attribute reference (what to add and why)

- `<select id="choice" name="choice">`: Purpose: container for `option` elements; `name` is used in form data.
- `<optgroup label="Group name">`: Purpose: visually and semantically groups related options.
- `<option value="...">Text</option>`: Purpose: selectable choice; `value` is sent on form submission.

## Usage tips

- For long lists, consider adding a default placeholder option like `<option value="" disabled selected>Select...</option>`.
- Ensure keyboard focus order places the select where users expect it in the form flow.

## Example

```html
<form>
  <label>Choose a plan</label>
  <select name="plan">
    <optgroup label="Monthly plans">
      <option value="basic">Basic</option>
      <option value="pro">Pro</option>
    </optgroup>
    <optgroup label="Yearly plans">
      <option value="basic-year">Basic (yearly)</option>
      <option value="pro-year">Pro (yearly)</option>
    </optgroup>
  </select>

  <button type="submit">Continue</button>
</form>
```
