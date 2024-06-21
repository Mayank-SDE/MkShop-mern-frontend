# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

- # MkShop MERN Frontend

## Introduction

MkShop MERN Frontend is the client-side application for an e-commerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides users with a modern and intuitive interface to browse products, manage their cart, and place orders seamlessly.

## Demo

<!-- Include a link or GIF demonstrating your project in action. -->
<!-- Example: ![Demo](demo.gif) -->

## Features

- User authentication and authorization
- Product browsing and search
- Cart management
- Checkout process
- Order tracking

## Technologies Used

- React.js
- Redux
- Bootstrap
- Axios
- HTML/CSS

## Installation

### Prerequisites

- Node.js
- npm

### Installation Steps

```bash
# Clone the repository
git clone https://github.com/Mayank-SDE/MkShop-mern-frontend.git

# Navigate into the directory
cd MkShop-mern-frontend

# Install dependencies
npm install
Configuration
Before running the application, make sure to set up the backend API endpoint URLs in the configuration files (src/config.js).

Usage
To start the development server:

bash
Copy code
npm start
Open http://localhost:3000 to view it in the browser.

Development
If you want to contribute to this project, follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make your changes.
Commit your changes (git commit -am 'Add some feature').
Push to the branch (git push origin feature/your-feature-name).
Create a new Pull Request.
Deployment
For production deployment, build the project and deploy it using your preferred hosting platform.

Documentation
Additional documentation about the project can be found in the docs folder.

Support
For support, bug reports, or feature requests, please file an issue.

License
This project is licensed under the MIT License. See the LICENSE file for details.


