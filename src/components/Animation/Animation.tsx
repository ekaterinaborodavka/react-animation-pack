import React, { useEffect } from "react";
import lottie from "lottie-web";
import styled from "styled-components/macro";

import { animations } from "~src/utils/animations";

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
    let currentAnimation = animations[0].file;

    const changeAnimation = (type: string) => {
      animations.map((animation) => {
        if (animation.type === type) {
          currentAnimation = animation.file;
          if (typeof currentAnimation === "string") {
            currentAnimation = JSON.parse(currentAnimation);
          }
        }
      });
    };
    changeAnimation(type);

    if (animationContainer) {
      lottie.loadAnimation({
        container: animationContainer,
        animationData: currentAnimation,
        renderer: "svg",
        loop: true,
        autoplay: playing,
      });
    }
  }, [playing, type]);

  return <AnimationContainer id="animation" />;
};
