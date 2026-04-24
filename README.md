# Exercise Tutorial App

A comprehensive React-based application for fitness enthusiasts to explore exercises, track favorites, and access nutrition and program information.

## Features

- **Exercise Search & Discovery**: Search for exercises by body part, equipment, or target muscle
- **Exercise Details**: View detailed information, instructions, and videos for each exercise
- **Favorites Management**: Save and manage favorite exercises
- **User Authentication**: Sign up and log in using Firebase authentication
- **Nutrition Information**: Access nutritional guidance and tips
- **Fitness Programs**: Browse and explore various workout programs
- **Responsive Design**: Optimized for desktop and mobile devices using Tailwind CSS
- **Material-UI Components**: Modern UI with Material Design icons and components

## Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **UI Library**: Material-UI (@mui/material)
- **Icons**: Lucide React, React Icons
- **Authentication**: Firebase
- **Routing**: React Router DOM
- **HTTP Client**: Fetch API (custom utils)
- **Build Tool**: Create React App

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/TathagatHarsh/exercise-tutorial.git
   cd exercise-tutorial
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore
   - Copy your Firebase config to `src/firebase/firebase.js`

4. Start the development server:

   ```bash
   npm start
   ```

   The app will run on [http://localhost:3000](http://localhost:3000)

## Usage

- **Home**: Browse featured exercises and get started
- **Exercises**: Search and filter exercises by category
- **Exercise Detail**: Click on any exercise card to view detailed instructions
- **Favorites**: Log in to save and access your favorite exercises
- **Nutrition**: Read nutrition tips and guides
- **Programs**: Explore different workout programs
- **Profile**: Manage your account and preferences

## Project Structure

```
src/
├── components/          # Reusable UI components
├── Pages/              # Main application pages
├── context/            # React context for state management
├── firebase/           # Firebase configuration and auth
├── utils/              # Utility functions (API calls)
└── assets/             # Static assets (icons, images)
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Tathagat Harsh
