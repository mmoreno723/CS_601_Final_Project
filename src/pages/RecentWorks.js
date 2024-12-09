import React from 'react';
import '../styling/RecentWorks.css'

function RecentWorks() {
  return <div className='recentWorksArea'>
    <h1>Recent Works</h1>
    <hr />
    <div className='recentWorksContent'>
      <a href="https://github.com/mmoreno723/Country-Profile-Index" target="_blank" 
      rel="noopener noreferrer">
        <div>
            <h2>Country Profile Project</h2>
            <p>Search for any country in the world to find facts like population, capital, and demonym.</p>
        </div>
      </a>
      <a href="https://github.com/mmoreno723/Home_Field_Advantage_International_Soccer_Results" target="_blank" 
      rel="noopener noreferrer">
        <div>
            <h2>Data Science with Python</h2>
            <p>A data driven analysis program to see if "home-field advantage" played a role in international 
                soccer results.</p>
        </div>
      </a>
      <a href="https://github.com/mmoreno723/Global_Exchange_Rates" target="_blank" 
      rel="noopener noreferrer">
        <div>
            <h2>Global Exchange Rates</h2>
            <p>A program that uses Python to convert and display twenty different currencies from around the 
                world.</p>
        </div>
      </a>
      <a href="https://github.com/mmoreno723/E-Commerce-ORM-Repo" target="_blank" 
      rel="noopener noreferrer">
        <div>
            <h2>E-Commerce ORM</h2>
            <p>A backend object-relational mapper which allows a user to view all of their inventory in an 
                organized database.</p>
        </div>
      </a>
      <a href="https://github.com/mmoreno723/weather-dashboard-repo" target="_blank" 
      rel="noopener noreferrer">
        <div>
            <h2>Weather Dashboard API</h2>
            <p>A frontend application that utilizes a third-party API to fetch real-time weather data from
                any city a user types.
            </p>
        </div>
      </a>
      <a href="/">
        <div>
          <h2>More to come soon!</h2>
          <p>Stay tuned for updates.</p>
        </div>
      </a>
    </div>
  </div>;
}

export default RecentWorks;