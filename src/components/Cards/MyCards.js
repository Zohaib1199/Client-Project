import React from "react";
import Grid from "@mui/material/Grid";

function MyCards() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div className="card-img mt-9">
            <img
              src="https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1932.jpg?w=1060&t=st=1664449084~exp=1664449684~hmac=30123cd9d0e09ae185562be857ee8b8d46593c4db6daf521253d901f8f0a41d7"
              alt="image"
            />
          </div>
          <div className="logo-img relative -top-6 rounded-full ">
            <img
              src="https://img.freepik.com/premium-photo/business-office-concept-handsome-buisnessman_380164-90817.jpg?w=740"
              alt=""
            />
            <div className="  name-class ml-4 mt-1 text-black  ">
              <h1 className="font-semibold ">Alberto B.</h1>
              <p className="para-wrapper text-gray-700">
                Cheif Sales Officer | Napley , Itley
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="card-img mt-9">
            <img
              src="https://img.freepik.com/free-photo/patio-balcony-with-chair-around-sea-ocean-view_74190-6864.jpg?w=996&t=st=1664447945~exp=1664448545~hmac=322486ffeda683a25bbeebaf567b5dbd67848451a57dffe9541804d23b032c40"
              alt="image"
            />
          </div>
          <div className="logo-img relative -top-6 rounded-full ">
            <img
              src="https://img.freepik.com/free-photo/beautiful-student-uniform-stands-white-background-point-thumb-aside-high-quality-photo_144627-74601.jpg?w=996&t=st=1664448423~exp=1664449023~hmac=e00cb4721f9e5aff6356f1684fe1c8011d9a70c5195acc524c3af360a87737de"
              alt=""
            />
            <div className="  name-class ml-4 mt-1 text-black  ">
              <h1 className="font-semibold ">Aliena T.</h1>
              <p className="para-wrapper text-gray-700">
                Account Executive | Paris, France
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="card-img mt-9">
            <img
              src="https://img.freepik.com/free-photo/modern-luxury-bedroom-suite-bathroom_105762-1791.jpg?w=996&t=st=1664448956~exp=1664449556~hmac=12a7e2d20f3b912294a3b0988401e8489379daadaa77e232c651c4d954f1b4b3"
              alt="image"
            />
          </div>
          <div className="logo-img relative -top-6 rounded-full ">
            <img
              src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?w=996&t=st=1664448609~exp=1664449209~hmac=d4211b25ebd6f28ff579d31157c47ad105988e26d43f0df3789a00ecf25eaf4d"
              alt=""
            />
            <div className="  name-class ml-4 mt-1 text-black  ">
              <h1 className="font-semibold ">Tom.</h1>
              <p className="para-wrapper text-gray-700">
                Payment Manager | London,
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="card-img mt-9">
            <img
              src="https://img.freepik.com/premium-photo/luxurious-modern-interior-living-room-gray-sofa-white-flooring-white-wall-3d-rendering_33739-485.jpg?w=996"
              alt="image"
            />
          </div>
          <div className="logo-img relative -top-6 rounded-full ">
            <img
              src="https://img.freepik.com/free-photo/african-american-business-woman-by-window_1303-10869.jpg?w=996&t=st=1664448726~exp=1664449326~hmac=6d20e79e30edeb45318f183314931df0928b7f195a727ab4adf27f6e42117196"
              alt=""
            />
            <div className=" name-class ml-4 mt-1 text-black  ">
              <h1 className="font-semibold ">Ginevera..</h1>
              <p className="para-wrapper text-gray-700">
                HR Talent | Rome, Italy
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default MyCards;
