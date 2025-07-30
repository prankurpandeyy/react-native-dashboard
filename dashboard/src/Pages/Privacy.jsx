import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PrivacyPolicy from "../Components/PrivacyPolicy";

function Privacy() {
  return (
    <div>
      <Header />
      <PrivacyPolicy />
      <div className="mb-12">
        <Footer />
      </div>
    </div>
  );
}

export default Privacy;
