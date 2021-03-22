import React from "react";
import "../styles/Wspbtnstyles.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const Wspbtn = () => {
  return (
    <a
      class="wsp-a"
      href="https://wa.me/5493446635571/?text=Great work Emilio!"
    >
      <WhatsAppIcon color="primary" className="wsp-img" fontSize="large" />
    </a>
  );
};

export default Wspbtn;
