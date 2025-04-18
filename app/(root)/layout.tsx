import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import RootProvider from "./provider"

const RootLayout = async ({ children }: { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticated();
    if (!isUserAuthenticated) redirect("/sign-in");

    return (
        <div className="root-layout">
            <RootProvider>
                {children}
            </RootProvider>
        </div>
    )
}
export default RootLayout
