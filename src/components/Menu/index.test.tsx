import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Menu from "@/components/Menu";

describe("Menu Component", () => {
  it("matches the snapshot", () => {
    const { container } = render(<Menu />);
    expect(container).toMatchSnapshot();
  });
});
