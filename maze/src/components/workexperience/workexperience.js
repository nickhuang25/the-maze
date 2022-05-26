import React, { Component } from 'react';
import styled from '@emotion/styled';
import { useNavigator } from '../../navigation/useNavigator';

const WorkExperience = () => {
    const workExperienceRef = useNavigator('WORK EXPERIENCE');
    return(
        <WorkExperienceWrapper ref={workExperienceRef} id='workexperiencewrapper'>
            <WEHeaderText>
                Work Experience
            </WEHeaderText>
            <WECardWrapper>
                <WECard>
                    <WECardCompany>
                        Intros AI
                    </WECardCompany>
                    <WECardRole>
                        Full Stack Engineer
                    </WECardRole>
                    <WECardTime>
                        March 2022 - Present
                    </WECardTime>
                    <WECardDescription>
                        Coded a lot of code
                    </WECardDescription>
                </WECard>
                <WECard>
                    <WECardCompany>
                        Intros AI
                    </WECardCompany>
                    <WECardRole>
                        Full Stack Engineer
                    </WECardRole>
                    <WECardTime>
                        March 2022 - Present
                    </WECardTime>
                    <WECardDescription>
                        Coded a lot of code
                    </WECardDescription>
                </WECard>
                <WECard>
                    <WECardCompany>
                        Intros AI
                    </WECardCompany>
                    <WECardRole>
                        Full Stack Engineer
                    </WECardRole>
                    <WECardTime>
                        March 2022 - Present
                    </WECardTime>
                    <WECardDescription>
                        Coded a lot of code
                    </WECardDescription>
                </WECard>
            </WECardWrapper>
            <WECardWrapper>
                <WECard>
                    <WECardCompany>
                        Intros AI
                    </WECardCompany>
                    <WECardRole>
                        Full Stack Engineer
                    </WECardRole>
                    <WECardTime>
                        March 2022 - Present
                    </WECardTime>
                    <WECardDescription>
                        Coded a lot of code
                    </WECardDescription>
                </WECard>
                <WECard>
                    <WECardCompany>
                        Intros AI
                    </WECardCompany>
                    <WECardRole>
                        Full Stack Engineer
                    </WECardRole>
                    <WECardTime>
                        March 2022 - Present
                    </WECardTime>
                    <WECardDescription>
                        Coded a lot of code
                    </WECardDescription>
                </WECard>
                <WECard>
                    <WECardCompany>
                        Intros AI
                    </WECardCompany>
                    <WECardRole>
                        Full Stack Engineer
                    </WECardRole>
                    <WECardTime>
                        March 2022 - Present
                    </WECardTime>
                    <WECardDescription>
                        Coded a lot of code
                    </WECardDescription>
                </WECard>
            </WECardWrapper>
        </WorkExperienceWrapper>
    )
};

const WorkExperienceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    height: 93vh;
    padding-top: 7vh;
    width: 100%;
    background-color: blue;
`;

const WEHeaderText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-height: 20%;
    width: 95%;
    font-size: 60px;
    color: #01263F;
`;

const WECardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 30%;
    width: 95%;
    padding-bottom: 5.5%;
`;

const WECard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2%;
    height: 100%;
    min-width: 28%;
    background-color: #17BEBB;
    color: #01263F;
    border-radius: 20px;
`;

const WECardCompany = styled.div`
    font-size: 36px;
`;

const WECardRole = styled.div`
    font-size: 20px;
`;

const WECardTime = styled.div`
    font-size: 20px;
`;

const WECardDescription = styled.div`
    font-size: 20px;
`;

export default WorkExperience;