import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styled from "styled-components/macro";

import { animationRepository } from "~src/animationRepository/animationRepository";

const AnimationContainer = styled.div`
  margin: auto;
`;

interface AnimationProps {
  type: string;
  playing: boolean;
}

export const Animation: React.FC<AnimationProps> = ({ type, playing }) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const animation = animationRepository.get(type);

    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        animationData: animation.file,
        renderer: "svg",
        loop: true,
        autoplay: playing,
      });
    }
  }, [playing, type]);

  return <AnimationContainer ref={animationContainer} />;
};
