import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Front-End</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                HTML
              </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                CSS
              </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                JavaScript
              </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                React
              </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                Angular
              </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                TailWindCSS
              </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                WordPress
              </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                TypeScript
              </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                Software Design
              </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                UI/UX
              </p>
            </li>
          </ul>
        </article>
        {/* End of FrontEnd */}

        <article className="service">
          <div className="service_head">
            <h3>Back-End</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                MySQL
              </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                NodeJS
              </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
               Python
              </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                Java
              </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                C/C++
              </p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>
                API
              </p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>
                MongoDB
              </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                PHP
              </p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}

        <article className="service">
          <div className="service_head">
            <h3>Others Skills</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                Photoshop.
              </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                Illustrator
              </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                After Effects
              </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                Premiere Pro
              </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                Corel Draw
              </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
               Office
              </p>
            </li>
          </ul>
        </article>
        {/* End of Others Skills */}
      </div>
    </section>
  )
}

export default services