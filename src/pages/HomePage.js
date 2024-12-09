import React from 'react';
import '../styling/HomePage.css'

function HomePage() {
  return <div className="homePage">
    <div className='photoArea'>
        <img src='/images/michael.JPG' alt='Michael head shot' className='homePagePhoto'></img>
    </div>
  <div className="homeContent">
      <h1>
        <span>Hi, my name is</span>
        <span>Michael Moreno.</span>
        </h1>
      <h2>Welcome to my portfolio!</h2>
  </div>
</div>;
}

export default HomePage;
