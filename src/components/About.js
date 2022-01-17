import React from 'react'
import styled from 'styled-components'
import SupervoidBio from '../assets/gifs/SUPERVOID-BIO.mp4'
import { motion } from 'framer-motion'

const VideoStyles = styled.video`
  width: 100%;
  height: 100%;
`

const About = () => {
  return (
    <motion.section
      style={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      <VideoStyles autoPlay loop muted playsInline>
        <source src={SupervoidBio} type='video/mp4' />
      </VideoStyles>
    </motion.section>
  )
}

export default About
