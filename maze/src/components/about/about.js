import React from 'react';
import styled from '@emotion/styled';
import { useNavigator } from '../../navigation/useNavigator';


const About = () => {
    const aboutRef = useNavigator('ABOUT');
    return(
        <AboutWrapper ref={aboutRef} id='aboutwrapper'>            
            <SectionHeaderWrapper>
                <SectionTitle>
                    ABOUT
                </SectionTitle>
                <Underline/>
            </SectionHeaderWrapper>
        </AboutWrapper>
    )
};

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 93vh;
    padding-top: 7vh;
    width: 100%
`;

const SectionHeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: #01263F;
`;

const SectionTitle = styled.div`
    margin-top: 2vh;
    font-size: 40px;
    font-weight: bold;
`;

const Underline = styled.div`
    margin-top: 2vh;
    height: .5vh;
    width: 5vw;
    background-color: #01263F;
`;

const AboutImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 2.5%;
    width: 35%;
    height: 100%;
`;

const AboutImage = styled.img`
    width: 100%;
    border-radius: 20px;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 3px;
    height: 100%;
    width: 60%;
    margin: 0px;
    color: #01263F;
`;

const DescriptionHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 60px;
    width: 80%;
`;

const DescriptionBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 24px;
    width: 80%;
`;

export default About;