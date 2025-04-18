"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SidebarItems } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function AppSidebar() {
  const path = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="bg-black flex items-center justify-between px-4 py-4">
        <nav>
          <Link href="/" className='flex items-center gap-2'>
            <Image src="/logo.svg" alt="logo" height={32} width={38} />
            <h2 className='text-primary-100'>Interview AI</h2>
          </Link>
        </nav>
      </SidebarHeader>
      <SidebarContent className="bg-black">
        <SidebarGroup >
          <SidebarContent className="bg-black">
            <SidebarMenu className="list-none">
              {SidebarItems.map((option, index) => (
                <SidebarMenuItem key={index} className="p-1">
                  <SidebarMenuButton asChild className={`p-5 ${path === option.link && "bg-primary-100/10"}`}>
                    <Link href={option.link} className="flex items-center gap-2 transition-colors duration-300 ease-in-out hover:bg-primary-100/10 rounded-md p-2">
                      <option.icon className={`${path === option.link && "text-primary-100"}`} />
                      <span className={`font-medium ${path === option.link && "text-primary-100"}`}>{option.title}</span>
                    </Link>
                  </SidebarMenuButton>

                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
