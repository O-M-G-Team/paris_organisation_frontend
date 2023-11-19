import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom";
import Result from "../pages/Result";

const mockDetail = {
    sport_id: 1,
    participating_country: ["USA", "China", "Japan"],
};

// Clear all mocks after each test
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

describe('Result Component Tests', () => {
    beforeEach(() => {
        window.alert = jest.fn();
    });

    it('should alert when choose same country for different medals', async () => {
        render(<Result sport_detail={mockDetail} />);
        // Select the first medal as Gold and country as USA
        userEvent.click(screen.getAllByText('Select Medal')[0]);
        userEvent.click(await screen.findByText('Gold'));
        userEvent.click(screen.getAllByText('Select Country')[0]);
        userEvent.click(await screen.findByText('USA'));

        // Select the second medal as Silver and country as USA again
        userEvent.click(screen.getAllByText('Select Medal')[1]);
        userEvent.click(await screen.findByText('Silver'));
        userEvent.click(screen.getAllByText('Select Country')[1]);
        userEvent.click(await screen.findByText('USA'));

        // Select the second medal as Silver and country as USA again
        userEvent.click(screen.getAllByText('Select Medal')[2]);
        userEvent.click(await screen.findByText('Bronze'));
        userEvent.click(screen.getAllByText('Select Country')[2]);
        userEvent.click(await screen.findByText('Japan'));


        const saveButton = screen.getByText('Save');
        userEvent.click(saveButton);

        await waitFor(() => {
            expect(window.alert).toHaveBeenCalledWith("Duplicate countries found. Please enter unique countries for each result.");
        });
    });

    it('should alert when choose medal but not choosing country', async () => {
        render(<Result sport_detail={mockDetail} />);

        const medalDropdowns = screen.getAllByText('Select Medal');
        userEvent.click(medalDropdowns[0]);
        const goldOption = await screen.findByText('Gold');
        userEvent.click(goldOption);
    
        const saveButton = screen.getByText('Save');
        userEvent.click(saveButton);

        await waitFor(() => {
            expect(window.alert).toHaveBeenCalledWith("Please enter all sport results.");
        });
    });

    it('should alert when less than three medals are selected for a sport result', async () => {
        render(<Result sport_detail={mockDetail} />);

        userEvent.click(screen.getAllByText('Select Medal')[0]);
        userEvent.click(await screen.findByText('Gold'));
        userEvent.click(screen.getAllByText('Select Country')[0]);
        userEvent.click(await screen.findByText('USA'));

        userEvent.click(screen.getAllByText('Select Medal')[1]);
        userEvent.click(await screen.findByText('Silver'));
        userEvent.click(screen.getAllByText('Select Country')[1]);
        userEvent.click(await screen.findByText('Japan'));

        const saveButton = screen.getByText('Save');
        userEvent.click(saveButton);

        await waitFor(() => {
            expect(window.alert).toHaveBeenCalledWith("Please select three medals for each sport result.");
        });
    });
});