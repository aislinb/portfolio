import React from 'react'
// import Flickity from 'flickity'
import Flickity from 'react-flickity-component'
// import 'flickity/dist/flickity.min.css'
// import connect4 from '../../images/connect4-grid.png'
import connectGrid from '../../images/connect-grid.png'


function ContraCarousel() {
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
        <img src={connectGrid} />
        <img src={connectGrid} />
        <img src={connectGrid} />
      </Flickity>
    </div>

  )
}

export default ContraCarousel
