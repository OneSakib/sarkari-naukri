
export default function Hero() {
    return (
        <section className="hero-section">
            <div className="floating-elements">
                <i className="fas fa-code floating-icon" style={{ fontSize: '3rem' }}></i>
                <i className="fas fa-chart-line floating-icon" style={{ fontSize: '2.5rem' }}></i>
                <i className="fas fa-rocket floating-icon" style={{ fontSize: '3.5rem' }}></i>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h1 className="hero-title">Find Your Dream Job Today</h1>
                            <p className="hero-subtitle">Discover thousands of opportunities from top companies worldwide. Your perfect career awaits!</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="search-container">
                            <form className="search-form">
                                <div className="search-input-group">
                                    <i className="fas fa-search search-icon"></i>
                                    <input type="text" className="form-control search-input" placeholder="Job title, keywords, or company" id="jobSearch" />
                                </div>
                                <div className="search-input-group">
                                    <i className="fas fa-map-marker-alt search-icon"></i>
                                    <input type="text" className="form-control search-input" placeholder="City, state, or country" id="locationSearch" />
                                </div>
                                <button type="submit" className="btn search-btn">
                                    <i className="fas fa-search me-2"></i>Search Jobs
                                </button>
                            </form>

                            <div className="popular-searches">
                                <small className="text-muted">Popular searches:</small><br />
                                <a href="#" className="popular-tag">Software Engineer</a>
                                <a href="#" className="popular-tag">Data Scientist</a>
                                <a href="#" className="popular-tag">Product Manager</a>
                                <a href="#" className="popular-tag">UI/UX Designer</a>
                                <a href="#" className="popular-tag">Marketing Manager</a>
                                <a href="#" className="popular-tag">Sales Executive</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}