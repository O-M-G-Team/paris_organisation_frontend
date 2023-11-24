import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import SportTable from "../pages/SportTable";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

jest.mock("../services/data", () => ({
  getSport: jest.fn(() =>
    Promise.resolve([
      {
        sport_id: 1,
        sport_name: "Sport name 1",
        sport_type: "sport_type1",
        date_time: "2024-07-24T12:00:00",
      },
      {
        sport_id: 2,
        sport_name: "Sport name 2",
        sport_type: "sport_type2",
        date_time: "2024-07-26T12:00:00",
      },
    ])
  ),
}));

describe("SportTable", () => {
  it("should render the components", async () => {
    render(
      <MemoryRouter>
        <SportTable />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Olympic Schedule")).toBeInTheDocument();
      screen.debug();
    });
  });

  it("displays data from database correctly", async () => {
    render(
      <MemoryRouter>
        <SportTable />
      </MemoryRouter>
    );

    await waitFor(() => {
      // check sport data
      expect(
        screen.getByText((content, element) =>
          content.startsWith("sport_type1")
        )
      ).toBeInTheDocument();
      expect(
        screen.getByText((content, element) =>
          content.startsWith("sport_type2")
        )
      ).toBeInTheDocument();
      // check medal
      expect(screen.getByAltText("medal-1")).toBeInTheDocument();
      expect(screen.getByAltText("medal-2")).toBeInTheDocument();
    });
  });

  it("display unavailable message when no data in database", async () => {
    jest.spyOn(require("../services/data"), "getSport").mockResolvedValue([]);
    render(
      <MemoryRouter>
        <SportTable />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByText("Schedule is unavailable at the moment.")
      ).toBeInTheDocument();
    });
  });
});
