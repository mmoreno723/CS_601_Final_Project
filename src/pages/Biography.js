import React from 'react';
import '../styling/Biography.css'

function Biography() {
  return <div className='bioArea'>
    <h1>About Me</h1>
    <hr />
    <div className='abtMeContent'>
      <div className='abtMeText'>
        <p>
        I am a software developer with a diverse background 
        that blends technical expertise and a global perspective. 
        Originally from Los Angeles, California, I hold a Bachelor’s 
        degree in Business Administration from Fordham University and 
        am currently pursuing a Master’s degree in Software Development 
        from Boston University. My journey into tech began with a 
        full-stack web development boot camp at Columbia University, 
        which sparked my passion for coding and innovation. Now based in 
        New York City, I bring a dynamic mix of skills and experiences to 
        every project I take on.
        </p>
        <br></br>
        <p>
        Through my coursework at Boston University, I’ve honed my skills 
        in both front-end and back-end development, focusing on object-oriented 
        programming to build robust and scalable applications. I’ve also expanded 
        my knowledge in new areas, including database management, Python, Java, 
        and data analytics and science. These technical proficiencies, combined 
        with my drive for problem-solving, allow me to create efficient, data-driven 
        solutions across various domains.
        </p>
        <br></br>
        <p>Beyond technology, I have a deep appreciation for sports, both as a 
          fan and a player. Basketball and soccer are my go-to sports to watch, 
          and I enjoy playing soccer and tennis in my free time. Traveling is 
          another passion of mine—I’ve explored countries like Italy, Turkey, 
          Switzerland, Greece, and Colombia, immersing myself in new cultures 
          and histories. My love for geography and history complements my curiosity 
          about the world, and it’s reflected in my enthusiasm for learning about 
          different perspectives. In my downtime, you can find me revisiting favorite 
          shows like Lost, The Office, and Community, or indulging in thought-provoking 
          films like Interstellar and Inception. You can also find me listening to music 
          from artists like Eagles, Fleetwood Mac, Chris Stapleton, and the Foo Fighters.
        </p>
      </div>
      <div className='abtMePhotos'>
        <div>
          <img src='/images/fordhamU.png' alt='Fordham Logo' />
          <span>My alma mater: Fordham University</span>
        </div>
        <div><img src='/images/bostonU.png' alt='BU Logo' />
          <span>My graduate school: Boston University</span></div>
        <div><img src='/images/spurs.png' alt='Spurs Logo' />
          <span>My favorite basketball team: San Antonio Spurs</span>
        </div>
        <div><img src='/images/fcb.png' alt='FCB Logo' />
          <span>My favorite soccer team: FC Barcelona</span>
        </div>
        <div><img src='/images/swiss.png' alt='Switzerland Flag' />
          <span>My favorite country I've been to: Switzerland</span>
        </div>
        <div><img src='/images/eagles.png' alt='Eagles Hotel California Album' />
          <span>My favorite album: Hotel California</span>
        </div>
      </div>
    </div>
  </div>
}

export default Biography;