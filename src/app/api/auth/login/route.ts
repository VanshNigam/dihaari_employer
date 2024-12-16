import { handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleLogin({
  authorizationParams: {
    audience: 'http://localhost:4000/graphql/', // Replace with your actual audience
  },
});