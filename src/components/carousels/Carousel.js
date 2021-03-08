import React from 'react'
// import Flickity from 'flickity'
import Flickity from 'react-flickity-component'
// import 'flickity/dist/flickity.min.css'
import contradict from '../../images/contradict.png'
import natFooter from '../../images/nat-footer.png'
import natIndex from '../../images/nat-index.png'
import natIndexBanner from '../../images/nat-index-banner.png'
// import contradict from '../images/contradict.png'
import natShow from '../../images/rsz_nat-show.png'
// import homepage from '../images/3-homepage.gif'

function Carousel() {
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
        <img src="https://placeimg.com/640/480/architecture" />
        <img src="https://placeimg.com/640/480/animals" />
        <img src={natFooter} />
        <img src={contradict} />
        <img src={natShow} />
        <img src={natIndex} />
        <img src={natIndexBanner} />
      </Flickity>
    </div>

  )
}

export default Carousel
