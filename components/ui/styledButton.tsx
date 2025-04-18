import React from "react"
import Link from "next/link"

interface StyledButtonProps {
    children: React.ReactNode;
    href: string;
}

export const StyledButton = ({ children, href }: StyledButtonProps) => {
    return (
        <Link href={href} className="group">
            <button className="relative text-white/80 cursor-pointer px-12 py-4 rounded-full bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] min-h-10 w-full">
                {children}
                <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-blue-600 to-transparent h-px w-3/4 mx-auto"></span>
                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-blue-600 to-transparent h-[6px] w-full mx-auto blur-sm"></span>
            </button>
        </Link>
    )
}