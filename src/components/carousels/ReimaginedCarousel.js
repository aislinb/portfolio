import React from 'react'
import Flickity from 'react-flickity-component'

import homepage from '../../images/3-homepage.gif'
import eventShow from '../../images/event-show.gif'
import Login from '../../images/20-login.gif'


function ReimaginedCarousel() {
  const flickityOptions = {
    initialIndex: 2,
  }


  return (
    <div>
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <img src={Login} />
        <img src={eventShow} />
        <img src={homepage} />
      </Flickity>
    </div>

  )
}

export default ReimaginedCarousel
