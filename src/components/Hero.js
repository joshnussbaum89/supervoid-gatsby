import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import scrollTo from 'gatsby-plugin-smoothscroll'

const HeroStyles = styled.header`
  height: 100vh;
`

const HeroContentStyles = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  h1 {
    text-transform: uppercase;
  }

  p {
    font-size: var(--medium);
    margin: 0 auto 3.5rem auto;
    width: 750px;
  }

  button {
    font-size: var(--small);
    text-transform: lowercase;
    color: var(--text-primary);
    margin: 0 0.5rem;
    padding: 1.5rem;
    border-radius: 50px;
    transition: 0.2s;
    cursor: pointer;
  }

  button:nth-of-type(1) {
    background: var(--bg-primary);
    border: 1px solid var(--text-primary);
    text-decoration: none;
  }

  button:nth-of-type(2) {
    background: var(--accent-primary);
    border: 1px solid var(--accent-primary);
  }

  p,
  button {
    text-transform: lowercase;
  }
`

const Hero = () => {
  return (
    <HeroStyles>
      <Nav />
      <HeroContentStyles>
        <h1>Supervoid</h1>
        <p>
          Philadelphia visual design team specializing in lighting, music
          videos, films, animation and more
        </p>
        <button onClick={() => scrollTo('#gallery')}>Browse Gallery</button>
        <button onClick={() => alert('Video will appear here...')}>
          Watch Promo
        </button>
      </HeroContentStyles>
    </HeroStyles>
  )
}

export default Hero
