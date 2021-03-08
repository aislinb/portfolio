import React from 'react'
import Flickity from 'react-flickity-component'

import contradict from '../../images/contradict.png'
import dictionary from '../../images/dictionary.gif'
import code from '../../images/code.gif'


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
        <img src={code} />
        <img src={contradict} />
        <img src={dictionary} />
      </Flickity>
    </div>

  )
}

export default ContraCarousel
