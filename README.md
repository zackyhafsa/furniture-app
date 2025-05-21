How to Start a React Vite Project
This guide explains how to set up and run a React project using Vite, including using a setup script to automate cloning and dependency installation.
Prerequisites
Before you begin, ensure you have the following installed:

Git - For cloning the repository. Download from git-scm.com
Node.js (version 18 or higher recommended) - Download from nodejs.org
npm (comes with Node.js) or pnpm (optional, for faster dependency management)
A code editor like Visual Studio Code

Using the Setup Script
A setup.sh script is provided to automate cloning the repository and installing dependencies.

Make the script executable
chmod +x setup.sh

Edit the scriptOpen setup.sh in a text editor and replace REPO_URL with your actual Git repository URL (e.g., https://github.com/your-username/your-react-vite-repo.git).

Run the script
./setup.sh

This will:

Clone the repository to a folder named my-react-app.
Navigate to the project directory.
Install all dependencies using npm install.

Start the development serverAfter the script completes, navigate to the project directory (if not already there) and start the server:
cd my-react-app
npm run dev

The app will be available at http://localhost:5173.

Manual Setup (Alternative)
If you prefer to set up manually:

Clone the repository
git clone https://github.com/your-username/your-react-vite-repo.git my-react-app

Navigate to the project directory
cd my-react-app

Install dependencies
npm install

Start the development server
npm run dev

Running the Project

Development server: Run npm run dev to start the Vite development server at http://localhost:5173.
Production build: Run npm run build to create an optimized build.
Preview production build: Run npm run preview to preview the production build locally.

Additional Notes

Tailwind CSS (Optional): To add Tailwind CSS for styling:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Configure tailwind.config.js and add Tailwind directives to your CSS file.

ESLint (Optional): For code linting:
npm init @eslint/config

Learn More: Check the Vite documentation and React documentation for advanced configurations.

Happy coding!
