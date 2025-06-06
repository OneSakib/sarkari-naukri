interface ResultPageProps {
    params: { id: string };
}

export default function ResultDetailPage({ params }: ResultPageProps) {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h1 className="h3 mb-2">
                                <i className="fas fa-briefcase me-2"></i>
                                Latest Government Jobs
                            </h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="#">
                                            <i className="fas fa-home me-1"></i>Home
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active">Latest Jobs</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="text-end">
                            <div className="small">Last Updated</div>
                            <div className="fw-bold" id="lastUpdated">Today, 3:45 PM</div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container mt-5">
                
            </div>
        </>
    );
}
