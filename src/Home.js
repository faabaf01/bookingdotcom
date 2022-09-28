import React, { useEffect, useState } from "react";

export default function Home() {
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  return (
    <>
      <div
        style={{
          width: windowDimension.winWidth,
          height: "60px",
          backgroundColor: "#011e8d",
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <img
          style={{
            resizeMode: "contain",
            // backgroundColor: "orange",
            paddingLeft: "150px",
          }}
          src="https://www.leh-ladakh-taxi-booking.com/img/best-hotels-leh-ladakh/logo-booking-com.png"
          alt="bookingdotcomlogo"
        />
        <div
          style={{
            width: windowDimension.winWidth,
            height: "60px",
            backgroundColor: "#011e8d",
            flex: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "right",
          }}
        >
          <a
            href="myr"
            style={{
              color: "white",
              paddingRight: "50px",
            }}
          >
            MYR
          </a>
          <img
            style={{
              alignContent: "end",
              paddingTop: "10px",
              paddingRight: "50px",
              height: "35px",
              width: "40px",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/1024px-United-kingdom_flag_icon_round.svg.png?20170727094807"
            alt="flag"
          />
          <button
            style={{
              color: "white",
              backgroundColor: "transparent",
              alignSelf: "left",
              height: 35,
              border: "3px solid white",
            }}
          >
            List your property
          </button>
          <button
            style={{
              color: "blue",
              backgroundColor: "white",
              alignSelf: "left",
              height: 35,
              border: "3px solid white",
            }}
          >
            Register
          </button>
          <button
            style={{
              color: "blue",
              backgroundColor: "white",
              alignSelf: "left",
              height: 35,
              border: "3px solid white",
            }}
          >
            Sign in
          </button>
        </div>
      </div>
      <div>
        <div
          style={{
            width: windowDimension.winWidth,
            height: "200px",
            backgroundColor: "#011e8d",
            flex: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
          }}
        >
          <button
            variant="outlined"
            style={{
              color: "white",
              backgroundColor: "transparent",
              borderRadius: 20,
              width: 60,
              height: 35,
            }}
          >
            <p style={{ color: "white" }}>Stays</p>
          </button>
          <button
            variant="outlined"
            style={{
              color: "white",
              backgroundColor: "transparent",
              borderRadius: 20,
              width: 60,
              height: 35,
            }}
          >
            <p style={{ color: "white" }}>Flights</p>
          </button>
          <button
            variant="outlined"
            style={{
              color: "white",
              backgroundColor: "transparent",
              borderRadius: 20,
              width: 100,
              height: 35,
            }}
          >
            <p style={{ color: "white" }}>Flight + Hotel</p>
          </button>
          <button
            variant="outlined"
            style={{
              color: "white",
              backgroundColor: "transparent",
              borderRadius: 20,
              width: 100,
              height: 35,
            }}
          >
            <p style={{ color: "white" }}>Car Rentals</p>
          </button>
          <button
            variant="outlined"
            style={{
              color: "white",
              backgroundColor: "transparent",
              borderRadius: 20,
              width: 100,
              height: 35,
            }}
          >
            <p style={{ color: "white" }}>Attractions</p>
          </button>
          <button
            variant="outlined"
            style={{
              color: "white",
              backgroundColor: "transparent",
              borderRadius: 20,
              width: 100,
              height: 35,
            }}
          >
            <p style={{ color: "white" }}>Airport Taxis</p>
          </button>
        </div>
        <div
          style={{
            textAlign: "left",
            backgroundColor: "#011e8d",
            flexDirection: "column",
          }}
        >
          <h1 style={{ color: "white" }}>Find your next stay</h1>
          <p style={{ color: "white" }}>
            Search low prices on hotels, homes and much more...
          </p>
        </div>
      </div>
    </>
  );
}
