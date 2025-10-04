'use client'

import { SignIn, UserButton, useUser } from '@clerk/nextjs'

export default function Home() {
  const { isSignedIn } = useUser()

  if (!isSignedIn) {
    return <SignIn />
  }

  return <div>Welcome!
    <UserButton/>
  </div>
}