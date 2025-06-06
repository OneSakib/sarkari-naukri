'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import logo from '../../public/logo.png'; // Adjust the path as necessary
const Header: React.FC = () => {
    const pathname = usePathname();
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Latest Jobs', href: '/latest-jobs' },
        { label: 'Results', href: '/results' },
        { label: 'Admit Cards', href: '/admit-cards' },
        { label: 'Answer Key', href: '/answer-keys' },
        { label: 'Admission', href: '/admission' },
        { label: 'Syllabus', href: '/syllabus' },
        { label: 'Certificate Verification', href: '/certificate-verification' },
        { label: 'Others', href: '/importants' },
    ];
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <Image src={logo} width={50} height={50} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navItems.map((item) => (
                            <li className="nav-item" key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                                    aria-current={pathname === item.href ? 'page' : undefined}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
