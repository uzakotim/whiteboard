"use client"
import { ClerkProvider, useAuth } from '@clerk/nextjs'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { AuthLoading,ConvexReactClient } from 'convex/react'
import Loading from '@/components/auth/Loading'
interface ConvexClerkProviderProps {
    children: React.ReactNode
}



function ConvexClerkProvider( { children }: ConvexClerkProviderProps ) {
    const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
    if (!convexUrl) {
    throw new Error(
        'Missing NEXT_PUBLIC_CONVEX_URL environment variable. ' +
        'Please add it to your .env.local file.'
    );
    }
    const convex = new ConvexReactClient(convexUrl);
    
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                  
                <AuthLoading>
                    <Loading />
                </AuthLoading>
                  {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}
export default ConvexClerkProvider