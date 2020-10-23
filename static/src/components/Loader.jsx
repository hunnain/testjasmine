import React        from "react";

export default function Loader() {
  return (
    // Preloader
    <div className="spinner-wrapper">
      <div className="spinner">
        <div className  ="bounce1"></div>
        <div className  ="bounce2"></div>
        <div className  ="bounce3"></div>
      </div>
    </div>
    // end of preloader
  );
}
