import React from 'react'

export default function UserDash() {
    return (
        <><div className="page-wrapper">


            <div className="main-container">


                <nav id="sidebar" className="sidebar-wrapper">


                    <div className="app-brand px-3 py-3 d-flex align-items-center">
                        <a href="#">
                            <img src="assets/images/auth/vendorposter.svg" className="logo" alt="Vendor" />
                        </a>
                    </div>



                    <div className="sidebar-user-profile">
                        <img src="assets/images/auth/vendorposter.svg" className="profile-thumb rounded d-lg-flex d-none"
                            alt="Bootstrap Gallery" />
                        <h5 className="profile-name lh-lg mt-2 text-truncate">Vendor Name</h5>

                    </div>
                    <div className="sidebarMenuScroll">
                        <ul className="sidebar-menu">
                            <li className="active current-page">
                                <a href="index.html">
                                    <i className="bi bi-bar-chart-line"></i>
                                    <span className="menu-text">Analytics</span>
                                </a>
                            </li>
                            <li>
                                <a href="widgets.html">
                                    <i className="bi bi-clipboard-data"></i>
                                    <span className="menu-text">Widgets</span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#!">
                                    <i className="bi bi-columns-gap"></i>
                                    <span className="menu-text">Components</span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="accordions.html">Accordions</a>
                                    </li>
                                    <li>
                                        <a href="alerts.html">Alerts</a>
                                    </li>
                                    <li>
                                        <a href="buttons.html">Buttons</a>
                                    </li>
                                    <li>
                                        <a href="badges.html">Badges</a>
                                    </li>
                                    <li>
                                        <a href="carousel.html">Carousel</a>
                                    </li>
                                    <li>
                                        <a href="list-items.html">List Items</a>
                                    </li>
                                    <li>
                                        <a href="progress.html">Progress Bars</a>
                                    </li>
                                    <li>
                                        <a href="popovers.html">Popovers</a>
                                    </li>
                                    <li>
                                        <a href="tooltips.html">Tooltips</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#!">
                                    <i className="bi bi-code-square"></i>
                                    <span className="menu-text">Forms</span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="form-inputs.html">Form Inputs</a>
                                    </li>
                                    <li>
                                        <a href="form-checkbox-radio.html">Checkbox &amp; Radio</a>
                                    </li>
                                    <li>
                                        <a href="form-file-input.html">File Input</a>
                                    </li>
                                    <li>
                                        <a href="form-validations.html">Validations</a>
                                    </li>
                                    <li>
                                        <a href="date-time-pickers.html">Date Time Pickers</a>
                                    </li>
                                    <li>
                                        <a href="form-layouts.html">Form Layouts</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#!">
                                    <i className="bi bi-window-sidebar"></i>
                                    <span className="menu-text">Invoices</span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="create-invoice.html">Create Invoice</a>
                                    </li>
                                    <li>
                                        <a href="view-invoice.html">View Invoice</a>
                                    </li>
                                    <li>
                                        <a href="invoice-list.html">Invoice List</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="tables.html">
                                    <i className="bi bi-border-all"></i>
                                    <span className="menu-text">Tables</span>
                                </a>
                            </li>
                            <li>
                                <a href="subscribers.html">
                                    <i className="bi bi-check-circle"></i>
                                    <span className="menu-text">Subscribers</span>
                                </a>
                            </li>
                            <li>
                                <a href="contacts.html">
                                    <i className="bi bi-wallet2"></i>
                                    <span className="menu-text">Contacts</span>
                                </a>
                            </li>
                            <li>
                                <a href="settings.html">
                                    <i className="bi bi-gear"></i>
                                    <span className="menu-text">Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href="profile.html">
                                    <i className="bi bi-person-square"></i>
                                    <span className="menu-text">Profile</span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#!">
                                    <i className="bi bi-code-square"></i>
                                    <span className="menu-text">Cards</span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="cards.html">Cards</a>
                                    </li>
                                    <li>
                                        <a href="advanced-cards.html">Advanced Cards</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#!">
                                    <i className="bi bi-pie-chart"></i>
                                    <span className="menu-text">Graphs</span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="apex.html">Apex</a>
                                    </li>
                                    <li>
                                        <a href="morris.html">Morris</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="maps.html">
                                    <i className="bi bi-pin-map"></i>
                                    <span className="menu-text">Maps</span>
                                </a>
                            </li>
                            <li>
                                <a href="tabs.html">
                                    <i className="bi bi-slash-square"></i>
                                    <span className="menu-text">Tabs</span>
                                </a>
                            </li>
                            <li>
                                <a href="modals.html">
                                    <i className="bi bi-terminal"></i>
                                    <span className="menu-text">Modals</span>
                                </a>
                            </li>
                            <li>
                                <a href="icons.html">
                                    <i className="bi bi-textarea"></i>
                                    <span className="menu-text">Icons</span>
                                </a>
                            </li>
                            <li>
                                <a href="typography.html">
                                    <i className="bi bi-explicit"></i>
                                    <span className="menu-text">Typography</span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#!">
                                    <i className="bi bi-upc-scan"></i>
                                    <span className="menu-text">Login/Signup</span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="login.html">Login</a>
                                    </li>
                                    <li>
                                        <a href="signup.html">Signup</a>
                                    </li>
                                    <li>
                                        <a href="forgot-password.html">Forgot Password</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="page-not-found.html">
                                    <i className="bi bi-exclamation-diamond"></i>
                                    <span className="menu-text">Page Not Found</span>
                                </a>
                            </li>
                            <li>
                                <a href="maintenance.html">
                                    <i className="bi bi-exclamation-octagon"></i>
                                    <span className="menu-text">Maintenance</span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#!">
                                    <i className="bi bi-code-square"></i>
                                    <span className="menu-text">Multi Level</span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="#!">Level One Link</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            Level One Menu
                                            <i className="bi bi-chevron-right"></i>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li>
                                                <a href="#!">Level Two Link</a>
                                            </li>
                                            <li>
                                                <a href="#!">Level Two Menu
                                                    <i className="bi bi-chevron-right"></i>
                                                </a>
                                                <ul className="treeview-menu">
                                                    <li>
                                                        <a href="#!">Level Three Link</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Level Three Link</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#!">Level One Link</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </nav>
                <div className="app-container">


                    <div className="app-header d-flex align-items-center">


                        <div className="d-flex">
                            <button className="btn btn-primary me-2 toggle-sidebar" id="toggle-sidebar">
                                <i className="bi bi-chevron-left fs-5"></i>
                            </button>
                            <button className="btn btn-primary me-2 pin-sidebar" id="pin-sidebar">
                                <i className="bi bi-chevron-left fs-5"></i>
                            </button>
                        </div>
                        <div className="app-brand-sm d-md-none d-sm-block">
                            <a href="index.html">
                                <img src="assets/images/logo-sm.svg" className="logo" alt="Bootstrap Gallery" />
                            </a>
                        </div>
                        <div className="header-actions">
                            <div className="d-lg-block d-none me-2">


                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search" />
                                    <button className="btn btn-outline-primary" type="button">
                                        <i className="bi bi-search fs-5"></i>
                                    </button>
                                </div>


                            </div>
                            <div className="dropdown ms-3">
                                <a className="dropdown-toggle d-flex p-2 py-3" href="#!" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i className="bi bi-grid fs-2 lh-1"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end shadow">

                                    <div className="d-flex gap-2 m-2">
                                        <a href="javascript:void(0)" className="g-col-4 p-2 border rounded-2">
                                            <img src="assets/images/brand-behance.svg" className="img-3x" alt="Admin Themes" />
                                        </a>
                                        <a href="javascript:void(0)" className="g-col-4 p-2 border rounded-2">
                                            <img src="assets/images/brand-gatsby.svg" className="img-3x" alt="Admin Themes" />
                                        </a>
                                        <a href="javascript:void(0)" className="g-col-4 p-2 border rounded-2">
                                            <img src="assets/images/brand-google.svg" className="img-3x" alt="Admin Themes" />
                                        </a>
                                        <a href="javascript:void(0)" className="g-col-4 p-2 border rounded-2">
                                            <img src="assets/images/brand-bitcoin.svg" className="img-3x" alt="Admin Themes" />
                                        </a>
                                        <a href="javascript:void(0)" className="g-col-4 p-2 border rounded-2">
                                            <img src="assets/images/brand-dribbble.svg" className="img-3x" alt="Admin Themes" />
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className="dropdown ms-3">
                                <a className="dropdown-toggle d-flex p-2 py-3" href="#!" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i className="bi bi-bell fs-2 lh-1"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end shadow">
                                    <div className="dropdown-item">
                                        <div className="d-flex py-2 border-bottom">
                                            <img src="assets/images/user.png" className="img-4x me-3 rounded-3" alt="Admin Theme" />
                                            <div className="m-0">
                                                <h5 className="mb-1 fw-semibold">Sophie Michiels</h5>
                                                <p className="mb-1">Membership has been ended.</p>
                                                <p className="small m-0 text-primary">Today, 07:30pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-item">
                                        <div className="d-flex py-2 border-bottom">
                                            <img src="assets/images/user2.png" className="img-4x me-3 rounded-3" alt="Admin Theme" />
                                            <div className="m-0">
                                                <h5 className="mb-1 fw-semibold">Sophie Michiels</h5>
                                                <p className="mb-1">Congratulate, James for new job.</p>
                                                <p className="small m-0 text-primary">Today, 08:00pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-item">
                                        <div className="d-flex py-2">
                                            <img src="assets/images/user1.png" className="img-4x me-3 rounded-3" alt="Admin Theme" />
                                            <div className="m-0">
                                                <h5 className="mb-1 fw-semibold">Sophie Michiels</h5>
                                                <p className="mb-2">Lewis added new schedule release.</p>
                                                <p className="small m-0 text-primary">Today, 09:30pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top py-2 px-3 text-end">
                                        <a href="javascript:void(0)">View all</a>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown ms-3">
                                <a id="userSettings" className="dropdown-toggle d-flex py-2 align-items-center text-decoration-none"
                                    href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="d-none d-md-block me-2">Current logged-in User</span>
                                    <img src="assets/images/user.png" className="rounded-circle img-3x" alt="Bootstrap Gallery" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end shadow">
                                    <a className="dropdown-item d-flex align-items-center" href="profile.html"><i
                                        className="bi bi-person fs-4 me-2"></i>Profile</a>
                                    <a className="dropdown-item d-flex align-items-center" href="settings.html"><i
                                        className="bi bi-gear fs-4 me-2"></i>Account Settings</a>
                                    <a className="dropdown-item d-flex align-items-center" href="login.html"><i
                                        className="bi bi-escape fs-4 me-2"></i>Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="app-hero-header">
                        <h5 className="fw-light">Welcome Bradford,</h5>
                        <h3 className="fw-light mb-5">
                            <span>Home</span> / <span className="menu-text">Analytics</span>
                        </h3>
                    </div>
                    <div className="app-body">


                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="card shadow mb-4 p-3 rounded-2 justify-content-between flex-row">
                                    <div className="mt-3">
                                        <h5 className="text-secondary fw-light">Sales</h5>
                                        <h1 className="text-primary">3700</h1>
                                        <span className="badge border border-primary text-primary me-3">Today</span>
                                    </div>
                                    <div id="sparkline1"></div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="card shadow mb-4 p-3 rounded-2 justify-content-between flex-row">
                                    <div className="mt-3">
                                        <h5 className="text-secondary fw-light">Expenses</h5>
                                        <h1 className="text-primary">2500</h1>
                                        <span className="badge border border-primary text-primary me-3">Last week</span>
                                    </div>
                                    <div id="sparkline2"></div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-12">
                                <div className="card shadow mb-4 p-3 rounded-2 justify-content-between flex-row">
                                    <div className="mt-3">
                                        <h5 className="text-secondary fw-light">Income</h5>
                                        <h1 className="text-primary">250K</h1>
                                        <span className="badge border border-primary text-primary me-3">Year 2022</span>
                                    </div>
                                    <div id="sparkline3"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="card shadow mb-4">
                                    <div className="card-header">
                                        <h5 className="card-title">Sales by Location</h5>
                                    </div>
                                    <div className="card-body">

                                        <div className="row align-items-center">
                                            <div className="col-xxl-2 col-sm-3 col-12">
                                                <div className="d-grid gap-4">
                                                    <div className="d-flex align-items-center">
                                                        <div className="icon-box lg border border-primary rounded-4">
                                                            <img src="assets/images/flags/1x1/us.svg" className="img-2x rounded-2"
                                                                alt="Bootstrap Gallery" />
                                                        </div>
                                                        <div className="ms-3">
                                                            <h6 className="text-muted">USA</h6>
                                                            <h3 className="m-0">$9500</h3>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <div className="icon-box lg border border-primary rounded-4">
                                                            <img src="assets/images/flags/1x1/in.svg" className="img-2x rounded-2"
                                                                alt="Bootstrap Gallery" />
                                                        </div>
                                                        <div className="ms-3">
                                                            <h6 className="text-muted">India</h6>
                                                            <h3 className="m-0">$8700</h3>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <div className="icon-box lg border border-primary rounded-4">
                                                            <img src="assets/images/flags/1x1/br.svg" className="img-2x rounded-2"
                                                                alt="Bootstrap Gallery" />
                                                        </div>
                                                        <div className="ms-3">
                                                            <h6 className="text-muted">Brazil</h6>
                                                            <h3 className="m-0">$7500</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-8 col-sm-6 col-12">
                                                <div id="world-map-markers3" className="chart-height-xxl position-relative"></div>
                                            </div>
                                            <div className="col-xxl-2 col-sm-3 col-12">
                                                <div className="d-grid gap-4">
                                                    <div className="d-flex align-items-center justify-content-end">
                                                        <div className="me-3 text-end">
                                                            <h6 className="text-muted">Turkey</h6>
                                                            <h3 className="m-0">$6900</h3>
                                                        </div>
                                                        <div className="icon-box lg border border-success rounded-4">
                                                            <img src="assets/images/flags/1x1/tr.svg" className="img-2x rounded-2"
                                                                alt="Bootstrap Gallery" />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-end">
                                                        <div className="me-3 text-end">
                                                            <h6 className="text-muted">France</h6>
                                                            <h3 className="m-0">$6200</h3>
                                                        </div>
                                                        <div className="icon-box lg border border-success rounded-4">
                                                            <img src="assets/images/flags/1x1/fr.svg" className="img-2x rounded-2"
                                                                alt="Bootstrap Gallery" />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-end">
                                                        <div className="me-3 text-end">
                                                            <h6 className="text-muted">Germany</h6>
                                                            <h3 className="m-0">$5800</h3>
                                                        </div>
                                                        <div className="icon-box lg border border-success rounded-4">
                                                            <img src="assets/images/flags/1x1/de.svg" className="img-2x rounded-2"
                                                                alt="Bootstrap Gallery" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-4 col-sm-6 col-12">
                                <div className="card shadow mb-4">
                                    <div className="card-header">
                                        <h5 className="card-title">Weekly Sales</h5>
                                    </div>
                                    <div className="card-body">
                                        <div id="weekly-sales"></div>
                                        <div className="text-center my-4">
                                            <h2>
                                                6400
                                                <i className="bi bi-arrow-up-right-circle-fill text-primary"></i>
                                            </h2>
                                            <p className="text-truncate m-0">
                                                15% higher than last month
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-sm-6 col-12">
                                <div className="card shadow mb-4">
                                    <div className="card-header">
                                        <h5 className="card-title">Deals</h5>
                                    </div>
                                    <div className="card-body">
                                        <div id="deals"></div>
                                        <div className="text-center my-4">
                                            <h2>
                                                2500
                                                <i className="bi bi-arrow-up-right-circle-fill text-primary"></i>
                                            </h2>
                                            <p className="text-truncate m-0">
                                                29% higher than last month
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-sm-6 col-12">
                                <div className="card shadow mb-4">
                                    <div className="card-header">
                                        <h5 className="card-title">By Channel</h5>
                                    </div>
                                    <div className="card-body">
                                        <div id="channel"></div>
                                        <div className="text-center my-4">
                                            <h2>
                                                8950
                                                <i className="bi bi-arrow-up-right-circle-fill text-primary"></i>
                                            </h2>
                                            <p className="text-truncate m-0">
                                                18% higher than last month
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-sm-6 col-12">
                                <div className="card shadow mb-4">
                                    <div className="card-header">
                                        <h5 className="card-title">New Customers</h5>
                                    </div>
                                    <div className="card-body">
                                        <div id="customers"></div>
                                        <div className="text-center my-4">
                                            <h2>
                                                7560
                                                <i className="bi bi-arrow-up-right-circle-fill text-primary"></i>
                                            </h2>
                                            <p className="text-truncate m-0">
                                                16% higher than last month
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-sm-6 col-12">
                                <div className="card shadow mb-4">
                                    <div className="card-header">
                                        <h5 className="card-title">By Device</h5>
                                    </div>
                                    <div className="card-body">
                                        <div id="device"></div>
                                        <div className="text-center my-4">
                                            <h2>
                                                3860
                                                <i className="bi bi-arrow-up-right-circle-fill text-primary"></i>
                                            </h2>
                                            <p className="text-truncate m-0">
                                                16% higher than last month
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-sm-6 col-12">
                                <div className="card shadow mb-4">
                                    <div className="card-header">
                                        <h5 className="card-title">Demography</h5>
                                    </div>
                                    <div className="card-body">
                                        <div id="demography" className="d-flex justify-content-center"></div>
                                        <div className="text-center my-4">
                                            <h2>
                                                4250
                                                <i className="bi bi-arrow-up-right-circle-fill text-primary"></i>
                                            </h2>
                                            <p className="text-truncate m-0">
                                                24% higher than last month
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="app-footer">
                        <span>© Bootstrap Gallery 2024</span>
                    </div>


                </div>


            </div>


        </div></>


    )
}
