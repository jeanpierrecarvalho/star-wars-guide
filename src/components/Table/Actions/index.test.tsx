import { render } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";

import Actions from "@/components/Table/Actions";

describe("Actions Component", () => {
  it("matches the snapshot", () => {
    const props = {
      searchTerm: "example search",
      handleSearchChange: vi.fn(), // Mock function
    };

    const { container } = render(<Actions {...props} />);
    expect(container).toMatchSnapshot();
  });
});
