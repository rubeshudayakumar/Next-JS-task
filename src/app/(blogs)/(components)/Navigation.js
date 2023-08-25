"use client"

import Link from "next/link";
import styles from './Navigation.module.scss';
import { usePathname } from 'next/navigation';

export default function Navigation({ navLinks }) {
    const pathname = usePathname();
    return (
        <nav className={`${styles['nav-container']}`}>
           {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                <Link
                    className={isActive ? `${styles['nav-active']}`: `${styles['nav-in-active']}`}
                    href={link.href}
                    key={link.name}
                >
                    {link.name}
                </Link>
                )
            })}
        </nav>
    );
};