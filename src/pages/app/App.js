import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Jokes } from '../../components/';

import explosion from '../../sounds/beast-explosion.mp3';

const audio = new Audio(explosion);

export function App() {
  const isMounted = useRef(true);
  const [joke, setJoke] = useState();

  const getJokes = () => {
      fetch('http://api.icndb.com/jokes/random')
        .then(res => res.json())
        .then(data => setJoke(data.value.joke)
      )
  }

  const onUpdate = () => {
    const resJoke = getJokes();

    if (isMounted.current) {
      setJoke(resJoke);
      audio.play();
    }
  }

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    }

  }, [])

  return (
    <Content>
      <Jokes joke={joke} onUpdate={onUpdate} />
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