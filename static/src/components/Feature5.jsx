import React                    from "react";
import contextAwareTerminal     from '../images/context-aware-terminal.svg';

export default function Feature5() {
  return (
    <div className="basic-3">
      <div className="sixth">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src={contextAwareTerminal}
                alt="alternative"
              />
            </div>
            <div className="col-lg-6 margin-top-80">
              <div className="text-container">
                <h3>User-Friendly UI</h3>
                <p>
                  User-friendly UI so that users can get all the information on the UI itself. Dropped file, Clean File, and a report generated is viewable just on a single click.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
