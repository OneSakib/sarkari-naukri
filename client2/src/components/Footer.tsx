import { FileText } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <FileText className="h-6 w-6 text-blue-400" />
                            <span className="text-lg font-bold">Sarkari Naukari</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Your trusted source for latest government job notifications, admissions, and results.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Latest Jobs</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="/jobs/central-govt" className="hover:text-white">
                                    Central Government
                                </Link>
                            </li>
                            <li>
                                <Link href="/jobs/state-govt" className="hover:text-white">
                                    State Government
                                </Link>
                            </li>
                            <li>
                                <Link href="/jobs/railway" className="hover:text-white">
                                    Railway Jobs
                                </Link>
                            </li>
                            <li>
                                <Link href="/jobs/banking" className="hover:text-white">
                                    Banking Jobs
                                </Link>
                            </li>
                            <li>
                                <Link href="/jobs/defence" className="hover:text-white">
                                    Defence Jobs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Admissions</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="/admissions/engineering" className="hover:text-white">
                                    Engineering
                                </Link>
                            </li>
                            <li>
                                <Link href="/admissions/medical" className="hover:text-white">
                                    Medical
                                </Link>
                            </li>
                            <li>
                                <Link href="/admissions/management" className="hover:text-white">
                                    Management
                                </Link>
                            </li>
                            <li>
                                <Link href="/admissions/law" className="hover:text-white">
                                    Law
                                </Link>
                            </li>
                            <li>
                                <Link href="/admissions/teaching" className="hover:text-white">
                                    Teaching
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="/results" className="hover:text-white">
                                    Latest Results
                                </Link>
                            </li>
                            <li>
                                <Link href="/answer-keys" className="hover:text-white">
                                    Answer Keys
                                </Link>
                            </li>
                            <li>
                                <Link href="/syllabus" className="hover:text-white">
                                    Syllabus
                                </Link>
                            </li>
                            <li>
                                <Link href="/admit-cards" className="hover:text-white">
                                    Admit Cards
                                </Link>
                            </li>
                            <li>
                                <Link href="/notifications" className="hover:text-white">
                                    Notifications
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Sarkari Naukari. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}