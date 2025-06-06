import Header from "@/components/post/Header";

interface ResultPageProps {
    params: { id: string };
}

export default function ResultDetailPage({ params }: ResultPageProps) {
    console.log("ResultDetailPage params:", params);
    return (
        <>
            <Header />
            <div className="container">
                <div className="main-container">
                    <div className="header-section">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <h1 className="post-title animate__animated animate__fadeInLeft">
                                    UPSSSC UP Preliminary Examination Test PET Advt No 01-Exam/2025
                                </h1>
                                <div
                                    className="post-meta animate__animated animate__fadeInLeft animate__delay-1s"
                                >
                                    <span className="badge badge-custom bg-warning text-dark">
                                        <i className="fas fa-calendar-alt me-2"></i>14 May 2025 | 10:32 AM
                                    </span>
                                    <span className="badge badge-custom bg-success">
                                        <i className="fas fa-fire me-2"></i>Apply Online
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-4 text-end">
                                <div className="icon-box bg-light text-primary">
                                    <i className="fas fa-graduation-cap"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid p-4">
                        <div className="notification-banner">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-bullhorn me-3 fs-4"></i>
                                <div>
                                    <strong>Latest Update:</strong> UPSSSC has released PET 2025
                                    notification. Apply before the last date!
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-8">
                                <div className="card card-animated">
                                    <div className="card-header bg-primary text-white">
                                        <h5 className="mb-0">
                                            <i className="fas fa-info-circle me-2"></i>Short Information
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="lead">
                                            Uttar Pradesh Subordinate Service Selection Commission
                                            (UPSSSC) has released Preliminary Examination Test PET Advt
                                            No. 01-Exam/2025 Recruitment Notification. Those candidates
                                            who are interested in this UPSSSC Preliminary Examination
                                            Test PET 2025 can Apply Online from
                                            <strong>14/05/2025 to 17/06/2025</strong>.
                                        </p>
                                    </div>
                                </div>

                                <div className="card card-animated">
                                    <div className="card-header bg-info text-white">
                                        <h5 className="mb-0">
                                            <i className="fas fa-clock me-2"></i>Important Dates
                                        </h5>
                                    </div>
                                    <div className="card-body important-dates">
                                        <div className="timeline">
                                            <div className="timeline-item">
                                                <div
                                                    className="d-flex justify-content-between align-items-center"
                                                >
                                                    <strong>Application Begin</strong>
                                                    <span className="badge bg-success">14/05/2025</span>
                                                </div>
                                            </div>
                                            <div className="timeline-item">
                                                <div
                                                    className="d-flex justify-content-between align-items-center"
                                                >
                                                    <strong>Last Date for Registration</strong>
                                                    <span className="badge bg-danger">17/06/2025</span>
                                                </div>
                                            </div>
                                            <div className="timeline-item">
                                                <div
                                                    className="d-flex justify-content-between align-items-center"
                                                >
                                                    <strong>Last Date for Fee Payment</strong>
                                                    <span className="badge bg-danger">17/06/2025</span>
                                                </div>
                                            </div>
                                            <div className="timeline-item">
                                                <div
                                                    className="d-flex justify-content-between align-items-center"
                                                >
                                                    <strong>Correction Last Date</strong>
                                                    <span className="badge bg-warning text-dark"
                                                    >24/06/2025</span                                                    >
                                                </div>
                                            </div>
                                            <div className="timeline-item">
                                                <div
                                                    className="d-flex justify-content-between align-items-center"
                                                >
                                                    <strong>Exam Date</strong>
                                                    <span className="badge bg-info">As per Schedule</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-animated">
                                    <div className="card-header bg-success text-white">
                                        <h5 className="mb-0">
                                            <i className="fas fa-clipboard-list me-2"></i>How to Fill UPSSSC
                                            PET 2025 Online Form
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="steps-container">
                                            <div className="step-item">
                                                <div className="step-number">1</div>
                                                <div>
                                                    Check and collect all required documents - Eligibility,
                                                    ID Proof, Address Details
                                                </div>
                                            </div>
                                            <div className="step-item">
                                                <div className="step-number">2</div>
                                                <div>
                                                    Ready scanned documents - Photo, Signature, ID Proof,
                                                    etc.
                                                </div>
                                            </div>
                                            <div className="step-item">
                                                <div className="step-number">3</div>
                                                <div>
                                                    Fill the application form carefully and check preview
                                                </div>
                                            </div>
                                            <div className="step-item">
                                                <div className="step-number">4</div>
                                                <div>
                                                    Submit the form and take a printout of the final
                                                    submitted form
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card card-animated">
                                    <div className="card-header bg-dark text-white">
                                        <h5 className="mb-0">
                                            <i className="fas fa-tachometer-alt me-2"></i>Quick Info
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-unstyled">
                                            <li className="mb-2"><strong>Organization:</strong> UPSSSC</li>
                                            <li className="mb-2"><strong>Exam Name:</strong> PET 2025</li>
                                            <li className="mb-2"><strong>Minimum Age:</strong> 18 Years</li>
                                            <li className="mb-2"><strong>Maximum Age:</strong> 40 Years</li>
                                            <li className="mb-2">
                                                <strong>Qualification:</strong> className 10
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card card-animated">
                                    <div className="card-header bg-warning text-dark">
                                        <h5 className="mb-0">
                                            <i className="fas fa-money-bill-wave me-2"></i>Application Fee
                                        </h5>
                                    </div>
                                    <div className="card-body fee-structure">
                                        <div className="row text-center">
                                            <div className="col-12 mb-3">
                                                <div className="h4">General / OBC</div>
                                                <div className="h2">₹185/-</div>
                                            </div>
                                            <div className="col-6">
                                                <div className="h6">SC / ST</div>
                                                <div className="h4">₹95/-</div>
                                            </div>
                                            <div className="col-6">
                                                <div className="h6">PH (Dviyang)</div>
                                                <div className="h4">₹25/-</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-animated">
                                    <div className="card-header bg-primary text-white">
                                        <h5 className="mb-0">
                                            <i className="fas fa-link me-2"></i>Important Links
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-grid gap-2">
                                            <a href="#" className="btn btn-apply">
                                                <i className="fas fa-external-link-alt me-2"></i>Apply Online
                                            </a>
                                            <a href="#" className="btn btn-outline-primary">
                                                <i className="fas fa-download me-2"></i>Download Notification
                                            </a>
                                            <a href="#" className="btn btn-outline-info">
                                                <i className="fas fa-book me-2"></i>Download Syllabus
                                            </a>
                                            <a href="#" className="btn btn-outline-success">
                                                <i className="fas fa-globe me-2"></i>Official Website
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12">
                                <div className="card card-animated">
                                    <div className="card-body text-center">
                                        <h5>Join Our Community</h5>
                                        <p className="mb-3">
                                            Stay updated with latest government job notifications
                                        </p>
                                        <div className="d-flex justify-content-center gap-3 flex-wrap">
                                            <a href="#" className="btn btn-outline-primary">
                                                <i className="fab fa-telegram me-2"></i>Telegram
                                            </a>
                                            <a href="#" className="btn btn-outline-success">
                                                <i className="fab fa-whatsapp me-2"></i>WhatsApp
                                            </a>
                                            <a href="#" className="btn btn-outline-info">
                                                <i className="fab fa-facebook me-2"></i>Facebook
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
