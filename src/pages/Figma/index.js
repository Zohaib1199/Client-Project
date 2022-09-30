import React from "react";
import Grid from "@mui/material/Grid";
import GoogleMapReact from "google-map-react";
import Container from "@mui/material/Container";

const AnyReactComponent = ({ text }) => (
  <div className="">
    <img
      src={require("assets/img/Vector.png")}
      className="w-10 h-10  object-contain"
      alt=""
    />
  </div>
);

function Figma() {
  const defaultProps = {
    center: {
      lat: 32.074,
      lng: 72.6861,
    },
    zoom: 11,
  };

  return (
    <>
      <Grid className="Navbar" container spacing={2}>
        <Grid item xs={4}>
          <button className="flex justify-start mt-8 mx-20 login-text	text-black-1000 text-2xl text-red-500 a">
            Login
          </button>
        </Grid>
        <Grid className="flex justify-start align-middle" item xs={4}>
          <p className="text-2xl text-black-500 mt-8">
            There<span className="text-red-600">you</span>
            <span className="text-purple-800">Goo</span>
          </p>
        </Grid>

        <Grid item xs={4}>
          <div className="mt-5 ">
            <img
              className="w-20 h-20  logo-pic rounded-full object-cover "
              src="https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/306656449_1562317424170944_2849272535241967053_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Q-ebhRmN1zwAX9VNIke&_nc_ht=scontent.fisb12-1.fna&oh=00_AT9hvwRo0gdp2r7EHyPS9jpcByZI5rS0vDlnj8R2B9UF_g&oe=632FB3F3"
              alt=""
            />
          </div>
        </Grid>
      </Grid>
      <hr />
      <Grid container spacing={0}>
        <Grid className=" staright-bar bg-red-500" item xs={6}>
          <p className="	header tracking-wide py-5	text-center  lg:text-4xl xs:text-base pd-2px text-white">
            Want to get approved Faster ?
          </p>
        </Grid>
        <Grid
          className="py-5	text-center text-red-600 bg-red-500"
          item
          xs={6}
          lg={6}
        >
          <button className="tracking-normal py-1 haeder-class p-4 btn-class">
            Refer Your Friend <i class="fas fa-paper-plane  ml-2"></i>
          </button>
        </Grid>

        <Grid className="images-height" container spacing={0}>
          <Grid className="right-img" item xs={6}>
            <div>
              <img src="" alt="" />
            </div>
          </Grid>

          <Grid className="left-img" item xs={6}>
            <Grid item xs={12}>
              <div className="img-right">
                <img src="" alt="" />
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="img-left">
                <img src="" alt="" />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} lg={3}>
          <div className="flex content-center items-center justify-center">
            <div
              className=" ml-20	absolute -mt-10 profile-picture border-8 border-white w-60 h-60 rounded-full bg-cover bg-white"
              id="userImg"
              style={{
                // backgroundImage: 'url(' + userImage + ')',
                backgroundImage:
                  'url("https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/306656449_1562317424170944_2849272535241967053_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Q-ebhRmN1zwAX9VNIke&_nc_ht=scontent.fisb12-1.fna&oh=00_AT9hvwRo0gdp2r7EHyPS9jpcByZI5rS0vDlnj8R2B9UF_g&oe=632FB3F3")',
              }}
            ></div>
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className=" flex content-center items-center justify-center">
            <div className="mt-20	">
              <h2 className="font-bold flex content-center items-center justify-center	">
                Zohaib Ansar , Developer
              </h2>
              <h2 className="ml-10">Chief sales Officer</h2>
              <p className="text-red-600 ml-1">
                <i class="fas fa-phone-alt ml-10 mr-1"></i>03092970488
              </p>
              <p className="text-blue-600 ml-1">
                <i class="fas fa-envelope-open ml-2 mr-1"></i>
                Zohaibansar56@gmail.com
              </p>
            </div>
          </div>
        </Grid>
        {/* vertical line */}
        <div className="block lg:block md:block sm:hidden xs:hidden">
          <div class="vl " />
        </div>

        <Grid item xs={12} lg={3}>
          <p className="  ml-8 flex content-center items-center justify-center  text-black-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            suscipit rerum, incidunt fuga cupiditate iste ipsa quas, maiores
            mollitia distinctio eum voluptatem doloribus, saepe pariatur eaque
            ducimus? Quos, placeat enim!
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <div
            className="border-8 border-white m-10 rounded-lg"
            style={{ height: "50vh", width: "100%" }}
          >
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent lat={32.074} lng={72.6861} text="My Marker" />
            </GoogleMapReact>
          </div>
        </Grid>
      </Grid>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <h1 className="py-5	text-start ml-14 italic text-red-500 text-4xl pd-2px font-bold">
              About My Place
            </h1>
            <div className="fields-setup">
              <div className="relative my-6">
                <h1 className=" absolute -mt-3 ml-16 bg-white">
                  Type of acamodation
                </h1>

                <div className=" ml-12 flex buttn-feld  p-2 rounded field-input ">
                  <i class="fas fa-house my-4"></i>
                  <input
                    className="  ml-2 p-2 w-full"
                    type="text"
                    value="House"
                  />
                </div>
              </div>

              <div className="relative">
                <h1 className=" absolute -mt-3 ml-16 bg-white">Rooms</h1>

                <div className=" ml-12 flex buttn-feld w-58 p-2 rounded field-input ">
                  <i class="fas fa-door-open my-4"></i>
                  <input className="  ml-2 p-2 w-full" type="text" value="3" />
                </div>
              </div>
              <Grid container spacing={10}>
                <Grid item xs={4}>
                  <div className=" my-6">
                    <div className=" ml-12 flex button-feld w-full p-4 rounded  ">
                      <i class="fas fa-search-location my-6"></i>

                      <input
                        className="  ml-1 p-1 w-full"
                        type="text"
                        value="1x"
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="relative my-6">
                    <div className=" flex button-feld w-full p-4 rounded  ">
                      <i class="fas fa-search-location my-6"></i>
                      <i class="fas fa-search-location my-6"></i>

                      <input
                        className="  ml-1 p-1 w-full"
                        type="text"
                        value="2x"
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>
              <div className="relative">
                <h1 className=" absolute -mt-3 ml-16 bg-white">
                  Types of landscape
                </h1>

                <div className=" ml-12 flex buttn-feld w-58 p-2 rounded field-input ">
                  <input
                    className="  ml-2 p-2 w-full"
                    type="text"
                    value=" By the lake"
                  />
                </div>
              </div>

              <div className="relative my-10">
                <h1 className=" absolute -mt-3 ml-16 bg-white">Bathrooms</h1>

                <div className=" ml-12 flex buttn-feld w-58 p-2 rounded field-input ">
                  <i class="fas fa-bath my-4"></i>
                  <input className="  ml-2 p-2 w-full" type="text" value=" 2" />
                </div>
              </div>
              <div className="relative my-10">
                <h1 className=" absolute -mt-3 ml-16 bg-white">Wifi Speed</h1>

                <div className=" ml-12 flex buttn-feld w-58 p-2 rounded field-input ">
                  <i class="fas fa-wifi my-4"></i>
                  <input
                    className="  ml-2 p-2 w-full"
                    type="text"
                    value="450 mbps"
                  />
                </div>
              </div>
            </div>

            <h1 className="py-4	text-start italic text-blue-600 ml-14 text-3xl pd-2px font-bold">
              Referrals Counter
            </h1>
            <p className="ml-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="relative my-6">
              <div className=" ml-12 flex butn-feld spacing p-6 field-input ">
                <div className="text-6xl rounded-xl bg-gray-300 p-2">
                  <div className="bg-white rounded-xl p-2">1</div>
                </div>
                <div className="text-6xl bg-gray-300 rounded-xl ml-6 p-2">
                  <div className="bg-white rounded-xl p-2">2</div>
                </div>
                <div className="text-6xl rounded-xl bg-gray-300 ml-6 p-2">
                  <div className="bg-white rounded-xl p-2">9</div>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <h1 className="py-5	text-start icon-heading ml-14  text-4xl italic text-red-500 pd-2px font-bold  ">
              What's in my Place
            </h1>
            {/* Grid in tailwid csss */}

            <div class="grid   icons-class grid-cols-2 gap-0">
              <div>
                <i class=" text-red-500 fas fa-tv my-6"></i>
                <span className="ml-4">Tv</span>
              </div>
              <div>
                <i class=" text-red-500 fas fa-swimming-pool my-6"></i>
                <span className="ml-4">Pool</span>
              </div>
              <div>
                <i class=" text-red-500 fas fa-fire my-6"></i>
                <span className="ml-4">Heating</span>
              </div>
              <div>
                <i class=" text-red-500 fas fa-wifi my-6"></i>
                <span className="ml-4">Wifi</span>
              </div>
              <div>
                <i class=" text-red-500 fas fa-hands-wash my-6"></i>
                <span className="ml-4">Washing-machine</span>
              </div>
              <div>
                <i class=" text-red-500 fas fa-temperature-high my-6"></i>
                <span className="ml-4">Ac</span>
              </div>
              <div>
                <i class=" text-red-500 fas fa-tv my-6"></i>
                <span className="ml-4">Microwave</span>
              </div>
              <div>
                <i class=" text-red-500 fas fa-shopping-basket my-6"></i>
                <span className="ml-4">Shopping-Basket</span>
              </div>
              <div>
                <i class=" text-red-500 fas fa-umbrella-beach my-6"></i>
                <span className="ml-4">Terrace</span>
              </div>
              <div>
                <i class=" text-red-500 fas fa-solar-panel my-6"></i>
                <span className="ml-4">Solar Panel</span>
              </div>
            </div>
            <h1 className="py-4	text-start italic text-blue-600 ml-14 text-3xl pd-2px font-bold">
              Description about my Place
            </h1>
            <div>
              <textarea
                id="w3review"
                className=" flex button-feild  p-4 rounded"
                name="w3review"
                rows="17"
                cols="50"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                saepe corrupti veritatis quo error totam quas, eum, fugit
                maxime, adipisci laboriosam quos vitae? Sequi, delectus adipisci
                fuga cum iusto minima. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Nam saepe corrupti veritatis quo error totam
                quas, eum, fugit maxime, adipisci laboriosam quos vitae? Sequi,
                delectus adipisci fuga cum iusto minima. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Nam saepe corrupti veritatis
                quo error totam quas, eum, fugit maxime, adipisci laboriosam
                quos vitae? Sequi, delectus adipisci fuga cum iusto minima.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                saepe corrupti veritatis quo error totam quas, eum, fugit
                maxime, adipisci laboriosam quos vitae? Sequi, delectus adipisci
                fuga cum iusto minima.
              </textarea>
            </div>
          </Grid>
        </Grid>

        <Grid className="Footer" container spacing={0}>
          <Grid item xs={12} lg={12}>
            <div className="relative">
              <div className=" bg-gray-300 flex buttn-feld w-full p-2 rounded fild-input ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis incidunt, totam praesentium et, nesciunt voluptatem
                placeat accusantium non minima laudantium ut omnis ad accusamus
                ullam architecto delectus? Praesentium, dolor at. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Corporis incidunt,
                totam praesentium et, nesciunt voluptatem placeat accusantium
                non minima laudantium ut omnis ad accusamus ullam architecto
                delectus? Praesentium, dolor at.
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div class="btn-wrapper flex justify-between  ...">
              <div id="support-btn">
                <i class=" text-red-500  ml-14 fas fa-phone-volume my-6"></i>
                <span className="ml-4 text-red-500">Contact Support</span>
              </div>
              <div id="edit-btn">
                <button className=" tracking-normal  mt-2 mr-38 py-2 text-white pr-36 pl-36  bttn-class">
                  Edit
                </button>
              </div>
              <div id="delete-btn">
                <i class=" text-red-500 foter-class  mr-4 fas far fa-trash-alt my-6"></i>
                <span className="mr-16 fotter-class  text-red-500">
                  Delete Account
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
    </>
  );
}

export default Figma;
