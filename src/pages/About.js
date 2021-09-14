import styled from 'styled-components';

const AboutPage = () => {
    return(
        <Parent>
            <LeftContainer>
                <HeadText>
                    <h1>ABOUT</h1>
                </HeadText>
                <SecondaryContainer>
                    <LLC>
                        <h2>US</h2>
                    </LLC>
                    <Info>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet cumque eos error,
                        expedita fugiat veniam? Ea facere impedit, iure labore, magnam quisquam quo ullam unde
                        veritatis vero voluptates voluptatum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet cumque eos error,
                        expedita fugiat veniam? Ea facere impedit, iure labore, magnam quisquam quo ullam unde
                        veritatis vero voluptates voluptatum.
                    </Info>
                </SecondaryContainer>
            </LeftContainer>
            <RightContainer>
                <BoxParent>
                    <ImgBox>
                        <img src="/assets/images/team.jpg" alt=""/>
                    </ImgBox>
                    <ImgBox>
                        <img src="/assets/images/team.jpg" alt=""/>
                    </ImgBox>
                    <ImgBox>
                        <img src="/assets/images/team.jpg" alt=""/>
                    </ImgBox>
                </BoxParent>
            </RightContainer>
        </Parent>
    );
}

export default AboutPage;

const Parent = styled.div`
  width: 100vw;
  height: 100vh;
  //background: blue;
  overflow: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  @media (max-width: 1224px) {
    flex-flow: column;
  }
`;

const LeftContainer = styled.div`
  margin: 6em 25px 30px 60px;
  //background: green;
  height: 100%;
  width: 60%;
  display: flex;
  flex-flow: column;

  @media (max-width: 1224px) {
    height: fit-content;
    margin: 4em 25px;
    width: 95%;
  }
`;

const RightContainer = styled.div`
  margin: 6em 20px 30px;
  //background: purple;
  height: 100%;
  width: 40%;
  display: flex;

  @media (max-width: 1224px) {
    width: 90%;
    margin: 5px 20px;
  }
`;

const HeadText = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding-top: 25px;
  
  h1 {
    color: #ffee00;
    font-size: 13em;
    font-weight: bold;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
    line-height: 0.5em;

    @media (max-width: 1200px) {
      font-size: 10em;
    }
    @media (max-width: 1024px) {
      font-size: 7em;
    }
    @media (max-width: 768px) {
      font-size: 5em;
    }
    //@media (max-width: 1200px) {
    //  height: 8em;
    //}
    //@media (min-width: 1000px) {
    //  height: 5em;
    //}
  }
`;

const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 5px;
`;

const LLC = styled.div`
  display: flex;

  h2 {
    font-size: 13em;
    font-weight: bold;
    margin: 0 auto;
    padding: 0;
    line-height: 1em;
    color: #ffee00;
    
    @media (max-width: 1200px) {
      font-size: 10em;
    }
    @media (max-width: 1024px) {
      font-size: 7em;
    }
    @media (max-width: 768px) {
      font-size: 5em;
    }
  }
  
  @media (max-width: 1200px) {
    height: 8em;
  }
  @media (max-width: 1000px) {
    height: 5em;
  }
`;

const Info = styled.div`
  display: flex;
  margin-top: 25px;
  font-size: 1.5em;

  @media (max-width: 1200px) {
    font-size: 1.2em;
  }
  @media (max-width: 1024px) {
    margin-top: 15px;
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    margin-top: 5px;
    font-size: 0.9rem;
  }
`;

const BoxParent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  //background: orange;
  margin: 10px;
  justify-content: flex-start;
  align-items: center;
`;

const ImgBox = styled.div`
  height: 350px;
  width: 415px;
  margin-bottom: 30px;

  @media (max-width: 1023px) {
    height: 300px;
    width: 350px;
  }

  @media (max-width: 768px) {
    height: 250px;
    width: 300px;
  }
  
  img {
    inset: 0px;
    height: 100%;
    object-fit: contain;
    opacity: 1;
    width: 100%;
    z-index: 1;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 20px;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`;
