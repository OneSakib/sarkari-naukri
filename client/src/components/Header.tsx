'use client'
import {
    Menu,
    Briefcase,
    GraduationCap,
    Trophy,
    FileText,
    CreditCard,
    BookOpen,
    Shield,
    ExternalLink
} from "lucide-react"
import ThemeModeToggle from "@/components/ThemeModeToggle"
import Link from "next/link"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "./ui/button"
import { useState } from "react"
export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navigationLinks = [
        { href: "/latest-jobs", label: "Latest Jobs", icon: Briefcase },
        { href: "/admissions", label: "Admissions", icon: GraduationCap },
        { href: "/results", label: "Results", icon: Trophy },
        { href: "/answer-keys", label: "Answer Keys", icon: FileText },
        { href: "/admit-cards", label: "Admit Cards", icon: CreditCard },
        { href: "/syllabus", label: "Syllabus", icon: BookOpen },
        { href: "/certificate-verification", label: "Certificate Verification", icon: Shield },
        { href: "/other-links", label: "Other Links", icon: ExternalLink },
    ]

    return (
        <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-3 sm:px-4 lg:px-6">
                <div className="flex justify-between items-center py-3 sm:py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold hover:text-orange-200 transition-colors">
                            Sarkari Naukri
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:block">
                        <ul className="flex space-x-6">
                            {navigationLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-orange-200 transition-colors text-sm xl:text-base flex items-center gap-1 py-2"
                                    >
                                        <link.icon className="h-4 w-4" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="hidden lg:block pl-1">
                        <ThemeModeToggle />
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                                <SheetHeader>
                                    <SheetTitle className="text-left text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                        Sarkari Naukri
                                    </SheetTitle>
                                </SheetHeader>
                                <nav className="mt-6">
                                    <ul className="space-y-2">
                                        {navigationLinks.map((link) => (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 hover:text-gray-900"
                                                >
                                                    <link.icon className="h-5 w-5 text-gray-500" />
                                                    <span className="font-medium">{link.label}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                <div className="pl-1">
                                    <ThemeModeToggle />
                                </div>
                                {/* Additional Mobile Menu Content */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <div className="space-y-3">
                                        <Link
                                            href="/about"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                                        >
                                            About Us
                                        </Link>
                                        <Link
                                            href="/contact"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                                        >
                                            Contact
                                        </Link>
                                        <Link
                                            href="/privacy-policy"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </div>
                                </div>
                                {/* Mobile Menu Footer */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="text-center">
                                        <p className="text-sm text-gray-500">© 2024 Sarkari Naukri</p>
                                        <p className="text-xs text-gray-400 mt-1">Government Job Alerts</p>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

                {/* Mobile Navigation Bar (Hidden on large screens) */}
                <div className="lg:hidden border-t border-white/20 py-2 overflow-x-auto">
                    <div className="flex space-x-4 min-w-max px-1">
                        {navigationLinks.slice(0, 5).map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors min-w-0"
                            >
                                <link.icon className="h-4 w-4" />
                                <span className="text-xs whitespace-nowrap">{link.label}</span>
                            </Link>
                        ))}
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="flex flex-col items-center gap-1 px-3 py-2 text-white hover:bg-white/10 h-auto"
                        >
                            <Menu className="h-4 w-4" />
                            <span className="text-xs">More</span>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}