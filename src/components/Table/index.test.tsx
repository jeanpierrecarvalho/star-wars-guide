import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Table from "@/components/Table";

describe("Table Component", () => {
  it("matches the snapshot", () => {
    const props = {
      type: "characters",
    };

    const { container } = render(<Table {...props} />);
    expect(container).toMatchSnapshot();
  });
});
