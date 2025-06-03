// src/components/Header.tsx
export default function Header() {
  return (
    <header className="header">
      <section id="intro" className="section-intro">
        <div className="logo-menu">
          <nav className="navbar navbar-default" role="navigation" data-spy="affix" data-offset-top="50">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand logo" href="index.html"><img src="assets/img/logo.png" alt="" /></a>
              </div>

              <div className="collapse navbar-collapse" id="navbar">
                <ul className="nav navbar-nav">
                  <li>
                    <a className="active" href="index.html">
                      Home <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown">
                      <li>
                        <a className="active" href="index.html">
                          Home 1
                        </a>
                      </li>
                      <li>
                        <a href="index-02.html">
                          Home 2
                        </a>
                      </li>
                      <li>
                        <a href="index-03.html">
                          Home 3
                        </a>
                      </li>
                      <li>
                        <a href="index-04.html">
                          Home 4
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">
                      Pages <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown">
                      <li>
                        <a href="about.html">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="job-page.html">
                          Job Page
                        </a>
                      </li>
                      <li>
                        <a href="job-details.html">
                          Job Details
                        </a>
                      </li>
                      <li>
                        <a href="resume.html">
                          Resume Page
                        </a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="faq.html">
                          FAQ
                        </a>
                      </li>
                      <li>
                        <a href="pricing.html">
                          Pricing Tables
                        </a>
                      </li>
                      <li>
                        <a href="contact.html">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Candidates <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown">
                      <li>
                        <a href="browse-jobs.html">
                          Browse Jobs
                        </a>
                      </li>
                      <li>
                        <a href="browse-categories.html">
                          Browse Categories
                        </a>
                      </li>
                      <li>
                        <a href="add-resume.html">
                          Add Resume
                        </a>
                      </li>
                      <li>
                        <a href="manage-resumes.html">
                          Manage Resumes
                        </a>
                      </li>
                      <li>
                        <a href="job-alerts.html">
                          Job Alerts
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Employers <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown">
                      <li>
                        <a href="post-job.html">
                          Add Job
                        </a>
                      </li>
                      <li>
                        <a href="manage-jobs.html">
                          Manage Jobs
                        </a>
                      </li>
                      <li>
                        <a href="manage-applications.html">
                          Manage Applications
                        </a>
                      </li>
                      <li>
                        <a href="browse-resumes.html">
                          Browse Resumes
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html">
                      Blog <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown">
                      <li>
                        <a href="blog.html">
                          Blog - Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-left-sidebar.html">
                          Blog - Left Sidebar
                        </a>
                      </li>
                      <li><a href="blog-full-width.html">Blog - Full Width</a></li>
                      <li>
                        <a href="single-post.html">
                          Blog Single Post
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right float-right">
                  <li className="left"><a href="post-job.html"><i className="ti-pencil-alt"></i> Post A Job</a></li>
                  <li className="right"><a href="my-account.html"><i className="ti-lock"></i>  Log In</a></li>
                </ul>
              </div>
            </div>
            <ul className="wpb-mobile-menu">
              <li>
                <a className="active" href="index.html">Home</a>
                <ul>
                  <li><a className="active" href="index.html">Home 1</a></li>
                  <li><a href="index-02.html">Home 2</a></li>
                  <li><a href="index-03.html">Home 3</a></li>
                  <li><a href="index-04.html">Home 4</a></li>
                </ul>
              </li>
              <li>
                <a href="about.html">Pages</a>
                <ul>
                  <li><a href="about.html">About</a></li>
                  <li><a href="job-page.html">Job Page</a></li>
                  <li><a href="job-details.html">Job Details</a></li>
                  <li><a href="resume.html">Resume Page</a></li>
                  <li><a href="privacy-policy.html">Privacy Policy</a></li>
                  <li><a href="faq.html">FAQ</a></li>
                  <li><a href="pricing.html">Pricing Tables</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </li>
              <li>
                <a href="#">For Candidates</a>
                <ul>
                  <li><a href="browse-jobs.html">Browse Jobs</a></li>
                  <li><a href="browse-categories.html">Browse Categories</a></li>
                  <li><a href="add-resume.html">Add Resume</a></li>
                  <li><a href="manage-resumes.html">Manage Resumes</a></li>
                  <li><a href="job-alerts.html">Job Alerts</a></li>
                </ul>
              </li>
              <li>
                <a href="#">For Employers</a>
                <ul>
                  <li><a href="post-job.html">Add Job</a></li>
                  <li><a href="manage-jobs.html">Manage Jobs</a></li>
                  <li><a href="manage-applications.html">Manage Applications</a></li>
                  <li><a href="browse-resumes.html">Browse Resumes</a></li>
                </ul>
              </li>
              <li>
                <a href="blog.html">Blog</a>
                <ul className="dropdown">
                  <li><a href="blog.html">Blog - Right Sidebar</a></li>
                  <li><a href="blog-left-sidebar.html">Blog - Left Sidebar</a></li>
                  <li><a href="blog-full-width.html">Blog - Full Width</a></li>
                  <li><a href="single-post.html">Blog Single Post</a></li>
                </ul>
              </li>
              <li className="btn-m"><a href="post-job.html"><i className="ti-pencil-alt"></i> Post A Job</a></li>
              <li className="btn-m"><a href="my-account.html"><i className="ti-lock"></i>  Log In</a></li>
            </ul>
          </nav>

          <div className="navmenu navmenu-default navmenu-fixed-left offcanvas">
            <div className="close" data-toggle="offcanvas" data-target=".navmenu">
              <i className="ti-close"></i>
            </div>
            <h3 className="title-menu">All Pages</h3>
            <ul className="nav navmenu-nav">
              <li><a href="index.html">Home</a></li>
              <li><a href="index-02.html">Home Page 2</a></li>
              <li><a href="index-03.html">Home Page 3</a></li>
              <li><a href="index-04.html">Home Page 4</a></li>
              <li><a href="about.html">About us</a></li>
              <li><a href="job-page.html">Job Page</a></li>
              <li><a href="job-details.html">Job Details</a></li>
              <li><a href="resume.html">Resume Page</a></li>
              <li><a href="privacy-policy.html">Privacy Policy</a></li>
              <li><a href="pricing.html">Pricing Tables</a></li>
              <li><a href="browse-jobs.html">Browse Jobs</a></li>
              <li><a href="browse-categories.html">Browse Categories</a></li>
              <li><a href="add-resume.html">Add Resume</a></li>
              <li><a href="manage-resumes.html">Manage Resumes</a></li>
              <li><a href="job-alerts.html">Job Alerts</a></li>
              <li><a href="post-job.html">Add Job</a></li>
              <li><a href="manage-jobs.html">Manage Jobs</a></li>
              <li><a href="manage-applications.html">Manage Applications</a></li>
              <li><a href="browse-resumes.html">Browse Resumes</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="faq.html">Faq</a></li>
              <li><a href="my-account.html">Login</a></li>
            </ul>
          </div>
          <div className="tbtn wow pulse" id="menu" data-wow-iteration="infinite" data-wow-duration="500ms" data-toggle="offcanvas" data-target=".navmenu">
            <p><i className="ti-files"></i> All Pages</p>
          </div>
        </div>
        <div className="search-container">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Find the job that fits your life</h1><br /><h2>More than <strong>12,000</strong> jobs are waiting to Kickstart your career!</h2>
                <div className="content">
                  <form method="" action="">
                    <div className="row">
                      <div className="col-md-4 col-sm-6">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="job title / keywords / company name" />
                          <i className="ti-time"></i>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="form-group">
                          <input className="form-control" type="email" placeholder="city / province / zip code" />
                          <i className="ti-location-pin"></i>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="search-category-container">
                          <label className="styled-select">
                            <select className="dropdown-product selectpicker">
                              <option>All Categories</option>
                              <option>Finance</option>
                              <option>IT & Engineering</option>
                              <option>Education/Training</option>
                              <option>Art/Design</option>
                              <option>Sale/Markting</option>
                              <option>Healthcare</option>
                              <option>Science</option>
                              <option>Food Services</option>
                            </select>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-1 col-sm-6">
                        <button type="button" className="btn btn-search-icon"><i className="ti-search"></i></button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="popular-jobs">
                  <b>Popular Keywords: </b>
                  <a href="#">Web Design</a>
                  <a href="#">Manager</a>
                  <a href="#">Programming</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}
