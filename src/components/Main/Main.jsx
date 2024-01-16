import './main.scss'
import {destinations} from "../data/data"
import { SlLocationPin } from "react-icons/sl";
import { FaRegClipboard } from "react-icons/fa";
import { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Main = () => {

  //hook to add aos animation
  useEffect(() => {
    Aos.init({duration:2000})
  },[])

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {
          destinations.map((destination) => {
            return (
              <div key={destination.id} data-aos="fade-up" className="singleDestination">
                <div className="imgDiv">
                  <img src={destination.image} alt="" />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destination.destTitle}</h4>
                
                  <span className="continent flex">
                  <SlLocationPin className="icon" />
                  <span>{destination.location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span className='name'>{destination.grade} <small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{destination.fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{destination.description}</p>
                  </div>

                  <div className="btn flex">
                    DETAILS <FaRegClipboard className="icon" />
                  </div>
                </div>
              </div>
            )
          }
        )}
      </div>
    </section>
  )
}

export default Main