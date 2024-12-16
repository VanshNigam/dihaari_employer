// wraps the app for authetication support, check src/pages/_app.tsx
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const Auth0Provider = ({ children }: Props) => (
    <UserProvider>
        {children}
    </UserProvider>
);

export default Auth0Provider;