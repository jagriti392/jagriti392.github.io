import React from 'react'
import './Project.css';
import Image1 from'../assets/Image1.png';
import Image2 from'../assets/Image2.png';
import Image3 from'../assets/Image3.png';
function Project() {
  return (

    <div id='project' className='project-containar-page'>
      <h1>Projects</h1>
      <div className='projectsContainar'>
        <div className='box'>
          <div className='imgBox'>
            <img style={{height:"450px", width:"850px"}} src={Image1} alt="" />
          </div>
          <div className='contentBox'>
            <h1>Travel Website</h1>
            <p>I have created Travel home page, on this home page we have created one buttons and navbar on the right side.Travel website making trip planning easy and enjoyable. Explore destinations, and discover personalized travel recommendations seamlessly."</p>
            <div className='tagsBox'>
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <div className='linkSection'>
              <a href="https://github.com/jagriti392/first-travel-website" rel='noreferrer' target='blank'>
              <button>
                <span className='icon'><ion-icon name="logo-github"></ion-icon></span>
                Github
              </button>
              </a>
              <a href="https://app.netlify.com/sites/zingy-salmiakki-1aa20f/overview" rel='noreferrer' target='blank'>
                <button>
                  <span className='icon'><ion-icon name="radio-button-on-outline"></ion-icon></span>
                  Live
                </button>
              </a>

            </div>
          </div>
        </div>
        <div className='box'>
          <div className='imgBox'>
            <img style={{height:"450px", width:"850px"}} src={Image2}alt="" />
          </div>
          <div className='contentBox'>
            <h1>Music Website</h1>
            <p>I created a music website and added a song to it that plays when played and stops when stopped.</p>
            <div className='tagsBox'>
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVA SCRIPT</span>
            </div>
            <div className='linkSection'>
              <a href="https://github.com/jagriti392/first-music-website" rel='noreferrer' target='blank'>
                <button>
                <span className='icon'><ion-icon name="logo-github"></ion-icon></span>
                Github
                </button>
              </a>
              <a href="https://app.netlify.com/sites/nimble-griffin-5f5c0d/overview" rel='noreferrer' target='blank'>
                <button>
                <span className='icon'><ion-icon name="radio-button-on-outline"></ion-icon></span>
                live
                </button>
              </a>

            </div>
          </div>

        </div>
        <div className='box'>
          <div className='imgBox'>
            <img style={{height:"450px", width:"850px"}} src={Image3}alt="" />
          </div>
          <div className='contentBox'>
            <h1>Mentimeter website</h1>
            <p>I created Mentimeter  website in which I created a navbar.I building a website using Mentimeter to make presentations more interactive and engaging. It allows real-time audience participation through polls, quizzes, and surveys.".</p>
            <div className='tagsBox'>
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVA SCRIPT</span>
              <span>REACT</span>
            </div>
            <div className='linkSection'>
              <a href="https://github.com/jagriti392/first--Project/tree/main/New%20folder/mentimeter" rel='noreferrer' target='blank'>
                <button>
                <span className='icon'><ion-icon name="logo-github"></ion-icon></span>
                Github
                </button>
              </a>
              <a href="" rel='noreferrer' target='blank'>
                <button>
                <span className='icon'><ion-icon name="radio-button-on-outline"></ion-icon></span>
                live
                </button>
              </a>

            </div>
          </div>

        </div>
      </div>
      </div>




  )
}

export default Project;