import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Actions from "@/components/Table/Actions";

import { EntityProvider } from "@/providers/EntityProvider";

describe("Actions Component", () => {
  it("matches the snapshot", () => {
    const { container } = render(
      <EntityProvider>
        <Actions />
      </EntityProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
