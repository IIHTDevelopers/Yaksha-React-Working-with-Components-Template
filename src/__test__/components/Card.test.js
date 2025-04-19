import { render, screen } from '@testing-library/react';
import Card from '../../components/Card'; // Importing the Card component
import '@testing-library/jest-dom'; // Importing jest-dom to use toBeInTheDocument

describe('boundary', () => {
  test('CardComponent boundary renders with the correct title and description', () => {
    render(<Card />);
    
    // Check if the Card component renders the correct title
    const sectionTitle = screen.getByText('Section Title');
    expect(sectionTitle).toBeInTheDocument(); // Ensure that "Section Title" is rendered in the Card component
    
    // Check if the Card component renders the correct description
    const sectionDescription = screen.getByText('This is a description of the section.');
    expect(sectionDescription).toBeInTheDocument(); // Ensure that the description is rendered in the Card component
  });
});
