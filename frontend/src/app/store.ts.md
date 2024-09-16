## Redux Store Configuration Documentation

### Table of Contents

* [Introduction](#introduction)
* [Redux Store Setup](#redux-store-setup)
    * [Reducers](#reducers)
    * [Root State](#root-state)
    * [App Dispatch](#app-dispatch)

### Introduction 

This document outlines the configuration of the Redux store for the application. The Redux store provides a centralized state management solution, enabling efficient data flow and updates within the application.

### Redux Store Setup

The Redux store is configured using `configureStore` from the `@reduxjs/toolkit` library.

#### Reducers

The store uses the following reducers:

| Reducer Name | Description |
|---|---|
| `formUrls` | Manages the state related to URL forms. |
| `formPeople` | Manages the state related to people forms. |

The reducers are imported from their respective slice files:

* `formUrlsReducer` from `../features/urls/formUrlsSlice`
* `formPeopleReducer` from `../features/urls/formPeopleSlice`

These slice files are likely responsible for defining the initial state, actions, and reducers for each specific feature.

#### Root State

The `RootState` type is defined as the return type of the `store.getState` function. This type represents the entire state of the application, allowing for easy access to any part of the state.

#### App Dispatch

The `AppDispatch` type is defined as the type of the `store.dispatch` function. This type represents the dispatch function used to trigger actions within the application.

**Example Usage:**

```typescript
// Accessing the state
const currentUrls = store.getState().formUrls;

// Dispatching an action
store.dispatch(updateUrlForm({ url: "https://www.example.com" })); 
```
