import React, { useState, useEffect } from "react";
import Home from "../Homes/Home";
import "./trending.css";

const Trending = ({ items }) => {
  return (
    <>
      <section className='trending'>
        <Home items={items} />
      </section>
    </>
  );
};

export default Trending;
