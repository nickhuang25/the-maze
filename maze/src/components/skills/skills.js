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





// import React, { Component } from 'react';
// import styled from '@emotion/styled';

// export default class Skills extends Component {
//     render() {
//         return(
//             <SkillsWrapper>
//                 <SHeaderText>
//                     Skills
//                 </SHeaderText>
//                 <SCardWrapper>
//                     <SCard>
//                         <SName>
//                             Web Development
//                         </SName>
//                         <SDescription>
//                             Description of web dev
//                         </SDescription>
//                     </SCard>
//                     <SCard>
//                         <SName>
//                             Machine Learning and AI
//                         </SName>
//                         <SDescription>
//                             ML and CV
//                         </SDescription>
//                     </SCard>
//                 </SCardWrapper>
//                 <SCardWrapper>
//                     <SCard>
//                         <SName>
//                             Computer Vision
//                         </SName>
//                         <SDescription>
//                             CV
//                         </SDescription>
//                     </SCard>
//                     <SCard>
//                         <SName>
//                             Communication
//                         </SName>
//                         <SDescription>
//                             Teaching, Consulting, Leading
//                         </SDescription>
//                     </SCard>
//                 </SCardWrapper>
//             </SkillsWrapper>
//         )
//     }
// };

// const SkillsWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: center;
//     position: relative;
//     min-height: 100%;
//     width: 100%;
// `;

// const SHeaderText = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     min-height: 20%;
//     width: 95%;
//     font-size: 60px;
//     color: #01263F;
// `;

// const SCardWrapper = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//     min-height: 40%;
//     width: 95%;
// `;

// const SCard = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: center;
//     padding: 5px;
//     height: 100%;
//     min-width: 50%;
// `;

// const SName = styled.div`
//     font-size: 36px;
//     padding-bottom: 10px;
//     color: #FFD97D;
// `;

// const SDescription = styled.div`
//     font-size: 20px;
//     color: #01263F;
// `;
