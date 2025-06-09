export default function TopBar() {
    return (
        <section className="alerts-section">
            <div className="container">
                <h2 className="text-center mb-4 fw-bold">🚨 Important Updates</h2>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="alert-box">
                            <div className="new-tag">NEW</div>
                            <h5 className="fw-bold text-primary"><i className="fas fa-key me-2"></i>SSC CGL Answer Key Released</h5>
                            <p className="mb-2">Staff Selection Commission has released the answer key for Combined Graduate Level Examination 2024.</p>
                            <small className="text-muted">Released: Today, 2:30 PM</small>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="alert-box">
                            <div className="new-tag">HOT</div>
                            <h5 className="fw-bold text-success"><i className="fas fa-trophy me-2"></i>UPSC CSE Results Declared</h5>
                            <p className="mb-2">Union Public Service Commission announces Civil Services Examination 2024 final results.</p>
                            <small className="text-muted">Released: 1 hour ago</small>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="alert-box">
                            <div className="new-tag">LIVE</div>
                            <h5 className="fw-bold text-warning"><i className="fas fa-clock me-2"></i>Railway RRB NTPC Application Extended</h5>
                            <p className="mb-2">Last date for Railway Recruitment Board NTPC application extended till next week.</p>
                            <small className="text-muted">Updated: 3 hours ago</small>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="alert-box">
                            <div className="new-tag">NEW</div>
                            <h5 className="fw-bold text-info"><i className="fas fa-certificate me-2"></i>Bank PO Admit Card Available</h5>
                            <p className="mb-2">State Bank of India has released admit cards for Probationary Officer recruitment 2024.</p>
                            <small className="text-muted">Released: 5 hours ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}