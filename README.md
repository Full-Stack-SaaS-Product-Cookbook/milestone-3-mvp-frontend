# milestone-3-mvp-frontend

The frontend MVP milestone for the book!

# Installation

To get this codebase up and running without complaints, you'll need to link it to a Netlify site, as well as setting the environment variable `REDUX_PLATE_API_URL` (i.e. it should be present in your `PATH`). For development, `REDUX_PLATE_API_URL` would be something like `http://localhost:5000`. With those prerequisites complete, you will need to install dependencies in the `functions/` folder, build the functions, install dependencies in the root, and then kick of the development process via the Netlify CLI (`ntl`):

```bash
cd functions/
npm install
npm run build
cd ..
npm install
ntl dev
```

This codebase uses Node Version 14.17.0.

For the code generation endpoint to work from the frontend, you'll need the project's backend .NET code, [milestone-5-mvp-backend](https://github.com/Full-Stack-SaaS-Product-Cookbook/milestone-5-mvp-backend), up and running. Visit that repository for more details.