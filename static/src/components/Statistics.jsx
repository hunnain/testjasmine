import React  from "react";

export default function Statistics() {
  return (
    <div className="counter">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* <!-- Counter --> */}
            <div id="counter">
              <div className="cell">
                <div
                  id          ="happy-users-count_2"
                  className   ="counter-value number-count"
                  data-count  ="10"
                >
                  1.1
                </div>
                <p className="counter-info">Happy Users</p>
              </div>
              <div className="cell">
                <div
                  id          ="stargazers-count_"
                  className   ="counter-value number-count"
                  data-count  ="5"
                >
                  1
                </div>
                <p className="counter-info">
                  <a href="https://github.com/k8-proxy/glasswall-desktop">Stargazers</a>
                </p>
              </div>
              <div className="cell">
                <div
                  id          ="forks-count_2"
                  className   ="counter-value number-count"
                  data-count  ="2"
                >
                  2
                </div>
                <p className="counter-info">
                  <a href="https://github.com/k8-proxy/glasswall-desktop">Forks</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
