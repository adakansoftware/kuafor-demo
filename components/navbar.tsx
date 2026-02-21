"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Scissors } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/randevu", label: "Randevu" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Scissors className="h-6 w-6 text-accent" />
          <span className="font-serif text-xl font-bold tracking-wide text-foreground">
            BELLA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide uppercase transition-colors duration-200 hover:text-accent",
                pathname === link.href
                  ? "text-accent"
                  : "text-foreground/70"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/randevu"
          className="hidden rounded-sm bg-primary px-5 py-2.5 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-200 hover:opacity-90 md:block"
        >
          Randevu Al
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          isOpen ? "max-h-80" : "max-h-0"
        )}
      >
        <div className="border-t border-border bg-background/95 backdrop-blur-md px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block py-3 text-sm font-medium tracking-wide uppercase transition-colors duration-200",
                pathname === link.href
                  ? "text-accent"
                  : "text-foreground/70 hover:text-accent"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/randevu"
            onClick={() => setIsOpen(false)}
            className="mt-3 block w-full rounded-sm bg-primary px-5 py-2.5 text-center text-sm font-medium tracking-wide text-primary-foreground transition-all duration-200 hover:opacity-90"
          >
            Randevu Al
          </Link>
        </div>
      </div>
    </header>
  )
}
