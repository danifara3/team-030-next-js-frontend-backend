import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function MySpinner() {
  return (
    <div className="rootIsloading">
      <div className="spinnerIsloading">
        <CircularProgress disableShrink />
      </div>

      <style jsx global>{`
        .rootIsloading {
          overflow: hidden;
          position: absolute;
          width: 100%;
          height: 90%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .spinnerIsloading {
          color: red;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}
