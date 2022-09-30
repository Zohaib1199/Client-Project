import React from "react";
import Grid from "@mui/material/Grid";

function Seclocation() {
  return (
    <>
      <Grid container spacing={2}>
        <div className="flex content-center items-center justify-center ml-10 mt-10  ">
          <Grid item xs={3}>
            <div className="Convienince-card shadow-2xl">
              <div className="flex content-center items-center justify-center mt-10 ">
                <h1 className="text-1xl font-bold mt-24">Convienene</h1>
              </div>
              <p className=" flex content-center items-center justify-center mt-4 m-8 ">
                Once approved to join the platform, you can begin looking for
                the perfect stay, other like-minded professionals are already
                waiting for you.
              </p>
              <div className="icons-card flex content-center items-center justify-center text-3xl text-red-400">
                <span>
                  <i class="fas fa-check-double"></i>
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="Convienince-card ml-4 shadow-2xl">
              <div className="flex content-center items-center justify-center mt-10 ">
                <h1 className="text-1xl font-bold mt-24">Simplicity</h1>
              </div>
              <p className=" flex content-center items-center justify-center mt-4 m-8 ">
                Once approved to join the platform, you can begin looking for
                the perfect stay, other like-minded professionals are already
                waiting for you.
              </p>
              <div className="icons-card flex content-center items-center justify-center text-3xl text-red-400">
                <span>
                  <i class="far fa-handshake"></i>
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="Convienince-card ml-8 shadow-2xl">
              <div className="flex content-center items-center justify-center mt-10">
                <h1 className="text-1xl font-bold mt-24">Reliablity</h1>
              </div>
              <p className=" flex content-center items-center justify-center mt-4 m-8 ">
                Once approved to join the platform, you can begin looking for
                the perfect stay, other like-minded professionals are already
                waiting for you.
              </p>
              <div className="icons-card flex content-center items-center justify-center text-3xl text-red-400">
                <span>
                  <i class="fas fa-shield-alt"></i>
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="Convienince-card ml-8 shadow-2xl">
              <div className="flex content-center items-center justify-center mt-10">
                <h1 className="text-1xl font-bold mt-24">Security</h1>
              </div>
              <p className=" flex content-center items-center justify-center mt-4 m-8 ">
                Once approved to join the platform, you can begin looking for
                the perfect stay, other like-minded professionals are already
                waiting for you.
              </p>
              <div className="icons-card flex content-center items-center justify-center text-3xl text-red-400">
                <span>
                  <i class="fas fa-fingerprint"></i>
                </span>
              </div>
            </div>
          </Grid>
        </div>
      </Grid>
    </>
  );
}

export default Seclocation;
