"use client"

import { Toaster } from "@/components/ui/toaster"
import { CartProvider } from "@/context"

export const Providers = ({children}: {children: React.ReactNode}) => {
    return (
        <CartProvider>
            <Toaster />
            {children}
        </CartProvider>
    )
}