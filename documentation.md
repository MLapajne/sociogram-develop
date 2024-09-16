### Program Usage

In the Sociogram program, under the "Respondent Entry" tab, the user can input the first names, last names, and emails of students. Under the "Survey" tab, the user can send the survey as an online form to the previously entered emails of the students. A POST request is made to the backend, which uses the configured SMTP server to send the emails.

Students can access their individual surveys via the URL received in the email and complete the survey. By clicking the "Retrieve Data from Online Survey" button, the user can gather data from the completed online surveys. A GET request is sent to the backend to retrieve the survey results. To send the next survey, the previous one must be deleted, which can be done by clicking the "Delete Data from Form" button.

### Project tools

Frontend was build using React Vite tool and uses the Tailwind CSS framework for the project. It uses shadcn component library.

Backend was developed using Django Python library. It includes different libraries:

- `api`: Custom application within the project that handles API-related functionality.
- `rest_framework`: Django REST framework, a powerful and flexible toolkit for building Web APIs.
- `corsheaders`: Django app for handling Cross-Origin Resource Sharing (CORS), making it possible to allow or restrict resources on a web server to be requested from another domain.
- `drf_spectacular`: A library for generating OpenAPI 3.0 specifications for Django REST framework, providing comprehensive API documentation.

#### Api Endpoints

Endpoint: [/sociograms/](http://127.0.0.1:8000/sociograms/)
Description: Handles the serialization of Sociogram objects. This includes fields such as id, instructorName, description, language, negQuestions, posQuestions, users, and publishedUsers.
Custom Create Method: When creating a Sociogram, it also creates associated User objects and sends form url email to each user.

Endpoint: [/questionsFrontend/](http://127.0.0.1:8000/questionsFrontend/)
Description: Handles the serialization of SubmitFrontendData objects. This includes fields such as id, sociogramId, firstName, lastName, createdAt, gender, users, posQuestions, and negQuestions.
Custom Create Method: When creating a SubmitFrontendData object - on user publish form, it associates the users from the related Sociogram and appends the new SubmitFrontendData ID to the publishedUsers array of the Sociogram.

#### Routing

The `App` component uses `BrowserRouter` to enable routing within the application.

- It renders the `Navbar` component.
- It defines routes for different pages:
  - `/thank-you`: Displays the `ThankYou` component.
  - `/user_form/{userId}-{sociogramId}`: Displays the `CheckForm` component for a specific user, passing the user data and sociogram data as props.
- The routes for the `CheckForm` component are dynamically generated based on the fetched sociograms and user IDs.
- The routes ensure that users who have already submitted their data are not redirected to the `CheckForm` component again.
