import React                      from "react";
import multiClusterManagement     from '../images/multi-cluster-management.svg';

export default function Feature2() {
  return (
    <div className="basic-5">
      <div className="third">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container margin-top-80">
                <h3>Directory Structure</h3>
                <p>
                Support different directory structures, give freedom to save the files at custom directory structure or at default location by maintaining the same directory as that of the parent folder.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                className ="img-fluid"
                src       ={multiClusterManagement}
                alt       ="alternative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
