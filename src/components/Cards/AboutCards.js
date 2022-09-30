import React from "react";
import Grid from "@mui/material/Grid";

function AboutCards() {
  return (
    <>
      <Grid container spacing={2}>
        <div className="flex content-center items-center justify-center ml-48 mt-20  ">
          <Grid item xs={4}>
            <div className="Signup-card shadow-2xl">
              <div className="flex content-center items-center justify-center mt-10 ">
                <h1 className="text-1xl font-bold mt-10">Sign Up</h1>
              </div>
              <p className=" flex content-center items-center justify-center mt-4 m-8 ">
                Once approved to join the platform, you can begin looking for
                the perfect stay, other like-minded professionals are already
                waiting for you.
              </p>
              <div className="icons-class flex content-center items-center justify-center text-3xl text-red-400">
                <span>
                  <i class="fab fa-linkedin-in"></i>
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="Signin-card ml-4 shadow-2xl">
              <div className="flex content-center items-center justify-center mt-10 ">
                <h1 className="text-1xl font-bold mt-10">
                  Create Your Profile
                </h1>
              </div>
              <p className=" flex content-center items-center justify-center mt-4 m-8 ">
                Once approved to join the platform, you can begin looking for
                the perfect stay, other like-minded professionals are already
                waiting for you.
              </p>
              <div className="icons-class flex content-center items-center justify-center text-3xl text-red-400">
                <span>
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="connect-card ml-8 shadow-2xl">
              <div className="flex content-center items-center justify-center mt-10">
                <h1 className="text-1xl font-bold mt-10">Wait For Approval</h1>
              </div>
              <p className=" flex content-center items-center justify-center mt-4 m-8 ">
                Once approved to join the platform, you can begin looking for
                the perfect stay, other like-minded professionals are already
                waiting for you.
              </p>
              <div className="icons-class flex content-center items-center justify-center text-3xl text-red-400">
                <span>
                  <i class="fas fa-circle-notch"></i>
                </span>
              </div>
            </div>
          </Grid>
        </div>
      </Grid>
      <Grid container spacing={2}>
        <div className="flex content-center items-center justify-center ml-48 mt-24  ">
          <Grid item xs={4}>
            <div className="Signup-card shadow-2xl">
              <div className="flex content-center items-center justify-center mt-10 ">
                <h1 className="text-1xl font-bold mt-10">Begin Your Search</h1>
              </div>
              <p className=" flex content-center items-center justify-center mt-4 m-8 ">
                Once approved to join the platform, you can begin looking for
                the perfect stay, other like-minded professionals are already
                waiting for you.
              </p>
              <div className="icons-class flex content-center items-center justify-center text-3xl text-red-400">
                <span>
                  <i class="fas fa-globe-europe"></i>
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="Signin-card ml-4 shadow-2xl">
              <div className="flex content-center items-center justify-center mt-10 ">
                <h1 className="text-1xl font-bold mt-10">Connect with Other</h1>
              </div>
              <p className=" flex content-center items-center justify-center mt-4 m-8 ">
                Once approved to join the platform, you can begin looking for
                the perfect stay, other like-minded professionals are already
                waiting for you.
              </p>
              <div className="icons-class flex content-center items-center justify-center text-3xl text-red-400">
                <span>
                  <i class="fab fa-connectdevelop"></i>
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="connect-card ml-8 shadow-2xl">
              <div className="flex content-center items-center justify-center mt-10">
                <h1 className="text-1xl font-bold mt-10">Travel</h1>
              </div>
              <p className=" flex content-center items-center justify-center mt-4 m-8 ">
                Once approved to join the platform, you can begin looking for
                the perfect stay, other like-minded professionals are already
                waiting for you.
              </p>
              <div className="icons-class flex content-center items-center justify-center text-3xl text-red-400">
                <span>
                  <i class="fas fa-plane-departure"></i>
                </span>
              </div>
            </div>
          </Grid>
        </div>
      </Grid>
    </>
  );
}

export default AboutCards;
