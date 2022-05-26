import React from 'react';
import styled from '@emotion/styled';
import { useNavigator } from '../../navigation/useNavigator';


const Landing = () => {
    const landingRef = useNavigator('LANDING');
    return(
        <LandingWrapper ref={landingRef} id='landingwrapper'>
            <LandingIntroText>
                Hi there, I'm&nbsp;
                <NameText>
                    Nick Huang
                </NameText>
                .
            </LandingIntroText>
            <CallToAction>
                Keep scrolling to learn more about me.
            </CallToAction>
        </LandingWrapper>
    )
};

const LandingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 93vh;
    padding-top: 7vh;
    background-color: #082032;
    color: #F5F5F5;
`;

const LandingIntroText = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 40px;
`;

const NameText = styled.div`
    font-weight: bold;
    font-size: 40px;
    color: #EE6055;
`;

const CallToAction = styled.div`
    margin-top: 40px;
    font-size: 20px;
`;

export default Landing;