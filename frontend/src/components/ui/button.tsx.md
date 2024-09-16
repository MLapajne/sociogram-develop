## Button Component Documentation

### Table of Contents
  * [Introduction](#introduction)
  * [Usage](#usage)
    * [Basic Button](#basic-button)
    * [Variants](#variants)
    * [Sizes](#sizes)
    * [As Child Component](#as-child-component)
  * [Props](#props)
  * [Example](#example)

### Introduction 
This component implements a reusable and customizable button element. It leverages the `class-variance-authority` library for styling and provides multiple variants and sizes for flexibility. 

### Usage

#### Basic Button 
```javascript
import { Button } from './Button'

<Button>Click Me</Button>
```

#### Variants
The `variant` prop allows you to customize the button's appearance. Available variants include:

| Variant | Description | 
|---|---|
| `default` | Primary button with blue background. |
| `destructive` | Red button for actions that may cause data loss or irreversible changes. |
| `outline` | Button with a border and background color that changes on hover. | 
| `secondary` | Button with a secondary color (usually gray). |
| `ghost` | Button with no background but changes color on hover. |
| `link` | Styled link with an underline that appears on hover. |

#### Sizes
The `size` prop controls the button's size. Available sizes include:

| Size | Description |
|---|---|
| `default` | Default button size. |
| `sm` | Small button size. | 
| `lg` | Large button size. |
| `icon` | Square button intended for icons. |

#### As Child Component
The `asChild` prop allows you to use the `Button` component as a slot for other components. This is useful when you want to apply the button's styling to a custom element.

```javascript
import { Button } from './Button'

<Button asChild variant="outline">
  <span>Custom Content</span>
</Button>
```

### Props
The `Button` component accepts the following props:

| Prop | Type | Description | Default |
|---|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the button. |  |
| `variant` | `'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'` | Button appearance. | `'default'` |
| `size` | `'default' | 'sm' | 'lg' | 'icon'` | Button size. | `'default'` |
| `asChild` | `boolean` | Whether to render the button as a slot. | `false` |
| `...props` | `React.ButtonHTMLAttributes<HTMLButtonElement>` | All props from the `HTMLButtonElement` interface. |  | 

### Example 
```javascript
import { Button } from './Button'

function MyComponent() {
  return (
    <div>
      <Button>Default Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button variant="outline" size="sm">Outline Button</Button>
      <Button variant="ghost" size="lg">Ghost Button</Button>
    </div>
  )
}
```