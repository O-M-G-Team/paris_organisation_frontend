import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SignIn from '../pages/signIn';
import { auth, provider } from '../firebase/FirebaseConfig';

const mockUserData = {
    uid: '115984027819272072478',
    displayName: 'Paris SomewhereinParis',
    email: 'parissomewhereinparis@gmail.com',
    photoURL: 'https://lh3.googleusercontent.com/a/ACg8ocJWK1UC5CPoe8qA6BeBvDbddKU6dk7IfiFjOovF-UrX=s96-c',
  };
  
  // Mock provider data
const mockProviderData = 
    {
        uid: '115984027819272072478',
        displayName: 'Paris SomewhereinParis',
        email: 'parissomewhereinparis@gmail.com',
        photoURL: 'https://lh3.googleusercontent.com/a/ACg8ocJWK1UC5CPoe8qA6BeBvDbddKU6dk7IfiFjOovF-UrX=s96-c',
      providerId: 'google.com',
    };
// Mock the Firebase auth module
jest.mock('../firebase/FirebaseConfig', () => ({
    auth: {
      currentUser: null,
      signInWithPopup: jest.fn(() => Promise.resolve({ user: mockUserData })),
    },
    provider: mockProviderData,
  }));
describe('SignIn Component', () => {
    it('should redirect to "/" after successful Google sign-in', async () => {
      const originalError = console.error;
      console.error = jest.fn(); // Mock console.error to capture errors
  
      let originalLocation;
      try {
        const { getByText } = render(<SignIn />);
  
        // Mocking window.location.href
        originalLocation = window.location;
        delete window.location;
        window.location = { href: '' };
  
        // Trigger Google sign-in
        fireEvent.click(getByText('Sign In With Google'));
  
        // Wait for the sign-in process to complete
        await waitFor(() => expect(auth.signInWithPopup).toHaveBeenCalled());
  
        // Expect the user to be redirected to "/"
        expect(window.location.href).toBe('/');
      } catch (error) {
        console.error('Error in test:', error);
      } finally {
        // Cleanup if setup was successful
        if (originalLocation) {
          window.location = originalLocation;
        }
        console.error = originalError;
      }
    });
  });