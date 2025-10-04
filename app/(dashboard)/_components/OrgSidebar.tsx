"use client"

/**
 * Renders the organization sidebar visible on large screens.
 *
 * @returns A sidebar JSX element with fixed width, vertical column layout, spacing, padding, a red background, and the placeholder text "Org Sidebar".
 */
function OrgSidebar() {
  return (
    <div className='hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5 bg-red-500'>
        Org Sidebar
    </div>
  )
}

export default OrgSidebar