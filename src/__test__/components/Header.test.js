import { render, screen } from '@testing-library/react';
import Header from '../../components/Header'; // Importing the Header component
import '@testing-library/jest-dom'; // Importing jest-dom to use toBeInTheDocument

describe('boundary', () => {
  test('HeaderComponent boundary renders with the correct title', () => {
    render(<Header />);
    
    // Check if the Header component renders the correct text inside <h1>
    const headerTitle = screen.getByText('Welcome to the React Card Layout');
    expect(headerTitle).toBeInTheDocument(); // Ensure that the title is rendered in the header
  });
});
