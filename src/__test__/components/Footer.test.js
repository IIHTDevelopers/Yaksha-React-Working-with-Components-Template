import { render, screen } from '@testing-library/react';
import Footer from '../../components/Footer'; // Importing the Footer component
import '@testing-library/jest-dom'; // Importing jest-dom to use toBeInTheDocument

describe('boundary', () => {
  test('FooterComponent boundary renders with correct content', () => {
    render(<Footer />);
    
    // Check if the Footer component renders "Footer Content"
    const footerContent = screen.getByText('Footer Content');
    expect(footerContent).toBeInTheDocument(); // Ensure that "Footer Content" is rendered in the footer
  });
});
