import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { auth } from "../firebase/FirebaseConfig";
import LogOutButton from "../components/LogOutButton";

jest.mock("../firebase/FirebaseConfig", () => ({
  auth: {
    signOut: jest.fn(() => Promise.resolve()),
  },
}));

describe("LogOutButton Component", () => {
  it('should log out and redirect to "/" on button click', async () => {
    const { getByText } = render(<LogOutButton />);
    fireEvent.click(getByText("Log Out"));
    await waitFor(() => expect(auth.signOut).toHaveBeenCalled());

    // Expect the user to be redirected back
    expect(window.location.href).toBe("http://localhost/");
  });
});
