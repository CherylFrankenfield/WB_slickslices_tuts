import React from 'react';

function CurrentlySlicing() {
  return (
    <div>
      <p>CurrentlySlicing</p>
    </div>
  );
}
function HotSlices() {
  return (
    <div>
      <p>HotSlices</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="center">
      <h1>The Best Pizza Downtown!</h1>
      <p>Open 11 a.m. to 11 p.m. every single day.</p>
      <CurrentlySlicing />
      <HotSlices />
    </div>
  );
}
