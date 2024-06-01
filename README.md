# InCite

InCite is a social/news media web application aimed at informing younger audiences about global affairs in an engaging and accessible way. Hosted on Firebase, InCite provides up-to-date news, interactive content, and social features to keep users informed and connected.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Firebase Configuration](#firebase-configuration)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Real-time News Updates**: Get the latest news from around the world.
- **User Authentication**: Sign up and sign in using email/password or Google.
- **Interactive Content**: Engage with news through comments and shares.
- **Responsive Design**: Optimized for mobile and desktop viewing.

## Tech Stack

- **Frontend**: React, Styled-components
- **Backend**: Firebase Authentication, Firestore Database
- **Hosting**: Firebase Hosting
- **APIs**: News API for fetching global news

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/yourusername/InCite.git
   ```
2. Install NPM packages
   ```sh
   npm install
   # or
   yarn install
   ```
3. Create a `.env` file in the root directory and add your Firebase configuration details.
   ```env
   REACT_APP_API_KEY=your_api_key
   REACT_APP_AUTH_DOMAIN=your_project_id.firebaseapp.com
   REACT_APP_PROJECT_ID=your_project_id
   REACT_APP_STORAGE_BUCKET=your_project_id.appspot.com
   REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_APP_ID=your_app_id
   ```

## Folder Structure

```
InCite/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   ├── App.js
│   ├── index.js
│   └── firebase-config.js
├── .env
├── .gitignore
├── README.md
├── package.json
└── yarn.lock
```

## Firebase Configuration

Create a `firebase-config.js` file in the `src` directory and configure Firebase:

```javascript
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };
```

## Available Scripts

In the project directory, you can run:

- `npm start` or `yarn start`: Runs the app in the development mode.
- `npm build` or `yarn build`: Builds the app for production to the `build` folder.
- `npm test` or `yarn test`: Launches the test runner in the interactive watch mode.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

Feel free to contribute and make this project even better! If you have any questions or feedback, please open an issue or reach out directly.

Enjoy using InCite! Stay informed and engaged!
