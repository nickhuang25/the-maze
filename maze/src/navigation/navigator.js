import React from 'react';
import Link from './link';
import styled from '@emotion/styled';

const links = [
    {linkId: 'LANDING', scrollId: 'landingwrapper'},
    {linkId: 'ABOUT', scrollId: 'aboutwrapper'},
    {linkId: 'WORK EXPERIENCE', scrollId: 'workexperiencewrapper'},
    {linkId: 'EDUCATION', scrollId: 'educationwrapper'},
    {linkId: 'SKILLS', scrollId: 'skillswrapper'},
    {linkId: 'PROJECTS', scrollId: 'projectswrapper'},
]

const Navigator = () => {
    return (
        <NavigatorWrapper>
            {links.map(({linkId, scrollId}, idx) => (
                <Link key={idx} linkId={linkId} scrollId={scrollId} />
            ))}
        </NavigatorWrapper>
    );
};

const NavigatorWrapper = styled.div`
    position: sticky;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 6.5vh;
    top: 0;
    background-color: #01263F;
    z-index: 10;
    font-family: Helvetica, sans-serif;
    border-bottom: .5vh solid #17BEBB;
`;

export default Navigator;