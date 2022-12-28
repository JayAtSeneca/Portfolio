import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillTwitterSquare } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" legacyBehavior>
        <a style={{display:"flex", alignItems:"center", color:"white", marginBottom:"20px"}}>
          <DiCssdeck size="3rem" /> <span style={{fontSize:"2rem"}}>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" legacyBehavior>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about" legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
    <Div3>
        <SocialIcons href="https://github.com/JayAtSeneca" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/chaudhari-jay/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/Jaychaudhari_Ca" target="_blank">
          <AiFillTwitterSquare size="3rem" />
        </SocialIcons>
      </Div3>
  </Container>
);

export default Header;
