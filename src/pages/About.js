import styled from 'styled-components';
import '../styles/About.css';
import Footer from '../components/Footer'

const AboutPage = () => {
    return(
        <>
            <Parent>
                <HeaderCard>
                    <h1>ABOUT US</h1>
                    <TextBox>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ab aut culpa dicta, dolore ea explicabo hic id illum labore
                            quo rem unde ut vitae! Enim exercitationem mollitia non
                            Ab aut culpa dicta, dolore ea explicabo hic id illum labore
                            quo rem unde ut vitae! Enim exercitationem mollitia non
                            tempora tempore!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ab aut culpa dicta, dolore ea explicabo hic id illum labore
                            quo rem unde ut vitae! Enim exercitationem mollitia non
                            Ab aut culpa dicta, dolore ea explicabo hic id illum labore
                            quo rem unde ut vitae! Enim exercitationem mollitia non
                            tempora tempore!</p>
                    </TextBox>
                </HeaderCard>
                <InfoBox>
                    <div className="row1-container">
                        <div className="box box-down cyan">
                            <h2>Founded</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <img src="https://assets.codepen.io/2301174/icon-supervisor.svg"alt="" />
                        </div>

                        <div className="box red">
                            <h2>Location</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
                        </div>

                        <div className="box box-down blue">
                            <h2>Projects</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
                        </div>
                    </div>
                    <div className="row2-container">
                        <div className="box orange">
                            <h2>Hackathons</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
                        </div>
                    </div>
                </InfoBox>
                <Footer />
            </Parent>
        </>
    );
}

export default AboutPage;

const Parent = styled.div`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 9vh;
  
  @media only screen and (max-width: 968px) {
    height: fit-content;
  }
`;


const HeaderCard = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  
  h1 {
    color: black;
    font-size: 4em;
    margin: 20px 0;
  }
`;

const TextBox = styled.div`
  width: 70%;
  text-align: center;
  
  p {
    padding: 0;
    margin: 0;
    font-size: 1em;
  }
`;

const InfoBox = styled.div`
  margin: 5px auto;
`;
