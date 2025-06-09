import { Button } from "./ui/button"
import Link from "next/link"
import ThemeModeToggle from "@/components/ThemeModeToggle"
import Image from "next/image"
export default function Header() {
    const navLinks = [
        { name: "Latest Jobs", href: "/latest-jobs" },
        { name: "Admission", href: "/admissions" },
        { name: "Results", href: "/results" },
        { name: "Answer Keys", href: "/answer-keys" },
        { name: "Syllabus", href: "/syllabus" },
        { name: "Admit Cards", href: "/admit-cards" },
        { name: "Certificate Verification", href: "/certificate-verification" },
        { name: "Others", href: "/others" },
    ]

    return (
        <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <div className="flex items-center space-x-2">
                            <div className="p-2 rounded-lg">
                                <Image src="/logo.png" alt="Logo" width={40} height={40} className="h-10 w-10" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Sarkari Naukri
                                </h1>
                                <p className="text-xs text-muted-foreground">Your one-stop destination for government jobs.</p>
                            </div>
                        </div>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Button key={link.name} variant="ghost" size="sm" asChild>
                                <Link href={link.href}>{link.name}</Link>
                            </Button>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4">
                        <ThemeModeToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}