import React            from "react";
import workspaces       from '../images/workspaces.svg';

export default function Feature3() {
  return (
    <div className="basic-3">
      <div className="fourth">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                className = "img-fluid"
                src       = {workspaces}
                alt       = "alternative"
              />
            </div>
            <div className="col-lg-6">
              <div className="text-container margin-top-80">
                <h3>Rebuild Engine</h3>
                <p>
                They are very useful for DevOps and SREs who need to deal with multiple (even hundreds of) clusters. A single workspace contains a list of clusters and their full configuration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
