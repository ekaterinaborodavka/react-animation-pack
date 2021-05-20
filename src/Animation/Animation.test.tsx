import React from "react";
import { shallow } from "enzyme";

import { Animation } from "./Animation";

jest.mock("~src/animationRepository/animationRepository");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { animationRepository } = require("~src/animationRepository/animationRepository");

describe("Animation", () => {
  it("should render animations", () => {
    const props = {
      type: "test",
      playing: true,
    };
    animationRepository.get.mockReturnValue({ type: props.type, file: {} });
    const component = shallow(<Animation {...props} />);
    expect(component.children()).toHaveLength(0);
    expect(component.find("Animation__AnimationContainer")).toHaveLength(1);
  });
});
