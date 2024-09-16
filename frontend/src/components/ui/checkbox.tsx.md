## Checkbox Component Documentation

### Table of Contents

| Section | Description |
|---|---|
| [Overview](#overview) |  A high-level description of the component. |
| [Usage](#usage) |  Instructions on how to use the component. |
| [Props](#props) |  A list of all available props and their descriptions. |
| [Example](#example) |  A simple example of how to use the component. |


### Overview

This component implements a customizable checkbox using the `@radix-ui/react-checkbox` library and the `lucide-react` icon library. It provides a visually appealing and accessible checkbox with a clear checked and unchecked state.

### Usage

The `Checkbox` component can be used as a simple checkbox element within your React application:

```jsx
import { Checkbox } from './Checkbox';

function MyComponent() {
  return (
    <Checkbox />
  );
}
```

### Props

The `Checkbox` component accepts all props available from the `@radix-ui/react-checkbox` library. Here are some of the most common props:

| Prop | Type | Description |
|---|---|---|
| `className` | `string` |  An optional CSS class name to apply to the checkbox. |
| `defaultChecked` | `boolean` |  Sets the initial checked state of the checkbox.  |
| `checked` | `boolean` |  Sets the checked state of the checkbox.  |
| `disabled` | `boolean` |  Disables the checkbox, preventing user interaction. |
| `onChange` | `(event: React.ChangeEvent<HTMLInputElement>) => void` |  A callback function that is triggered when the checkbox's checked state changes. |


### Example

```jsx
import { Checkbox } from './Checkbox';

function MyComponent() {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Checkbox 
      checked={isChecked} 
      onChange={handleCheckboxChange} 
      className="bg-red-500" // Example custom class for styling
    />
  );
}
```