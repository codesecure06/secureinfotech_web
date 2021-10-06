import React from "react";
import Footer from "../../_components/footer";
import Navbar from "../../_components/nav";
import ContactForm from "./components/contact_form";
// import ContactHeader from "./components/contact_header";
import AOS from 'aos'
import Header from "../../_components/header";

AOS.init()

const ContactScreen = () => {
  return (
    <div>
      <Navbar />
      <Header page={"contact us"} />
      <ContactForm />
      <div>
        <iframe
          title="Secure Infotech"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9907476210815!2d72.87650271542533!3d21.232215486176216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f6b3fda2079%3A0xf62828a04bac2aea!2sSecure%20Infotech!5e0!3m2!1sen!2sin!4v1628511446603!5m2!1sen!2sin"
          width={"100%"}
          height={"450"}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default ContactScreen;
