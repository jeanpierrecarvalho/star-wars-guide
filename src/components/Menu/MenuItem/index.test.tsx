import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import MenuItem from "@/components/Menu/MenuItem";

describe("MenuItem Component", () => {
  it("matches the snapshot", () => {
    const props = {
      href: "/some-path",
      imageSrc: "/images/characters.png",
      imageAlt: "Sample image",
      title: "Sample Title",
    };

    const { container } = render(<MenuItem {...props} />);
    expect(container).toMatchSnapshot();
  });
});
