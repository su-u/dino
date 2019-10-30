import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
    startFunc: () => void;
}

const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
`;

const StartButton = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    border: 1px solid green;
    border-radius: 5px;
    background-color: green;
    padding: 20px;
    text-align: center;
    color: white;
    width: 150px;
    cursor: pointer;
    &:hover{
        background-color: #084c08;
        border: 1px solid #084c08;
    }
`;


const GameStart:React.FunctionComponent<Props> = ({startFunc}) => {
    return (
        <>
            <Overlay />
            <StartButton onClick={startFunc}>スタート</StartButton>
        </>
    );
}

export default GameStart;