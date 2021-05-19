import React from "react";
import { shallow } from "enzyme";

import { Animation } from "./Animation";

describe("Animation", () => {
  const props = {
    type: "",
    playing: true,
  };
  const component = shallow(<Animation {...props} />);
  it("should render Animation component", () => {
    expect(component.children()).toHaveLength(0);
    expect(component.find("Animation__AnimationContainer")).toHaveLength(1);
  });
});
