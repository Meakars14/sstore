import React from 'react';

export default function Navbar() {
  return (
    <header className="site-header header-scrolled position-fixed text-black bg-light">
      <nav className="navbar navbar-expand-lg px-3 mb-3">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="index.html">
            <img src="images/main-logo.png" alt="Logo" className="logo" />
          </a>

          {/* Toggle Button for Offcanvas */}
          <button
            className="navbar-toggler d-flex d-lg-none order-3 p-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#bdNavbar"
            aria-controls="bdNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg className="navbar-icon">
              <use xlinkHref="#navbar-icon"></use>
            </svg>
          </button>

          {/* Offcanvas Menu */}
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="bdNavbar"
            aria-labelledby="bdNavbarOffcanvasLabel"
          >
            <div className="offcanvas-header px-4 pb-0">
              <a className="navbar-brand" href="index.html">
                <img src="images/main-logo.png" alt="Logo" className="logo" />
              </a>
              <button
                type="button"
                className="btn-close btn-close-black"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              {/* Navigation Links */}
              <ul className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
                {[
                  { href: '#billboard', label: 'Home' },
                  { href: '#company-services', label: 'Services' },
                  { href: '#mobile-products', label: 'Products' },
                  { href: '#smart-watches', label: 'Watches' },
                  { href: '#yearly-sale', label: 'Sale' },
                  { href: '#latest-blog', label: 'Blog' },
                ].map((link) => (
                  <li className="nav-item" key={link.href}>
                    <a className="nav-link me-4" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}

                {/* Dropdown Menu */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link me-4 dropdown-toggle link-dark"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    {[
                      'about',
                      'blog',
                      'shop',
                      'cart',
                      'checkout',
                      'single-post',
                      'single-product',
                      'contact',
                    ].map((page) => (
                      <li key={page}>
                        <a href={`${page}.html`} className="dropdown-item">
                          {page.charAt(0).toUpperCase() + page.slice(1)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* User Items */}
                <li className="nav-item">
                  <div className="user-items ps-5">
                    <ul className="d-flex justify-content-end list-unstyled">
                      {[
                        { href: '#', icon: 'search', className: 'search-item pe-3' },
                        { href: '#', icon: 'user', className: 'pe-3' },
                        { href: 'cart.html', icon: 'cart', className: '' },
                      ].map((item, index) => (
                        <li key={index} className={item.className}>
                          <a href={item.href}>
                            <svg className={item.icon}>
                              <use xlinkHref={`#${item.icon}`}></use>
                            </svg>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
