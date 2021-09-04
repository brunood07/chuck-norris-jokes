import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import explosion from '../../sounds/beast-explosion.mp3';
import { Jokes } from '../../components/';
import { getJokes } from '../../services/';

const audio = new Audio(explosion);

export function App() {
  const isMounted = useRef(true);
  const [joke, setJoke] = useState({ joke: 'Loading Joke' });

  const onUpdate = async () => {
    const resJoke = await getJokes();

    if (isMounted.current) {
      setJoke(resJoke);
      audio.play();
    }
  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Content>
      <Jokes {...joke} onUpdate={onUpdate} />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding: 0 50px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;