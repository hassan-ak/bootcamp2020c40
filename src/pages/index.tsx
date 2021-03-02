import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function name() {
  return (
    <div>
      <Helmet>
        <title>Bookmarking App</title>
      </Helmet>
      <div>
        <Header />
        <Footer />
      </div>
    </div>
  );
}
