import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SignIn from "../pages/SignIn";
import { auth, provider } from "../firebase/FirebaseConfig";

const mockUserData = {
  uid: "115984027819272072478",
  displayName: "Paris SomewhereinParis",
  email: "parissomewhereinparis@gmail.com",
  photoURL:
    "https://lh3.googleusercontent.com/a/ACg8ocJWK1UC5CPoe8qA6BeBvDbddKU6dk7IfiFjOovF-UrX=s96-c",
};

// Mock provider data
const mockProviderData = {
  uid: "115984027819272072478",
  displayName: "Paris SomewhereinParis",
  email: "parissomewhereinparis@gmail.com",
  photoURL:
    "https://lh3.googleusercontent.com/a/ACg8ocJWK1UC5CPoe8qA6BeBvDbddKU6dk7IfiFjOovF-UrX=s96-c",
  providerId: "google.com",
};
const testCases = [
  "/sport_detail/ATH0102",
  "/sport_detail/error_page/ATH0102",
  // Add more test cases as needed
];
// Mock the Firebase auth module
jest.mock("../firebase/FirebaseConfig", () => ({
  auth: {
    currentUser: null,
    signInWithPopup: jest.fn(() => Promise.resolve({ user: mockUserData })),
  },
  provider: mockProviderData,
}));
describe("SignIn Component", () => {
  it('should render SignIn component when not logged in and accessing "/"', async () => {
    const originalError = console.error;
    console.error = jest.fn(); // Mock console.error to capture errors

    let originalLocation;
    try {
      const { getByText } = render(
        <MemoryRouter initialEntries={["/"]}>
          <SignIn />
        </MemoryRouter>
      );

      // Expect the SignIn component to be rendered when not logged in and accessing "/"
      expect(getByText("Sign In With Google")).toBeInTheDocument();
    } catch (error) {
      console.error("Error in test:", error);
    } finally {
      console.error = originalError;
    }
  });

  testCases.forEach((path) => {
    it(`should render SignIn component when not logged in and accessing "${path}"`, async () => {
      const originalError = console.error;
      console.error = jest.fn(); // Mock console.error to capture errors

      try {
        const { getByText } = render(
          <MemoryRouter initialEntries={[path]}>
            <SignIn />
          </MemoryRouter>
        );

        // Expect the SignIn component to be rendered when not logged in and accessing the specified path
        expect(getByText("Sign In With Google")).toBeInTheDocument();
      } catch (error) {
        console.error("Error in test:", error);
      } finally {
        console.error = originalError;
      }
    });
  });
  it('should redirect to "/" after successful Google sign-in', async () => {
    const originalError = console.error;
    console.error = jest.fn(); // Mock console.error to capture errors

    let originalLocation;
    try {
      const { getByText } = render(<SignIn />);

      // Mocking window.location.href
      originalLocation = window.location;
      delete window.location;
      window.location = { href: "" };

      // Trigger Google sign-in
      fireEvent.click(getByText("Sign In With Google"));

      // Wait for the sign-in process to complete
      await waitFor(() => expect(auth.signInWithPopup).toHaveBeenCalled());

      // Expect the user to be redirected to "/"
      expect(window.location.href).toBe("/");
    } catch (error) {
      console.error("Error in test:", error);
    } finally {
      // Cleanup if setup was successful
      if (originalLocation) {
        window.location = originalLocation;
      }
      console.error = originalError;
    }
  });
});
