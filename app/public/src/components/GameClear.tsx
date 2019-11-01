import React from 'react';
import styled from 'styled-components';

interface Props {
    clearFunc: () => void;
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
    border: 1px solid green;
    border-radius: 5px;
    background-color: green;
    padding: 20px;
    text-align: center;
    color: white;
    width: 150px;
    height: 30px;
    cursor: pointer;
    top: calc(50% - 30px / 2);
    left: calc(50% - 150px / 2);
    &:hover {
        background-color: #084c08;
        border: 1px solid #084c08;
    }
`;

const GameClear: React.FunctionComponent<Props> = ({ clearFunc }) => {
    return (
        <>
            <Overlay />
        </>
    );
};

export default GameClear;
