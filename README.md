# Travel Itinerary App

A simple React app for planning personalized trips. Users can input trip details like destination, duration, and group type, and view trip information on a dashboard. The app includes mock API integrations for flight and accommodation details.

## Features
- **Responsive UI**: Built from Figma design, fully responsive using TailwindCSS.
- **Form for Trip Details**: Collects destination, duration, and group type from the user.
- **Trip Dashboard**: Displays the trip details, flight details, and accommodation information.
- **Third Pane Functionality**: Clicking on flight or accommodation buttons reveals additional details.
- **Mock API Integration**: Simulated API calls for fetching flight and accommodation details.

## Tech Stack
- **React**: Frontend JavaScript framework.
- **React Router**: For navigation between the Home page and Dashboard.
- **TailwindCSS**: For styling the app and creating responsive layouts.
- **useState**: React hook for managing state within components.
- **useNavigate**: React Router hook for navigating between pages.

## Folder Structure
```
src/
│
├── components/
│   ├── Form/
│   │   └── Form.jsx              # Form component for input fields (destination, duration, group type)
│   │
│   ├── Dashboard/
│   │   ├── FlightDetails.jsx      # Flight details component
│   │   └── Accommodation.jsx      # Accommodation details component
│
├── pages/
│   ├── Home.jsx                   # Home page, renders Form component and passes form data handler
│   └── DashboardPage.jsx          # Dashboard page to display the trip details
│
├── App.js                         # Main entry point of the app, handles routing and state management
├── index.css                      # Global styles (TailwindCSS setup)
└── tailwind.config.js             # TailwindCSS configuration file
```

## Component Breakdown

### `App.js`
- **Description**: This is the main entry point of the application. It handles the routing between the Home page and the Dashboard page.
- **Functionality**: It uses React Router for navigation and maintains the `formData` state which is passed down to the `DashboardPage`.

### `Home.jsx` (in `pages/`)
- **Description**: The home page of the app where users fill out the trip details.
- **Functionality**: 
  - Renders the `Form` component.
  - Passes `setFormData` as a prop to `Form`, so the form can update the state in `App.js`.
  - The navigation to the Dashboard page happens after the form submission.

### `Form.jsx` (in `components/Form/`)
- **Description**: A form component that allows the user to enter trip details such as destination, duration, and group type.
- **Functionality**: 
  - Collects user input using `useState` for `destination`, `duration`, and `groupType`.
  - Submits the form data via `setFormData` passed from the parent (`Home.jsx`).
  - Handles the navigation to the `Dashboard` page upon form submission using the `useNavigate` hook from React Router.

### `DashboardPage.jsx` (in `pages/`)
- **Description**: The dashboard page that displays the trip details after the form is submitted.
- **Functionality**:
  - Displays the trip details (destination, duration, and group type) based on the `formData` passed from `App.js`.
  - Renders the `FlightDetails` and `Accommodation` components.
  
### `FlightDetails.jsx` (in `components/Dashboard/`)
- **Description**: This component displays the flight details for the trip.
- **Functionality**: 
  - Has a button to fetch flight details (simulated with a mock API).
  - Displays flight information such as airline, departure, arrival, and time once the data is "fetched."
  - Uses `useState` for managing the flight data and loading state.
  
### `Accommodation.jsx` (in `components/Dashboard/`)
- **Description**: This component displays accommodation details for the trip.
- **Functionality**:
  - Similar to `FlightDetails`, it has a button to fetch accommodation details (mock API).
  - Displays hotel information such as hotel name, location, and stay duration once the data is "fetched."
  - Uses `useState` for managing the hotel data and loading state.

## How to Run the App Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Abhithakur04/Travel-Itinerary-App
