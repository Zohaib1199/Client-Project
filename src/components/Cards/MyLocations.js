import React from "react";
import Grid from "@mui/material/Grid";

function MyLocations(props) {
  return (
    <>
      <Grid item xs={2.5}>
        <div className="location-cards w-full">
          <img src={props.img} alt="" className="w-full ml-24" />
          <h1 className="font-bold text-white -mt-20 ml-40">{props.name}</h1>
        </div>
      </Grid>
    </>
  );
}

export default MyLocations;
