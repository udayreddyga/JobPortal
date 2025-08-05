'use client';

import { Briefcase, Rss, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useSidebar } from '@/components/ui/sidebar';

export default function AppSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();

  const menuItems = [
    { href: '/', label: 'Feed', icon: Rss, tooltip: 'Feed' },
    { href: '/jobs', label: 'Jobs', icon: Briefcase, tooltip: 'Jobs' },
    { href: '/profile', label: 'Profile', icon: User, tooltip: 'Profile' },
  ];

  return (
    <>
      <SidebarHeader>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xl font-bold outline-none ring-sidebar-ring focus-visible:ring-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-primary"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
          </svg>
          <span className={state === 'collapsed' ? 'hidden' : ''}>Web3 CareerLink</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={{ children: item.tooltip, side: 'right' }}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </>
  );
}
