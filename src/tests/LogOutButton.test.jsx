import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LogOutButton from '../components/LogOutButton';
import { auth } from '../firebase/FirebaseConfig';

// Mock the Firebase auth module
jest.mock('../firebase/FirebaseConfig', () => ({
  auth: {
    signOut: jest.fn(() => Promise.resolve()),
  },
}));

describe('LogOutButton Component', () => {
  it('should log out and redirect to "/" on button click', async () => {
    // Render the LogOutButton component
    const { getByText } = render(<LogOutButton />);

    // Trigger the handleLogout function by clicking the "Log Out" button
    fireEvent.click(getByText('Log Out'));

    // Wait for the sign-out process to complete
    await waitFor(() => expect(auth.signOut).toHaveBeenCalled());

    // Expect the user to be redirected to "/"
    expect(window.location.href).toBe("http://localhost/");
  });

  // Add more tests as needed
});
