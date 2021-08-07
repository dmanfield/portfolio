import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
<Container>
  <Div1>
    <Link href='/'>
      <a>
        <img style={{height: '150px', width: '150px'}} src='https://api.freelogodesign.org/files/5a4282e03590419db62f399c51877892/thumb/logo_200x200.png?v=637639103450000000'></img>
      </a>
    </Link>
  </Div1>
  <Div2>
    <li>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
      </li>
      <li>
      <Link href="#tech">
        <NavLink>Technologies</NavLink>
      </Link>
      </li>
      <li>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
      </li>
      <li>
      <Link href="#contact">
        <NavLink>Contact</NavLink>
      </Link>
      </li>
  </Div2>
  <Div3>
    <SocialIcons href="https://github.com/dmanfield">
    <AiFillGithub size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://linkedin.com/in/danielmanfield/">
    <AiFillLinkedin size="3rem"/>
    </SocialIcons>
  </Div3>
</Container>
);

export default Header;
