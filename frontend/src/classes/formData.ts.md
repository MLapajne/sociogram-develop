## Internal Code Documentation: Form Data Interfaces

**Table of Contents** 
  *  [QuestionAndAnswer Interface](#questionandanswer-interface)
  *  [FormPostData Interface](#formpostdata-interface)
  *  [FormUsers Interface](#formusers-interface)

### <a name="questionandanswer-interface"></a> QuestionAndAnswer Interface

This interface defines the structure for a question and its associated answers.

**Interface:** `QuestionAndAnswer`

| Property | Type | Description |
|---|---|---|
| `question` | `string` | The text of the question. |
| `answers` | `string[]` | An array of possible answers to the question. |
| `questionType` | `string` | The type of the question. (e.g., "multiple choice", "open ended") |

**Example:**

```typescript
const question: QuestionAndAnswer = {
  question: "What is your favorite color?",
  answers: ["Red", "Blue", "Green"],
  questionType: "multiple choice"
};
```

### <a name="formpostdata-interface"></a> FormPostData Interface

This interface defines the structure for data submitted in a form.

**Interface:** `FormPostData`

| Property | Type | Description |
|---|---|---|
| `sociogramId` | `string` |  Unique identifier for the sociogram. |
| `firstName` | `string` | First name of the user submitting the form. |
| `lastName` | `string` | Last name of the user submitting the form. |
| `gender` | `"MALE" | "FEMALE" | "OTHER"` |  Gender of the user submitting the form. |
| `posQuestions` | `string[]` | An array of positive question IDs selected by the user. |
| `negQuestions` | `string[]` | An array of negative question IDs selected by the user. |

**Example:**

```typescript
const formData: FormPostData = {
  sociogramId: "12345",
  firstName: "John",
  lastName: "Doe",
  gender: "MALE",
  posQuestions: ["q1", "q3"],
  negQuestions: ["q2"]
};
```

### <a name="formusers-interface"></a> FormUsers Interface

This interface defines the structure for a user within a form.

**Interface:** `FormUsers`

| Property | Type | Description |
|---|---|---|
| `id` | `string` | Unique identifier for the user. |
| `firstName` | `string` | First name of the user. |
| `lastName` | `string` | Last name of the user. |
| `gender` | `"MALE" | "FEMALE"` | Gender of the user. |

**Example:**

```typescript
const user: FormUsers = {
  id: "user123",
  firstName: "Jane",
  lastName: "Smith",
  gender: "FEMALE"
};
```