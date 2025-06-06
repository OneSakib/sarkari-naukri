import Link from "next/link";

const Header: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/latest-jobs">Latest Jobs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/results">Results</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/admit-cards">Admit Cards</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/answer-keys">Answer Key</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/admission">Admission</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/syllabus">Syllabus</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/certificate-verification">Certificate Verification</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/importants">Others</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
