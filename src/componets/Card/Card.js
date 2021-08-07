import React from 'react';
import illastrator from '../../assets/images/illustration.png';
import Button from '../Button/Button';
import { ButtonContainer, CardContainer, ContentContainer } from '../styles/Container.styles';
// import Title from '../Title/Title';
import { StyleTitle } from '../styles/Custom.styles';
import { H1, P, Tag } from '../styles/Element.styles';

const Card = () => {
    return (
        <CardContainer>
            <ContentContainer>
            <Tag color="#4361ee" >EXCLUSIVE</Tag>
                <H1>
                   
                    <StyleTitle text="React Styled Components" color="#fff"/>
                </H1>
                <P>
                    Exclusive React JS Tutorial on Styled Components where you will learn why we
                    need this & how to use it.
                </P>
                <ButtonContainer>
                <Button link="https://lwsbd.link/rsc" text="Watch now" />
                    <Button link="https://lwsbd.link/react" text="Github repo" />
                </ButtonContainer>
                </ContentContainer>
             <img src={illastrator} width="300px" alt="Nerd"  />
        </CardContainer>
    );
};

export default Card;