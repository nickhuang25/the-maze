import React from 'react';
import styled from '@emotion/styled';
import Landing from '../components/landing/landing';
import About from '../components/about/about';
import WorkExperience from '../components/workexperience/workexperience';
import Skills from '../components/skills/skills';

const MainPage = () => {
    return (
        <MainPageWrapper>
            <Landing/>
            <About/>
            <WorkExperience/>
            <Skills/>
        </MainPageWrapper>
    );
};


const MainPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    font-family: Helvetica, sans-serif;
`;

export default MainPage;