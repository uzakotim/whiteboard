'use client'

import { UserButton} from '@clerk/nextjs'

export default function Home() {
  return <div>Welcome!
    <UserButton/>
  </div>
}