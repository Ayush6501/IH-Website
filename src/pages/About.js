import styled from 'styled-components';
import '../styles/About.css';
import Footer from '../components/Footer';
import {useRef, useEffect} from 'react';
import { useLocation } from "react-router-dom";

const AboutPage = () => {
    const ref = useRef();
    const routePath = useLocation();

    useEffect(() => {
        if (routePath.pathname === "/about") {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [routePath])

    return(
        <>
            <Parent ref={ref}>
                <HeaderCard>
                    <h1>ABOUT US</h1>
                    <TextBox>
                        <p>Innovators Hub was founded in 2018, with the goal of using technology, research and innovation to address people's everyday concerns. The goal also was to help the students of MIT-WPU develop their projects and ideas and help them become well rounded individuals. The club assists the students with their ideas from the ground up, whether they be software, hardware-based projects, or research. We train our recruits in their spheres of interests by equipping them with guidance and skills to unlock innovation. In addition to this, we also organize a plethora of events and seminars for not just the members of the club, but for everyone as we want the students of our college to improve their skills and stay ahead of the curve.We have both a technical and non-technical wing. CSE, Mechanical and Electrical domains operate under the technical department whereas the non-tech department majorly focuses on organising and hosting events alongside content creation through various digital mediums. </p>
                    </TextBox>
                </HeaderCard>
                <InfoBox>
                    <div className="row1-container">
                        <div className="box box-down blue">
                            <h2>Approach</h2>
                            <p>Building a dedicated community of spontaneous problem-solvers and thinkers through knowledge</p>
                            <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
                        </div>

                        <div className="box orange">
                            <h2>Aim</h2>
                            <p>To train and polish individuals in their areas of interest to equip them with industry relevant problem solving skills</p>
                            <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
                        </div>

                        <div className="box box-down cyan">
                            <h2>Vision</h2>
                            <p>To use technology, research, and innovation to address people’s everyday concerns</p>
                            <img src="https://assets.codepen.io/2301174/icon-supervisor.svg"alt="" />
                        </div>


                    </div>
                    <div className="row2-container">

                        <div className="box red">
                            <h2>Mission</h2>
                            <p>Encouraging and developing students’ ideas & projects in order to commercialise them</p>
                            <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
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
  padding-top: 9vh;
  height: auto;
  overflow:auto;
  
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
