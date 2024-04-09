import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import "./Header.css";

function Header() {
  const handlePlaceOrder = () => {
    const whatsappNumber = "+917015823645";
    const message = `Hello! I'm interested in placing an order.
   Could you please provide me with more information about 
   your menu options and delivery timings? Thanks!`;

    const whatsappLink =
      "https://api.whatsapp.com/send?phone=" +
      encodeURIComponent(whatsappNumber) +
      "&text=" +
      encodeURIComponent(message);

    console.log("WhatsApp link:", whatsappLink);

    // Open WhatsApp chat in a new window
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <nav className="navbar  fixed-top header ">
        <div className="img">
          <img src="./img/logo.png" />
        </div>
        <div
          style={{
            textAlign: "center",
            fontWeight: "700",
          }}
        >
          Foodies Hub
        </div>
        <div className="chat" onClick={() => handlePlaceOrder()}>
          <BiMessageDetail /> chat
        </div>
      </nav>
    </>
  );
}

export default Header;
