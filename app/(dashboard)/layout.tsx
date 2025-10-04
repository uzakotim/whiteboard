import Sidebar from './_components/sidebar'
import OrgSidebar from './_components/OrgSidebar'
import NavBar from './_components/NavBar'

interface Props {
    children: React.ReactNode
}
function DashboardLayout({children}: Props) {
  return (
    <main className='h-full'>
        <Sidebar />
        <div className='pl-[60px] h-full'>
            <div className='flex gap-x-3 h-full'>
                <OrgSidebar />
                <div className='flex-1 h-full'>
                    <NavBar />
                    {children}
                </div>
            </div>
        </div>
    </main>
  )
}

export default DashboardLayout