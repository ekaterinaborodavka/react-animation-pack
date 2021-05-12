import React, { useEffect } from "react";
import lottie from "lottie-web";
import styled from "styled-components/macro";

import { animationRepository } from "~src/animationRepository";

const AnimationContainer = styled.div`
  margin: auto;
  width: 25%;
`;

interface AnimationProps {
  type: string;
  playing: boolean;
}

export const Animation: React.FC<AnimationProps> = ({ type, playing }) => {
  useEffect(() => {
    const animationContainer = document.querySelector("#animation");
    const animation = animationRepository.get(type);

    if (animationContainer) {
      lottie.loadAnimation({
        container: animationContainer,
        animationData: animation.file,
        renderer: "svg",
        loop: true,
        autoplay: playing,
      });
    }
  }, [playing, type]);

  return <AnimationContainer id="animation" />;
};
