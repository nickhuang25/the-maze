import React, {useContext} from 'react';
import { Context } from './provider';
import styled from '@emotion/styled';

const Link = ({linkId, scrollId}) => {
    const {activeLinkId, setActiveLinkId} = useContext(Context);

    const handleClick = () => {
        console.log('clicked');
        setActiveLinkId(linkId);
        document.getElementById(scrollId).scrollIntoView({behavior: 'smooth'});
    };

    return (
        <LinkWrapper
            id={linkId}
            className={activeLinkId === linkId ? 'activeClass' : ''}
            onClick={handleClick}
        >
            {linkId}
        </LinkWrapper>
    );
};

const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 15px;
    text-align: center;
    color: #F5F5F5;
    margin-right: 30px;
`;

export default Link;