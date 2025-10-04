"use client"
import { UserButton } from '@clerk/nextjs'

/**
 * Top-level navigation bar for the dashboard area.
 *
 * Renders a horizontal bar with a responsive search placeholder (visible on large screens) and a Clerk `UserButton` that redirects to `/` after sign-out.
 *
 * @returns The JSX element for the navigation bar.
 */
function NavBar() {
  return (
    <div className='flex items-center gap-x-4 p-5 bg-green-500'>
        <div className='hidden lg:flex lg:flex-1 bg-yellow-500'>
            {/* todo: add search */}
            Search
        </div>
        <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default NavBar