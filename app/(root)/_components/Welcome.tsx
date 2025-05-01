"use client";
import { signOut } from "@/lib/actions/auth.action";
import { LogOutIcon } from "lucide-react";
import Image from "next/image";

export function Welcome({ user }: { user: string }) {
    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <section className="bg-dark text-blue-200 p-8 mb-2 rounded-lg shadow-lg ">
                    <h1 className="text-3xl font-bold">Welcome back, {user}!</h1>
                </section>
                <div className="flex items-center justify-center gap-2 cursor-pointer">
                    <div className="flex items-center justify-center relative group">
                        <Image src="/user-avatar.png" className="rounded-full" alt="user" height={40} width={40} />
                        <span className=" absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                            {user}
                        </span>
                    </div>
                    <LogOutIcon className="text-blue-200 cursor-pointer" size={30} onClick={() => signOut()} />
                </div>
            </div>
        </>
    );
}

export default Welcome;