import { render } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";

import Pagination from "@/components/Table/Pagination";

describe("Pagination Component", () => {
  it("matches the snapshot", () => {
    const props = {
      page: 1,
      totalPages: 5,
      handlePageChange: vi.fn(),
    };

    const { container } = render(<Pagination {...props} />);
    expect(container).toMatchSnapshot();
  });
});
