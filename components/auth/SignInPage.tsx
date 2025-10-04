import React from 'react'
import { SignIn } from '@clerk/nextjs'
function SignInPage() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <SignIn />
    </div>
  )
}

export default SignInPage