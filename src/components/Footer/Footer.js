import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
<FooterWrapper>
  <LinkList>
  <LinkColumn>
    <LinkTitle>Call</LinkTitle>
    <LinkItem href="tel:929-340-7869">929-340-7869</LinkItem>
  </LinkColumn>
  <LinkColumn>
    <LinkTitle>Email</LinkTitle>
    <LinkItem href="mailto:email@eamil.com">email@email.com</LinkItem>
  </LinkColumn>
  </LinkList>
  <SocialIconsContainer>
    <CompanyContainer>
      <Slogan>
    Daniel Manfield
      </Slogan>
    </CompanyContainer>
    <SocialContainer>    
    <SocialIcons href="https://github.com/dmanfield">
    <AiFillGithub size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://linkedin.com/in/danielmanfield/">
    <AiFillLinkedin size="3rem"/>
    </SocialIcons>  
    </SocialContainer>
    </SocialIconsContainer>
</FooterWrapper>
  );
};

export default Footer;
