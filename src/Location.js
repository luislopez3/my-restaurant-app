import "./Location.css";
import React from "react";

export default function Location() {
  return (
    <div className="location-contact-page">
      <h2>Capital City Cafe</h2>
      <h3>We are located at: 1000 Main Street Santa Fe, New Mexico 87501</h3>
      <h4>Our telephone no. is: (505) 555-1234</h4>
      <h4>
        Please see the below map to our direct location on the historic Santa Fe
        Plaza.
      </h4>
      <iframe
        className="iframe"
        title="Restaurant Location"
        src="https://www.google.com/maps/d/u/0/embed?mid=1hekv3Z5-39aOryt3VheD1yjVtBbMm--y"
      ></iframe>
    </div>
  );
}
