import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Result from "../pages/Result";

const mockDetail = {
  sport_id: 1,
  participating_country: ["USA", "Japan", "Germany", "France"],
};

afterEach(() => {
  jest.clearAllMocks();
});

describe("Result Component", () => {
  it("should render without crashing", () => {
    render(<Result sport_detail={mockDetail} />);
    expect(screen.getByText("Add")).toBeInTheDocument();
    expect(screen.getByText("Save")).toBeInTheDocument();
  });

  it("should be able to add a new card", () => {
    render(<Result sport_detail={mockDetail} />);
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getAllByText("Select Medal").length).toBeGreaterThan(1);
  });

  it("should be able to delete a card", async () => {
    render(<Result sport_detail={mockDetail} />);
    fireEvent.click(screen.getByText("Add"));
    await waitFor(() => screen.getAllByText("Delete"));
    fireEvent.click(screen.getAllByText("Delete")[0]);
    expect(screen.queryAllByText("Delete").length).toBeLessThan(2);
  });
});

describe("Result Component Tests", () => {
  beforeEach(() => {
    window.alert = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should alert when choose medal but not choosing country", async () => {
    render(<Result sport_detail={mockDetail} />);

    const medalDropdowns = screen.getAllByText("Select Medal");
    userEvent.click(medalDropdowns[0]);
    const goldOption = await screen.findByText("Gold");
    userEvent.click(goldOption);

    const saveButton = screen.getByText("Save");
    userEvent.click(saveButton);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        "Please enter all sport results."
      );
    });
  });
});
