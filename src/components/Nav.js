import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 0;

  a {
    text-decoration: none;
    color: var(--text-primary);
    cursor: pointer;
  }

  .supervoid-logo {
    width: 100%;
    max-width: 175px;
  }

  ul {
    font-size: var(--medium);
    list-style-type: none;
    text-transform: lowercase;
    li {
      display: inline;
      margin-left: 2.5rem;
    }
  }
`

const Nav = () => {
  return (
    <NavStyles>
      <StaticImage
        src='../assets/images/supervoid-logo-trimmed.png'
        alt='Supervoid Logo'
        title='Supervoid'
        className='supervoid-logo'
      />
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <a href='#gallery'>Gallery</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </NavStyles>
  )
}

export default Nav
