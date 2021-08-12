import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call </LinkTitle>
          <LinkItem href='01956091679'>01956091679</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email me </LinkTitle>
          <LinkItem href='mailto:syedmujtahid@iut-dhaka.edu'>syedmujtahid@iut-dhaka.edu</LinkItem>
        </LinkColumn>

      </LinkList>
      <SocialIconsContainer>
      
        <SocialContainer>
        <SocialIcons href="https://github.com/mujtahid3996">
          <AiFillGithub size="4rem"></AiFillGithub>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/mujtahid-tawhid-7a28b4153/">
          <AiFillLinkedin size="4rem"></AiFillLinkedin>
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/mujtahid.tawhid/">
          <AiFillFacebook size="4rem"></AiFillFacebook>
        </SocialIcons>
        </SocialContainer>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
