import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";

export default function name() {
  return (
    <div>
      <Helmet>
        <title>Bookmarking App</title>
      </Helmet>
      <div>
        <Header />
      </div>
    </div>
  );
}
