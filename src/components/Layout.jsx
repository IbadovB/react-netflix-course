import { Outlet, useLocation, Link } from 'react-router-dom'
import { useMemo } from 'react'

export function Layout() {
    const { pathname } = useLocation()

    const isHomePage = useMemo(() => pathname === '/', [pathname])

    return (
    <div className='min-h-screen 
    w-full bg-white dark:bg-black text-black dark:text-white px-6 py-5'>
            {!isHomePage && (
                <header className='mb-10 flex items-center justify-between' >
               <Link to='/'>
               <img
                    src="/netflix-logo.png"
                    alt="Netflix"
                    className='h-8 w-auto'
                />
                </Link>
                </header>
            )}
            <Outlet />
        </div>
    )
}