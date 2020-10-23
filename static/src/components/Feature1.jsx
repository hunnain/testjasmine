import React              from "react";
import betterKubernetes   from '../images/better-kubernetes.svg';

export default function Feature1() {
  return (
    <div id="features" className="basic-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <img
              className ="img-fluid"
              src       ={betterKubernetes}
              alt       ="alternative"
            />
          </div>
          <div className="col-lg-5">
            <div className="text-container">
              <h3>The File Drop</h3>
              <p>
              Organize clusters into logical groups. Workspaces are used to organize a number of clusters into logical groups. It is easy to create and switch between workspaces. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
