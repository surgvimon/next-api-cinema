import React from 'react'

export default function FooterContainer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <div className="group">
          <div className="site-footer__col-one">
            <h1 className="school-logo-text school-logo-text--alt-color">
              <a href="#"><strong>Fictional</strong> Senima</a>
            </h1>
            <p><a className="site-footer__link" href="#">555.555.5555</a></p>
          </div>

          <div className="site-footer__col-two-three-group">
            <div className="site-footer__col-two">
              <h3 className="headline headline--small">เมนูแนะนำ</h3>
              <nav className="nav-list">
                <ul>
                  <li><a>Now Playing</a></li>
                  <li><a>Popular</a></li>
                  <li><a>Top Rated</a></li>
                  <li><a>Upcoming</a></li>
                </ul>
              </nav>
            </div>

            <div className="site-footer__col-three">
              <h3 className="headline headline--small">เกี่ยวกับเรา</h3>
              <nav className="nav-list">
                <ul>
                  <li><a>About</a></li>
                  <li><a>Privacy</a></li>
                  <li><a>Service</a></li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="site-footer__col-four">
            <h3 className="headline headline--small">ข้อมูลติดต่อเรา</h3>
            <nav>
              <ul className="min-list social-icons-list group">
                <li>
                  <a href="#" className="social-color-facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                </li>
                <li>
                  <a href="#" className="social-color-twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                </li>
                <li>
                  <a href="#" className="social-color-youtube"><i className="fa fa-youtube" aria-hidden="true"></i></a>
                </li>
                <li>
                  <a href="#" className="social-color-linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                </li>
                <li>
                  <a href="#" className="social-color-instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
