import { defaultAnimations } from "~src/utils/defaultAnimations";

interface animationType {
  type: string;
  file: string | Record<string, unknown>;
}
class AnimationRepository {
  private animations: animationType[];

  constructor(animations: animationType[]) {
    this.animations = animations;
  }

  add(type: string, animation: string | Record<string, unknown>): animationType[] {
    let animationFile = animation;
    if (typeof animation === "string") {
      animationFile = JSON.parse(animation);
    }
    const newAnimation = {
      type,
      file: animationFile,
    };
    this.animations.push(newAnimation);
    return this.animations;
  }

  get(type: string): animationType {
    let currentAnimation = this.animations[0];
    this.animations.find((animation) => {
      if (animation.type === type) {
        currentAnimation = animation;
      }
    });
    return currentAnimation;
  }
}

export const animationRepository = new AnimationRepository(defaultAnimations);
