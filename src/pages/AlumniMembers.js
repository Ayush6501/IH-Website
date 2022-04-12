import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import AlumniData from "./Alumini/AlumniData";

const AlumniMember = () => {
    const params = useParams()
    let obj = AlumniData.find(o => o["Name"] === params.name);
    console.log(obj);

    return (
        <MainContainer>
            <Container>
                <ImageDetail>
                    <ImageContainer>
                        <img src={obj["Image"]} alt=""/>
                    </ImageContainer>
                    <DetailsContainer>
                        <h1>{obj["Name"]}</h1>
                        <h2>{obj["Position in Club"]}</h2>
                        <h2>{obj["Department"]} ({obj["Start Year"]} - {obj["End Year"]} )</h2>
                        <h2>Email ID: {obj["Email ID"]}</h2>
                        <h2>Current Status: {obj["Current Status"]}</h2>
                        <IconContainer>
                            <ion-icon name="logo-linkedin"></ion-icon>
                            <ion-icon name="logo-instagram"></ion-icon>
                            <ion-icon name="mail-outline"></ion-icon>
                            <ion-icon name="cloud-download-outline"></ion-icon>
                        </IconContainer>
                    </DetailsContainer>
                </ImageDetail>
                <ClubContainer>
                    <img src="/Logo-1.ico" alt=""/>
                </ClubContainer>
            </Container>
        </MainContainer>
    )
}

export default AlumniMember;

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 70%;
  width: 90%;
  //background: blue;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px;
`;

const ImageContainer = styled.div`
  height: 100%;
  
  img {
    height: 100%;
    margin-right: 30px;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  color: #000;
  
  h1 {
    font-size: 3em;
    margin: 0;
  }
  
  h2 {
    color: #000;
    font-size: 1.5em;
    margin: 0;
  }
`;

const ClubContainer = styled.div`
    
`;

const IconContainer = styled.div`
  display: flex;

  ion-icon {
    font-size: 48px;
    margin-right: 10px;
  }
`;

const ImageDetail = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 90%;
`;
