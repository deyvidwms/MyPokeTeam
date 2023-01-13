import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import LoadingGif from '../../assets/images/loading.gif';
import LoadingAnimation from './LoadingAnimation';

const Loading: React.FC = () => {
  const [typeLoading, setTypeLoading] = useState<number>(0);
  const [showloading, setShowLoading] = useState<boolean>(true);

  useEffect(()=>{
    const random = Math.random();
    console.log(random)
    const type = (random < 0.5) ? 0 : 1;
    setTypeLoading(type);
    console.log(typeLoading);
  }, [typeLoading]);

  useEffect(()=>{
    setTimeout( () => {
      setShowLoading(false);
    }, 3000);
  }, [])

  return (
    <Container isVisible={showloading}>
      {
        typeLoading === 0 &&
          <img src={LoadingGif} alt="Loading Gif" />
      }
      {
        typeLoading === 1 &&
          <LoadingAnimation />
      }
    </Container>
  );
}

export default Loading;