import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Pagination from "@/components/Table/Pagination";

import { EntityProvider } from "@/providers/EntityProvider";

describe("Pagination Component", () => {
  it("matches the snapshot", () => {
    const { container } = render(
      <EntityProvider>
        <Pagination />
      </EntityProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
