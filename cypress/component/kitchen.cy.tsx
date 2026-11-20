import KitchenPage from "../../src/pages/KitchenPage/KitchenPage";
import data from "../../src/data/kitchen.json";
describe("KitchenPage", () => {
  beforeEach(() => {
    cy.mount(<KitchenPage />);
  });

  it("should display correct data from kitchen.json", () => {
    cy.get('[data-testid="table-row"]')
      .should("have.length", data.length)
      .each(($row, rowIndex) => {
        const item = data[rowIndex];

        const expectedValues = Object.keys(item).map((key) => {
          const value = item[key as keyof typeof item];
          return String(value);
        });

        const actualValues = [...$row.find('[data-testid="table-cell"]')].map(
          (cell) => cell.textContent?.trim(),
        );

        expect(actualValues).to.deep.equal(expectedValues);
      });
  });

  it("should display Kitchen header", () => {
    cy.contains("Kitchen").should("be.visible");
  });

  it("should display table headers", () => {
    cy.get('[data-testid="table-header-cell"]')
      .should("exist")
      .and("have.length.greaterThan", 0);
  });

  it("should display table rows", () => {
    cy.get('[data-testid="table-row"]')
      .should("exist")
      .and("have.length.greaterThan", 0);
  });

  it("should display cells in table rows", () => {
    cy.get('[data-testid="table-row"]').each(($row) => {
      cy.wrap($row)
        .find('[data-testid="table-cell"]')
        .should("have.length.greaterThan", 0);
    });
  });
});
