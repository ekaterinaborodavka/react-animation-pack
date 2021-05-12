import { animations } from "~src/utils/animations";

class AnimationMethods {
  add(type: string, animation: string | any): void {
    let animationFile = animation;
    if (typeof animation !== "string") {
      animationFile = JSON.stringify(animation);
    }
    const newAnimation = {
      type,
      file: animationFile,
    };
    animations.push(newAnimation);
  }
}

export const AnimationRepository = new AnimationMethods();
