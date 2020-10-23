import React                      from "react";
import builtInPrometheusStats     from '../images/built-in-prometheus-stats.svg';

export default function Feature4() {
  return (
    <div className="basic-5">
      <div className="fifth">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container margin-top-80">
                <h3>Platform Support</h3>
                <p>
                Support multiple platform Windows, MAC, and Linux, so that user is able to install and use the application on every platform.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src={builtInPrometheusStats}
                alt="alternative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
