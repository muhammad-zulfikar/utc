"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Globe, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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

// Language Selector Component
const LanguageSelector = ({ language, setLanguage }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" size="icon">
        <Globe className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem onClick={() => setLanguage('en')} className="flex items-center space-x-2">
        <span>🇬🇧</span>
        <span className={language === 'en' ? 'font-bold' : ''}>English</span>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setLanguage('id')} className="flex items-center space-x-2">
        <span>🇮🇩</span>
        <span className={language === 'id' ? 'font-bold' : ''}>Indonesia</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
)

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 flex justify-between items-center"
      >
        <span className="font-medium text-gray-700">{title}</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { language, setLanguage, t } = useLanguage()

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <nav
      className={`bg-white shadow-md sticky top-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0 shadow-md" : "-translate-y-[110%]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-indigo-700">
                <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4 text-gray-700">
              <NavLink href="/">{t('nav.home')}</NavLink>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="ml-4">{t('nav.profile.title')}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[400px] p-4 md:w-[500px] lg:w-[600px]">
                        <div className="grid gap-4">
                          <Link
                            href="/about"
                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-gray-50"
                          >
                            <div className="text-sm font-medium">{t('nav.profile.aboutUs')}</div>
                            <div className="text-sm text-muted-foreground">
                              {t('nav.profile.aboutUsDesc')}
                            </div>
                          </Link>
                          <Link
                            href="/partners-and-clients"
                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-gray-50"
                          >
                            <div className="text-sm font-medium">{t('nav.profile.partnersAndClients')}</div>
                            <div className="text-sm text-muted-foreground">
                              {t('nav.profile.partnersAndClientsDesc')}
                            </div>
                          </Link>
                          <Link
                            href="/gallery"
                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-gray-50"
                          >
                            <div className="text-sm font-medium">{t('nav.profile.gallery')}</div>
                            <div className="text-sm text-muted-foreground">
                              {t('nav.profile.galleryDesc')}
                            </div>
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>{t('nav.services.title')}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[400px] p-4 md:w-[500px] lg:w-[600px]">
                        <div className="grid gap-4">
                          <Link
                            href="/training/public"
                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-gray-50"
                          >
                            <div className="text-sm font-medium">{t('nav.services.publicTraining')}</div>
                            <div className="text-sm text-muted-foreground">
                              {t('nav.services.publicTrainingDesc')}
                            </div>
                          </Link>
                          <Link
                            href="/training/in-house"
                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-gray-50"
                          >
                            <div className="text-sm font-medium">{t('nav.services.inHouseTraining')}</div>
                            <div className="text-sm text-muted-foreground">
                              {t('nav.services.inHouseTrainingDesc')}
                            </div>
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <NavLink href="/contact">{t('nav.contact')}</NavLink>
            </div>
          </div>

          {/* Language Selector and Consultation Button */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <LanguageSelector language={language} setLanguage={setLanguage} />
            <Button variant="default">{t('nav.consultation')}</Button>
          </div>

          {/* Mobile Menu */}
          <div className="sm:hidden flex items-center space-x-2">
            <LanguageSelector language={language} setLanguage={setLanguage} />
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>{t('nav.menu')}</DrawerTitle>
                </DrawerHeader>
                <div className="px-4 py-2 flex flex-col space-y-1">
                  <NavLink href="/" mobile onClick={() => setOpen(false)}>{t('nav.home')}</NavLink>
                  
                  <CollapsibleSection title={t('nav.profile.title')}>
                    <Link href="/about" 
                      className="block pl-4 py-2 text-sm text-gray-600 hover:text-gray-900" 
                      onClick={() => setOpen(false)}
                    >
                      <span className="inline-block w-2 h-2 mt-2 mr-2 bg-primary rounded-full"></span>
                      {t('nav.profile.aboutUs')}
                    </Link>
                    <Link href="/partners-and-clients" 
                      className="block pl-4 py-2 text-sm text-gray-600 hover:text-gray-900" 
                      onClick={() => setOpen(false)}
                    >
                      <span className="inline-block w-2 h-2 mt-2 mr-2 bg-primary rounded-full"></span>
                      {t('nav.profile.partnersAndClients')}
                    </Link>
                    <Link href="/gallery" 
                      className="block pl-4 py-2 text-sm text-gray-600 hover:text-gray-900" 
                      onClick={() => setOpen(false)}
                    >
                      <span className="inline-block w-2 h-2 mt-2 mr-2 bg-primary rounded-full"></span>
                      {t('nav.profile.gallery')}
                    </Link>
                  </CollapsibleSection>

                  <CollapsibleSection title={t('nav.services.title')}>
                    <Link href="/training/public" 
                      className="block pl-4 py-2 text-sm text-gray-600 hover:text-gray-900" 
                      onClick={() => setOpen(false)}
                    >
                      <span className="inline-block w-2 h-2 mt-2 mr-2 bg-primary rounded-full"></span>
                      {t('nav.services.publicTraining')}
                    </Link>
                    <Link href="/training/in-house" 
                      className="block pl-4 py-2 text-sm text-gray-600 hover:text-gray-900" 
                      onClick={() => setOpen(false)}
                    >
                      <span className="inline-block w-2 h-2 mt-2 mr-2 bg-primary rounded-full"></span>
                      {t('nav.services.inHouseTraining')}
                    </Link>
                  </CollapsibleSection>

                  <NavLink href="/contact" mobile onClick={() => setOpen(false)}>{t('nav.contact')}</NavLink>
                </div>
                <DrawerClose asChild>
                  <Button className="my-4 mx-4" variant="outline">{t('nav.close')}</Button>
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