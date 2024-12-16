- npm run dev
- npm run build
- npm start
- npm run lint

- src/components/: Holds UI elements and components.
- src/pages/: The main folder for Next.js pages, structured as routes.
- src/lib/: Contains utilities like apolloClient.ts for setting up Apollo Client.
- src/context/: setup for Auth0 or context providers.
- tests/: Test files, organized by feature or component.

```

dihaari-client/
├── public/                 # Static files like images, icons, etc.
│   └── favicon.ico
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Next.js pages as routes
│   │   ├── api/            # API routes for Next.js
│   │   └── _app.tsx        # Custom app component for global styles & providers
│   ├── styles/             # Global and component-specific styles
│   │   ├── globals.css     # Global styles including Tailwind imports
│   │   └── ...
│   ├── graphql/            # GraphQL queries, mutations, and fragments
│   ├── hooks/              # Custom React hooks (e.g., Auth0 hooks)
│   ├── lib/                # Helper functions, utilities, and Apollo client setup
│   │   └── apolloClient.ts # Apollo Client configuration
│   ├── context/            # Context API or Auth0 provider setup
│   └── types/              # TypeScript type definitions
```

You can protect a client-side rendered page by wrapping it with <code>withPageAuthRequired</code>.

Use the <code>useUser</code> hook to access the user profile from protected client-side rendered pages.