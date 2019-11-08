import React from 'react';
import styled from 'styled-components';

interface Props {
    startFunc: (star: number) => void;
    defaultStar: number;
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
    top: calc(60% - 30px / 2);
    left: calc(50% - 150px / 2);
    font-weight: bold;
    font-size: 27px;
    &:hover {
        background-color: #084c08;
        border: 1px solid #084c08;
    }
`;

const TitleText = styled.div`
    position: fixed;
    width: 360px;
    top: 30%;
    left: calc(50% - 360px / 2);
    color: #364e96;
    font-size: 60px;
    border: 1px solid green;
    border-radius: 5px;
    background-color: #cbd944;
    padding: 20px;
`;

const Form = styled.form`
    position: fixed;
`;

const Input = styled.input.attrs({
    type: 'number'
})`
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 2px;
    color: #000000;
    font-size: 0.8rem;
    width: 50%;
    position: fixed;
    padding: 20px;
    width: 150px;
    height: 10px;
    cursor: pointer;
    top: calc(50% - 10px / 2);
    left: calc(50% - 150px / 2);
`;

const GameStart: React.FunctionComponent<Props> = ({
    startFunc,
    defaultStar
}: any) => {
    const [star, setStar] = React.useState(defaultStar);

    const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value !== '')
            setStar(parseInt(event.target.value, 10));
    };

    return (
        <>
            <Overlay />
            <TitleText>星をわけろ！</TitleText>
            <Form>
                <Input
                    value={star}
                    onChange={onChangeValue}
                    min="1"
                    max="25565"
                ></Input>
                <StartButton onClick={() => startFunc(star)}>スタート</StartButton>
            </Form>
        </>
    );
};

export default GameStart;
