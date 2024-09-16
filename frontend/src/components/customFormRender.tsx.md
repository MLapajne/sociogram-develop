## CustomFormRender Component Documentation

### Table of Contents

| Section | Description |
|---|---|
| [Introduction](#introduction) | Overview of the component and its purpose |
| [Props](#props) | Description of the component's props |
| [Code Structure](#code-structure) | Breakdown of the component's code structure |
| [Usage Example](#usage-example) | How to use the component in a React application |

### Introduction 

The `CustomFormRender` component renders a form that allows users to select from a list of options. The options are displayed as checkboxes and are grouped by question. The component utilizes the `FormField`, `FormItem`, `FormLabel`, `FormMessage`, `Checkbox`, and `Label` components from the `ui` folder, as well as the `FormUsers` class from the `@/classes/formData` module.

### Props

The `CustomFormRender` component accepts the following props:

| Prop | Type | Description |
|---|---|---|
| `questions` | `string[]` | An array of questions to be displayed in the form. |
| `users` | `FormUsers[]` | An array of `FormUsers` objects, representing the users to be displayed in the form. |
| `mainUser` | `any` | An object representing the main user. |
| `form` | `any` | An object representing the form. |
| `selectedUsers` | `string[]` | An array of user IDs that have been selected. |
| `questionType` | `string` | The type of question being displayed in the form. |
| `handleCheckedChange` | `(checked: string | boolean, index: number, user: FormUsers, field: any, questionType: string) => void` | A function to be called when the checked state of a checkbox is changed. |

### Code Structure

```javascript
import React from "react";
import { FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { FormUsers } from "@/classes/formData";

interface UserPageProps {
  questions: string[];
  mainUser: any;
  users: FormUsers[];
  form: any;
  selectedUsers: string[];
  questionType: string;
  handleCheckedChange: (
    checked: string | boolean,
    index: number,
    user: FormUsers,
    field: any,
    questionType: string
  ) => void;
}

const CustomFormRender = ({
  questions,
  users,
  mainUser,
  form,
  selectedUsers,
  questionType,
  handleCheckedChange,
}: UserPageProps) => {
  return (
    <>
      {questions.length > 0 ? (
        questions.map((question, index) => (
          <FormItem key={index}>
            <div className="mb-4">
              <FormLabel className="text-base">{question}</FormLabel>
            </div>
            {users.length > 0 &&
              users.map((user, userIndex, array) => {
                const userKey = `${index}-${user.id}-${questionType}`;
                const isSelected = selectedUsers.includes(userKey);

                // Check if any user is selected for the current question
                const isAnySelectedForUser = selectedUsers.some((key) =>
                  key.includes(`-${user.id}-`)
                );

                return (
                  <FormField
                    key={`${index}-${user.id}-${questionType}`}
                    control={form.control}
                    name="items"
                    render={({ field }) => {
                      return (
                        <>
                          {(isSelected ||
                            (!isAnySelectedForUser &&
                              mainUser.id !== user.id)) && (
                            <div className={"flex items-center space-x-2"}>
                              <Checkbox
                                checked={field.value?.includes(userKey)}
                                onCheckedChange={(checked) => {
                                  handleCheckedChange(
                                    checked,
                                    index,
                                    user,
                                    field,
                                    questionType
                                  );
                                }}
                              />

                              <Label className="items-start">
                                {user.firstName + " " + user.lastName}
                              </Label>
                            </div>
                          )}
                        </>
                      );
                    }}
                  />
                );
              })}
            <FormMessage />
          </FormItem>
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default CustomFormRender;
```

### Usage Example

```javascript
import CustomFormRender from './CustomFormRender';

const App = () => {
  // Sample data for the props
  const questions = ['Question 1', 'Question 2'];
  const users = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Jane', lastName: 'Doe' },
  ];
  const mainUser = { id: 1 };
  const form = { control: { ... } }; // Assume form object is initialized elsewhere
  const selectedUsers = ['0-1-questionType']; // Example selected user IDs
  const questionType = 'questionType';

  const handleCheckedChange = (checked, index, user, field, questionType) => {
    // Handle checkbox change logic here
    console.log('Checked:', checked, 'Index:', index, 'User:', user, 'Field:', field);
  };

  return (
    <div>
      <CustomFormRender
        questions={questions}
        users={users}
        mainUser={mainUser}
        form={form}
        selectedUsers={selectedUsers}
        questionType={questionType}
        handleCheckedChange={handleCheckedChange}
      />
    </div>
  );
};
```

This example demonstrates how to use the `CustomFormRender` component with sample data. The `handleCheckedChange` function can be used to update the state of the component or to perform other actions based on the checkbox selection.