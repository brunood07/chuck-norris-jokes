import styled from 'styled-components';
import { Button } from '../button';

export const Jokes = ({ joke, onUpdate = () => {}}) => {
    return (
        <Wrapper>
            <Joke>"{joke}"</Joke>
            <Button onClick={onUpdate}>Randomize</Button>
        </Wrapper>
    );
};


const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    margin-right: 75%;
`;

const Joke = styled.p`
    font-size: 2em;
    color: white;
    text-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;
    flex: 1;
    margin: 0;
`;