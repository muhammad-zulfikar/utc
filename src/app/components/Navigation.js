"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-indigo-700">
                <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 text-gray-700">
              <NavLink href="/">Home</NavLink>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[400px] p-4 md:w-[500px]">
                        <div className="grid gap-4">
                          <Link
                            href="/about"
                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-gray-50"
                          >
                            <div className="text-sm font-medium">About us</div>
                          </Link>
                          <Link
                            href="/about"
                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-gray-50"
                          >
                            <div className="text-sm font-medium">Vision & Mission</div>
                          </Link>
                          <Link
                            href="/training/in-house"
                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-gray-50"
                          >
                            <div className="text-sm font-medium">History</div>
                          </Link>
                          <Link
                            href="/training/in-house"
                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-gray-50"
                          >
                            <div className="text-sm font-medium">Structure</div>
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[400px] p-4 md:w-[500px] lg:w-[600px]">
                        <div className="grid gap-4">
                          <Link
                            href="/training/public"
                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-gray-50"
                          >
                            <div className="text-sm font-medium">Public Training</div>
                            <div className="text-sm text-muted-foreground">
                              Join our scheduled public training sessions
                            </div>
                          </Link>
                          <Link
                            href="/training/in-house"
                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-gray-50"
                          >
                            <div className="text-sm font-medium">In-House Training</div>
                            <div className="text-sm text-muted-foreground">
                              Customized training programs for your organization
                            </div>
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>

          {/* Button and Mobile Menu */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="default">Schedule a Consultation</Button>
          </div>

          {/* Mobile Drawer Button */}
          <div className="sm:hidden flex items-center">
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Menu</DrawerTitle>
                </DrawerHeader>
                <div className="px-4 py-2 flex flex-col space-y-4">
                  <NavLink href="/" mobile onClick={() => setOpen(false)}>Home</NavLink>
                  <NavLink href="/about" mobile onClick={() => setOpen(false)}>About</NavLink>
                  <div className="px-3 py-2">
                    <div className="font-medium text-gray-700">Services</div>
                    <Link href="/training/public" className="block pl-4 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={() => setOpen(false)}>
                      Public Training
                    </Link>
                    <Link href="/training/in-house" className="block pl-4 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={() => setOpen(false)}>
                      In-House Training
                    </Link>
                  </div>
                  <NavLink href="/contact" mobile onClick={() => setOpen(false)}>Contact</NavLink>
                </div>
                <DrawerClose asChild>
                  <Button className="my-4 mx-4" variant="outline">Close</Button>
                </DrawerClose>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children, mobile = false, onClick }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`${
        mobile
          ? 'block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 group'
          : 'text-gray-700 px-3 py-2 rounded-md text-sm font-medium relative group'
      }`}
      onClick={onClick}
    >
      {children}
      <span
        className={`absolute left-0 bottom-0 h-0.5 bg-black transition-all duration-300 ${isActive ? 'w-full' : 'w-0'} group-hover:w-full`}
      />
    </Link>
  )
}