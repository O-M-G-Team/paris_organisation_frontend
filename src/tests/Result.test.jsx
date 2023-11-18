import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Result from "../pages/Result";

const mockDetail = {
    sport_id: 1,
    participating_country: ["Country 1", "Country 2", "Country 3"],
};

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
