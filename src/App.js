import React, { useState, useEffect } from "react";
// import ReactFacebookLogin from "react-facebook-login";
// import ReactDOM from "react-dom";
// import FacebookLogin from "react-facebook-login";

// const responseFacebook = (response) => {
//   console.log("login result", response);
// };
// const componentClicked = (data) => {
//   console.warn(data);
// };

export default function App() {
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

  const [email, setEmail] = useState("Continue with email");

  const handleSubmit = () => {
    // alert("hello");
    setEmail("Continue with Google account");
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  return (
    <div>
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
        <img
          style={{
            resizeMode: "contain",
            paddingTop: "10px",
            paddingRight: "150px",
            height: "35px",
            width: "40px",
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/1024px-United-kingdom_flag_icon_round.svg.png?20170727094807"
          alt="bookingdotcomlogo"
        />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <h2>
          Sign in or create an account <br />{" "}
        </h2>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form for="email" style={{ width: "310px" }}>
          <label>
            Email address: <br />{" "}
          </label>
          <br />{" "}
          <input
            style={{ width: "310px", height: "30px", border: "2px solid blue" }}
          />
          <br />
          <br />
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: "#011e8d",
              color: "white",
              width: "310px",
              height: "40px",
            }}
          >
            {email}
          </button>
          <p style={{ textAlign: "center" }}>
            ------ or use one of these option ------
          </p>
        </form>

        <div
          style={{
            justifyContent: "space-between",
            width: "300px",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <div
            style={{
              border: "1px solid grey",
              padding: "15px",
              height: "50px",
              width: "50px",
              // backgroundColor: "blue",
            }}
          >
            <img
              style={{
                height: "40px",
                width: "40px",
              }}
              src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
              alt="facebooklogo"
            />
          </div>
          <div
            style={{
              border: "1px solid grey",
              padding: "15px",
              height: "50px",
              width: "50px",
            }}
          >
            <img
              style={{ height: "40px", width: "40px" }}
              src="https://cdn-teams-slug.flaticon.com/google.jpg"
              alt="googlelogo"
            />
          </div>
          <div
            style={{
              border: "1px solid grey",
              padding: "15px",
              height: "50px",
              width: "50px",
              // backgroundColor: "blue",
            }}
          >
            <img
              style={{ height: "40px", width: "40px" }}
              src="https://static.vecteezy.com/system/resources/previews/003/720/446/original/phone-icon-telephone-icon-symbol-for-app-and-messenger-vector.jpg"
              alt="applelogo"
            />
          </div>
        </div>
        <hr />
        <a
          href="/Home"
          target="_blank"
          style={{
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          More ways to sign in
        </a>
        <hr />

        <div
          style={{
            textAlign: "center",
            width: "300px",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <p style={{ fontSize: "13px" }}>
            By signing in or creating an account, you agree with our{" "}
            <span style={{ color: "blue" }}>Terms and Conditions</span> and{" "}
            <span style={{ color: "blue" }}>Privacy Statement</span>
          </p>
        </div>

        <hr />
        <div
          style={{
            textAlign: "center",
            width: "300px",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <div style={{ width: "400px", margin: "auto" }}>
            <p style={{ fontSize: "13px" }}>All rights reserved.</p>
            <p style={{ fontSize: "13px" }}>
              Copyright (2006-2021) – Booking.com™
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
