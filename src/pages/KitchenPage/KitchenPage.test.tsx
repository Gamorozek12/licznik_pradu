import { render, screen, within } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import KitchenPage from "./KitchenPage";

describe("KitchenPage", () => {
  it("displays the correct number of columns", () => {
    render(<KitchenPage />);

    const headers = screen.getAllByTestId("table-header-cell");

    expect(headers).toHaveLength(5);
  });

  it("displays the correct column names", () => {
    render(<KitchenPage />);

    const headers = screen.getAllByTestId("table-header-cell");

    const headerNames = headers.map((header) => header.textContent);

    expect(headerNames).toEqual([
      "id",
      "powerLevel",
      "cost",
      "isActive",
      "time",
    ]);
  });

  it("displays the correct number of rows", () => {
    render(<KitchenPage />);

    const rows = screen.getAllByTestId("table-row");

    expect(rows).toHaveLength(4);
  });

  it("each row contains the correct number of cells", () => {
    render(<KitchenPage />);

    const rows = screen.getAllByTestId("table-row");

    rows.forEach((row) => {
      const cells = within(row).getAllByTestId("table-cell");

      expect(cells).toHaveLength(5);
    });
  });

  it("displays the correct data in each row", () => {
    render(<KitchenPage />);

    const rows = screen.getAllByTestId("table-row");

    const expectedData = [
      ["1", "2", "20", "false", "3"],
      ["2", "5", "20", "false", "5"],
      ["3", "6", "50", "true", "4"],
      ["4", "6", "50", "true", "4"],
    ];

    rows.forEach((row, index) => {
      const cells = within(row).getAllByTestId("table-cell");

      const actualData = cells.map((cell) => cell.textContent);

      expect(actualData).toEqual(expectedData[index]);
    });
  });

  it("correctly displays boolean values", () => {
    render(<KitchenPage />);

    const rows = screen.getAllByTestId("table-row");

    const booleanValues = rows.map((row) => {
      const cells = within(row).getAllByTestId("table-cell");

      return cells[3].textContent;
    });

    expect(booleanValues).toEqual(["false", "false", "true", "true"]);
  });

  it("displays data in the correct order", () => {
    render(<KitchenPage />);

    const rows = screen.getAllByTestId("table-row");

    const ids = rows.map((row) => {
      const cells = within(row).getAllByTestId("table-cell");

      return cells[0].textContent;
    });

    expect(ids).toEqual(["1", "2", "3", "4"]);
  });
});
