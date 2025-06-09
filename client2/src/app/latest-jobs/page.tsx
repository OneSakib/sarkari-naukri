export default function LatestJobsPage() {
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
            <div className="container py-5">

                <main className="container my-4">
                    <section className="stats-section fade-in">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="stat-card">
                                    <div className="stat-icon" style={{ background: "linear-gradient(135deg, var(--primary-color), #3b82f6)" }}>
                                        <i className="fas fa-briefcase"></i>
                                    </div>
                                    <div className="stat-number" id="totalJobs">1,247</div>
                                    <div className="stat-label">Total Active Jobs</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="stat-card">
                                    <div className="stat-icon" style={{ background: "linear-gradient(135deg, var(--success-color), #16a34a)" }}>
                                        <i className="fas fa-calendar-plus"></i>
                                    </div>
                                    <div className="stat-number" id="newJobs">89</div>
                                    <div className="stat-label">New This Week</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="stat-card">
                                    <div className="stat-icon" style={{ background: "linear-gradient(135deg, var(--warning-color), #d97706)" }}>
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div className="stat-number" id="closingJobs">156</div>
                                    <div className="stat-label">Closing Soon</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="stat-card">
                                    <div className="stat-icon" style={{ background: "linear-gradient(135deg, var(--accent-color), #059669)" }}>
                                        <i className="fas fa-user-tie"></i>
                                    </div>
                                    <div className="stat-number" id="vacancies">45,678</div>
                                    <div className="stat-label">Total Vacancies</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="filter-section slide-in">
                        <div className="filter-card">
                            <div className="row g-3">
                                <div className="col-md-4">
                                    <label htmlFor="searchInput" className="form-label fw-semibold">
                                        <i className="fas fa-search me-1"></i>Search Jobs
                                    </label>
                                    <input type="text" className="form-control search-input" id="searchInput"
                                        placeholder="Search by job title, department..." />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="stateFilter" className="form-label fw-semibold">
                                        <i className="fas fa-map-marker-alt me-1"></i>State
                                    </label>
                                    <select className="form-select search-input" id="stateFilter">
                                        <option value="">All States</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="West Bengal">West Bengal</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Punjab">Punjab</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="categoryFilter" className="form-label fw-semibold">
                                        <i className="fas fa-tags me-1"></i>Category
                                    </label>
                                    <select className="form-select search-input" id="categoryFilter">
                                        <option value="">All Categories</option>
                                        <option value="Banking">Banking</option>
                                        <option value="Railway">Railway</option>
                                        <option value="SSC">SSC</option>
                                        <option value="UPSC">UPSC</option>
                                        <option value="Teaching">Teaching</option>
                                        <option value="Police">Police</option>
                                        <option value="Healthcare">Healthcare</option>
                                        <option value="Defense">Defense</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="statusFilter" className="form-label fw-semibold">
                                        <i className="fas fa-filter me-1"></i>Status
                                    </label>
                                    <select className="form-select search-input" id="statusFilter">
                                        <option value="">All Status</option>
                                        <option value="Active">Active</option>
                                        <option value="Closing Soon">Closing Soon</option>
                                        <option value="Closed">Closed</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label fw-semibold text-white">.</label>
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-primary btn-filter">
                                            <i className="fas fa-search me-1"></i>Search
                                        </button>
                                        <button className="btn btn-outline-secondary btn-filter">
                                            <i className="fas fa-times me-1"></i>Clear
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="jobs-table-container fade-in" id="jobsTableContainer">
                        <div className="table-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="mb-0">
                                    <i className="fas fa-list me-2"></i>
                                    Latest Government Jobs
                                    <span className="badge bg-primary ms-2" id="resultsCount">Showing 1-20 of 1,247</span>
                                </h4>
                                <div className="d-flex gap-2">
                                    <select className="form-select form-select-sm" id="entriesPerPage" style={{ width: "auto" }}>
                                        <option value="10">10 per page</option>
                                        <option value="20" selected>20 per page</option>
                                        <option value="50">50 per page</option>
                                    </select>
                                    <button className="btn btn-outline-primary btn-sm">
                                        <i className="fas fa-sync-alt me-1"></i>Refresh
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="table jobs-table" id="jobsTable">
                                <thead>
                                    <tr>
                                        <th style={{ width: '5%' }}>#</th>
                                        <th style={{ width: '25%' }}>Job Title</th>
                                        <th style={{ width: '15%' }}>Department</th>
                                        <th style={{ width: '10%' }}>Vacancies</th>
                                        <th style={{ width: '10%' }}>Location</th>
                                        <th style={{ width: '10%' }}>Posted Date</th>
                                        <th style={{ width: '10%' }}>Last Date</th>
                                        <th style={{ width: '8%' }}>Status</th>
                                        <th style={{ width: '12%' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="jobsTableBody">
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <section className="pagination-container fade-in">
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                            <div className="page-info mb-2 mb-md-0">
                                <span id="pageInfo">Showing 1-20 of 1,247 jobs</span>
                            </div>
                            <nav aria-label="Jobs pagination">
                                <ul className="pagination" id="pagination">
                                </ul>
                            </nav>
                        </div>
                    </section>
                </main>

            </div>
            </>
    );
}