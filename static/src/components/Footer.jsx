import React          from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-col">
              <h4>About Glasswall Desktop</h4>
              <p>
              Glasswall Desktop was originally developed by Glasswall Solutions Ltd.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-col middle">
              <h4>Resources</h4>
              <ul className="list-unstyled li-space-lg">
                <li className="media">
                  <i className="fa fa-angle-double-right"></i>
                  <div className="media-body">
                    <a
                      href="https://github.com/k8-proxy/glasswall-desktop"
                      className="primary"
                    >
                      How to Contribute?
                    </a>
                  </div>
                </li>
                <li className="media">
                  <i className="fa fa-angle-double-right"></i>
                  <div className="media-body">
                    <a
                      href="https://github.com/k8-proxy/glasswall-desktop"
                      className="primary"
                    >
                      Source Code
                    </a>
                  </div>
                </li>
                <li className="media">
                  <i className="fa fa-angle-double-right"></i>
                  <div className="media-body">
                    <a
                      href="https://github.com/k8-proxy/glasswall-desktop/blob/main/LICENSE"
                      className="primary"
                    >
                      EULA
                    </a>
                  </div>
                </li>
                <li className="media">
                  <i className="fa fa-angle-double-right"></i>
                  <div className="media-body">
                    <a
                      href="https://github.com/k8-proxy/glasswall-desktop/blob/main/LICENSE"
                      className="primary"
                    >
                      Privacy Policy
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-col last">
              <h4>Community</h4>
              <span className="fa-stack">
                <a target="_blank" href="https://github.com/k8-proxy/glasswall-desktop">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-github fa-stack-1x"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
