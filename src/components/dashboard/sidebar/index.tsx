"use client";

import {
  Calendar,
  ChevronRight,
  Layout,
  LogOut,
  Ticket,
  TicketPercent,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Events",
    icon: Calendar,
    subitems: [
      {
        title: "Event List",
        url: "/dashboard/1/event-list",
      },
    ],
  },
  {
    title: "Transactions",
    icon: Ticket,
    subitems: [
      {
        title: "Transaction List",
        url: "/dashboard/1/transactions-list",
      },
    ],
  },
  {
    title: "Voucher",
    icon: TicketPercent,
    subitems: [
      {
        title: "Voucher List",
        url: "/dashboard/1/vouchers-list",
      },
      {
        title: "Create Voucher",
        url: "/dashboard/1/create-voucher",
      },
    ],
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent className="pt-4 ps-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl font-bold mb-4 ">
            EventZen
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="mb-2">
                <SidebarMenuButton
                  asChild
                  className={
                    pathname === "/dashboard/organizer/1"
                      ? "bg-[#e8e9ea] hover:bg-[#d6d7d9]"
                      : ""
                  }>
                  <Link href="/dashboard/organizer/1">
                    <Layout />
                    <span className="font-semibold">Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {items.map((item, idx) => (
                <Collapsible
                  defaultOpen
                  className="group/collapsible"
                  key={idx}>
                  <SidebarMenuItem className="mb-2">
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="font-semibold">
                        <>
                          <item.icon />
                          <span>{item.title}</span>
                          <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                        </>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.subitems.map((subitem, idx) => (
                          <SidebarMenuSubItem key={idx}>
                            <Link href={subitem.url}>
                              <SidebarMenuButton
                                className={
                                  pathname === subitem.url
                                    ? "bg-[#e8e9ea] hover:bg-[#d6d7d9]"
                                    : ""
                                }>
                                <span>{subitem.title}</span>
                              </SidebarMenuButton>
                            </Link>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className="mb-2">
            <Link href="/dashboard/organizer/1/profile">
              <SidebarMenuButton asChild className="h-full">
                <div className="flex items-center gap-4">
                  <div className="relative w-10 h-10 ">
                    <Image
                      src="https://images.unsplash.com/36/xIsiRLngSRWN02yA2BbK_submission-photo-7.jpg?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="world-map"
                      className="object-cover rounded-full"
                      fill
                    />
                  </div>
                  <span className="font-bold">Budi Marquees</span>
                </div>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem className="mb-2">
            <SidebarMenuButton asChild className="font-semibold">
              <Link href="/dashboard/auth/login">
                <LogOut />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}