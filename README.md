# Vue Portfolio

This project is a web portfolio built using TypeScript and Vue.js, designed for deployment on Netlify. It showcases various projects and provides information about the portfolio owner.

## Project Structure

The project is organized as follows:

- **public/**: Contains static assets.
  - **favicon.ico**: The favicon for the web portfolio.
  - **index.html**: The main HTML file that serves as the entry point for the application.

- **src/**: Contains the source code for the application.
  - **assets/**: Contains static assets like styles.
    - **styles/**: Contains CSS files.
      - **main.css**: The main styles for the application.
  - **components/**: Contains reusable Vue components.
    - **AboutMe.vue**: Displays information about the portfolio owner.
    - **ContactForm.vue**: Provides a form for users to contact the portfolio owner.
    - **HelloWorld.vue**: A simple greeting or introductory component.
    - **NavBar.vue**: Contains the navigation bar for the portfolio.
    - **ProjectCard.vue**: Represents a card for displaying individual projects.
  - **views/**: Contains view components for different sections of the portfolio.
    - **AboutView.vue**: Displays the About section of the portfolio.
    - **HomeView.vue**: Serves as the home page of the portfolio.
    - **ProjectsView.vue**: Displays the Projects section of the portfolio.
  - **router/**: Contains routing configuration.
    - **index.ts**: Sets up the Vue Router for navigating between different views.
  - **App.vue**: The root Vue component that serves as the main layout for the application.
  - **main.ts**: The entry point for the Vue application, initializing the Vue instance.
  - **shims-vue.d.ts**: TypeScript declarations for Vue files.
  - **vite-env.d.ts**: TypeScript declarations for Vite environment variables.

- **.gitignore**: Specifies files and directories to be ignored by Git.
- **index.html**: A duplicate of the public/index.html file for local development.
- **netlify.toml**: Configuration settings for deploying the application to Netlify.
- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **tsconfig.json**: Configuration file for TypeScript, specifying compiler options.
- **vite.config.ts**: Configuration settings for Vite, the build tool used in the project.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd vue-portfolio
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the portfolio.

## Deployment

To deploy the portfolio on Netlify, ensure that you have the `netlify.toml` file configured with the correct settings. You can then connect your repository to Netlify and follow the deployment instructions provided by Netlify.

## License

This project is licensed under the MIT License.