"use client"
import { ClerkProvider, useAuth } from '@clerk/nextjs'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { AuthLoading,Authenticated,ConvexReactClient } from 'convex/react'
import Loading from '@/components/auth/Loading'
interface ConvexClerkProviderProps {
    children: React.ReactNode
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);

function ConvexClerkProvider( { children }: ConvexClerkProviderProps ) {
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