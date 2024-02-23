"use client";


import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import Link from "next/link";

export function MainNav ({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    
    const pathname = usePathname();
    const params = useParams();

    const routes= [
        {
            href: `/${params.storeId}`,
            label: 'Overview',
            active: pathname === `/${params.storedId}`,
        },
        {
            href: `/${params.storeId}/billboards`,
            label: 'Billboards',
            active: pathname === `/${params.storedId}/billboards`,
        },
        {
            href: `/${params.storeId}/categories`,
            label: 'Categories',
            active: pathname === `/${params.storedId}/categories`,
        },
        {
            href: `/${params.storeId}/products`,
            label: 'Products',
            active: pathname === `/${params.storedId}/products`,
        },
        {
            href: `/${params.storeId}/colors`,
            label: 'Colors',
            active: pathname === `/${params.storedId}/colors`,
        },
        {
            href: `/${params.storeId}/sizes`,
            label: 'Sizes',
            active: pathname === `/${params.storedId}/sizes`,
        },
        {
            href: `/${params.storeId}/orders`,
            label: 'Orders',
            active: pathname === `/${params.storedId}/orders`,
        },
        {
            href: `/${params.storeId}/settings`,
            label: 'Settings',
            active: pathname === `/${params.storedId}/settings`,
        },
    ];

    return (
        <nav
            className={cn("flex item-center space-x-4 lg:space-x-6", className)}
        >
            {routes.map((route) => (
                <Link
                key={route.href}
                href={route.href}
                className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    route.active ? "text-black dark:text-white" : "text-muted-foreground"
                )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    )
};