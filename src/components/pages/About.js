import React from 'react'
import './About.css'

function About () {
  return (
    <div className="container">
      <h1>About</h1>
      <small className="small">Developed by Augusto Dias</small>

      <p>
        This is a todo app made for the React Crash Course by&nbsp;
        <a
          href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Traversy Media
        </a>.
        Checkout his channel if you want great content.
      </p>
    </div>
  )
}

export default About
