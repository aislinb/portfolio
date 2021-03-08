import React from 'react'
// import Flickity from 'flickity'
import Flickity from 'react-flickity-component'
// import 'flickity/dist/flickity.min.css'
import natFooter from '../../images/nat-footer.png'
import natIndex from '../../images/nat-index.png'
import natIndexBanner from '../../images/nat-index-banner.png'
// import contradict from '../images/contradict.png'
import natShow from '../../images/rsz_nat-show.png'
import natoora from '../../images/natoora.gif'

function NatooraCarousel() {
  const flickityOptions = {
    initialIndex: 2,
  }


  return (
    <div>
      <Flickity
        className={'carousel'} // default ''
        autoPlay={true}
        // data-flickity='{ "autoPlay": true }'
        // continuousAutoPlay="true"
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <img src={natFooter} />
        <img src={natIndexBanner} />
        <img src={natoora} />
        <img src={natShow} />
        <img src={natIndex} />
      </Flickity>
    </div>

  )
}

export default NatooraCarousel
