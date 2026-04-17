import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #1f2937;
  color: #f3f4f6;
  padding: 3rem 1rem 1rem;
  font-family: sans-serif;
  margin-top: auto;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
`;

const FooterTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const FooterText = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  color: #d1d5db;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #d1d5db;
`;

const FooterLink = styled.a`
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div`
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #374151;
  text-align: center;
  font-size: 0.875rem;
  color: #9ca3af;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterSection>
          <FooterTitle>About Us</FooterTitle>
          <FooterText>
            We are a leading e-commerce platform providing the best quality products at the most affordable prices. Your satisfaction is our priority.
          </FooterText>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterList>
            <FooterListItem><FooterLink href="/">Home</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/shop">Shop</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/about">About Us</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/contact">Contact</FooterLink></FooterListItem>
          </FooterList>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Customer Service</FooterTitle>
          <FooterList>
            <FooterListItem><FooterLink href="/faq">FAQ</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/returns">Returns & Refunds</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/shipping">Shipping Info</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/terms">Terms & Conditions</FooterLink></FooterListItem>
          </FooterList>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contact Info</FooterTitle>
          <FooterList>
            <FooterListItem>Email: support@example.com</FooterListItem>
            <FooterListItem>Phone: +1 (123) 456-7890</FooterListItem>
            <FooterListItem>Address: 123 E-commerce St, Web City</FooterListItem>
          </FooterList>
        </FooterSection>
      </FooterContainer>
      
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.</p>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;