import React from "react";

export default function Location() {
  return (
    <div>
      <h2>Capital City Cafe</h2>
      <p>We are located at:</p>
      <p>1000 Main Street Santa Fe, New Mexico 87501</p>
      <p>Our telephone no. is: (505) 555-1234</p>
      <p>Please see the below map to our direct location.</p>
      <iframe
        title="Restaurant Location"
        src="https://www.google.com/maps/d/u/0/embed?mid=1hekv3Z5-39aOryt3VheD1yjVtBbMm--y"
        width="940"
        height="380"
      ></iframe>
    </div>
  );
}
