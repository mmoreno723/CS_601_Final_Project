import React, { useState } from 'react';
import '../styling/Resume.css'

function Resume() {
  // State hook to manage resume visibility
  const [showResume, setShowResume] = useState(false);
  
  // Function that toggles the value of showResume
  const toggleResumeVisibility = () => {
    setShowResume(!showResume);
  };

  return (
    <div className="resumeArea">
      <h1>Resume</h1>
      <hr />
      <button 
        className="resumeToggleBtn" 
        onClick={toggleResumeVisibility}
      >
        {showResume ? "Click here to hide my resume" : "Click here to see my resume"}
      </button>
      {showResume && (
        <div className="resumeContent">
          <iframe 
            src="/Michael_Moreno_Resume_2025.pdf" 
            title="Michael Moreno Resume" 
            className="resumeIFrame"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Resume;