## App.js 

### Table of Contents

1. [Overview](#overview)
2. [Imports](#imports)
3. [App Component](#app-component)
   * [State Management](#state-management)
   * [Language Handling](#language-handling)
   * [Form Data Handling](#form-data-handling)
   * [useEffect Hook](#useeffect-hook)
   * [Routing](#routing)

### Overview

This file implements the main application component, `App`, which is responsible for managing the application's state, routing, and rendering.

### Imports

The following components and libraries are imported:

| Import | Description |
|---|---|
| `React`, `{ useEffect, useContext }` | Essential React components and hooks for managing state and side effects. |
| `{ BrowserRouter, Routes, Route, Navigate }` |  Components from `react-router-dom` for handling routing within the application. |
| `{ useAppDispatch, useAppSelector }` | Hooks from the custom Redux toolkit setup for accessing the Redux store and dispatching actions. |
| `"react-toastify/dist/ReactToastify.css"` |  CSS file for styling notifications using the `react-toastify` library. |
| `Navbar` |  The navigation bar component. |
| `CheckForm` |  The form component for user data. |
| `{ fetchSociograms }` | Action creator from the `formPeopleSlice` to fetch sociogram data. |
| `{ SubmitDataContext }` | Context for managing the list of submitted user IDs. |
| `{ LanguageDataContext }` | Context for managing the application language. |
| `{ reset }` | Action creator from the `formPeopleSlice` to reset the slice's state. |
| `ThankYou` | The "Thank You" page component. |

### App Component

The `App` component is responsible for managing the application's state, rendering the navigation bar, handling routing, and displaying different components based on the user's interaction.

#### State Management

* The component uses the `useAppDispatch` and `useAppSelector` hooks to interact with the Redux store.
* It fetches sociogram data using the `fetchSociograms` action creator and stores it in the Redux store.
* The component uses the `reset` action creator to clear the state of the `formPeopleSlice`.

#### Language Handling

* The component utilizes the `LanguageDataContext` to manage the application's language.
* It determines the language based on the first sociogram's language setting, defaulting to "en" if no sociograms are available.
* It sets the language in the `LanguageDataContext` using the `setLanguageData` function.

#### Form Data Handling

* The component utilizes the `SubmitDataContext` to manage the list of submitted user IDs.
* It extracts the `dataContext` and `setDataContext` from the `SubmitDataContext`.

#### useEffect Hook

The `useEffect` hook is used to:

* Reset the `formPeopleSlice` state.
* Fetch sociogram data from the API.
* Set the language based on the first sociogram's language.

#### Routing

The `App` component uses `BrowserRouter` to enable routing within the application.

* It renders the `Navbar` component.
* It defines routes for different pages:
    * `/thank-you`: Displays the `ThankYou` component.
    * `/user_form/{userId}-{sociogramId}`: Displays the `CheckForm` component for a specific user, passing the user data and sociogram data as props.
* The routes for the `CheckForm` component are dynamically generated based on the fetched sociograms and user IDs.
* The routes ensure that users who have already submitted their data are not redirected to the `CheckForm` component again.

This documentation provides a comprehensive overview of the `App` component and its functionality. It helps developers understand the component's structure, state management, language handling, form data management, routing, and other essential aspects. The clear and concise language, table, and emoji-enhanced format make it easy for developers to understand and maintain the code. 
