
export default function Hero() {
    return (
        <div className="hero-section-wrapper">
            <header className="header">
                <div className="container">
                    <div className="header-content text-center">
                        <h1 className="logo">
                            <i className="fas fa-briefcase me-3"></i>
                            Sarkari Job Alerts
                        </h1>
                        <p className="tagline">Your Gateway to Government Job Opportunities</p>
                    </div>
                </div>
            </header>
            <section className="search-section">
                <div className="container">
                    <div className="search-container">
                        <div className="row g-3">
                            <div className="col-md-8">
                                <input type="text" className="form-control search-input" id="stateSearch"
                                    placeholder="Search jobs by state name (e.g., Maharashtra, Delhi)" />
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-primary search-btn w-100" >
                                    <i className="fas fa-search me-2"></i>Search Jobs
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}