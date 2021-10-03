import styled from 'styled-components';
import HeaderItems from "./HeaderItems";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
      <FooterParent>
          <FooterComponent>
              <LeftBox>
                  <LogoBox>
                      <img src="/assets/images/Logo-white.png" alt=""/>
                      <h1>Innovators<br />Hub</h1>
                  </LogoBox>
                  <p>
                      Welcome to possible… At IH, we aim to bring together and
                      incubate thinkers from all spheres. Become a part of the biggest
                      up-and-coming community of pioneers from all domains.
                  </p>
                  <FollowBox>
                      <h2>Follow Us</h2>
                      <IconContainer>
                          <img src="/assets/logos/logo-linkedin.svg" alt="" />
                          <img src="/assets/logos/logo-instagram.svg" alt="" />
                          <img src="/assets/logos/logo-twitter.svg" alt="" />
                      </IconContainer>
                  </FollowBox>
              </LeftBox>
              <RightBox>
                  <RightContainer>
                      <ContactBox>
                          <ContactInfo>
                              <img src="/assets/logos/pin-outline.svg" alt=""/>
                              <Text>
                                  <h3>Pune, India</h3>
                                  <p>Kothrud, MITWPU</p>
                              </Text>
                          </ContactInfo>
                          <ContactInfo>
                              <img src="/assets/logos/logo-discord.svg" alt="" onClick={()=>window.open("https://discord.gg/bHZRrnZ992")}/>
                              <Text>
                                  <h3>Ionosphere</h3>
                                  <p>Join Our Server</p>
                                  <p> </p>
                              </Text>
                          </ContactInfo>
                          <ContactInfo>
                              <img src="/assets/logos/mail-outline.svg" alt=""/>
                              <Text>
                                  <h3>IH@email.com</h3>
                                  <p>Contact Us Here</p>
                                  <p> </p>
                              </Text>
                          </ContactInfo>
                      </ContactBox>
                      <LinkContainer>
                          <h1>Useful Links</h1>
                          <LinksContainer>
                              <Links>
                                  <p>Wondering what we do?</p>
                                  <Link to='/about'><HeaderItems title="About Us"/></Link>
                              </Links>
                              <Links>
                                  <p>Have a project proposal?</p>
                                  <Link to='/ideas'><HeaderItems title="Ideas"/></Link>
                              </Links>
                              <Links>
                                  <p>Meet the innovators! </p>
                                  <Link to='/ourteam'><HeaderItems title="Our Team"/></Link>
                              </Links>
                              <Links>
                                  <p>Down the memory lane… </p>
                                  <Link to='/gallery'><HeaderItems title="Archive"/></Link>
                              </Links>
                          </LinksContainer>
                      </LinkContainer>
                      <QuoteContainer>
                          <Quote>Everything begins with an Idea</Quote>
                      </QuoteContainer>
                  </RightContainer>
              </RightBox>
          </FooterComponent>
      </FooterParent>
  )
}

export default Footer;

const FooterParent = styled.div`
  overflow:hidden;
  position: relative;
  height: 350px;
  width: 100%;
  background: #171717;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 0.8em;
  overflow-x: hidden;
  z-index: 9999999999;

  @media only screen and (max-width: 1268px) {
    height: fit-content;
  }
`;

const FooterComponent = styled.div`
  //background: white;
  width: 90%;
  height: 95%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and (max-width: 968px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`;

const LeftBox = styled.div`
  background: #3d3d3d;
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-width: 360px;
  min-height: 330px;
  border-radius: 0 0 30px 30px;

  h1 {
    font-size: 2.5em;
    line-height: 0.9em;
    margin-top: 5px;

    @media only screen and (max-width: 968px) {
      margin-bottom: 0;
    }
  }

  img {
    width: 100px;
    height: 100px;
    @media only screen and (max-width: 968px) {
      margin-left: 20px;
    }
    
  }

  p {
    color: white;
    text-align: left;
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 0;
    font-size: 1.2em;
    margin-bottom: 5px;

    @media only screen and (max-width: 968px) {
      margin-bottom: 0;
      margin-left: 40px;
    }
  }

  @media only screen and (max-width: 968px) {
    width: 100%;
    margin: 0;
  }
`;

const LogoBox = styled.div`
  display: flex;
  margin-top: 15px;
  
  h1 {
    color: white;
  }
`;

const FollowBox = styled.div`
  display: flex;
  flex-direction: column;
  
  h2 {
    margin: 0;
    margin-left: 25px;
    color: #ffee00;
    
    @media only screen and (max-width: 968px) {
      margin-left: 40px;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  left: 20px;
  padding-left: 5px;
  position: relative;
  height: 35px;

  @media only screen and (max-width: 968px) {
    left: 15px;
  }
  
  img {
    -webkit-filter: invert(1);
    filter: invert(1);
    object-fit:contain;
    height: 40px;
    width: 40px;
    margin-right: 10px;
    
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

const RightBox = styled.div`
  //background: blanchedalmond;
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  

  @media only screen and (max-width: 968px) {
    width: 100%;
    margin: 0;
    justify-content: center;
  }
`;

const RightContainer = styled.div`
  width: 90%;
  height: 100%;
  //background: red;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ContactBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-right: 20px;
  margin-top: 20px;

  @media only screen and (max-width: 968px) {
    flex-direction: column;
    margin-right: 0;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  margin-right: 10px;

  img {
    width: 45px;
    height: 45px;
    margin-right: 5px;
    -webkit-filter: invert(1);
    filter: invert(1);
  }
  
  @media only screen and (max-width: 968px) {
    margin-bottom: 20px;
  }
`;

const Text = styled.div`
  h3 {
    margin: 0;
    color: #ffee00;
    font-size: 1.4em;
  }
  
  p {
    margin: 0;
    line-height: 0.9em;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  
  
  h1 {
    margin-bottom: 0;
    color: #ffee00;
    font-size: 1.9em;
    margin-left: 10px;
  }
`;

const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  
  @media only screen and (max-width: 968px) {
    flex-direction: column;
  }
`;

const Links = styled.div`
  min-width: 120px;
  display: inline-block;
  line-height: 1.1em;
  
    p {
      margin-left: 10px;
      margin-bottom: 15px;
      margin-top: 0;
      font-size: 1.3em;
    }

  @media only screen and (max-width: 968px) {
    margin-top: 15px;
  }
`;

const QuoteContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  //background: gold;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Quote = styled.h1`
  font-family: 'Rock Salt', cursive;
  font-size: 2.5em;
  margin: 0;
  color: #ffee00;

  @media only screen and (max-width: 968px) {
    font-size: 1.3em;
  }
`;
