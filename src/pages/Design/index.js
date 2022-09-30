import Navbar from "components/Navbars/IndexNavbar";
import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MyCards from "components/Cards/MyCards";
import MyLocations from "components/Cards/MyLocations";
import AboutCards from "components/Cards/AboutCards";
import Seclocation from "components/Cards/Seclocation";

function Design() {
  const jsondata = [
    {
      id: "1",
      name: "Melbourine",
      img: "https://img.freepik.com/free-photo/tokyo-cityscape-night-japan_335224-27.jpg?w=996&t=st=1664453820~exp=1664454420~hmac=42da21e2d7e7303478d0a05d3e8bc7e9337e6d8bb982a747eab3d8be9b5171c3",
    },
    {
      id: "2",
      name: "London",
      img: "https://img.freepik.com/free-photo/water-famous-architecture-finance-shanghai-tower_1417-1120.jpg?w=1060&t=st=1664456771~exp=1664457371~hmac=f4903ad6d87df85340ef03dcf94ffb53a1bcdea6a3a6cb25f52f8ba388d3f41d",
    },
    {
      id: "3",
      name: "Paris",
      img: "https://img.freepik.com/free-photo/beautiful-sunny-cityscape_1127-133.jpg?w=1060&t=st=1664456555~exp=1664457155~hmac=f5d03eeb68e978a2a7172a11d4daf585ea631530638e1eeb3967e5ed64381aea",
    },
    {
      id: "4",
      name: "Mexico",
      img: "https://img.freepik.com/free-photo/beautiful-shot-urban-city-with-modern-architecture-amazing-scenery_181624-3337.jpg?w=996&t=st=1664456490~exp=1664457090~hmac=9b2c6c51ef8708d2c8ea69a4a014adeb9b4f8aa7f2cb94778020d78feec287db",
    },
    {
      id: "5",
      name: "lisbon",
      img: "https://img.freepik.com/free-photo/photo-wooded-road-with-trees_125540-2313.jpg?w=996&t=st=1664460303~exp=1664460903~hmac=d2bf59cf36e8bf0385fbe7e10563f5d7d7f837bf4fcf9fbd4a2b977dd611c217",
    },
    {
      id: "6",
      name: "Germany",
      img: "https://img.freepik.com/free-photo/modern-business-building-with-glass-wall-from-empty-floor_1127-2853.jpg?w=996&t=st=1664460240~exp=1664460840~hmac=896129d2fc6586c00c85904302fa5ae96cbd0395aeda85db30883ca05aefc051",
    },
    {
      id: "7",
      name: "Gapan",
      img: "https://img.freepik.com/free-photo/beautiful-shanghai-skyline-night-modern-urban-background_1127-3174.jpg?w=900&t=st=1664460265~exp=1664460865~hmac=6e57da93e4354bd9b3ebdede17b923d7be794a2c2ab99438fda0194e0e168bb4",
    },
    {
      id: "8",
      name: "Russia",
      img: "https://img.freepik.com/free-photo/beautiful-architecture-building-tokyo-cityscape_74190-7538.jpg?w=826&t=st=1664456826~exp=1664457426~hmac=69fbeee34b9c7954a9eba9a6c6374a05bee5cc97d534d7f5f16c0dad585382b7",
    },
  ];
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="mt-12 min-h-screen-75  relative flex content-center items-center justify-center header-height">
              <div
                className=" br  absolute top-0 h-full  w-11/12  bg-center bg-cover rounded-3xl border border-black "
                style={{
                  // backgroundImage: 'url(' + require('assets/img/landingbg.png') + ')',
                  backgroundImage: 'url("https://i.ibb.co/vsMN7YZ/img.jpg")',
                }}
              >
                <span
                  id="blackOverlay"
                  className="w-full h-full absolute opacity-50 rounded-3xl bg-black"
                ></span>
              </div>
              <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                  <div className="w-full  px-4 ml-auto mr-auto text-center">
                    <div className="pr-1">
                      <h1
                        className="landing-text-header text-white
                      font-bold text-8xl"
                      >
                        Remote Workers
                        {/* <br /> */}
                        <h2 className="text-subhead text-7xl mt-6">
                          {" "}
                          Home Exchange
                        </h2>
                      </h1>
                      <p className="mt-6 text-lg text-white">
                        Travel Anytime, Work from Anywhere
                      </p>
                      <div className="center-styl mt-6">
                        <button className="btn-styl" type="submit">
                          <i className="fab fa-linkedin mr-2"></i> JOIN THE
                          WAITLIST
                          <i className="fas fa-arrow-right ml-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <div>
              <p className=" mt-16  text-5xl text-center lg:text-right font-lightbold">
                You’ve dreamed it.
                <br />
                We’ve made it possible.
              </p>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <p className="para-class">
                Tired of spending budget for expensive Airbnb or Booking? With
                Thereyougo, now you can safely and securely travel by exchanging
                your accommodation with other remote workers. How? You go at
                theirs, they come to yours.
              </p>
            </div>
          </Grid>
        </Grid>
        <hr className=" border-style" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div>
              <h1 className="text-5xl font-bold flex content-center items-center justify-center">
                Recommended For You
              </h1>
              <MyCards />
            </div>
          </Grid>
        </Grid>
        <hr className=" border-style-2" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div>
              <h1 className="text-5xl location-field font-bold flex content-center items-center justify-center mt-1">
                Best Locations
              </h1>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {jsondata.map((item) => (
            <MyLocations name={item.name} img={item.img} />
          ))}
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="flex content-center items-center justify-center">
              <button className="btn-styl mt-10  " type="submit">
                <i className="fab fa-linkedin mr-2"></i> Discover all Locations
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </Grid>
        </Grid>
        <hr className=" border-style-3" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="flex content-center items-center justify-center">
              <h1 className="text-5xl font-bold">
                6 Easy Steps to plan your next Adventure
              </h1>
            </div>
            <div>
              <p className="flex content-center items-center justify-center mt-8 text-gray-600">
                With Thereyougo, planning your exchange accommodations is easier
                and cost-effective:
              </p>
            </div>
          </Grid>
        </Grid>
        {/* About Cards */}
        <AboutCards />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="flex content-center items-center justify-center mt-12">
              <span className="underline">Swap Guidelines</span>
            </div>
            <div className="flex content-center items-center justify-center">
              <button
                className="btnn-styl mt-4 bg-red-500 roundrd-full p-1 text-white font-bold "
                type="submit"
              >
                <i className="fab fa-linkedin mr-2"></i> Register And Get
                Approved
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </Grid>
        </Grid>
        <hr className=" border-style-3" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="flex content-center items-center justify-center">
              <h1 className="text-5xl font-bold">
                Swape Your Place with ThereYouGoo
              </h1>
            </div>
          </Grid>
        </Grid>
        <Seclocation />
        <hr className=" border-style-3" />

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="flex content-center items-center justify-center">
              <h1 className="text-5xl font-bold">
                Travel for less With ThereYouGoo
              </h1>
            </div>
            <div>
              <p className="flex content-center items-center justify-center mt-8 text-gray-600">
                We specifically connect remote workers who wish to travel
                without having to allocate extra budget for accommodations.
                <br />
              </p>
              <p className="flex content-center items-center justify-center ">
                With our platform you can easily share, connect and communicate
                with people like you and travel for less.
              </p>
            </div>
          </Grid>
          <div className="flex content-center items-center justify-center mt-16">
            <div className="icons-para flex content-center items-center justify-center  mr-6 text-xl text-red-400">
              <span>
                <i class="fas fa-check"></i>
              </span>
            </div>
            <h1 className="text-1xl font-bold ">
              Trusted Community of Verified LinkedIn Members
            </h1>
          </div>
          <div className="flex content-center items-center justify-center mt-4">
            <div className="icons-para flex content-center items-center justify-center  mr-6 text-xl text-red-400">
              <span>
                <i class="fas fa-check"></i>
              </span>
            </div>
            <h1 className="text-1xl font-bold ">
              Trusted Community of Verified LinkedIn Members
            </h1>
          </div>
          <div className="flex content-center items-center justify-center mt-4">
            <div className="icons-para flex content-center items-center justify-center  mr-6 text-xl text-red-400">
              <span>
                <i class="fas fa-check"></i>
              </span>
            </div>
            <h1 className="text-1xl font-bold ">
              Trusted Community of Verified LinkedIn Members
            </h1>
          </div>
        </Grid>
        <div className="flex content-center items-center justify-center">
          <button
            className="Join-btn mt-6 bg-red-500 roundrd-full p-1 text-white font-bold "
            type="submit"
          >
            <i className="fab fa-linkedin mr-2"></i>Join Us
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
        <hr className=" border-style-4" />
        <div className="flex content-center items-center justify-center">
          <h1 className="text-5xl font-bold">
            <span className="text-red-600">
              <i class="fas fa-star-half-alt"></i>
            </span>
          </h1>
        </div>
        <br />
        <br />
      </Container>
    </>
  );
}

export default Design;
