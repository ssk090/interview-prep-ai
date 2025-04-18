import { SidebarProvider } from '@/components/ui/sidebar'
import React, { ReactNode } from 'react'
import { AppSidebar } from './_components/AppSidebar'

const RootProvider = ({ children }: { children: ReactNode }) => {
    return (
        <SidebarProvider defaultOpen={true}>
            <AppSidebar />
            <div>
                {children}
            </div>
        </SidebarProvider>
    )

}
export default RootProvider
