import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Music Player build with React and TailwindCSS',
    github: 'https://github.com/TiagoGadonski/MusicPlayer',
    demo: 'https://playermusic-tiago.netlify.app'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Video Player with YouTube API',
    github: 'https://github.com/TiagoGadonski/Youtube-Clone',
    demo: 'https://ytclonetiago.netlify.app'
  },

  {
    id: 3,
    image: IMG3,
    title: 'A banking website',
    github: 'https://github.com/TiagoGadonski/bank-site',
    demo: 'https://bank-site-tiago.netlify.app'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Website for dentists',
    github: 'https://github.com/TiagoGadonski/doctorcare',
    demo: 'https://tiagogadonski.github.io/doctorcare/'
  },

  {
    id: 5,
    image: IMG5,
    title: 'Text Animation with only CSS',
    github: 'https://github.com/TiagoGadonski/text-animation',
    demo: 'https://text-animation-with-css.netlify.app'
  },

  {
    id: 6,
    image: IMG6,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com/TiagoGadonski/moving-taxi',
    demo: 'https://moving-taxi.netlify.app'
  },
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return (
              <article key={id} className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
            <a href={github} className='btn' target={'_blank'}>Github</a>
            <a href={demo} className='btn btn-primary' target={'_blank'}>Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio