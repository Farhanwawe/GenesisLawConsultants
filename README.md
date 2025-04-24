# Genesis Law Consultants Website

A professional website for Genesis Law Consultants featuring information about their services, team, and contact form.

## Getting Started

These instructions will help you set up and run the project on your local machine using Visual Studio Code.

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or newer)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/) (optional, for version control)

### Required VS Code Extensions

For the best development experience, install these VS Code extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

### Installing

1. **Clone or download the repository:**

   If using Git:
   ```bash
   git clone [repository-url]
   cd genesis-law-consultants
   ```
   
   Or download and extract the zip file from the repository.

2. **Open the project in VS Code:**
   ```bash
   code .
   ```

3. **Install dependencies:**
   Open a terminal in VS Code (Terminal → New Terminal) and run:
   ```bash
   npm install
   ```

### Running the Application

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Access the application:**
   Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

## Project Structure

- `client/`: Frontend code
  - `src/`: Source code
    - `components/`: Reusable UI components
    - `pages/`: Page components for different routes
    - `hooks/`: Custom React hooks
    - `lib/`: Utility functions and configuration
    - `data/`: Data constants
- `server/`: Backend code
  - `index.ts`: Server entry point
  - `routes.ts`: API endpoints
  - `storage.ts`: Data storage layer
- `shared/`: Shared code between client and server
  - `schema.ts`: Database schema and types

## Development Notes

### Frontend Technologies

- React with TypeScript
- Tailwind CSS for styling
- Shadcn UI components
- React Query for data fetching
- Wouter for routing

### Backend Technologies

- Express.js server
- TypeScript
- In-memory storage (can be extended to use PostgreSQL)

### Environment Variables

- No environment variables are required for local development. By default, the application uses in-memory storage for contact submissions.

## Production Deployment

### Building for Production

Run the following command to create a production build:

```bash
npm run build
```

This will generate optimized files in the `dist/` directory.

### Deployment Options

#### Option 1: Static Hosting (Netlify, Vercel, GitHub Pages)

You can deploy the frontend as a static site on services like Netlify or Vercel. For the backend, consider using serverless functions or a separate server deployment.

#### Option 2: Full-Stack Hosting (Heroku, Railway, Render)

For full-stack hosting, you can deploy both the frontend and backend together on platforms like Heroku, Railway, or Render.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Shadcn UI for the component system
- Tailwind CSS for the utility-first CSS framework
- Font Awesome for the icons
- Unsplash for royalty-free images