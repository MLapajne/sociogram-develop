## ConfirmationDialog Component Documentation

**Table of Contents**

- [Description](#description)
- [Usage](#usage)
- [Props](#props)
- [Example](#example)

### Description

The `ConfirmationDialog` component is a reusable React component that displays a modal dialog to confirm an action from the user. It provides a title, description, and two buttons for confirmation and cancellation.

### Usage

The `ConfirmationDialog` component should be used within your application when you need to present a confirmation dialog to the user before performing a specific action.

### Props

| Prop Name | Type | Description | Default |
|---|---|---|---|
| `isOpen` | `boolean` | Determines if the dialog is open or closed. | `false` |
| `onConfirm` | `() => void` | Callback function called when the confirm button is clicked. | `() => {}` |
| `onCancel` | `() => void` | Callback function called when the cancel button or outside the dialog is clicked. | `() => {}` |
| `title` | `string` | The title of the dialog. | `""` |
| `description` | `string` | The description of the dialog. Supports line breaks with `\n`. | `""` |
| `confirmText` | `string` | The text of the confirm button. | "Confirm" |
| `cancelText` | `string` | The text of the cancel button. | "Cancel" |

### Example

```javascript
import ConfirmationDialog from './ConfirmationDialog';

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    // Perform action after confirmation
    setIsOpen(false);
  };

  const handleCancel = () => {
    // Perform action after cancellation
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Confirmation Dialog</button>
      <ConfirmationDialog
        isOpen={isOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        title="Confirmation"
        description="Are you sure you want to proceed?"
      />
    </>
  );
};
```
