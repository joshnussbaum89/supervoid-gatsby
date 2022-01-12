import React from 'react'
import styled from 'styled-components'

const HeroStyles = styled.article`
  width: 100%;
  height: 100%;
  overflow: hidden;

  iframe {
    width: 100vw;
    height: 56.25vw;
  }
`

const Hero = () => {
  return (
    <HeroStyles id='hero'>
      <iframe
        title='vimeo-player'
        src='https://player.vimeo.com/video/584075790'
        frameBorder='0'
        webkitallowfullscreen='true'
        mozallowfullscreen='true'
        allowFullScreen
      ></iframe>
    </HeroStyles>
  )
}

export default Hero
